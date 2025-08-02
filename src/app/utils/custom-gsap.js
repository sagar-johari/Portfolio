"use client";

import { useEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SplitText from "gsap/SplitText";



gsap.registerPlugin(ScrollTrigger, SplitText,ScrollToPlugin);

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
      backgroundColor: '#ededed',
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
      backgroundColor: '#0a0a0a',
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

    tween = gsap.to(panels, {
      x: () => -1 * (cont.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: "#panels-container",
        pin: "#work_section",
        pinSpacing: true,
        start: "top 37%",
        end: "bottom 0%",
        scrub: 1,
        markers: false,
        end: () => "+=" + (cont.scrollWidth - window.innerWidth),
      },
    });

    const anchors = document.querySelectorAll(".anchor");

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let targetElem = document.querySelector(anchor.getAttribute("href"));
        let y = targetElem;

        if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
          let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start;
          let totalMovement = cont.scrollWidth - window.innerWidth;
          y = Math.round(
            tween.scrollTrigger.start +
              (targetElem.offsetLeft / totalMovement) * totalScroll
          );
        }

        gsap.to(window, {
          scrollTo: {
            y: y,
            autoKill: false,
          },
          duration: 1,
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tween && tween.kill();
    };
  }, []);

  useEffect(()=>{
    
      ScrollTrigger.create({
        trigger: "footer",
        start: "top 80%",
        end: "top 80%",
        markers: false,
        onEnter: () => {
          const resumeBlock = document.querySelector('.resume_block span');
          const footer = document.querySelector('.resume_button_move');
          const targetRect = resumeBlock.getBoundingClientRect();
          const footerRect = footer.getBoundingClientRect();
      
          const deltaX = targetRect.left - footerRect.left - 150;
          const deltaY = targetRect.top - footerRect.top;
      
          gsap.to(footer, {
            x: deltaX,
            y: deltaY,
            duration: 0.3,
            ease: "none",
            onComplete: () => {
              footer.classList.add('moved');
            }
          });
        },
        onEnterBack: () => {
          const footer = document.querySelector('.resume_button_move');
          footer.classList.remove('moved');
          // Animate back to original position (x: 0, y: 0)
          gsap.to(footer, {
            x: '-50%',
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
            start: "top 60%",
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
  

  useEffect(() => {
    const splitInstances = [];
  
    document.fonts.ready.then(() => {
      const elements = document.querySelectorAll(".char-split");
  
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
          stagger: 0.04,
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
      const elements = document.querySelectorAll(".char-split-inner");
  
      elements.forEach((el) => {
  
        const split = new SplitText(el, {
          type: "lines,words",
          wordsClass:"word",
          linesClass:"line"
        });
  
        splitInstances.push(split);
  
        gsap.from(split.words, {
          y: 100,
          duration: 0.6,
          stagger: 0.03,
          ease: "circ.out",
          delay:1.8,
        });
      });
    });
  
    return () => {
      splitInstances.forEach((split) => split.revert());
    };
  }, []);
  

  return null;
}
