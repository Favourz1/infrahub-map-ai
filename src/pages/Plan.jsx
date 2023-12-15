import { PlanTable } from "Components/PlanTable"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { ModalSidebar } from "Components/ModalSidebar";
import { CreateJobCard } from "Components/CreateJobCard";
import { PLANS_DATA } from "Data"



const Plan = () => {
    const [filterInput, setFilterInput] = useState("");
    const [isPlanActive, setIsPlanActive] = useState(true);
    const [showCreateJobSidebar, setShowCreateJobSidebar] = useState(false);
    const [tableData, setTableData] = useState(PLANS_DATA);

    const navigate = useNavigate()

    function handlePlansMapClick() {
        setIsPlanActive(false)
        setTimeout(() => {
            navigate("/")
        }, 250)
    }

    return (
        <>
            <div className={`bg-[#232323] min-w-full p-12 ${isPlanActive ? "translate-y-0" : "-translate-y-full"}`}>
                {/* HEADERS */}
                <div className="sticky top-0 z-20 bg-[#232323] py-3 flex items-center justify-between w-full mb-6">
                    <h1 className="font-medium text-3xl text-white">Plan</h1>
                    <div className="flex items-center bg-primaryBlack rounded-lg border-secondaryBlack">
                        <span className="px-4 py-3 bg-primaryBlue rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.49909 5.08643C2.03909 5.08643 1.66576 5.45976 1.66576 5.91976C1.66576 6.37976 2.03909 6.75309 2.49909 6.75309C2.95909 6.75309 3.33242 6.37976 3.33242 5.91976C3.33242 5.45976 2.95909 5.08643 2.49909 5.08643ZM5.83242 5.08643C5.37242 5.08643 4.99909 5.45976 4.99909 5.91976C4.99909 6.37976 5.37242 6.75309 5.83242 6.75309H17.4991C17.9591 6.75309 18.3324 6.37976 18.3324 5.91976C18.3324 5.45976 17.9591 5.08643 17.4991 5.08643H5.83242ZM2.49909 9.25309C2.03909 9.25309 1.66576 9.62643 1.66576 10.0864C1.66576 10.5464 2.03909 10.9198 2.49909 10.9198C2.95909 10.9198 3.33242 10.5464 3.33242 10.0864C3.33242 9.62643 2.95909 9.25309 2.49909 9.25309ZM5.83242 9.25309C5.37242 9.25309 4.99909 9.62643 4.99909 10.0864C4.99909 10.5464 5.37242 10.9198 5.83242 10.9198H17.4991C17.9591 10.9198 18.3324 10.5464 18.3324 10.0864C18.3324 9.62643 17.9591 9.25309 17.4991 9.25309H5.83242ZM2.49909 13.4198C2.03909 13.4198 1.66576 13.7931 1.66576 14.2531C1.66576 14.7131 2.03909 15.0864 2.49909 15.0864C2.95909 15.0864 3.33242 14.7131 3.33242 14.2531C3.33242 13.7931 2.95909 13.4198 2.49909 13.4198ZM5.83242 13.4198C5.37242 13.4198 4.99909 13.7931 4.99909 14.2531C4.99909 14.7131 5.37242 15.0864 5.83242 15.0864H17.4991C17.9591 15.0864 18.3324 14.7131 18.3324 14.2531C18.3324 13.7931 17.9591 13.4198 17.4991 13.4198H5.83242Z" fill="white" />
                            </svg>
                        </span>
                        <span className="px-4 py-3" onClick={handlePlansMapClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.49909 11.8332C7.83428 12.2834 8.13914 12.6741 8.38051 12.977L8.3842 12.9816C9.43533 14.2925 11.3856 14.3379 12.4991 13.118V18.2554L7.49909 16.5887V11.8332ZM5.83242 9.39703V16.5887L2.75993 17.7087C2.21993 17.8887 1.66576 17.4962 1.66576 16.927V6.92703C1.66576 6.57037 1.90076 6.26119 2.23909 6.14619L4.10559 5.51032C4.21758 6.06611 4.40545 6.59856 4.604 7.07009C4.93334 7.85225 5.36926 8.64379 5.81768 9.37309C5.82259 9.38107 5.82751 9.38905 5.83242 9.39703ZM14.1658 10.9138C14.5056 10.4291 14.8537 9.90752 15.1823 9.37309C15.6307 8.64379 16.0667 7.85225 16.396 7.07009C16.5807 6.63158 16.7561 6.14039 16.8698 5.62673L17.2391 5.49535C17.7774 5.31785 18.3324 5.70869 18.3324 6.27619V16.2762C18.3324 16.6345 18.0999 16.9437 17.7599 17.057L14.1658 18.2554V10.9138Z" fill="#979BA6" />
                                <path d="M11.0555 11.7304C12.2578 10.2218 15 6.56543 15 4.51168C15 2.02085 12.9844 0 10.5 0C8.01562 0 6 2.02085 6 4.51168C6 6.56543 8.74219 10.2218 9.94453 11.7304C10.2328 12.0899 10.7672 12.0899 11.0555 11.7304ZM10.5 3.00778C10.8978 3.00778 11.2794 3.16623 11.5607 3.44826C11.842 3.7303 12 4.11282 12 4.51168C12 4.91053 11.842 5.29305 11.5607 5.57509C11.2794 5.85712 10.8978 6.01557 10.5 6.01557C10.1022 6.01557 9.72064 5.85712 9.43934 5.57509C9.15804 5.29305 9 4.91053 9 4.51168C9 4.11282 9.15804 3.7303 9.43934 3.44826C9.72064 3.16623 10.1022 3.00778 10.5 3.00778Z" fill="#979BA6" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full mb-10">
                    {/* Create Job buttons */}
                    <div className="flex items-center gap-4">
                        <button
                            className="h-[40px] px-5 py-2 bg-primaryBlue rounded-lg font-medium"
                            onClick={() => setShowCreateJobSidebar(!showCreateJobSidebar)}
                        >Create Job</button>
                        <div className="h-[40px] flex items-center bg-primaryBlack px-5 py-2 rounded-lg border border-[#4E4E4E] bg-gradient-to-t from-[#3F3F40] to-[#272727]">
                            <p className="text-xs text-[#979BA6] ">District:</p>
                            <select defaultValue={"4"} className="shadow-none font-medium bg-inherit border-none text-white border border-[#4E4E4E] bg-gradient-to-t from-[#3F3F40] to-[#272727]" name="" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="h-[40px] flex items-center bg-primaryBlack px-5 py-2 rounded-lg border border-[#4E4E4E] bg-gradient-to-t from-[#3F3F40] to-[#272727]">
                            <p className="text-xs text-[#979BA6] ">County:</p>
                            <select defaultValue={"washington"} className="shadow-none font-medium bg-inherit border-none text-white border border-[#4E4E4E] bg-gradient-to-t from-[#3F3F40] to-[#272727]" name="" id="">
                                <option value="alabama">Alabama</option>
                                <option value="alaska">Alaska</option>
                                <option value="arizona">Arizona</option>
                                <option value="arkansas">Arkansas</option>
                                <option value="california">California</option>
                                <option value="colorado">Colorado</option>
                                <option value="connecticut">Connecticut</option>
                                <option value="washington">Washington</option>
                            </select>
                        </div>
                    </div>
                    {/* Search and filter */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center px-3 py-2 rounded-lg border border-[#464647] bg-[#232323]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M8.34513 1.62744C4.66322 1.62744 1.67847 4.61245 1.67847 8.29412C1.67847 11.9758 4.66322 14.9608 8.34513 14.9608C9.87572 14.9608 11.3265 14.435 12.4517 13.5683L16.0795 17.2266C16.405 17.5516 16.952 17.5516 17.2775 17.2266C17.6029 16.9008 17.6029 16.3541 17.2775 16.0283L13.6245 12.395C14.4919 11.27 15.0118 9.82496 15.0118 8.29412C15.0118 4.61245 12.027 1.62744 8.34513 1.62744ZM8.34513 3.29411C11.1065 3.29411 13.3451 5.53245 13.3451 8.29412C13.3451 11.0558 11.1065 13.2941 8.34513 13.2941C5.58372 13.2941 3.34513 11.0558 3.34513 8.29412C3.34513 5.53245 5.58372 3.29411 8.34513 3.29411Z" fill="#979BA6" />
                            </svg>
                            <input
                                className="pl-1 border-none shadow-none bg-transparent caret-white text-[#979BA6] focus:shadow-none focus-visible:!shadow-none focus:border-none focus-visible:!outline-none"
                                type="search" name="" placeholder="Search Job"
                                value={filterInput}
                                onChange={(e) => setFilterInput(e.target.value)} style={{ boxShadow: "none" }} />
                        </div>
                        <div className="flex items-center rounded-lg bg-[#464647] p-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M7.21463 3C5.98701 3 5 4.01519 5 5.27698V5.30489C5 6.67467 5.65713 7.75106 7.29688 9.43674C7.19275 9.32964 7.64426 9.76074 7.76151 9.88674C7.94963 10.0865 8.09837 10.3007 8.25412 10.505C8.96724 11.4428 9.375 12.4859 9.375 13.7936C9.375 14.6207 9.375 18.938 9.375 20.09C9.375 20.8307 10.1922 21.2654 10.7697 20.8208C11.2072 20.4833 13.8322 18.4592 14.2697 18.1217C14.4902 17.9525 14.625 17.6744 14.625 17.3909C14.625 17.2793 14.625 15.5927 14.625 13.7936C14.625 12.4868 15.0336 11.4428 15.7459 10.505C15.9016 10.2998 16.0504 10.0874 16.2385 9.88674C16.3557 9.76074 16.8081 9.32874 16.7031 9.43674C18.3438 7.75016 19 6.67558 19 5.30489V5.27698C19 4.01519 18.013 3 16.7854 3H7.21463Z" fill="white" />
                            </svg>
                        </div>
                        <div className="flex items-center rounded-lg bg-[#464647] p-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5.99292 3.90674C5.44092 3.90674 4.99292 4.35474 4.99292 4.90674V16.4688L2.99292 14.5008L1.58691 15.9068L5.27393 19.6258C5.66493 20.0158 6.32091 20.0168 6.71191 19.6258L10.3989 15.9068L8.99292 14.5008L6.99292 16.4688V4.90674C6.99292 4.35474 6.54492 3.90674 5.99292 3.90674ZM12.9929 4.90674C12.4409 4.90674 11.9929 5.35474 11.9929 5.90674C11.9929 6.45874 12.4409 6.90674 12.9929 6.90674H20.9929C21.5449 6.90674 21.9929 6.45874 21.9929 5.90674C21.9929 5.35474 21.5449 4.90674 20.9929 4.90674H12.9929ZM12.9929 8.90675C12.4409 8.90675 11.9929 9.35475 11.9929 9.90675C11.9929 10.4588 12.4409 10.9068 12.9929 10.9068H18.9929C19.5449 10.9068 19.9929 10.4588 19.9929 9.90675C19.9929 9.35475 19.5449 8.90675 18.9929 8.90675H12.9929ZM12.9929 12.9068C12.4409 12.9068 11.9929 13.3548 11.9929 13.9068C11.9929 14.4588 12.4409 14.9068 12.9929 14.9068H16.9929C17.5449 14.9068 17.9929 14.4588 17.9929 13.9068C17.9929 13.3548 17.5449 12.9068 16.9929 12.9068H12.9929ZM12.9929 16.9068C12.4409 16.9068 11.9929 17.3548 11.9929 17.9068C11.9929 18.4588 12.4409 18.9068 12.9929 18.9068H14.9929C15.5449 18.9068 15.9929 18.4588 15.9929 17.9068C15.9929 17.3548 15.5449 16.9068 14.9929 16.9068H12.9929Z" fill="white" />
                            </svg>
                        </div>
                    </div>

                </div>

                <div className="animate-fadeInLeft">
                    <PlanTable searchValue={filterInput} tableData={tableData} />
                </div>
            </div>
            <ModalSidebar isModalActive={showCreateJobSidebar} closeModalFn={() => setShowCreateJobSidebar(false)}>
                <CreateJobCard setSidebar={setShowCreateJobSidebar} tableData={tableData} setTableData={setTableData} />
            </ModalSidebar>
        </>
    )
}

export default Plan