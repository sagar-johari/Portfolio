import React from "react";

const HeroSection = () => {
 return(<>
            <section className="container min-h-[calc(100vh-70px)] flex items-center justify-center" >
          <div className="banner-bg-video w-full h-full absolute top-0 left-0 z-[-1] overflow-hidden opacity-25 bg-black">
          <video 
            src="/video/banner-bg-2.mp4"  
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover" 
          />
          </div>
          <div className="uppercase text-[8rem] flex flex-col">
            <div className=" tracking-tight font-suisse-m text-center leading-[0.8] w-fit">
              <h1 className="char-split">Multi</h1>
            <h1 className="char-split">Disciplinary</h1>
            <span className="relative flex gap-2">

              <h1 className="relative char-split w-fit">Developer</h1>
              <span className="uppercase flex flex-col font-suisse text-[1rem] font-[400] tracking-normal text-left leading-[1.25] w-fit  max-w-[300px]">
                <span className="char-split-later">Blending creativity, technical expertise, and design thinking to build user‑centered digital experiences that deliver purposeful and lasting impact.</span>
              </span>
            </span>
           
            </div>
            </div>
        </section>
 </>);
}

export default HeroSection;