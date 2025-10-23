"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function HomePage() {
  const router = useRouter();
  const stt = "w-[220px] text-center inline-block py-4 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 bg-gradient-to-br from-sky-500 via-slate-500 to-teal-500 hover:opacity-90 hover:scale-105 cursor-pointer mx-3"

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn !== "true") {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <div className="min-h-screen p-6 flex justify-center items-center relative">
      <div className="flex">
        <Link
          className={stt}
          href="/bio">Bio</Link>
        <Link
          className={stt}
          href="/mb">Micro</Link>
      </div>

      <button
        onClick={handleLogout}
        className="fixed top-2 right-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
