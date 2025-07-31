import { Button } from "./ui/button";
import { Card } from "./ui/card";

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

export function Exhibition() {
  return (
    <main className="relative w-full min-h-screen bg-[#031632] px-4 md:px-8 lg:px-0 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <header className="lg:ml-[166px] mb-12 lg:mb-0">
          <h2 className="font-medium text-app-secondary text-xl md:text-2xl lg:text-[28px] leading-normal font-['Space_Grotesk']">
            Be at Download
          </h2>

          <h1 className="mt-4 lg:mt-[28px] font-bold text-white text-3xl md:text-4xl lg:text-[52px] leading-tight max-w-2xl lg:max-w-[762px] font-['Space_Grotesk']">
            The Best Visibility for every Business
          </h1>
        </header>

        <div className="flex justify-center lg:justify-end lg:mr-[200px] mt-8 lg:mt-0">
          <div className="relative">
            <div className="absolute w-full h-full top-1 left-1 bg-app-secondary rounded-xl" />
            <a href="/sponsor" rel="noopener noreferrer">
            <Button className="relative w-[160px] md:w-[200px] h-[50px] md:h-[60px] bg-[#bdd733] rounded-xl overflow-hidden hover:bg-[#bdd733]/90">
              <span className="font-['Space_Grotesk'] font-bold text-[#031632] text-xl md:text-2xl lg:text-[28px]">
                Sponsor
              </span>
            </Button>
            </a>

          </div>
        </div>

      <div className="mt-16 lg:mt-24 grid lg:grid-cols-2 gap-8 lg:gap-12">
        <section className="order-2 lg:order-1 lg:ml-[166px]">
          {features.map((feature) => (
            <div key={feature.id} className="mb-12 last:mb-0">
              <div className="flex items-center mb-6">
                <div className="relative mr-4">
                  <div className="relative w-12 h-12">
                    <img
                      className="absolute w-[45px] h-[52px]"
                      alt="Polygon"
                      src="/polygon-1.svg"
                    />
                    <div className="absolute w-8 h-8 top-1 left-0 bg-app-secondary rounded-[16px]" />
                    <div className="absolute top-1/2 left-[14px] transform -translate-y-1/2">
                      <span className="text-white font-bold text-sm">
                        {feature.id}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-bold font-['Space_Grotesk'] leading-tight">
                  {feature.title}
                </h3>
              </div>
              <p className="text-white text-base md:text-lg font-medium font-['Space_Grotesk'] leading-relaxed mb-8 max-w-[540px]">
                {feature.description}
              </p>
              <div className="w-full h-[2px] bg-white/20"></div>
            </div>
          ))}
        </section>

        <Card className="order-1 lg:order-2 w-full lg:w-[630px] aspect-[630/900] border-none">
          <div className="relative w-full h-full">
            <div className="absolute w-[98%] h-[98%] top-[1%] left-[1%] bg-[#bdd733] rounded-xl" />
            <div className="absolute inset-0 rounded-xl shadow-xl bg-[url(/stand.png)] bg-cover bg-center" />
          </div>
        </Card>
      </div>
    </div>
  </main>
  );
};
