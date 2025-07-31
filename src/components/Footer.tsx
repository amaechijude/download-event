import React from "react";
import { Separator } from "./ui/separator";

export const Footer2: React.FC = () => {
  return (
    <footer className="bg-[#031632] relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-4 left-16 text-white opacity-60">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
      <div className="absolute top-64 right-32 text-white opacity-40">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
      <div className="absolute bottom-16 left-20 text-white opacity-30">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      <div className="container mx-auto px-8 py-16">
        {/* Header section */}
        <div className="flex justify-between items-start mb-16">
          {/* Logo and description */}
          <div className="max-w-md">
            <div className="flex items-center mb-6">
              <img className="w-[212px] h-[74px]" alt="Logo" src="/logo.png" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Download is a forward-thinking annual conference that brings
              together bold minds, innovators, and digital leaders to explore
              how technology, media, and strategy can accelerate business
              growth, amplify brands, and shape the future.
            </p>

            {/* Social media icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="flex space-x-24">
            <div>
              <h3 className="text-xl font-bold mb-8">EXPLORE</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-8">EXPLORE</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Sponsors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Speakers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Volunteers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Tagline */}
        <div className="text-center my-16">
          <h2 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[64px] tracking-[0] leading-[normal]">
            Dream, Develop, Dominate.
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="space-y-8">
          {/* Terms and Privacy */}
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-xl tracking-[-0.22px] leading-[30px] hover:underline"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="#"
              className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-xl tracking-[-0.22px] leading-[30px] hover:underline"
            >
              Privacy Policy
            </a>
          </div>

          <Separator className="w-full" />

          {/* Copyright */}
          <div className="flex justify-center items-center gap-1">
            <span className="[font-family:'Lato',Helvetica] font-light text-white text-base tracking-[-0.18px] leading-6">
              ICE HUB &copy;{" "}
            </span>
            <span className="[font-family:'Lato',Helvetica] font-light text-white text-base tracking-[-0.18px] leading-6">
              {new Date().getFullYear()}. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
