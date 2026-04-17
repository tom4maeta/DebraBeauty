import React from "react";
import BannerImage from "../Bannerimage1.png";
import { FaUserCircle, FaArrowRight } from "react-icons/fa";

function Banner() {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src={BannerImage}
        alt="Beauty & Skincare Banner"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Gradient Overlay (more professional than flat black) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Soft luxury glow accents */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 blur-[140px] opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 blur-[160px] opacity-20 rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">

        {/* Heading */}
        <h1 className="text-white font-extrabold tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Radiate Beauty.  
          <span className="block text-pink-400">Elevate Confidence.</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          Experience luxury skincare and premium cosmetic essentials crafted to enhance your natural glow,
          restore confidence, and define timeless elegance.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">

          {/* Primary Button */}
          <a href="#products" className="group bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
            Shop Now
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          {/* Secondary Button */}
          <a href="#services" className="border border-white/60 text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 backdrop-blur-md">
            Explore Services
            <FaUserCircle />
          </a>

        </div>

      </div>

      {/* Bottom glow wave */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[300px] bg-pink-500 blur-[180px] opacity-20 rounded-full"></div>

    </section>
  );
}

export default Banner;