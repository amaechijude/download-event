import { useEffect, useState } from "react";
import { Card } from "./ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-06T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { value: timeLeft.days.toString().padStart(2, "0"), label: "Days" },
    { value: timeLeft.hours.toString().padStart(2, "0"), label: "Hours" },
    { value: timeLeft.minutes.toString().padStart(2, "0"), label: "Minutes" },
    { value: timeLeft.seconds.toString().padStart(2, "0"), label: "Seconds" },
  ];

  return (
    <div className="inline-flex items-center gap-2 md:gap-5 relative flex-[0_0_auto]">
      {countdownItems.map((item, index) => (
        <Card
          key={`countdown-${index}`}
          className="relative w-[80px] md:w-[102px] h-[80px] md:h-[102px] mt-[-1.00px] mb-[-1.00px] bg-[#0000001f] rounded-[5px] overflow-hidden border border-solid border-[#ffffffcc]"
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className="[font-family:'Bricolage_Grotesque_24pt_Condensed-Bold',Helvetica] font-bold text-white text-3xl md:text-[52px] leading-tight md:leading-[78px]">
              {item.value}
            </div>
            <div className="[font-family:'Bricolage_Grotesque_24pt_Condensed-Medium',Helvetica] font-medium text-white text-sm md:text-xl leading-tight md:leading-[30px]">
              {item.label}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
