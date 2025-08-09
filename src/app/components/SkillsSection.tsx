import React from "react";

const SkillsSection = () => {
    return (
        <>
         <section className="container transition-bg skills-section text-[var(--background)] section-4 px-[20px] pt-[40vh] max-h-screen h-screen min-w-screen">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <div>
                <span className="section-subtitle">my expertise</span>
                <h2 className=" text-[40px] leading-[1] split">Tech I Work With</h2>
              </div>
            </div>
            <div className="col-span-8">
            <div className="flex justify-center fade-target" id="skills-list_wrapper">
              <ul className="text-[80px] leading-[1] flex flex-col skills-list z-[999]">
                {[
                  "React.js",
                  "Next.js",
                  "Express.js",
                  "Node.js",
                  "MongoDB",
                  "SQL",
                  "WebSockets",
                  "REST API's",
                  "TypeScript",
                  "Javascript",
                  "Tailwind CSS",
                  "GSAP Animations",
                  "Shopify",
                  "Wordpress"
                ].map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default SkillsSection;