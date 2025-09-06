"use client";
import React, { ReactNode } from "react";

export type NextPrintProps = {
  trigger: (handlePrint: () => void) => ReactNode;
  content: () => HTMLElement | null;
  pageStyle?: string;
  onBeforePrint?: () => void;
  onAfterPrint?: () => void;
};

export function NextPrint({
  trigger,
  content,
  pageStyle,
  onBeforePrint,
  onAfterPrint,
}: NextPrintProps) {
  const handlePrint = () => {
    const element = content();
    if (!element) return;

    if (onBeforePrint) onBeforePrint();

    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0px";
    iframe.style.height = "0px";
    iframe.style.border = "0";
    document.body.appendChild(iframe);

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    // Clone existing <style> and <link> from document.head
    const headHTML = Array.from(document.head.children)
      .map((node) => node.outerHTML)
      .join("\n");

    doc.open();
    doc.write(`
      <html>
        <head>
          <title>Print</title>
          ${headHTML}   <!-- Inject Tailwind + global styles -->
          <style>
            ${pageStyle || ""}
          </style>
        </head>
        <body>
          ${element.outerHTML}
        </body>
      </html>
    `);
    doc.close();

    iframe.onload = () => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
      setTimeout(() => {
        document.body.removeChild(iframe);
        if (onAfterPrint) onAfterPrint();
      }, 100);
    };
  };

  return <>{trigger(handlePrint)}</>;
}
