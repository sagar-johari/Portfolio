"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface ScrollMarqueeProps {
  text: string;
  className?: string;
}

const ScrollMarquee: React.FC<ScrollMarqueeProps> = ({ text, className = "" }) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    let currentScroll = 0;
    let isScrollingDown = true;

    // Create the marquee animation
    tweenRef.current = gsap.to(".marquee__part", {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "linear"
    }).totalProgress(0.5);

    // Set initial position
    gsap.set(".marquee__inner", { xPercent: -50 });

    // Scroll event listener
    const handleScroll = () => {
      if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      if (tweenRef.current) {
        gsap.to(tweenRef.current, {
          timeScale: isScrollingDown ? 1 : -1
        });
      }

      currentScroll = window.pageYOffset;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, []);

  return (
    <section className={`marquee ${className}`}>
      <div className="marquee__inner" aria-hidden="true" ref={innerRef}>
        <div className="marquee__part">
          {text}
        </div>
        <div className="marquee__part">
          {text}
        </div>
        <div className="marquee__part">
          {text}
        </div>
        <div className="marquee__part">
          {text}
        </div>
        <div className="marquee__part">
          {text}
        </div>
        <div className="marquee__part">
          {text}
        </div>
      </div>
    </section>
  );
};

export default ScrollMarquee; 