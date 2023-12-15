import { HamburgerIcon } from "Assets/svgs"
import { XCloseIcon } from "Assets/svgs";
import { Outlet, NavLink, useLocation } from "react-router-dom"
import { useContext } from "react";
import { GlobalContext } from "Context/Global";


const DashboardView = () => {
    const location = useLocation()

    const { state, dispatch } = useContext(GlobalContext);
    return (
        <div className="">
            <div className="flex w-full max-h-screen overflow-hidden">
                <div className={`${state.isSidebarOpen ? "w-[150px] items-start" : "w-[50px] items-center"} z-50 fixed left-0 py-3 min-h-screen flex flex-col justify-between bg-primaryBlack borderR border-r-secondaryBlack`}>
                    <div className="w-full">
                        <div className="flex items-center cursor-pointer p-3 pr-0 mr-0 rounded-md hover:bg-secondaryBlack mb-12">
                            {!state.isSidebarOpen ?
                                <HamburgerIcon onClick={() => dispatch({ type: 'SET_SIDEBAR', payload: true })} />
                                :
                                <XCloseIcon onClick={() => dispatch({ type: 'SET_SIDEBAR', payload: false })} />
                            }
                        </div>
                        <div className="flex flex-col items-center gap-y-4">
                            <NavLink to="/"
                                className={`group w-full flex items-center gap-3 cursor-pointer p-3 ${location.pathname == "/" ? "active border-r-2 border-r-[#3888FF] bg-[#5c38ff1a] rounded-r-none" : "rounded-md border-r-2 border-r-transparent hover:bg-secondaryBlack"}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.6195 14.9768L14.6158 14.9814C13.5269 16.3394 11.4731 16.3394 10.3842 14.9814L10.3805 14.9768C10.0232 14.5285 9.52684 13.8877 8.9989 13.1467V19.9063L14.9989 21.9063V14.4939C14.8607 14.6724 14.7331 14.8343 14.6195 14.9768ZM16.9989 11.6668V21.9063L21.3119 20.4683C21.7199 20.3323 21.9989 19.9613 21.9989 19.5313V7.53128C21.9989 6.85028 21.3329 6.38127 20.6869 6.59427L18.9463 7.21348C18.8485 7.87584 18.6296 8.51508 18.396 9.06995C18.0667 9.85211 17.6307 10.6437 17.1823 11.373C17.1218 11.4714 17.0606 11.5694 16.9989 11.6668ZM6.00537 6.24475L2.6869 7.37527C2.2809 7.51327 1.9989 7.88428 1.9989 8.31228V20.3123C1.9989 20.9953 2.6639 21.4663 3.3119 21.2503L6.9989 19.9063V9.91929C6.85628 9.63721 6.72316 9.35297 6.60399 9.06995C6.28852 8.32073 6 7.41769 6 6.51162C6 6.42224 6.0018 6.33327 6.00537 6.24475Z" fill={location.pathname == "/" ? "#3888FF" : "#979BA6"} />
                                    <path d="M13.0555 13.7304C14.2578 12.2218 17 8.56543 17 6.51168C17 4.02085 14.9844 2 12.5 2C10.0156 2 8 4.02085 8 6.51168C8 8.56543 10.7422 12.2218 11.9445 13.7304C12.2328 14.0899 12.7672 14.0899 13.0555 13.7304ZM12.5 5.00778C12.8978 5.00778 13.2794 5.16623 13.5607 5.44826C13.842 5.7303 14 6.11282 14 6.51168C14 6.91053 13.842 7.29305 13.5607 7.57509C13.2794 7.85712 12.8978 8.01557 12.5 8.01557C12.1022 8.01557 11.7206 7.85712 11.4393 7.57509C11.158 7.29305 11 6.91053 11 6.51168C11 6.11282 11.158 5.7303 11.4393 5.44826C11.7206 5.16623 12.1022 5.00778 12.5 5.00778Z" fill={location.pathname == "/" ? "#3888FF" : "#979BA6"} />
                                </svg>
                                {state.isSidebarOpen && <span className="group-[.active]:text-[#3888FF] font-medium">Map View</span>}
                            </NavLink>
                            <NavLink to="/plan"
                                className={`group w-full flex items-center gap-3 cursor-pointer p-3 ${location.pathname == "/plan" ? "active border-r-2 border-r-[#3888FF] bg-[#5c38ff1a] rounded-r-none" : "rounded-md border-r-2 border-r-transparent hover:bg-secondaryBlack"}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5.45972 2.92981C4.08972 2.92981 2.99072 4.0288 2.99072 5.3988V8.46082C2.99072 9.83082 4.08972 10.9298 5.45972 10.9298H8.52173C9.89173 10.9298 10.9907 9.83082 10.9907 8.46082V5.3988C10.9907 4.0288 9.89173 2.92981 8.52173 2.92981H5.45972ZM13.9907 2.92981C13.4387 2.92981 12.9907 3.37781 12.9907 3.92981V5.92981C12.9907 6.48181 13.4387 6.92981 13.9907 6.92981H19.9907C20.5427 6.92981 20.9907 6.48181 20.9907 5.92981V3.92981C20.9907 3.37781 20.5427 2.92981 19.9907 2.92981H13.9907ZM8.14673 5.58582C8.34273 5.38982 8.63872 5.38982 8.83472 5.58582C9.03072 5.78282 9.03072 6.0778 8.83472 6.2738L6.83472 8.2738C6.63872 8.4698 6.34273 8.4698 6.14673 8.2738L5.14673 7.2738C4.95073 7.0768 4.95073 6.78182 5.14673 6.58582C5.34273 6.38982 5.63872 6.38982 5.83472 6.58582L6.49072 7.24182L8.14673 5.58582ZM13.9907 8.92981C13.4387 8.92981 12.9907 9.37781 12.9907 9.92981C12.9907 10.4818 13.4387 10.9298 13.9907 10.9298H17.9907C18.5427 10.9298 18.9907 10.4818 18.9907 9.92981C18.9907 9.37781 18.5427 8.92981 17.9907 8.92981H13.9907ZM5.45972 12.9298C4.08972 12.9298 2.99072 14.0288 2.99072 15.3988V18.4608C2.99072 19.8308 4.08972 20.9298 5.45972 20.9298H8.52173C9.89173 20.9298 10.9907 19.8308 10.9907 18.4608V15.3988C10.9907 14.0288 9.89173 12.9298 8.52173 12.9298H5.45972ZM13.9907 12.9298C13.4387 12.9298 12.9907 13.3778 12.9907 13.9298V15.9298C12.9907 16.4818 13.4387 16.9298 13.9907 16.9298H19.9907C20.5427 16.9298 20.9907 16.4818 20.9907 15.9298V13.9298C20.9907 13.3778 20.5427 12.9298 19.9907 12.9298H13.9907ZM8.14673 15.5858C8.34273 15.3898 8.63872 15.3898 8.83472 15.5858C9.03072 15.7828 9.03072 16.0778 8.83472 16.2738L6.83472 18.2738C6.63872 18.4698 6.34273 18.4698 6.14673 18.2738L5.14673 17.2738C4.95073 17.0768 4.95073 16.7818 5.14673 16.5858C5.34273 16.3898 5.63872 16.3898 5.83472 16.5858L6.49072 17.2418L8.14673 15.5858ZM13.9907 18.9298C13.4387 18.9298 12.9907 19.3778 12.9907 19.9298C12.9907 20.4818 13.4387 20.9298 13.9907 20.9298H17.9907C18.5427 20.9298 18.9907 20.4818 18.9907 19.9298C18.9907 19.3778 18.5427 18.9298 17.9907 18.9298H13.9907Z" fill={location.pathname == "/plan" ? "#3888FF" : "#979BA6"} />
                                </svg>
                                {state.isSidebarOpen && <span className="group-[.active]:text-[#3888FF] font-medium">Plan</span>}
                            </NavLink>
                            <NavLink to="/dashboard"
                                className={`group w-full flex items-center gap-3 cursor-pointer p-3 ${location.pathname == "/dashboard" ? "active border-r-2 border-r-[#3888FF] bg-[#5c38ff1a] rounded-r-none" : "rounded-md border-r-2 border-r-transparent hover:bg-secondaryBlack"}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18.0071 3.9978C16.9021 3.9978 16.0071 4.8928 16.0071 5.9978V17.9978H15.0071V9.9978C15.0071 8.8928 14.1121 7.9978 13.0071 7.9978H11.0071C9.90209 7.9978 9.00709 8.8928 9.00709 9.9978V17.9978H8.00709V13.9978C8.00709 12.8928 7.11209 11.9978 6.00709 11.9978H4.00708C2.90208 11.9978 2.00708 12.8928 2.00708 13.9978V17.9978C1.45508 17.9978 1.00708 18.4458 1.00708 18.9978C1.00708 19.5498 1.45508 19.9978 2.00708 19.9978H3.00708H21.0071H22.0071C22.5591 19.9978 23.0071 19.5498 23.0071 18.9978C23.0071 18.4458 22.5591 17.9978 22.0071 17.9978V5.9978C22.0071 4.8928 21.1121 3.9978 20.0071 3.9978H18.0071Z" fill={location.pathname == "/dashboard" ? "#3888FF" : "#979BA6"} />
                                </svg>
                                {state.isSidebarOpen && <span className="group-[.active]:text-[#3888FF] font-medium">Dashboard</span>}
                            </NavLink>
                        </div>
                    </div>

                    {/* Profile */}
                    <div className="w-full">
                        <NavLink to="/profile"
                            className={`group w-full flex items-center gap-3 cursor-pointer p-3 ${location.pathname == "/profile" ? "active border-r-2 border-r-[#3888FF] bg-[#5c38ff1a] rounded-r-none" : "rounded-md border-r-2 border-r-transparent hover:bg-secondaryBlack"}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 16.1598 2.11657 19.8252 5.3315 21.978V20.7943C5.3315 18.5445 6.87691 16.6501 9.0555 16.0547C9.24225 16.0036 9.42575 16.0272 9.60233 16.1068C10.3652 16.4506 11.1774 16.6276 11.9982 16.6276C12.8189 16.6276 13.6311 16.4506 14.394 16.1068C14.5706 16.0272 14.7541 16.0036 14.9408 16.0547C17.1194 16.6501 18.6648 18.5445 18.6648 20.7943V21.9805C21.8818 19.828 24 16.1613 24 12C24 5.37258 18.6274 0 12 0ZM16.0641 23.2943H7.93588C9.20507 23.7511 10.5735 24 12 24C13.4265 24 14.7949 23.7511 16.0641 23.2943ZM7.8315 10.7943C7.8315 8.49314 9.697 6.62764 11.9982 6.62764C14.2993 6.62764 16.1648 8.49314 16.1648 10.7943C16.1648 13.0955 14.2993 14.961 11.9982 14.961C9.697 14.961 7.8315 13.0955 7.8315 10.7943Z" fill={location.pathname == "/profile" ? "#3888FF" : "#979BA6"} />
                                <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke={location.pathname == "/profile" ? "#3888FF" : "#979BA6"} strokeWidth="1.5" />
                            </svg>
                            {state.isSidebarOpen && <span className="group-[.active]:text-[#3888FF] font-medium">Profile</span>}
                        </NavLink>
                    </div>
                </div>
                <div className={`w-full overflow-y-scroll ${state.isSidebarOpen ? "ml-[150px]" : "ml-[50px]"}`}>
                    <Outlet />
                </div>
            </div>
        </div >
    )
}

export default DashboardView