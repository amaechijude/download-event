
// Feature data for mapping
const features = [
  {
    id: 1,
    title: "Digital Impact",
    description:
      "Showcase your brand where it matters most — across the right platforms, with the right audience, at the right time.",
  },
  {
    id: 2,
    title: "Exhibition Stand",
    description:
      "Have a decorated booth for your brand where activations can permanently happen. Also have access to a personalized picture backdrop for your brand",
  },
  {
    id: 3,
    title: "Growth Toolkit",
    description:
      "Learn how to harness cutting-edge tech and digital trends to increase brand awareness and customer engagement.",
  },
  {
    id: 4,
    title: "Global Rise",
    description:
      "Discover how businesses like yours are scaling visibility and influence beyond borders through smart digital positioning.",
  },
];

export const VisibilitySection: React.FC = () => {
  return (
    <main className="relative w-[1440px] h-[1339px] bg-[#031632]">
      <header className="absolute top-[82px] left-[166px]">
        <h2 className="h-9 [font-family:'Space_Grotesk',Helvetica] font-medium text-app-secondary text-[28px] tracking-[0] leading-[normal]">
          Be at Download
        </h2>

        <h1 className="w-[762px] h-[132px] mt-[28px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[52px] tracking-[0] leading-[normal]">
          The Best Visibility for every Business
        </h1>
      </header>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Features List (Data-driven) */}
            <div className="space-y-8">
        {features.map((feature) => (
          <div key={feature.id} className="mb-12 last:mb-0">
            <div className="flex items-center mb-6">
              <div className="relative mr-4">
                <div className="w-8 h-8 bg-orange-500 transform rotate-45 rounded-sm"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                  <span className="text-white font-bold text-sm">
                    {feature.id}
                  </span>
                </div>
              </div>
              <h3 className="text-white text-3xl font-bold font-['Space_Grotesk'] leading-tight">
                {feature.title}
              </h3>
            </div>
            <p className="text-white text-lg font-medium font-['Space_Grotesk'] leading-relaxed mb-8 max-w-[540px]">
              {feature.description}
            </p>
            <div className="w-full h-[2px] bg-white/20"></div>
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
      {/* </div> */}
      </main>
  );
};

