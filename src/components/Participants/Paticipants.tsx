import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

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
    <main className="relative w-[1440px] h-[1339px] bg-[#031632]">
      <header className="absolute top-[82px] left-[166px]">
        <h2 className="h-9 [font-family:'Space_Grotesk',Helvetica] font-medium text-app-secondary text-[28px] tracking-[0] leading-[normal]">
          Be at Download
        </h2>

        <h1 className="w-[762px] h-[132px] mt-[28px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[52px] tracking-[0] leading-[normal]">
          The Best Visibility for every Business
        </h1>
      </header>

      <div className="absolute w-[204px] h-16 top-[165px] left-[1036px]">
        <div className="relative h-16">
          <div className="absolute w-[200px] h-[60px] top-1 left-1 bg-app-secondary rounded-xl" />
          <Button className="absolute w-[200px] h-[60px] top-0 left-0 bg-[#bdd733] rounded-xl overflow-hidden hover:bg-[#bdd733]/90">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-bold text-[#031632] text-[28px]">
              Sponsor
            </span>
          </Button>
        </div>
      </div>

      <Card className="absolute w-[630px] h-[900px] top-[331px] left-[767px] border-none">
        <div className="relative h-[900px]">
          <div className="absolute w-[618px] h-[887px] top-[13px] left-[13px] bg-[#bdd733] rounded-xl" />
          <div className="absolute w-[618px] h-[888px] top-0 left-0 rounded-xl shadow-[10.61px_10.61px_21.23px_#0000001a,-10.61px_-10.61px_21.23px_#0000001a] bg-[url(/stand.png)] bg-cover bg-[50%_50%]" />
        </div>
      </Card>

      <section className="absolute top-[331px] left-[166px]">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="w-[541px] h-[182px] mb-[40px]"
            style={{ marginTop: index > 0 ? "40px" : "0" }}
          >
            <div className="absolute w-[60px] h-[60px] shadow-[2.04px_2.04px_4.08px_#0000000d,-2.04px_-2.04px_4.08px_#0000000d]">
              <div className="relative w-16 h-[52px] top-1">
                <img
                  className="absolute w-[45px] h-[52px] top-0 left-[18px]"
                  alt="Polygon"
                  src="/polygon-1.svg"
                />
                <div className="absolute w-[33px] h-[33px] top-[9px] left-0 bg-app-secondary rounded-[16.72px]" />
                <div className="flex flex-col w-5 h-5 items-center justify-center gap-[2.04px] px-[7.54px] py-[2.24px] absolute top-4 left-[7px] bg-white rounded-[10.19px]">
                  <div className="relative w-fit mt-[-0.25px] ml-[-1.35px] mr-[-1.35px] [font-family:'Space_Grotesk',Helvetica] font-normal text-black text-[12.2px] tracking-[0] leading-[normal]">
                    {feature.id}
                  </div>
                </div>
              </div>
            </div>

            <h3 className="absolute h-[46px] top-1.5 left-[84px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-4xl tracking-[0] leading-[normal]">
              {feature.title}
            </h3>

            <p className="absolute w-[541px] h-[78px] top-[79px] left-0 [font-family:'Space_Grotesk',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
              {feature.description}
            </p>

            <Separator className="absolute w-[541px] h-[3px] top-[182px] left-0 bg-white/20" />
          </div>
        ))}
      </section>
    </main>
  );
};
