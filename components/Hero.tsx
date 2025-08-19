import React from "react";
import { FaPhoneFlip } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative h-full flex flex-col py-20 items-center justify-center text-white overflow-hidden" id="hero" >
      {/* Video Arka Planı */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/main-vid.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Siyah Opaklık Katmanı */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* İçerik (Metin ve Buton) */}
      <div className="relative z-20 text-center px-4">
        <h1 className="font-heading tracking-tight text-5xl md:text-7xl font-medium max-w-xs md:max-w-xl mx-auto mb-6">
          Available 24/7 Across Edmonton
        </h1>
        <p className="tracking-tight text-xl mb-8 max-w-md mx-auto">
          Get Your Tires Changed Anytime, Anywhere in Edmonton
        </p>
        <a
          href="tel:+16474512391"
          className="rounded-full border border-gray-200 bg-white px-6 py-4 h-16 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 inline-flex items-center justify-center gap-2 transition duration-200"
        >
          <span className="font-bold tracking-tight text-black">
            Book A Free Call
          </span>
          <FaPhoneFlip color="black" />
        </a>
      </div>
    </section>
  );
};

export default Hero;