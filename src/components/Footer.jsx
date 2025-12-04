import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0d1a] border-t border-white/10 pt-12 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-3">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#6264ff]"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <span className="text-2xl font-bold tracking-wide">GameHub</span>
          </div>

          <p className="text-gray-400 text-sm mt-1">
            Discover, download, and play your favorite games.  
            <br />Crafted for gamers worldwide.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition">
                Support
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-5 text-xl text-gray-400">
            <a href="https://www.facebook.com/sadnurislam.me/" className="hover:text-[#4267B2] transition">
              <FaFacebook />
            </a>
            <a href="https://github.com/SadnurIslam" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sadnur-islam/" className="hover:text-[#0A66C2] transition">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@sadnurislam2852" className="hover:text-[#FF0000] transition">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} GameHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
