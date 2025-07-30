"use client";

import { useEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export function CustomGSAP() {
  const hoverRevealRef = useRef(null);

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
        scrub: 1.2,
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

  useEffect(()=>{
    
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top 0%",
        end: "bottom 0%",
        scrub: 1.2,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });

    t3.to(document.querySelectorAll('.skills-list'),{
    translateY:'-90%' ,
      duration: 1, // optional, adjust as needed
      ease: 'none' 
    });

  },[]);


  useEffect(()=>{
    
    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".transition-bg-next",
        start: "top 100%",
        end: "top 70%",
        scrub: true,
        pin: false,
        pinSpacing: false,
        markers: false,
      },
    });

    t4.to(document.querySelectorAll('.transition-bg,.transition-bg-next'),{
      backgroundColor: 'var(--background)',
      duration: 1, // optional, adjust as needed
      ease: 'none' 
    });
       

  },[]);

  useEffect(()=>{
    const listItems = gsap.utils.toArray(".skills-list li");

    listItems.forEach((li) => {
      li.addEventListener("mouseenter", () => {
        listItems.forEach((item) => {
          gsap.to(item, {
            opacity: item === li ? 1 : 0.5,
            scale: item === li ? 1.05 : 1,
            duration: 0.2,
            ease: "power2.out"
          });
        });
      });
  
      li.addEventListener("mouseleave", () => {
        listItems.forEach((item) => {
          gsap.to(item, {
            opacity: 1,
            scale:1,
            duration: 0.2,
            ease: "power2.out"
          });
        });
      });
    });
  
    return () => {
      listItems.forEach((li) => {
        li.removeEventListener("mouseenter", () => {});
        li.removeEventListener("mouseleave", () => {});
      });
    };
  },[]);


  return null;
}
