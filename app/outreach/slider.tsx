'use client'

import React, { useEffect, useRef } from "react";
import img4 from "../../public/img4.svg";
import img5 from "../../public/img5.svg";

export const Slider: React.FC = () => {
  // const sliderRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (!slider) return;

  //   const scrollHeight = slider.scrollHeight;
  //   const clientHeight = slider.clientHeight;

  //   // Scroll smoothly every 20 milliseconds
  //   const scrollImages = () => {
  //     if (slider.scrollTop + clientHeight >= scrollHeight) {
  //       slider.scrollTop = 0; // Reset to top for infinite scroll
  //     } else {
  //       slider.scrollTop += 1; // Scroll down by 1px
  //     }
  //   };

  //   const intervalId = setInterval(scrollImages, 20); // Adjust the speed here

  //   return () => clearInterval(intervalId); // Cleanup interval on unmount
  // }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center text-white rounded-2xl min-h-screen p-6 border-[#4B4B4B] border-2">
      {/* Text Section */}
      <div className="lg:w-1/2">
  <h1 className="text-4xl font-bold mb-4">
    <span className="text-white animate-slide-in">500</span>{" "}
    <br />
    <span className="text-orange-500 animate-slide-in delay-100">Beneficiaries</span>,
    <br />
    <span className="text-gray-300 animate-slide-in delay-200">we can still</span>
    <br />
    <span className="text-gray-600 animate-slide-in delay-300">do more!</span>
  </h1>
</div>


      {/* Vertical Image Slider */}
      <div className="w-full h-[700px] overflow-hidden">
        <div
          // ref={sliderRef}
          className="flex flex-col gap-12 animate-scroll-vertical"
        >
          <img
            src={img4.src}
            alt="Image 1"
            className="object-cover w-full h-[300px]"
          />
          <img
            src={img5.src}
            alt="Image 2"
            className="object-cover w-full h-[300px]"
          />
          <img
            src={img4.src}
            alt="Image 3"
            className="object-cover w-full h-[300px]"
          />
          <img
            src={img5.src}
            alt="Image 4"
            className="object-cover w-full h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};
