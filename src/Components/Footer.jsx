import {
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#36554C] text-white">

      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* Thank You */}

        <div
          data-aos="fade-up"
          className="text-center"
        >
          <FaHeart className="mx-auto mb-5 text-3xl text-[#CFE3DB]" />

          <h2 className="text-5xl font-tangerine">
            Thank You
          </h2>

          <p className="mt-3 font-serif text-white/80">
            Terima kasih telah menjadi bagian
            dari hari bahagia kami.
          </p>
        </div>

        {/* Card */}

        <div
          data-aos="zoom-in"
          className="
            mx-auto
            mt-12
            max-w-2xl
            rounded-3xl
            bg-white
            p-8
            text-center
            shadow-2xl
          "
        >
          <p className="text-sm uppercase tracking-[5px] text-[#7FA39B]">
            Made By
          </p>

          <h2 className="mt-2 text-5xl font-tangerine text-[#36554C]">
            4daDigital
          </h2>

          <div className="my-6 h-px bg-[#E8F0EC]" />

          <p className="font-serif leading-8 text-gray-600 animate-pulse">
            🎉 <strong>Promo Spesial Bulan Ini!</strong>
            <br />
            Diskon hingga <span className="font-bold text-[#7FA39B]">
              60%
            </span>{" "}
            untuk seluruh template website
            undangan digital.
          </p>

          <a
            href="https://web-4dadigital.vercel.app/"
            className="
              mx-auto
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-[#9EB8B0]
              to-[#7FA39B]
              px-8
              py-4
              font-semibold
              text-white
              shadow-lg
              transition
              duration-300
              hover:scale-105
              hover:shadow-xl
              font-serif
            "
          >
            Lihat Semua Template

            <FaArrowRight />
          </a>
        </div>

        {/* Bottom */}

        <div
          className="
            mt-14
            border-t
            border-white/10
            pt-8
            text-center
            text-sm
            text-white/60
          "
        >
          © 2026 <span className="font-semibold">4daDigital</span>.
          All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}