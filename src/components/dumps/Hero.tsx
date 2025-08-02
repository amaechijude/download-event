import { useState, useEffect } from "react";
import { Calendar, MapPin, MoveRightIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  const [countdown, setCountdown] = useState({
    days: 46,
    hours: 22,
    minutes: 2,
    seconds: 30,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
              DOWNLOAD TECH <span className="text-orange-500">2025</span>
            </h1>

            {/* Theme */}
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Theme: Leveraging Technology to Drive Innovation and
              Entrepreneurship.
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center space-x-4 mb-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold text-white">
                  {countdown.days.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-300">Days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold text-white">
                  {countdown.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-300">Hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold text-white">
                  {countdown.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-300">Minutes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold text-white">
                  {countdown.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-300">Seconds</div>
              </div>
            </div>

            {/* Register Button */}

            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 mb-16"
            >
              Register 📈
            </button>
          </div>
        </div>

        {/* Bottom Header Bar */}
        <div className="w-full bg-slate-800/80 backdrop-blur-md py-6 px-8">
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
      </div>
    </div>
  );
}
