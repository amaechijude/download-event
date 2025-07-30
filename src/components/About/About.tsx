import React from "react";

export const AboutUs: React.FC = () => {
  return (
    // Main container with a dark background matching the theme
    <div id="about" className="bg-slate-900 font-sans w-full p-4 sm:p-6 md:p-8">
      {/* Centered content with the orange border */}
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Image Section (Left) */}
          <div className="w-full md:w-5/12 flex items-center justify-center p-6 bg-black md:bg-transparent">
            <img
              src="ice.png"
              alt="Founder portrait"
              className="rounded-lg w-full max-w-sm h-auto object-cover"
            />
          </div>

          {/* Text Section (Right) */}
          <div className="w-full md:w-7/12 flex flex-col justify-center p-8 md:p-12 text-white">
            <p className="text-orange-400 font-semibold tracking-wider uppercase text-sm">
              About Us
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold my-3 text-white leading-tight">
              Dream, Develop, Dominate.
            </h1>
            <p className="text-slate-300 text-base lg:text-lg leading-relaxed mb-4">
              Download is more than a tech event – it's where ambition meets
              innovation. We equip creators, entrepreneurs, and forward-thinkers
              with the tools, insights, and digital intelligence needed to
              thrive in today's connected world.
            </p>
            <p className="text-slate-300 text-base lg:text-lg leading-relaxed mb-4">
              This year's edition focuses on unlocking the next wave of digital
              potential. From social strategy to emerging tech, participants
              will discover how to turn ideas into scalable movements, drive
              brand impact, and build future-ready businesses.
            </p>
            <p className="text-slate-300 text-base lg:text-lg leading-relaxed">
              Whether you're growing a brand, shaping a cause, or launching the
              next big idea – Download 2025 is your blueprint for navigating and
              dominating the digital frontier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
