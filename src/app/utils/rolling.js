'use client';

import { useEffect } from 'react';

export function UseRollingAnimation() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Dynamically import GSAP only on client side
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { SplitText } = await import('gsap/SplitText');
      
      gsap.registerPlugin(SplitText);

      // Get all rolling wrappers
      const rollingWrappers = document.querySelectorAll(".rolling_wrapper");
      
      // Process each wrapper individually
      rollingWrappers.forEach((wrapper) => {
        const titleA = wrapper.querySelector(".rolling_inner_shown");
        const titleAA = wrapper.querySelector(".rolling_inner_hidden");
        
        // Only proceed if elements exist within this wrapper
        if (!titleA || !titleAA) return;

        var split = new SplitText(titleA, { type: "chars" });
        var splitb = new SplitText(titleAA, { type: "chars" });

        const tl = gsap.timeline({
          paused: true,
        });

        // First text moves up and out
        tl.fromTo(
          split.chars,
          {
            y: "0%"
          },
          {
            duration: 0.3,
            y: "-100%",
            stagger: 0.02
          }
        );

        // Second text moves from below to normal position
        tl.fromTo(
          splitb.chars,
          {
            y: "100%"
          },
          {
            duration: 0.3,
            y: "-100%",
            stagger: 0.02
          },
          "<"
        );

        const handleMouseEnter = () => {
          tl.play();
        };

        const handleMouseLeave = () => {
          tl.reverse();
        };

        wrapper.addEventListener("mouseenter", handleMouseEnter);
        wrapper.addEventListener("mouseleave", handleMouseLeave);

        // Store cleanup function on the wrapper element
        wrapper._cleanup = () => {
          wrapper.removeEventListener("mouseenter", handleMouseEnter);
          wrapper.removeEventListener("mouseleave", handleMouseLeave);
        };
      });

      // Cleanup function for all wrappers
      return () => {
        rollingWrappers.forEach((wrapper) => {
          if (wrapper._cleanup) {
            wrapper._cleanup();
          }
        });
      };
    };

    loadGSAP();
  }, []); // Empty dependency array means this runs once on mount
}