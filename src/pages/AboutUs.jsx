import React from 'react';
import aboutBackground from '../../src/assets/about-background.jpg';
import Experience from './home/Experience';

const AboutUs = () => {
  return (
    <section>
      <div
        className="w-full h-100 bg-no-repeat bg-center bg-cover flex item justify-center text-white"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      >
        <div class="mt-4 h-fit bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
          <h1 class="text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>
      <Experience />
    </section>
  );
};

export default AboutUs;
