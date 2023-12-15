import { useState } from "react";
import { PAVEMENT_DEFECTS } from "../../data"

const PositionDetailsCard = () => {
    const [showJobDetails, setShowJobDetails] = useState(true);
    const [showPaveDetails, setShowPaveDetails] = useState(true);
    return (
        <div className="px-3 py-2 space-y-3">
            <div className="flex justify-between pb-3 border-b border-b-[#464647]">
                <div className="text-left gap-y-3">
                    <p className="text-white text-xl uppercase">SR-136</p>
                    <p className="text-base text-[#979BA6]">Corbett Avenue</p>
                </div>
                <span className="!py-0 px-2 flex h-7 items-center justify-center font-medium text-center rounded-[50px] bg-[#eca33626] text-[#ECA336]" >Fair</span>
            </div>
            <div className="grid grid-cols-2 gridRows-2 gap-2">
                <div className="flex items-center gap-2">
                    <span className="text-[#979BA6] text-sm whitespace-nowrap">Route Score</span>
                    <span className="text-white font-medium">80</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[#979BA6] text-sm whitespace-nowrap">Centerline Miles</span>
                    <span className="text-white font-medium">28.6</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[#979BA6] text-sm whitespace-nowrap">Pavement Conditio</span>
                    <span className="text-white font-medium">98</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[#979BA6] text-sm whitespace-nowrap">Lane Miles</span>
                    <span className="text-white font-medium">114.2</span>
                </div>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-b-[#464647]">
                <p className="text-white font-medium">Jobs</p>
                <div className="flex items gap-3">
                    <button
                        className="flex items-center gap-3 rounded-md bg-primaryBlue px-3 py-2 text-white shadow-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 4C11.448 4 11 4.448 11 5V11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13H11V19C11 19.552 11.448 20 12 20C12.552 20 13 19.552 13 19V13H19C19.552 13 20 12.552 20 12C20 11.448 19.552 11 19 11H13V5C13 4.448 12.552 4 12 4Z" fill="white" />
                        </svg>
                        <span>Create Job</span>
                    </button>

                    <svg onClick={() => setShowJobDetails(!showJobDetails)} className={`${showJobDetails ? "rotate-0" : "rotate-180"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071Z" fill="#979BA6" />
                    </svg>
                </div>
            </div>

            <div className={`flex items-center justify-around ${showJobDetails ? "h-auto" : "!h-0 overflow-hidden"}`}>
                <div>
                    <p className="text-[#979BA6] text-xs">Treatment</p>
                    <p className="text-primaryBlue underline font-medium">1.5&quot; S9.5B</p>
                </div>
                <div>
                    <p className="text-[#979BA6] text-xs">Milepost</p>
                    <p className="text-white font-medium">0 - 1.47</p>
                </div>
                <div>
                    <p className="text-[#979BA6] text-xs">Cost</p>
                    <p className="text-white font-medium">$23,000</p>
                </div>
                <div>
                    <p className="text-[#979BA6] text-xs">Status</p>
                    <p className="text-white font-medium">2026</p>
                </div>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-b-[#464647]">
                <p className="text-white font-medium">Pavement Defects</p>
                <div className="flex items gap-3">

                    <svg onClick={() => setShowPaveDetails(!showPaveDetails)} className={`${showPaveDetails ? "rotate-0" : "rotate-180"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071Z" fill="#979BA6" />
                    </svg>
                </div>
            </div>
            <div className={`space-y-3 ${showPaveDetails ? "h-auto py-2" : "!h-0 overflow-hidden"}`}>
                {
                    PAVEMENT_DEFECTS.map((item, index) =>
                        <div key={index} className="flex justify-between">
                            <p className="text-base text-[#979BA6]">{item.text}</p>
                            {
                                item.status == "Severe" ? (
                                    <span className="py-1 px-2 h-5 text-sm flex items-center justify-center font-medium text-center rounded-[50px] bg-[#e762620f] text-[#E76262]" >{item.status}</span>
                                ) : item.status == "Light" ? (
                                    <span className="py-1 px-2 h-5 text-sm flex items-center justify-center font-medium text-center rounded-[50px] bg-[#3ece8026] text-[#3ECE80]" >{item.status}</span>
                                ) : item.status == "Moderate" ? (
                                    <span className="py-1 px-2 h-5 text-sm flex items-center justify-center font-medium text-center rounded-[50px] bg-[#eca33626] text-[#ECA336]" >{item.status}</span>
                                ) : (
                                    <span className="py-1 px-2 h-5 text-sm flex items-center justify-center font-medium text-center rounded-[50px] bg-[#979BA69B] text-[#3b3c41]" >{item.status ? item.status : "Pending"}</span>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PositionDetailsCard