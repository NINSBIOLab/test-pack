import { IPatientData } from "@/constants";

export default function ReportPage({ data }: { data: IPatientData }) {

    return (
        <div className="h-[1055px] w-[816px] p-4 px-6 mx-auto relative">
            <div className="header pt-8 pb-4">
                <h1 className="text-center text-2xl font-bold uppercase">National Institute of Neurosciences & Hospital</h1>
                <h1 className="text-center text-xl">Sher-E-Bangla Nagar, Dhaka-1207, Phone : 9140752</h1>
                <h1 className="text-center text-xl font-bold">Laboratory Services Division</h1>
            </div>
            <br />

            <div className="border rounded-xl p-2 px-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="font-bold py-[2px]">Lab Id</td>
                                    <td className="font-bold py-[2px]"><span className="mx-1">:</span></td>
                                    <td className="font-bold py-[2px]">{data.center}-{data.sl}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold py-[2px]">Name</td>
                                    <td className="font-bold py-[2px]"><span className="mx-1">:</span></td>
                                    <td className="font-bold py-[2px]">{data.name}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold py-[2px]">Age</td>
                                    <td className="font-bold py-[2px]"><span className="mx-1">:</span></td>
                                    <td className="font-bold py-[2px]">{data.age} Yrs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="font-bold py-[2px]">Mobile</td>
                                    <td className="font-bold py-[2px]"><span className="mx-1">:</span></td>
                                    <td className="font-bold py-[2px]">{data.mobileNumber}</td>
                                </tr>

                                <tr>
                                    <td className="font-bold py-[2px]">Sex</td>
                                    <td className="font-bold py-[2px]"><span className="mx-1">:</span></td>
                                    <td className="font-bold py-[2px]">Female</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="py-6">
                <h1 className="text-center underline font-bold text-2xl pb-2">Biochemistry Report</h1>
                <table className="w-full">
                    <thead>
                        <tr>
                            <td className="px-1 py-[2px] font-bold text-center border">Investigation</td>
                            <td className="px-1 py-[2px] font-bold text-center border">Result</td>
                            <td className="px-1 py-[2px] font-bold text-center border">Unit</td>
                            <td className="px-1 py-[2px] font-bold text-center border">Ref. Value</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-1 py-[2px] border font-bold">S. Iron</td>
                            <td className="px-1 py-[2px] text-center border">{data.iron}</td>
                            <td className="px-1 py-[2px] text-center border">µmol/L</td>
                            <td className="px-1 py-[2px] border whitespace-pre">
                                {
                                    `Male: 11.6-31.3\nFemale: 9.0-30.4`
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="px-1 py-[2px] border font-bold">S. Folate</td>
                            <td className="px-1 py-[2px] text-center border">{data.folate}</td>
                            <td className="px-1 py-[2px] text-center border">ng/ml</td>
                            <td className="px-1 py-[2px] border whitespace-pre">
                                {`2-16 Years : 5-21\n>16 Years: 3-20`}
                            </td>
                        </tr>
                        <tr>
                            <td className="px-1 py-[2px] border font-bold">S. Vitamin B12</td>
                            <td className="px-1 py-[2px] text-center border">{data.b12}</td>
                            <td className="px-1 py-[2px] text-center border">pg/ml</td>
                            <td className="px-1 py-[2px] border">187 - 883</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="absolute w-full left-0 bottom-0 px-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-bold text-lg pt-2"> Medical Technologist (Lab)</p>
                    </div>
                    <div className="ps-7">
                        <h2 className="font-bold text-lg">Dr. Farzana Zaman Muna</h2>
                        <p className="leading-[18px]">MBBS,M.Phil (Biochemistry)</p>
                        <p className="leading-[18px]">Assistant Professor</p>
                        <p className="leading-[18px]">National Institute Of Neuro-sciences & Hospital</p>
                        <p className="leading-[18px]">Sher-E-Bangla Nagar, Dhaka-1207</p>
                    </div>
                </div>
            </div>
        </div>
    )
}