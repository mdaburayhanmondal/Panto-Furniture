import React from 'react';
import aboutBackground from '../../src/assets/about-background.jpg';
import Whychoose from './home/Whychoose';
import Material from './home/Material';

const AboutUs = () => {
  return (
    <section className="transition-colors duration-300">
      {/* Banner with Glassmorphism */}
      <div
        className="w-full h-100 bg-no-repeat bg-center bg-cover flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
          <h1 className="text-6xl font-bold tracking-tight mb-2">Our Story</h1>
          <p className="text-lg font-light opacity-90">
            Crafting comfort since 2010
          </p>
        </div>
      </div>

      {/* Content Section using your theme variables */}
      <div className="section-default grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-20">
        <div className="space-y-6">
          <h3 className="text-lg uppercase font-semibold text-primary">
            About Panto
          </h3>
          <h2 className="text-4xl font-bold leading-snug">
            Bringing Modern Minimalism to Every Home
          </h2>
          <p className="text-secondary opacity-80 leading-relaxed">
            At Panto, we believe that your living space should be a sanctuary of
            calm. We started with a simple goal: to provide high-quality,
            professional-grade interior furniture that combines luxury with
            affordability.
          </p>
          <div className="flex gap-x-8 border-t border-gray-200 dark:border-gray-700 pt-6">
            <div>
              <p className="text-3xl font-bold text-primary">15k+</p>
              <p className="text-xs uppercase text-secondary opacity-50">
                Products Sold
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">4.9/5</p>
              <p className="text-xs uppercase text-secondary opacity-50">
                Avg Rating
              </p>
            </div>
          </div>
        </div>
        <div className="bg-darkerBackground dark:bg-darkBg rounded-3xl p-2 shadow-inner">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800"
            alt="Panto Interior"
            className="rounded-2xl w-full h-96 object-cover opacity-90"
          />
        </div>
      </div>

      <Whychoose />
      <Material />
    </section>
  );
};

export default AboutUs;
