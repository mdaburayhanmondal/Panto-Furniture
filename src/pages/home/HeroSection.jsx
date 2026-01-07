import React from 'react';
import bannerImg from '../../assets/banner.png';
import { FiSearch } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bannerImg})` }}
      className="w-full min-h-screen relative bg-cover bg-center text-white mx-auto px-4"
    >
      <div className="pt-24 md:pt-44 text-center space-y-8 ">
        <h1 className="text-4xl md:text-5xl font-medium md:w-1/2 mx-auto leading-snug">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-normal lg:w-1/2 mx-auto">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search furniture..."
            className="w-90 px-6 py-3 bg-white/15 rounded-full focus:outline-1 outline-white/50"
          />
          <FiSearch className="text-4xl bg-primary hover:shadow hover:shadow-primary cursor-pointer p-1 rounded-full -ml-10" />
        </div>
      </div>

      {/* banner blur effect */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-linear-to-t from-white via-transparent to-transparent blur-sm" />
      
    </section>
  );
};

export default HeroSection;
