
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate, className }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-revup-dark-gray border border-revup-red/20 rounded-md px-4 py-2 md:px-6 md:py-4 backdrop-blur-sm">
        <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm text-revup-gray mt-2">{label}</span>
    </div>
  );

  return (
    <div className={cn("flex justify-center items-center gap-2 md:gap-4", className)}>
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-xl md:text-3xl text-revup-red font-bold">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-xl md:text-3xl text-revup-red font-bold">:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="text-xl md:text-3xl text-revup-red font-bold">:</div>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
