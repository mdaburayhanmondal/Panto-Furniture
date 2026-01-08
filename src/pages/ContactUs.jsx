import React from 'react';
import contactBackground from '../../src/assets/contact-background.jpg';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="min-h-screen">
      <div
        className="w-full h-80 bg-no-repeat bg-center bg-cover flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${contactBackground})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <h1 className="text-4xl text-center font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="section-default my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg uppercase font-semibold text-primary mb-2">
                Get In Touch
              </h3>
              <h2 className="text-4xl font-bold">Visit Our Showroom</h2>
              <p className="text-secondary opacity-70 mt-4 leading-relaxed">
                Have a question about our materials or want to see a chair in
                person? Our team of design professionals is here to help.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <FaPhoneAlt />,
                  label: 'Call Us',
                  val: '+880 1234 567 890',
                },
                {
                  icon: <FaEnvelope />,
                  label: 'Email',
                  val: 'support@panto.com',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-x-4">
                  <div className="bg-primary text-white p-4 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase text-secondary opacity-50 font-bold">
                      {item.label}
                    </p>
                    <p className="text-lg font-semibold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-darkerBackground dark:bg-darkBg p-10 rounded-3xl border border-gray-200 dark:border-white/5 shadow-xl">
            <form className="flex flex-col gap-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-background dark:bg-white/5 p-4 rounded-xl outline-primary border border-gray-200 dark:border-white/10 text-secondary"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-background dark:bg-white/5 p-4 rounded-xl outline-primary border border-gray-200 dark:border-white/10 text-secondary"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="bg-background dark:bg-white/5 p-4 rounded-xl outline-primary border border-gray-200 dark:border-white/10 text-secondary resize-none"
              />
              <button className="bg-primary text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
