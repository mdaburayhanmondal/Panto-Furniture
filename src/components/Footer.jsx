import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const footerData = {
  services: ['Email Marketing', 'Campaigns', 'Branding'],
  furniture: [
    { name: 'Beds', path: '/' },
    { name: 'Chair', path: '/' },
    { name: 'All', path: '/shop' },
  ],
  socials: [
    { name: 'Facebook', icon: <FaFacebookF />, url: 'https://facebook.com' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://x.com' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com' },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-darkerBackground dark:bg-darkBg">
      <section className="container mx-auto py-10 px-6 md:px-12 lg:px-20 flex flex-col items-center gap-y-12">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="flex flex-col gap-y-4 items-center md:items-start">
            <Link
              to="/"
              className="font-bold font-poppins text-2xl text-gray-800 dark:text-white"
            >
              Panto
            </Link>
            <p className="text-xs text-center md:text-left leading-6 text-gray-500 dark:text-gray-400 max-w-xs">
              The advantage of hiring a workspace with us is that gives you
              comfortable service and all-around facilities.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-y-4 items-center md:items-start">
            <h2 className="text-primary font-semibold text-lg">Services</h2>
            <ul className="flex flex-col items-center md:items-start gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              {footerData.services.map((item) => (
                <li key={item} className="hover:text-primary transition-colors">
                  <Link to="/">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Furniture */}
          <div className="flex flex-col gap-y-4 items-center md:items-start">
            <h2 className="text-primary font-semibold text-lg">Furniture</h2>
            <ul className="flex flex-col items-center md:items-start gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              {footerData.furniture.map((item) => (
                <li
                  key={item.name}
                  className="hover:text-primary transition-colors"
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-y-4 items-center md:items-start">
            <h2 className="text-primary font-semibold text-lg">Follow Us</h2>
            <ul className="flex flex-col items-center md:items-start gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              {footerData.socials.map((social) => (
                <li
                  key={social.name}
                  className="hover:text-primary transition-colors"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2"
                  >
                    {social.icon} {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="w-full border-gray-200 dark:border-gray-700" />

        {/* Bottom Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-y-4 text-gray-500 dark:text-gray-400">
          <p className="text-sm">
            Copyright &copy; {currentYear}{' '}
            <a
              href="https://rayhanfsdev.netlify.app"
              target="blank"
              className="font-extralight italic text-primary"
            >
              Abu Rayhan
            </a>
          </p>
          <div className="flex gap-x-6 text-sm">
            <Link to="/" className="hover:underline hover:text-primary">
              Terms & Conditions
            </Link>
            <Link to="/" className="hover:underline hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
