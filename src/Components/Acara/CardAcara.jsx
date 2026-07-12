import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function CardAcara({
  image,
  type,
  date,
  time,
  title,
  address,
}) {
    const isResepsi = type === "Resepsi";
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">

      {/* Vertical Title */}
        <div
       
    className={`
      absolute
      top-0
      h-full
      w-10
        bg-gradient-to-b
from-[#A8C3BA]
via-[#6fbea5]
to-[#68d4b7]
shadow-2xl
      flex
      items-center
      justify-center
    
      ${isResepsi ? "right-0" : "left-0"}
    `}
  >
   

      {/* <div
        className="
        absolute
        left-0
        top-0
        flex
        h-full
        w-10
        items-center
        justify-center
        bg-[#7FA39B]"
      > */}

        <h2
          data-aos={isResepsi ? "fade-up" : "fade-down"}
  data-aos-duration="1000"
          className="
          rotate-180
          writing-mode-vertical
          text-3xl
          font-serif
          italic
          text-white"
          
          
        >
          {type}
        </h2>

      </div>

      {/* Content */}

      <div className={isResepsi ? "mr-10" : "ml-10"}>

        <img
          src={image}
          alt={type}
          className="
          h-64
          w-full
          object-cover"
        />

        <div className="space-y-4 p-5">

          <div>

            <h3 data-aos ="fade-left" data-aos-delay="300" className="text-4xl font-bold font-tangerine">
              {date}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-sm font-serif">

              <FaClock />

              {time}

            </div>

          </div>

          <div>

            <h4 className="font-bold text-[#36554C]  font-serif">
              {title}
            </h4>

            <p className="mt-2 text-sm text-gray-600  font-serif">
              {address}
            </p>

          </div>

          <button
            className="
            flex
            items-center
            gap-2
            rounded-full
            bg-[#7FA39B]
            px-5
            py-2
            text-sm
            font-semibold
            text-white
            transition
            hover:scale-105
             font-serif italic"
            
          >

            <FaLocationDot />

            Google Maps

          </button>

        </div>

      </div>

    </div>
  );
}