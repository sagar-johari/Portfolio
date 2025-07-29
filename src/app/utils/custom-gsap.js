"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CustomGSAP() {
  useEffect(() => {
    const video = document.querySelector(".section-2 video");
    if (!video) return;

    // Make sure parent is relative
    const parent = document.querySelector(".section-2");
    parent.style.position = "relative";

    gsap.set(video, {
      position: "absolute",
      bottom: "60px",
      right: "60px",
      scale: 1,
      width: "calc(100vw - 120px)",
      height: "calc(100vh - 60px)",
      transformOrigin: "bottom right",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2",
        start: "top 20px",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: false,
      },
    });

    tl.to(video, {
      scale: 0.3,
      ease: "ease-in-out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  useEffect(()=>{
    
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".transition-bg",
        start: "top 70%",
        end: "top 30%",
        scrub: true,
        pin: false,
        pinSpacing: false,
        markers: false,
      },
    });

    t2.to(document.querySelectorAll('.transition-bg,.transition-bg-prev'),{
      backgroundColor: '#d8d8d8',
      duration: 1, // optional, adjust as needed
      ease: 'none' 
    });

  },[]);

  return null;
}
