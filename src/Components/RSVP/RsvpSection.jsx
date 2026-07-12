import { useEffect, useState } from "react";
import { FaEnvelopeOpenText, FaHeart } from "react-icons/fa";

import RsvpForm from "./RsvpForm";
import { getData } from "../../Services/Api";
import { TypeAnimation } from "react-type-animation";

export default function RsvpSection() {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getData();
      setDatas(data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section
      id="rsvp"
      className="bg-[#9EB8B0] py-20 px-5"
    >
      <div className="mx-auto max-w-5xl">

        <div
          data-aos="fade-up"
          className="
            rounded-[32px]
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,.08)]
            border
            border-[#E6EFEA]
            p-6
            md:p-10
          "
        >
          {/* Header */}

          <div className="text-center">

            <div
              className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-[#EDF5F2]
                shadow-lg
              "
            >
              <FaEnvelopeOpenText className="text-4xl text-[#7FA39B]" />
            </div>

            <p
            data-aos="fade-up" data-aos-delay="300" 
              className="
                mt-6
                uppercase
                tracking-[6px]
                text-[#7FA39B]
                text-sm
                font-serif
              "
            >
              Wedding RSVP
            </p>

            <h2
              className="
                mt-3
                text-5xl
                md:text-6xl
                font-tangerine
                text-[#36554C]
              "
            >
              Konfirmasi Kehadiran
            </h2>

            <div className="my-6 flex items-center justify-center gap-4">

              <div className="h-px w-20 bg-[#7FA39B]/30" />

              <FaHeart className="text-[#7FA39B] animate-pulse" />

              <div className="h-px w-20 bg-[#7FA39B]/30" />

            </div>

            {/* <p
              className="
                mx-auto
                max-w-2xl
                leading-8
                text-gray-500
                font-serif
              "
            >
              Kehadiran dan doa restu Anda merupakan kebahagiaan yang
              sangat berarti bagi kami. Silakan isi formulir di bawah ini.
            </p> */}
            <TypeAnimation
  sequence={[
    "Kehadiran dan doa restu Anda merupakan kebahagiaan yang sangat berarti bagi kami. Silakan isi formulir di bawah ini.",
    10000,
    "",
    1000,
  ]}
  speed={80}
  repeat={Infinity}
  cursor
  wrapper="p"
  className="
    mx-auto
    max-w-2xl
    min-h-[80px]
    leading-8
    text-gray-500
    font-serif
  "
/>

          </div>

          {/* Form */}

          <RsvpForm PropfetchData={fetchData} />

          {/* List RSVP */}

          <div className="mt-16">

            <h3
            data-aos="fade-right" data-aos-delay="300" 
              className="
                text-center
                text-5xl
                font-tangerine
                text-[#36554C]
              "
            >
              Ucapan & Doa
            </h3>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              {datas.length === 0 ? (
                <div
                  className="
                    col-span-full
                    rounded-2xl
                    border
                    border-dashed
                    border-[#DCE8E3]
                    p-8
                    text-center
                    text-gray-500
                  "
                >
                  Belum ada RSVP
                </div>
              ) : (
                datas.map((item) => (
                  <div
                    key={item.id}
                    data-aos="fade-up"
                    className="
                      rounded-2xl
                      border
                      border-[#E6EFEA]
                      bg-[#FBFCFC]
                      p-5
                      shadow-sm
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                    "
                  >
                    <div  className="flex items-start justify-between gap-3">

                      <div className="flex-1">

                        <h4 className="text-2xl font-semibold font-tangerine text-[#36554C]">
                          {item.nama}
                        </h4>

                        <p className="mt-3 font-serif leading-7 text-gray-600 break-words">
                          {item.pesan}
                        </p>

                      </div>

                      <span
                        className={`
                          rounded-full
                          px-1
                          py-1
                          text-xs
                          font-semibold
                            font-serif
                          ${
                            item.kehadiran === "Ya"
                              ? "bg-green-100 text-green-700"
                              : item.kehadiran === "Mungkin"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }
                        `}
                      >
                        {item.kehadiran}
                      </span>

                    </div>
                  </div>
                ))
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}