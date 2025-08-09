import React from "react";

const AboutSection = ()  => {
    return(
        <>
         <section className="container section-2 min-h-[calc(100vh-60px)] min-w-[calc(100vw-60px)] px-[20px] fade-target">
          <div className="section-2-video " >
          <video 
            src="/video/section-2.mp4"  
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover rounded-[10px] " 
          />
          </div>
          <div>

          </div>
        </section>
        <section className="container section-3 transition-bg-prev min-h-screen flex items-end px-[20px] pb-[10%]" id="aboutme">
          <div className="section-3-video">
          <div className="section-subtitle">About me</div>
            <p className="text-[60px] font-suisse-r tracking-tight leading-[1] max-w-[1000px] w-[60vw] split">
              Focused on making websites feel alive with motion and intent.
              <br />
              Obsessed with clean design, clear flow, and tiny details.
              <br />
              If it moves with purpose, I probably built it.
            </p>
          </div>

        </section>
        </>
    )
}

export default AboutSection;