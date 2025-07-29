import React from 'react'
import { FiPlus } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";

const ResumeSticky = () => {
  return (
    <button className="sticky bottom-[40px] left-[50%] translate-x-[-50%] w-[50px] h-[50px] flex flex-col gap-[10px] p-[10px] align-middle relative transition-all duration-300 hover:w-[300px] group cursor-pointer">
      
      {/* Red Pulse */}
      <div className="animate-pulse bg-red-500 h-[calc(100%+20px)] w-[calc(100%+20px)] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full transition-opacity duration-300 group-hover:opacity-0 pointer-events-none group-hover:h-full group-hover:w-full "></div>
      
     

      {/* Static red background */}
      <div className="w-full h-full bg-red-500 rounded-full z-[-1] absolute top-0 left-0 group-hover:border-0"></div>

      {/* Plus icon */}
      <div className="relative w-full h-full flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
        <FiPlus size={20} className="text-white" />
      </div>

      {/* Text on hover */}
      <div className="uppercase opacity-0 transition-opacity duration-300 text-[14px] text-white group-hover:opacity-100 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] whitespace-nowrap">
        Download Resume <FiDownload size={14} className='inline leading-normal' />
      </div>
    </button>
  
  )
}

export default ResumeSticky