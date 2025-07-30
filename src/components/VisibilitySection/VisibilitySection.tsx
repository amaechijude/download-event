import React from "react";
const features = [
  {
    number: "1",
    title: "Digital Impact",
    description:
      "Showcase your brand where it matters most – across the right platforms, with the right audience, at the right time.",
  },
  {
    number: "2",
    title: "Exhibition Stand",
    description:
      "Have a decorated booth for your brand where activations can permanently happen. Also have access to a personalized picture backdrop for your brand.",
  },
  {
    number: "3",
    title: "Growth Toolkit",
    description:
      "Learn how to harness cutting-edge tech and digital trends to increase brand awareness and customer engagement.",
  },
  {
    number: "4",
    title: "Global Rise",
    description:
      "Discover how businesses like yours are scaling visibility and influence beyond borders through smart digital positioning.",
  },
];

export const VisibilitySection: React.FC = () => {
  return (
    // Main container with dark background and relative positioning for the button
    <div className="bg-slate-900 font-sans w-full p-8 sm:p-12 md:p-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Sponsor Button (Absolutely Positioned) */}
        <button className="absolute top-8 right-8 sm:top-12 sm:right-12 bg-lime-400 text-slate-900 font-bold py-3 px-8 rounded-lg text-base hover:bg-lime-300 transition-colors shadow-lg">
          Sponsor
        </button>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Section: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-orange-400 font-semibold mb-2">Be at Download</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-12">
              The Best Visibility for every Business
            </h2>

            {/* Features List (Data-driven) */}
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-500 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg shadow-md">
                    {feature.number}
                  </div>
                  <div className="ml-5 text-left">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="stand.png"
              alt="Woman presenting at a Figma exhibition stand"
              className="rounded-2xl w-full h-auto object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

