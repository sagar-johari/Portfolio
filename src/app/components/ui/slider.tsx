"use client";
import React from "react";

export default function Slider() {


  return (
    <div id="panels">
      <div
        id="panels-container"
        className="slider-wrapper w-full h-full flex gap-[50px]"
      >
        {["hotbuttered", "jindal", "3eco"].map((videoName, index) => (
          <div
            key={index}
            className="panel slide followerchangetest"
          >
            <a href="#">

            <div className="slide-content relative">
              <div className="w-full h-full min-w-[calc(60vw-100px)] overflow-hidden relative">
                <video
                  src={`../video/${videoName}.mp4`}
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            </a>
          </div>
        ))}

        <div className="space min-h-[100px] min-w-[60px]"></div>
      </div>
    </div>
  );
}
