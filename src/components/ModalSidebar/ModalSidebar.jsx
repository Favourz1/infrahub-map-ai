import { useContext, useEffect, useRef } from 'react'
import { GlobalContext } from 'Context/Global';

const ModalSidebar = (
  {
    customWidthInTw = "md:w-[30%]",
    isModalActive = false,
    closeModalFn = () => { },
    isPositionLeft = true,
    hasOverlay = true,
    children
  }
) => {

  const modalRef = useRef()

  const { state } = useContext(GlobalContext);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModalFn();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isModalActive && modalRef) {
      modalRef.current.focus();
    }
  }, [isModalActive]);

  return (
    <div
      id="modal"
      aria-hidden="false"
      autoFocus
      className={`${state.isSidebarOpen ? "ml-[150px]" : "ml-[50px]"} ${hasOverlay || !isPositionLeft ? "bg-transparent scrollbar-hidden" : "bg-[#292828d2]"} z-1 transition-all ${isModalActive ? "-translate-x-0 flex" : "translate-x-full hidden"
        } scrollbar-hidden z-50 overflow-hidden fixed h-screen w-screen md:h-full top-4 left-0 right-0 md:inset-0 justify-center items-center`}
    >
      {!isPositionLeft && <div onClick={closeModalFn} className={`${state.isSidebarOpen ? "top-[30%] left-[56%]" : "top-[30%] left-[65%]"} absolute z-[999] flex items-center rounded-full bg-[#464647] cursor-pointer p-2`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4.99268 11.988C4.99268 11.436 5.43998 10.989 5.99168 10.989C6.46948 10.989 14.0567 10.989 15.5467 10.989L12.5807 7.99203L13.9857 6.58704L18.6997 11.2701C18.8957 11.4651 18.9927 11.727 18.9927 11.989C18.9927 12.25 18.8947 12.5111 18.6997 12.7061L13.9857 17.389L12.5807 15.984L15.5467 12.987C14.0567 12.987 6.46948 12.987 5.99168 12.987C5.43998 12.987 4.99268 12.54 4.99268 11.988Z" fill="white" />
        </svg>
      </div>}
      {
        !isPositionLeft && <div onClick={closeModalFn} className={`${state.isSidebarOpen ? "top-[18%] right-[16%]" : "top-[18%] right-[10%]"} absolute z-[999] flex items-center rounded-[50px] bg-[#464647] cursor-pointer px-4 py-2 gap-3 text-white`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19.0117 11.9928C19.0117 12.5448 18.5644 12.9918 18.0127 12.9918C17.5349 12.9918 9.94772 12.9918 8.45772 12.9918L11.4237 15.9888L10.0187 17.3938L5.30472 12.7108C5.10872 12.5158 5.01172 12.2538 5.01172 11.9918C5.01172 11.7308 5.10972 11.4698 5.30472 11.2748L10.0187 6.5918L11.4237 7.9968L8.45772 10.9938C9.94772 10.9938 17.5349 10.9938 18.0127 10.9938C18.5644 10.9938 19.0117 11.4408 19.0117 11.9928Z" fill="white" />
          </svg>
          <span>Back</span>
        </div>
      }

      <div className="scrollbar-hidden relative overflow-hidden !max-w-[35%] max-h-[95vh] md:max-h-[73vh] px-4 h-full">

        {/* Modal Content */}
        <div ref={modalRef} autoFocus className={`overflow-hidden overflow-y-auto scrollbar-tiny w-full ${isPositionLeft ? "left-0 bottom-0 border-r-2 border-r-[#2C2C2C]" : "right-0 bottom-0 mr-[50px] border-l-2 border-l-[#2C2C2C]"} ${state.isSidebarOpen && !isPositionLeft ? "mr-[155px]" : "mr-[50px]"} ${customWidthInTw} px-4 pb-2 fixed z-[99] bg-[#232323] rounded-lg h-[95vh] md:h-[73vh] block items-center text-center shadow-xl transition-all ${isModalActive ? "translate-x-0" : "-translate-x-full hidden"}`}
          style={{ scrollbarWidth: "2px" }}
        >

          {/* <div className="absolute flex justify-center items-center top-4 right-3 font-semibold cursor-pointer p-2 h-[25px] w-[25px] text-[#1d1d1d] border border-[#1d1d1d] rounded-lg shadow-md" onClick={() => closeModalFn()}>&#x2715;</div> */}
          <div className=""> {children}</div>
        </div>
      </div>
    </div>
  )
}

export default ModalSidebar