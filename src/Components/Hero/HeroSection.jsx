// import { FaRegCalendarAlt } from "react-icons/fa";

import heroImage from "../../assets/IMG/poto1.png";
// import BungaSection from "../Bunga/BungaSection";

import Countdown from "./Countdown";
// import Bunga from "../Bunga";


export default function HeroSection() {
  return (
 
  <section className="relative overflow-hidden">
    {/* <BungaSection/> */}

  {/* Background */}
  <div className=" relative">
    <img
      src={heroImage}
      alt="Hero"
      className="
        w-full
        h-auto
        object-cover

        lg:h-screen
        lg:w-auto
        lg:mx-auto
      "
    />

    {/* Gradient */}
    <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#A9C9BE]
          via-[#A9C9BE]/60 transparent" />

    {/* Content */}
    <div
      className="
        absolute
        inset-x-0
        bottom-8
        z-20
        flex
        justify-center
        px-5

        sm:bottom-10
        md:bottom-12
        lg:bottom-16
      "
    >
      <div className="w-full max-w-md text-center text-white">

        <p className="text-md italic font-semibold">
          The Wedding of
        </p>

        <h1
        data-aos="fade-down"
           data-aos-delay="300"
          className="
            font-tangerine
            text-5xl
            md:text-7xl
            lg:text-5xl
            drop-shadow-lg
            font-bold
          "
        >
          Aditya & Mida
        </h1>

        <Countdown />

      </div>
    </div>

  </div>

</section>
  );
}