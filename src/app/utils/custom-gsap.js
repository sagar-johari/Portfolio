"use client";

import { useEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

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
        pinSpacing: false,
        markers: false,
      },
    });

    t3.to(document.querySelectorAll('.skills-list'),{
    translateY:'-90%' ,
      duration: 1, // optional, adjust as needed
      ease: 'none' 
    });

  },[]);

  useEffect(() => {  
    const image = hoverRevealRef.current;
    if (!image) return;
  
    gsap.set(image, { yPercent: -50, xPercent: -50 });
  
    const images = [
      "https://images.unsplash.com/photo-1530064073344-4c9a218a3653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxNDE2MDJ8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1684437310642-c3660c463cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxOTk4MjF8&ixlib=rb-4.0.3&q=80&w=400"
    ];
  
    let currentIndex = 0;
    let setX, setY;
  
    const align = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };
  
    const startFollow = () => document.addEventListener("mousemove", align);
    const stopFollow = () => document.removeEventListener("mousemove", align);
  
    const fade = gsap.to(image, {
      autoAlpha: 1,
      ease: "none",
      paused: true,
      onReverseComplete: stopFollow,
    });
  
    const scaleTl = gsap.timeline({ paused: true });
  
    scaleTl.fromTo(
      ".hover-reveal__inner",
      { scale: 0.3 },
      {
        ease: "expo.out",
        duration: 1,
        scale: 1,
      }
    );
  
    scaleTl.fromTo(
      ".hover-reveal__img",
      { scale: 2.5 },
      {
        ease: "expo.out",
        duration: 1,
        scale: 1,
      },
      0
    );
  
    const handleEnter = (e, index) => {
      if (currentIndex !== index) {
        gsap.set(".hover-reveal__img", {
          backgroundImage: `url(${images[index]})`,
        });
      }
      currentIndex = index;
  
      fade.play();
      startFollow();
  
      setX = gsap.quickTo(image, "x", { duration: 3.25, ease: "expo.out" });
      setY = gsap.quickTo(image, "y", { duration: 3.25, ease: "expo.out" });
      align(e);
  
      scaleTl.play();
    };
  
    const handleLeave = () => {
      fade.reverse();
      scaleTl.timeScale(2).reverse();
    };
  
    const containers = document.querySelectorAll(".skills-list li");
    containers.forEach((el, index) => {
      el.addEventListener("mouseenter", (e) =>
        handleEnter(e, index)
      );
      el.addEventListener("mouseleave", handleLeave);
    });
  
    return () => {
      containers.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  
  }, []);

  return null;
}
