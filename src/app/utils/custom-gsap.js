"use client";

import { useEffect,useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SplitText from "gsap/SplitText";



gsap.registerPlugin(ScrollTrigger, SplitText,ScrollToPlugin);

export function CustomGSAP() {
  const hoverRevealRef = useRef(null);

  useEffect(() => {
    const rollingWrappers = document.querySelectorAll(".rolling_wrapper");
    const timelines = [];
    const splitInstances = [];

    rollingWrappers.forEach((wrapper) => {
      const titleA = wrapper.querySelector(".rolling_inner_shown");
      const titleAA = wrapper.querySelector(".rolling_inner_hidden");

      if (!titleA || !titleAA) return;

      // Split text and store instances
      const split = new SplitText(titleA, { type: "chars" });
      const splitb = new SplitText(titleAA, { type: "chars" });

      splitInstances.push(split, splitb);

      const tl = gsap.timeline({ paused: true });

      tl.fromTo(
        split.chars,
        { y: "0%" },
        { duration: 0.3, y: "-100%", stagger: 0.02 }
      );

      tl.fromTo(
        splitb.chars,
        { y: "100%" },
        { duration: 0.3, y: "-100%", stagger: 0.02 },
        "<"
      );

      const handleMouseEnter = () => tl.play();
      const handleMouseLeave = () => tl.reverse();

      wrapper.addEventListener("mouseenter", handleMouseEnter);
      wrapper.addEventListener("mouseleave", handleMouseLeave);

      wrapper._cleanup = () => {
        wrapper.removeEventListener("mouseenter", handleMouseEnter);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
      };

      timelines.push(tl);
    });

    // CLEANUP
    return () => {
      rollingWrappers.forEach((wrapper) => {
        if (wrapper._cleanup) wrapper._cleanup();
      });
      timelines.forEach((tl) => tl.kill());
      splitInstances.forEach((split) => split.revert()); // <== THIS LINE FIXES NESTING ISSUE
    };
  }, []);

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
      height: "calc(100vh - 120px)",
      transformOrigin: "bottom right",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2",
        start: "top 60px",
        end: "bottom top+=60px",
        scrub: 1,
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
      backgroundColor: '#fff',
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
      backgroundColor: '#000',
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

  useEffect(() => {
    let panelsSection = document.querySelector("#panels");
    let panelsContainer = document.querySelector("#panels-container");
    let tween;

    const cont = panelsContainer;
    const panels = gsap.utils.toArray("#panels-container .panel");
    if (cont){

      tween = gsap.to(panels, {
        x: () => -1 * (cont.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: "#panels-container",
          pin: "#work_section",
          pinSpacing: true,
          start: "top 40%",
          end: "bottom 0%",
          scrub: 1,
          markers: false,
          end: () => "+=" + (cont.scrollWidth - window.innerWidth),
        },
      });
    }


    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tween && tween.kill();
    };
  }, []);

  useEffect(()=>{
    const footer_trigger = document.querySelector('#contact');
      ScrollTrigger.create({
        trigger: footer_trigger,
        start: "top 80%",
        end: "top 80%",
        markers: false,
        onEnter: () => {
          const footer = document.querySelector('.resume_button_move');
            
          gsap.to(footer, {
            y: '20vh',
            duration: 0.3,
            ease: "none",
          });
        },
        onEnterBack: () => {
          const footer = document.querySelector('.resume_button_move');
          gsap.to(footer, {
            y: 0,
            duration: 0.3,
            ease: "none"
          });
        },
      });
  },[]);

  useEffect(() => {
    const links = document.querySelectorAll(".scroll-link");
  
    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute("href"));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 100, 
          },
          ease: "power2.inOut",
        });
      }
    };
  
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });
  
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  useEffect(() => {
    let splitInstances = [];
  
    document.fonts.ready.then(() => {
  
      const elements = document.querySelectorAll(".split");
  
      elements.forEach((el) => {
        const split = new SplitText(el, {
          type: "words,lines",
          linesClass: "line",
          autoSplit: true,
          mask: "lines",
        });
  
        splitInstances.push(split);
  
        gsap.from(split.words, {
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            toggleActions: "play none none none",
            markers: false,
          },
          yPercent: 100,
          duration: 0.8,
          stagger: 0.03,
          ease: "expo.out",
        });
      });
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      splitInstances.forEach(split => split.revert());
    };
  }, []);


  useLayoutEffect(() => {
    const elements = document.querySelectorAll(".fade-target");
  
    elements.forEach((el) => {
      const delay = parseFloat(el.getAttribute("data-delay")) || 0;
  
      gsap.fromTo(el, {
        opacity: 0,
        y: 20,
      },
      {
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          toggleActions: "play none none none",
          markers: false,
        },
        opacity:1,
        duration: 1,
        y:0,
        delay: delay,
        ease: "power2.out"
    });
    });
  
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  useLayoutEffect(() => {
    const elements = document.querySelectorAll(".fade-grid > div");
    document.fonts.ready.then(() => {
      gsap.to(elements, 
      {
      opacity: 1,
      stagger: 0.2,
      ease: "none",
      delay:2.8,
      scrollTrigger: {
        trigger: ".fade-grid",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: false,
      }

    });
    
    });
  
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  useEffect(() => {
    const splitInstances = [];
  
    document.fonts.ready.then(() => {
      const elements = document.querySelectorAll(".char-split");
      gsap.set(elements,{opacity:1});

      elements.forEach((el) => {
  
        const split = new SplitText(el, {
          type: "lines,words,chars",
          charsClass: "char",
          linesClass:"line"
        });
  
        splitInstances.push(split);
  
        gsap.from(split.chars, {
          y: 100,
          duration: 1,
          stagger: 0.08,
          ease: "circ.out",
          delay:1,
        });
      });
    });
  
    return () => {
      splitInstances.forEach((split) => split.revert());
    };
  }, []);


  useEffect(() => {
    const splitInstances = [];
  
    document.fonts.ready.then(() => {
      const elements = document.querySelectorAll(".char-split-later");
  
      gsap.set(elements,{opacity:1});
      elements.forEach((el) => {
  
        const split = new SplitText(el, {
          type: "lines,words",
          charsClass: "char",
          linesClass:"line"
        });
  
        splitInstances.push(split);
        gsap.from(split.words, {
          y: 100,
          duration: 0.8,
          stagger: 0.04,
          ease: "circ.out",
          delay:2,
        });
      });
    });
  
    return () => {
      splitInstances.forEach((split) => split.revert());
    };
  }, []);

  useLayoutEffect(()=>{
    const header =document.querySelector('header');
    document.fonts.ready.then(() => {
      gsap.fromTo(header,{
        y:'-100%'
      },{
        y:'0%',
        duration: 0.8,
        ease: "power2.inOut",
        delay:1,
      });
      gsap.fromTo(
        document.querySelector('.resume_button_move'),
        {
          y: '100px',
        },
        {
          y: '0px',
         duration: 0.8,
          ease: "power2.inOut",
          delay: 1
        }
      );
      
    });
  },[]);

  useEffect(() => {
    let splitInstances = [];
  
    document.fonts.ready.then(() => {
      const elements = document.querySelectorAll(".section-subtitle");
  
      elements.forEach((el) => {
        gsap.fromTo(el, {
          "--before-opacity": 0
        }, {
          "--before-opacity": 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: el,
            start: "top 70%+26px",
            toggleActions: "play none none none",
            markers: false
          },
        });
      });
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      splitInstances.forEach(split => split.revert());
    };
  }, []);
  
  useEffect(() => {
    const marquee = document.querySelector(".marquee-text");

    if (!marquee) return;

    gsap.set(marquee, { xPercent: 0 });

    const totalWidth = marquee.scrollWidth / 2;

    const loop = gsap.to(marquee, {
      x: -totalWidth,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    return () => {
      loop.kill(); // cleanup on unmount
    };
  }, []);

  return null;
}
