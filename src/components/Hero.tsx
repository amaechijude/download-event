import { Calendar, MapPin, MoveRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Countdown } from "./CountdownTimer";

export default function Hero() {

  const handleLocationClick = () => {
    window.open(
      "https://maps.google.com/maps?q=Classic+Munich+Hotel+Nnewi",
      "_blank"
    );
  };


  return (
    <div className="min-h-screen bg-[#031632] w-full bg-[url('/hero-bg.png')] relative overflow-hidden">
      {/* Grid Background */}
      <img
        className="absolute w-full h-[501px] bottom-0 left-0"
        alt="Perspective grid"
        src="/perspective-grid.png"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8">
              DOWNLOAD TECH <span className="text-orange-500">2025</span>
            </h1>

            {/* Theme */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Theme: Leveraging Technology to Drive Innovation and
              Entrepreneurship.
            </p>

            {/* Countdown Timer */}
            <Countdown
              dateTime={new Date("2025-09-06T01:09:00")}
            />
          </div>
          {/* Register Button */}
          <a
            href="https://lu.ma/xuilf4vq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex items-center justify-center gap-2.5 px-6 sm:px-[46px] py-4 sm:py-6 bg-app-secondary rounded-xl sm:rounded-2xl overflow-hidden border border-solid border-[#ffffffb2]">
              <span className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-bold text-[#f6f6f6] text-2xl">
                Register
              </span>
              <MoveRightIcon />
            </Button>
          </a>
        </div>

        {/* Bottom Header Bar */}
        <div className="w-full backdrop-blur-sm py-4 sm:py-6 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            {/* When Section */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="text-orange-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
                  WHEN?
                </div>
                <div className="text-white text-lg sm:text-xl font-semibold">
                  6th February, 2025
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="flex items-center space-x-4">
              <div className="text-center sm:text-right">
                <div className="text-white text-lg sm:text-xl font-semibold">
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
      </div>
    </div>
  );
}
