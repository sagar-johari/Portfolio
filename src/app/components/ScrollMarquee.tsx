"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface ScrollMarqueeProps {
  text: string;
  className?: string;
}

const ScrollMarquee: React.FC<ScrollMarqueeProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let currentScroll = 0;
      let isScrollingDown = true;

      const parts = gsap.utils.toArray(".marquee__part") as HTMLElement[];

      // Marquee animation
      tweenRef.current = gsap.to(parts, {
        xPercent: -100,
        repeat: -1,
        duration: 10,
        ease: "linear",
      }).totalProgress(0.5);

      // Set initial position
      gsap.set(".marquee__inner", { xPercent: -50 });

      // Scroll listener
      const handleScroll = () => {
        isScrollingDown = window.pageYOffset > currentScroll;

        if (tweenRef.current) {
          gsap.to(tweenRef.current, {
            timeScale: isScrollingDown ? 1 : -1,
          });
        }

        currentScroll = window.pageYOffset;
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (tweenRef.current) tweenRef.current.kill();
      };
    }, containerRef); // <-- Scopes to this component only

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section className={`scroll-marquee marquee ${className}`} ref={containerRef}>
      <div className="marquee__inner" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div className="marquee__part" key={i}>
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollMarquee;
