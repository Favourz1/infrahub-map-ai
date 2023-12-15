import roadSignImg from "Assets/images/road-sign.png"
const RoutePicInfo = ({ isActive = false, closeFn = () => { } }) => {
    return (
        <div className={`${isActive ? "flex" : "hidden"} slide-in-fwd-center absolute top-[20%] right-[50%] max-h-[450px] max-w-[350px] flex-col bg-[#232323] py-4 rounded-3xl border border-primaryBlack`}>
            <div className="flex items-center justify-between px-5 pb-2">
                <div className="flex flex-col">
                    <p className="text-white font-bold text-2xl">Road Sign</p>
                    <p className="text-[#E76262] font-semibold">Defective</p>
                </div>
                <div className="flex flex-col h-full justify-between items-end gap-y-2">
                    <div onClick={closeFn} className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M4.9941 3.90625C4.7382 3.90625 4.4706 3.99226 4.2753 4.18726C3.8848 4.57826 3.8848 5.23424 4.2753 5.62524L10.5566 11.9062L4.2753 18.1873C3.8848 18.5783 3.8848 19.2342 4.2753 19.6252C4.6659 20.0152 5.3223 20.0152 5.7129 19.6252L11.9941 13.3443L18.2753 19.6252C18.6659 20.0152 19.3223 20.0152 19.7129 19.6252C20.1034 19.2342 20.1034 18.5783 19.7129 18.1873L13.4316 11.9062L19.7129 5.62524C20.1034 5.23424 20.1034 4.57826 19.7129 4.18726C19.5176 3.99226 19.2499 3.90625 18.9941 3.90625C18.7382 3.90625 18.4707 3.99226 18.2753 4.18726L11.9941 10.4682L5.7129 4.18726C5.5176 3.99226 5.25 3.90625 4.9941 3.90625Z" fill="#979BA6" />
                        </svg>
                    </div>
                    <p className="text-[#979BA6] text-sm">Image: July 2022</p>
                </div>
            </div>
            <img className="h-[70%] w-full" src={roadSignImg} alt="" />
            <div className="flex items-center justify-center p-2 pb-0">
                <p className="text-[#979BA6] text-sm">Image: July 2022</p>

            </div>
        </div>
    )
}

export default RoutePicInfo