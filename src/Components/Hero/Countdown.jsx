import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const weddingDate = new Date("2026-08-17T08:00:00");

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = weddingDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
          (1000 * 60)
      );
      const seconds = Math.floor(
        (distance % (1000 * 60)) /
          1000
      );

      setTimeLeft({
        days: String(days).padStart(3, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
   <div className="mt-2 px-4 sm:px-6 lg:px-10">
  <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-6">
    <Card value={timeLeft.days} label="Hari" />
    <Card value={timeLeft.hours} label="Jam" />
    <Card value={timeLeft.minutes} label="Menit" />
    <Card value={timeLeft.seconds} label="Detik" />
  </div>

  <button
    className="
      mx-auto
      mt-8
      flex
      items-center
      gap-2
      rounded-lg
      bg-[#9EBDB2]
      px-4 sm:px-5 md:px-6
      py-2 sm:py-3
      text-sm sm:text-base
      md:text-xl
      font-semibold
      text-white
      shadow-lg
      transition
      duration-300
      hover:scale-105
      hover:bg-[#87A89D]
    "
  >
    <FaRegCalendarAlt />
    17 Agustus 2026
  </button>
</div>
  );
};

function Card({ value, label }) {
  return (
    <div className="rounded-md bg-[#9EBDB2]  shadow-lg text-center">
      <h2 className="text-md md:text-2xl font-bold text-white">{value}</h2>
      <p className="text-sm md:text-xl font-bold italic text-white">{label}</p>
    </div>
  );
}

export default Countdown;