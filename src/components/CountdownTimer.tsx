"use client";
import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}


export function Countdown({dateTime} : {dateTime: Date}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  useEffect(() => {
    const targetDate = dateTime;

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
    <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
      {countdownItems.map((item) => (
        <div
          key={item.label}
          className="border border-white rounded-lg p-3 sm:p-4 w-[70px] sm:w-[80px]"
        >
          <div className="text-2xl sm:text-3xl font-bold text-white">
            {item.value}
          </div>
          <div className="text-xs sm:text-sm text-gray-300">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
