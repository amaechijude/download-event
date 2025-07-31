import { MoveRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { CountdownTimer } from "./CountdownTimer";

export const DesktopHero = (): JSX.Element => {

  return (
      <div
        className="relative w-full pt-[113px] bg-[url('/hero-bg.png')]"
      >
        <img
          className="absolute w-full h-[501px] bottom-0 left-0"
          alt="Perspective grid"
          src="/perspective-grid.png"
        />
        <div className="flex flex-col items-center gap-10 px-4 md:px-0 pt-[182px] max-w-[920px] mx-auto">
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col items-center gap-3 w-full">
              <h1 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-4xl md:text-[80px] text-center leading-tight md:leading-[120px]">
                <span className="text-white">DOWNLOAD TECH </span>
                <span className="text-[#f48636]">
                  {new Date().getFullYear()}
                </span>
              </h1>

              <p className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-lg md:text-[28px] text-center leading-normal md:leading-[42px] max-w-full md:max-w-[860px]">
                Unpacking the Future of Technology, Innovation,{" "}
                <br className="hidden md:block" />
                and Digital Breakthroughs.
              </p>
            </div>

            <CountdownTimer />
          </div>
          <a href="https://lu.ma/xuilf4vq" target="_blank" rel="noopener noreferrer">
            <Button className="flex w-full md:w-60 h-16 md:h-20 items-center justify-center gap-2.5 px-[46px] py-6 bg-app-secondary rounded-2xl overflow-hidden border border-solid border-[#ffffffb2]">
              <span className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-bold text-[#f6f6f6] text-xl md:text-2xl tracking-[0] leading-[normal]">
                Register
              </span>
              <MoveRightIcon className="w-[22px] h-[22px] md:w-[26px] md:h-[26px]" />
            </Button>
          </a>
        </div>
      </div>
  );
};
