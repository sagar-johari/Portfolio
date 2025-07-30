"use client";
import React,{ useEffect, useRef } from "react";
import Core from "smooothy";

export default function SliderComponent() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    const slider = new Core(sliderRef.current, {
      infinite: true,
      snap: true,
      // optional config: lerpFactor, speedDecay, snapStrength, etc.
    });

    const animate = () => {
      slider.update();
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div
      className="slider-wrapper"
      data-slider
      ref={sliderRef}
    >
      <div className="slide">Slide 1</div>
      <div className="slide">Slide 2</div>
      <div className="slide">Slide 3</div>
      {/* ...more */}
    </div>
  );
}
