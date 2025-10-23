"use client";
import ReportPage from "@/components/reportPage/ReportFormat";
import { useEffect, useRef, useState } from "react";
import { NextPrint } from "@/components/PrintComponent/PrintComponent";
import { useRouter } from "next/navigation";
import { IPatientData } from "@/constants"; 


export default function HomePage() {
    const [patients, setPatients] = useState<IPatientData[]>([]);
    const [center, setCenter] = useState<string>("Bagerhat");
    const [currentPatient, setCurrentPatient] = useState<IPatientData | null>(null);

    const reportRef = useRef<HTMLDivElement | null>(null);


    const router = useRouter();

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

    useEffect(() => {
        fetch(`/data/p2/${center}.json`)
            .then((res) => res.json())
            .then((data) => {
                setPatients(data);
                setCurrentPatient(data[0]);
            });
    }, [center]);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-center text-2xl text-teal-500 font-bold">Biochemistry Department</h1>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-2xl font-bold">
                    Patients - {center} - {patients?.length}
                </h1>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
            {/* 🔹 Dropdown */}
            <select
                onChange={(e) => setCenter(e.target.value)}
                className="mb-4 p-2 px-8 border border-gray-300 rounded border-sky-500"
            >
                <option value="Bagerhat">Bagerhat</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="KishorGanj">KishorGanj</option>
            </select>

            {/* 🔹 Table */}
            {patients.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <table className="border-collapse border border-gray-400 w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            {Object.keys(patients[0]).map((key) => (
                                <th key={key} className="border border-gray-400 px-2 py-1">
                                    {key}
                                </th>
                            ))}
                            <th className="border border-gray-400 px-2 py-1">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, idx) => (
                            <tr key={idx}>
                                {Object.values(patient).map((val, i) => (
                                    <td
                                        key={i}
                                        className={`border border-gray-400 px-2 py-1 ${i !== 1 ? "text-center" : "text-start"}`}
                                    >
                                        {val}
                                    </td>
                                ))}
                                <td className="border border-gray-400 px-2 py-1 text-center">
                                    <NextPrint
                                        trigger={(print) => (
                                            <button
                                                onClick={() => {
                                                    setCurrentPatient(patient); // set first
                                                    setTimeout(print, 50); // then trigger print
                                                }}
                                                className="px-6 py-2 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 bg-gradient-to-br from-sky-500 via-slate-500 to-teal-500 hover:opacity-90 hover:scale-105 cursor-pointer"
                                            >
                                                Print
                                            </button>
                                        )}
                                        content={() => reportRef.current}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* 🔹 Hidden Printable Area */}
            <div className="hidden">
                {currentPatient && (
                    <div ref={reportRef}>
                        <ReportPage data={currentPatient} />
                    </div>
                )}
            </div>
        </div>
    );
}
