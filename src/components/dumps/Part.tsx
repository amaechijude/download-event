import { Button } from "../ui/button";
import { Card } from "../ui/card";

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

export const Participants = (): JSX.Element => {
  return (
    <main className="relative min-h-screen bg-[#031632] px-4 md:px-8 lg:px-16 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 md:mb-16">
          <h2 className="font-['Space_Grotesk'] font-medium text-app-secondary text-xl md:text-[28px] leading-normal mb-4 md:mb-7">
            Be at Download
          </h2>

          <h1 className="font-['Space_Grotesk'] font-bold text-white text-3xl md:text-5xl lg:text-[52px] leading-tight max-w-2xl lg:max-w-[762px]">
            The Best Visibility for every Business
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          <div className="w-full lg:w-auto order-2 lg:order-1">
            <Button className="w-full md:w-auto mb-12 lg:hidden bg-[#bdd733] rounded-xl overflow-hidden hover:bg-[#bdd733]/90 px-6 py-3">
              <span className="font-['Space_Grotesk'] font-bold text-[#031632] text-xl md:text-2xl">
                Sponsor
              </span>
            </Button>

            <section className="space-y-12">
              {features.map((feature) => (
                <div key={feature.id} className="pb-12 last:pb-0">
                  <div className="flex items-center mb-6">
                    <div className="relative mr-4">
                      <div className="w-6 md:w-8 h-6 md:h-8 bg-orange-500 transform rotate-45 rounded-sm"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                        <span className="text-white font-bold text-xs md:text-sm">
                          {feature.id}
                        </span>
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
          </div>

          <div className="lg:flex-1 order-1 lg:order-2">
            <Button className="hidden lg:block w-[200px] h-[60px] bg-[#bdd733] rounded-xl overflow-hidden hover:bg-[#bdd733]/90 mb-12">
              <span className="font-['Space_Grotesk'] font-bold text-[#031632] text-2xl">
                Sponsor
              </span>
            </Button>

            <Card className="w-full max-w-[630px] mx-auto lg:mx-0 border-none">
              <div className="relative pt-[142%]">
                <div className="absolute inset-[2%] bg-[#bdd733] rounded-xl" />
                <div className="absolute inset-0 rounded-xl shadow-xl bg-[url(/stand.png)] bg-cover bg-center" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};
