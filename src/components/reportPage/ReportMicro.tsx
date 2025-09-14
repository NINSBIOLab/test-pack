import { IPatientDataMicro } from "@/constants";

export default function ReportPageMicro({ data }: { data: IPatientDataMicro }) {
    return (
        <div className="h-[1055px] w-[816px] p-4 px-6 mx-auto relative">
            <div className="header pt-8 pb-4 min-h-[170px]">
                {/* <h1 className="text-center text-2xl font-bold uppercase">National Institute of Neurosciences & Hospital</h1> */}
                {/* <h1 className="text-center text-xl">Sher-E-Bangla Nagar, Dhaka-1207, Phone : 9140752</h1> */}
                {/* <h1 classsName="text-center text-xl font-bold">Laboratory Services Division</h1> */}
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
                                    <td className="font-bold py-[2px]">Print Date</td>
                                    <td className="font-bold py-[2px]"><span className="mx-1">:</span></td>
                                    <td className="font-bold py-[2px]">
                                        {`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`}
                                    </td>

                                </tr>
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
                <h1 className="text-center underline font-bold text-2xl pb-2">Microbiology Report</h1>
                <table className="w-full">
                    <thead>
                        <tr>
                            <td className="px-1 py-[2px] font-[14px] font-bold text-center border">Investigation</td>
                            <td className="px-1 py-[2px] font-[14px] font-bold text-center border">Result</td>
                            <td className="px-1 py-[2px] font-[14px] font-bold text-center border">Unit</td>
                            <td className="px-1 py-[2px] font-[14px] font-bold text-center border">Ref. Value</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-1 py-[2px] font-[14px] border font-bold">HbA1C</td>
                            <td className="px-1 py-[2px] font-[14px] text-center border">  {isNaN(Number(data.HbA1c)) ? data.HbA1c : Number(data.HbA1c).toFixed(2)}</td>
                            <td className="px-1 py-[2px] font-[14px] text-center border">%</td>
                            <td className="px-1 py-[2px] font-[14px] border whitespace-pre">4.6-6.2</td>
                        </tr>
                        <tr>
                            <td className="px-1 py-[2px] font-[14px] border font-bold">C-reactive Protein (CRP)</td>
                            <td className="px-1 py-[2px] font-[14px] text-center border">  {isNaN(Number(data.CRP)) ? data.CRP : Number(data.CRP).toFixed(1)}</td>
                            <td className="px-1 py-[2px] font-[14px] text-center border">mg/L</td>
                            <td className="px-1 py-[2px] font-[14px] border">
                                {
                                    `< 10.0`
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="px-1 py-[2px] font-[14px] border font-bold">High Sensitive C-reactive Protein (CRP)</td>
                            <td className="px-1 py-[2px] font-[14px] text-center border">  {isNaN(Number(data.hsCRP)) ? data.hsCRP : Number(data.hsCRP).toFixed(1)}</td>
                            <td className="px-1 py-[2px] font-[14px] text-center border">mg/L</td>
                            <td className="px-1 py-[2px] font-[14px] border">
                                {
                                    `< 1.0`
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="px-1 py-[2px] font-[14px] border font-bold">S. TSH</td>
                            <td className="px-1 py-[2px] font-[14px] text-center border">
                                {isNaN(Number(data.TSH)) ? data.TSH : Number(data.TSH).toFixed(2)}
                            </td>
                            <td className="px-1 py-[2px] font-[14px] text-center border">µIU/mL</td>
                            <td className="px-1 py-[2px] font-[14px] border whitespace-pre">
                                {
                                    `0.40-4.90`
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="px-1 py-[2px] font-[14px] border font-bold">S. 25-OH vitamin D</td>
                            <td className="px-1 py-[2px] font-[14px] text-center border">
                                {isNaN(Number(data.vitD)) ? data.vitD : Number(data.vitD).toFixed(2)}
                            </td>
                            <td className="px-1 py-[2px] font-[14px] text-center border">ng/ml</td>
                            <td className="px-1 py-[2px] font-[14px] border whitespace-pre">
                                {
                                    `Child : 20-100                           \nAdult : 30-100`
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="absolute w-full left-0 bottom-0 px-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-bold text-lg pt-2 text-[15px]"> Medical Technologist (Lab)</p>
                    </div>
                    <div className="ps-7">
                        <h2 className="font-bold text-lg">Dr. Md. Abdullah Yusuf</h2>
                        <p className="leading-[18px]">Associate Professor</p>
                        <p className="leading-[18px]">Department of Microbiology</p>
                        <p className="leading-[18px]">National Institute of Neurosciences & Hospital</p>
                        <p className="leading-[18px]">Sher-E-Bangla Nagar, Dhaka-1207</p>
                    </div>
                </div>
            </div>
        </div>
    )
}