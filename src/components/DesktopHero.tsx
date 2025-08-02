import { MoveRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { Calendar, MapPin } from "lucide-react";

export const DesktopHero = (): JSX.Element => {

  return (
    <section className="relative min-h-screen bg-[#031632] w-full bg-[url('/hero-bg.png')]">
      <img
        className="absolute w-full h-[501px] bottom-0 left-0"
        alt="Perspective grid"
        src="/perspective-grid.png"
      />
      <div className="">
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
          <a
            href="https://lu.ma/xuilf4vq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex w-full md:w-60 h-16 md:h-20 items-center justify-center gap-2.5 px-[46px] py-6 bg-app-secondary rounded-2xl overflow-hidden border border-solid border-[#ffffffb2]">
              <span className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-bold text-[#f6f6f6] text-xl md:text-2xl tracking-[0] leading-[normal]">
                Register
              </span>
              <MoveRightIcon className="w-[22px] h-[22px] md:w-[26px] md:h-[26px]" />
            </Button>
          </a>
        </div>
      </div>
      <EventHeaderBar />
    </section>
  );
};

function EventHeaderBar() {
  const handleLocationClick = () => {
    // Opens Google Maps for the location in a new tab
    window.open(
      "https://maps.google.com/maps?q=Classic+Munich+Hotel+Nnewi",
      "_blank"
    );
  };

  return (
    <div className="w-full top-5 px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* When Section */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-orange-400 text-sm font-medium uppercase tracking-wide">
              WHEN?
            </div>
            <div className="text-white text-xl font-semibold">
              6th February, 2025
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-white text-xl font-semibold">
              Classic Munich Hotel, Nnewi
            </div>
          </div>
          <button
            onClick={handleLocationClick}
            className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
            title="View location on map"
          >
            <MapPin className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}