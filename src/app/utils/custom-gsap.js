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
      bottom: 0,
      right: "30px",
      scale: 1,
      width: "calc(100vw - 120px)",
      height: "calc(100vh - 60px)",
      transformOrigin: "bottom right",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
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

  return null;
}
