import { FaHeart, FaUserTie, FaFemale } from "react-icons/fa";
import {
  keluargaPria,
  keluargaWanita,
} from "./DataFamily";

export default function MengundangSection() {
  return (
    <section className="bg-[#9EB8B0] py-20 px-5">
      <div className="mx-auto max-w-5xl">

        {/* Header */}

        <div
          data-aos="fade-down"
          className="text-center"
        >
          <FaHeart className="mx-auto text-3xl text-white" />

          <p className="mt-4 uppercase tracking-[6px] text-white/80">
            Wedding Family
          </p>

          <h2 className="mt-3 text-6xl font-tangerine text-white">
            Turut Mengundang
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/80 font-serif">
            Besar harapan kami agar Bapak/Ibu/Saudara/i
            dapat hadir untuk memberikan doa restu kepada
            kedua mempelai.
          </p>
        </div>

        {/* List */}

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {/* Pria */}

          <div
            data-aos="fade-right"
            className="rounded-3xl bg-white p-8 shadow-xl"
          >
            <div className="flex items-center gap-3">

              <FaUserTie className="text-2xl text-[#7FA39B]" />

              <h3 className="text-4xl font-tangerine text-[#36554C]">
                Mempelai Pria
              </h3>

            </div>

            <ul className="mt-6 space-y-4">
              {keluargaPria.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#7FA39B]" />

                  <span className="font-serif text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Wanita */}

          <div
            data-aos="fade-left"
            className="rounded-3xl bg-white p-8 shadow-xl"
          >
            <div className="flex items-center gap-3">

              <FaFemale className="text-2xl text-[#7FA39B]" />

              <h3 className="text-4xl font-tangerine text-[#36554C]">
                Mempelai Wanita
              </h3>

            </div>

            <ul className="mt-6 space-y-4">
              {keluargaWanita.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#7FA39B]" />

                  <span className="font-serif text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}