import { MoveRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

export const DesktopHero = (): JSX.Element => {
  // Data for vertical light beams
  const lightBeams = Array(8)
    .fill(null)
    .map((_, index) => ({
      left: `left-[${index * 170}px]`,
    }));

  // Data for countdown timer
  const countdownItems = [
    { value: "46", label: "Days" },
    { value: "22", label: "Hours" },
    { value: "02", label: "Minutes" },
    { value: "30", label: "Seconds" },
  ];

  // Navigation items
  const navItems = [
    { label: "Home", active: true },
    { label: "About", active: false },
    { label: "Sponsor", active: false },
    { label: "Volunteer", active: false },
  ];

  return (
    <div className="relative w-[1440px] h-[1024px] bg-[#031632]">
      <div className="absolute w-[1440px] h-[911px] top-[113px] left-0">
        <img
          className="absolute w-[1440px] h-[501px] top-[409px] left-0"
          alt="Perspective grid"
          src="/perspective-grid.png"
        />

        <div className="absolute w-[1251px] h-[410px] top-0 left-[72px]">
          {lightBeams.map((beam, index) => (
            <div
              key={`beam-${index}`}
              className={`absolute w-[61px] h-[521px] top-0 bg-[#08b6fbcc] blur-[50px] ${beam.left}`}
            />
          ))}
        </div>

        <div className="flex flex-col w-[920px] items-center gap-10 absolute top-[182px] left-[260px]">
          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-bold text-transparent text-[80px] text-center tracking-[0] leading-[120px]">
                <span className="text-white">DOWNLOAD TECH </span>
                <span className="text-[#f48636]">2025</span>
              </h1>

              <p className="relative w-[860px] [font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[28px] text-center tracking-[0] leading-[42px]">
                Unpacking the Future of Technology, Innovation, <br />
                and Digital Breakthroughs.
              </p>
            </div>

            <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
              {countdownItems.map((item, index) => (
                <Card
                  key={`countdown-${index}`}
                  className="relative w-[102px] h-[102px] mt-[-1.00px] mb-[-1.00px] bg-[#0000001f] rounded-[5px] overflow-hidden border border-solid border-[#ffffffcc]"
                >
                  <div className="relative w-[67px] h-[100px] left-4">
                    <div className="relative w-full h-24 -top-px text-center">
                      <div className="absolute h-[78px] top-0 left-0 right-0 [font-family:'Bricolage_Grotesque_24pt_Condensed-Bold',Helvetica] font-bold text-white text-[52px] text-center tracking-[0] leading-[78px] whitespace-nowrap">
                        {item.value}
                      </div>
                      <div className="absolute h-[30px] top-[66px] left-0 right-0 [font-family:'Bricolage_Grotesque_24pt_Condensed-Medium',Helvetica] font-medium text-white text-xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
                        {item.label}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Button className="flex w-60 h-20 items-center justify-center gap-2.5 px-[46px] py-6 relative bg-app-secondary rounded-2xl overflow-hidden border border-solid border-[#ffffffb2]">
            <span className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-bold text-[#f6f6f6] text-2xl tracking-[0] leading-[normal]">
              Buy Ticket
            </span>
            <MoveRightIcon className="w-[26px] h-[26px]" />
          </Button>
        </div>
      </div>

      <header className="fixed w-[1440px] h-[114px] top-0 left-0 bg-[#031531] flex items-center justify-between px-14">
        <img className="w-[212px] h-[74px]" alt="Logo" src="/logo.png" />

        <nav className="inline-flex items-center gap-5 absolute left-[690px]">
          {navItems.map((item, index) => (
            <div
              key={`nav-${index}`}
              className={`inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[10px] ${item.active ? "border-b [border-bottom-style:solid] border-[#f48636]" : ""}`}
            >
              <div
                className={`relative w-fit [font-family:'Bricolage_Grotesque',Helvetica] ${item.active ? "font-bold text-app-secondary" : "font-medium text-white"} text-xl tracking-[0] leading-[normal] whitespace-nowrap`}
              >
                {item.label}
              </div>
            </div>
          ))}
        </nav>

        <Button className="flex w-[199px] h-[60px] items-center justify-center gap-2.5 px-[46px] py-6 absolute top-[27px] left-[1160px] bg-app-secondary rounded-2xl overflow-hidden border border-solid border-[#ffffffb2]">
          <span className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-bold text-[#f6f6f6] text-2xl tracking-[0] leading-[normal]">
            Buy Ticket
          </span>
          <MoveRightIcon className="w-[26px] h-[26px]" />
        </Button>
      </header>
    </div>
  );
};
