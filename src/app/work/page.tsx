import React from "react";

const Work = () => {
    const images = [
        "./images/jindal-logo.jpg",
        "./images/3eco.png",
        "./images/react.png",
        "./images/express-js.png",
        "./images/sjicon.png",
        // add more
      ];
      
 return(
    <>
   <div className="overflow-hidden whitespace-nowrap w-full relative">
  <div className="marquee-text flex space-x-12">
    <span>Work ✦ Work ✦ Work ✦ Work ✦ Work ✦</span>
    <span>Work ✦ Work ✦ Work ✦ Work ✦ Work ✦</span>
  </div>
</div>


        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 p-4">
        {images.map((src, i) => (
            <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-lg">
            <img src={src} alt="" className="w-full grayscale hover:grayscale-0 transition duration-300" />
            <div className="mt-2">
                <h3 className="text-white text-lg font-semibold">Title Here</h3>
                <p className="text-gray-400 text-sm">Category ✦ Type</p>
            </div>
            </div>
  ))}
</div>

    </>
 );
}

export default Work