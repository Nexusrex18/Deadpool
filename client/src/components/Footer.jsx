import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Logo and Tagline */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-extrabold text-red-500">Deadpool</h2>
          <p className="text-gray-400 italic mt-2">
          I'm like the love child of a teddy bear and a grenade... adorable but deadly.
          </p>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
          <a
            href="#home"
            className="hover:text-red-500 transition duration-300"
          >
            Home
          </a>
          <a
            href="#gallery"
            className="hover:text-red-500 transition duration-300"
          >
            Gallery
          </a>
          <a
            href="#game"
            className="hover:text-red-500 transition duration-300"
          >
            Game
          </a>
          <a
            href="#comics"
            className="hover:text-red-500 transition duration-300"
          >
            Comics
          </a>
          <a
            href="#about"
            className="hover:text-red-500 transition duration-300"
          >
            About Us
          </a>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 text-gray-400 hover:text-red-500 transition duration-300"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.675c0 .73.593 1.325 1.325 1.325H12.82v-9.827h-3.293V9.428h3.293V7.099c0-3.257 1.985-5.038 4.878-5.038 1.387 0 2.578.103 2.922.148v3.39l-2.006.001c-1.573 0-1.879.747-1.879 1.844v2.417h3.754l-.49 3.744h-3.264V24h6.408c.73 0 1.325-.594 1.325-1.325V1.326C24 .593 23.405 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6 text-gray-400 hover:text-red-500 transition duration-300"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.194 4.916 4.916 0 0 0-8.38 4.482A13.934 13.934 0 0 1 1.671 3.15a4.916 4.916 0 0 0 1.523 6.558A4.898 4.898 0 0 1 .964 9.1v.061a4.916 4.916 0 0 0 3.946 4.827 4.903 4.903 0 0 1-2.212.084 4.917 4.917 0 0 0 4.59 3.417A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.209c9.142 0 14.307-7.72 13.995-14.646a9.935 9.935 0 0 0 2.457-2.546z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              className="w-6 h-6 text-gray-400 hover:text-red-500 transition duration-300"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.418.415a4.92 4.92 0 0 1 1.675 1.118 4.92 4.92 0 0 1 1.118 1.675c.175.448.361 1.248.415 2.418.058 1.266.07 1.645.07 4.849s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.415 2.418a4.92 4.92 0 0 1-1.118 1.675 4.92 4.92 0 0 1-1.675 1.118c-.448.175-1.248.361-2.418.415-1.266.058-1.645.07-4.85.07s-3.584-.012-4.849-.07c-1.17-.054-1.97-.24-2.418-.415a4.92 4.92 0 0 1-1.675-1.118 4.92 4.92 0 0 1-1.118-1.675c-.175-.448-.361-1.248-.415-2.418C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.054-1.17.24-1.97.415-2.418a4.92 4.92 0 0 1 1.118-1.675 4.92 4.92 0 0 1 1.675-1.118c.448-.175 1.248-.361 2.418-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.014 7.052.072 5.78.13 4.868.308 4.124.593c-.8.308-1.473.724-2.122 1.373C.865 2.615.449 3.287.141 4.087c-.285.744-.463 1.656-.521 2.928C-.014 8.332 0 8.737 0 12c0 3.263.014 3.668.072 4.948.058 1.272.236 2.184.521 2.928.308.8.724 1.473 1.373 2.122.648.648 1.321 1.064 2.122 1.373.744.285 1.656.463 2.928.521C8.332 23.986 8.737 24 12 24c3.263 0 3.668-.014 4.948-.072 1.272-.058 2.184-.236 2.928-.521.8-.308 1.473-.724 2.122-1.373.648-.648 1.064-1.321 1.373-2.122.285-.744.463-1.656.521-2.928.058-1.28.072-1.685.072-4.948 0-3.263-.014-3.668-.072-4.948-.058-1.272-.236-2.184-.521-2.928-.308-.8-.724-1.473-1.373-2.122-.648-.648-1.321-1.064-2.122-1.373-.744-.285-1.656-.463-2.928-.521C15.668.014 15.263 0 12 0z" />
              <circle cx="12" cy="12" r="3.5" />
              <path d="M18.406 4.594a1.44 1.44 0 1 0 0-2.881 1.44 1.44 0 0 0 0 2.881z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Deadpool Fan Site. Created by <span className="text-red-500">NexusRex18</span>. No rights reserved—steal away!
      </div>
    </footer>
  );
};

export default Footer;
