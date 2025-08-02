  "use client";
  import React,{ useEffect, useRef } from "react";

  export default function Slider() {
    const sliderRef = useRef(null);


    return (
      <div id="panels">
      <div id="panels-container" className="slider-wrapper w-full h-full flex gap-[50px]">
        <div className="panel slide">
          <div className="slide-content">
            <div className="bg-[#f00] w-full h-full min-h-[calc(63vh-20px)] min-w-[calc(70vw-100px)]">
              
              <video 
            src="../video/hotbuttered.mp4"  
            autoPlay 
            muted 
            loop 
            height={'100%'}
            className="w-full h-full absolute top-0 left-0 object-cover" 
          />
            </div>
          </div>
        </div>
        <div className="panel slide">
          <div className="slide-content">
            <div className="bg-[#f00] w-full h-full min-h-[calc(63vh-20px)] min-w-[calc(70vw-100px)]">
            <video 
            src="../video/jindal.mp4"  
            autoPlay 
            muted 
            loop 
            height={'100%'}
            className="w-full h-full absolute top-0 left-0 object-cover" 
          />
            </div>
          </div>
        </div>
        <div className="panel slide">
          <div className="slide-content">
            <div className="bg-[#f00] w-full h-full min-h-[calc(63vh-20px)] min-w-[calc(70vw-100px)]">
            <video 
            src="../video/3eco.mp4"  
            autoPlay 
            muted 
            loop 
            height={'100%'}
            className="w-full h-full absolute top-0 left-0 object-cover" 
          />
            </div>
          </div>
        </div>
        <div className="space w-full h-full min-h-[100px] min-w-[calc(50px)]"></div>
      </div>
    </div>
    );
  }
