'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

const CursorFollower = () => {
  useEffect(() => {
    // Set up the follower position
    gsap.set(".follower", { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(".follower", "x", {
      duration: 0.6,
      ease: "power3",
    });
    const yTo = gsap.quickTo(".follower", "y", {
      duration: 0.6,
      ease: "power3",
    });

    const handleMouseMove = (e:any) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation timeline
    const followerAnim = gsap.timeline({ paused: true, overwrite: "auto" });
    followerAnim.to(
      ".follower__inner__bottom",
      {
        scale: 5,
        backgroundColor: "#F6EFEB",
        duration: 0.15,
        height:'0.8rem',
        width:'0.8rem'
      },
      0
    );
    followerAnim.to(
      ".follower__inner__top",
      {
        backgroundColor: "#000",
        scale: 5,
        opacity: 1,
        duration: 0.15,
        height:'0.8rem',
        width:'0.8rem'
      },
      0.2
    );
    followerAnim.to(".follower__content", {
      opacity: 1,
    });

    const items = document.querySelectorAll(".followerchangetest");

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => animateFollower("in"));
      item.addEventListener("mouseleave", () => animateFollower("out"));
    });

    function animateFollower(direction = "in") {
      if (direction === "in") {
        gsap.killTweensOf([
          ".follower__inner__bottom",
          ".follower__inner__top",
          ".follower__content",
        ]);
    
        gsap.to(".follower__inner__bottom", {
          scale: 5,
          backgroundColor: "#F6EFEB",
          duration: 0.15,
          height: '0.8rem',
          width: '0.8rem',
        });
        gsap.to(".follower__inner__top", {
          backgroundColor: "#000",
          scale: 5,
          opacity: 1,
          duration: 0.15,
          height: '0.8rem',
          width: '0.8rem',
        });
        gsap.to(".follower__content", {
          opacity: 1,
          duration: 0.2,
        });
      } else {
        gsap.killTweensOf([
          ".follower__inner__bottom",
          ".follower__inner__top",
          ".follower__content",
        ]);
    
        gsap.to(".follower__inner__bottom", {
          scale: 1,
          backgroundColor: "#fff",
          duration: 0.15,
          height: '0rem',
          width: '0rem',
        });
        gsap.to(".follower__inner__top", {
          scale: 1,
          backgroundColor: "#fff",
          opacity: 0,
          duration: 0.15,
          height: '0rem',
          width: '0rem',
        });
        gsap.to(".follower__content", {
          opacity: 0,
          duration: 0,
        });
      }
    }
    

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      items.forEach((item) => {
        item.removeEventListener("mouseenter", () => animateFollower("in"));
        item.removeEventListener("mouseleave", () => animateFollower("out"));
      });
    };
  }, []);

  return (
    <>
      <div className="follower">
        <div className="follower__inner__bottom" />
        <div className="follower__inner__top" />
        <span className="follower__content">View</span>
      </div>
    </>
  );
};

export default CursorFollower;
