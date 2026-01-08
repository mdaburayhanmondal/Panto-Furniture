import React from 'react';
import contactBackground from '../../src/assets/contact-background.jpg';
import Experience from './home/Experience';

const ContactUs = () => {
  return (
    <section>
      <div
        className="w-full h-100 bg-no-repeat bg-center bg-cover flex item justify-center text-white"
        style={{ backgroundImage: `url(${contactBackground})` }}
      >
        <div class="mt-4 h-fit bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
          <h1 class="text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </div>
      <Experience />
    </section>
  );
};

export default ContactUs;
