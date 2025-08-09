import React from "react";
import Link from "next/link";
import Slider from "./ui/slider";
const WorksSection = () => {
    return (
        <>
         <section className="container pt-[3vh] transition-bg-next min-h-screen " id="work_section">
          <div className="grid grid-cols-12">
                <div className="col-span-11">
        <span className="section-subtitle">my Work</span>
        <p className="text-[60px] font-suisse-r tracking-tight leading-[1] max-w-[800px] mb-[50px split">
        Code meets creativity in<br/> every line I write.
            </p>
                </div>
                <div className="col-span-1">
                  <Link href="/work" className="flex h-full w-full items-end justify-end">
                  <div className="rolling_wrapper">
                            <div className="rolling_inner_shown">View More</div>
                            <div className="rolling_inner_hidden" >View More</div>
                        </div>
                  </Link>
                </div>
                <div className="col-span-12 pt-[20px] fade-target">
                <Slider/>
                </div>
          </div>
        </section>
        </>
    )
}

export default WorksSection