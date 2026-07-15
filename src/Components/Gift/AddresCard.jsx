import { FaGift } from "react-icons/fa";
import { FaCopy } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function AddresCard({
  receiver,
  address,
}) {
   const copyAddress = async () => {
    try {
      await  navigator.clipboard.writeText(address);
  
      toast.success("Alamat Untuk Hadiah berhasil di salin", {
        icon: "📋",
      });
    } catch (error) {
      toast.error("Gagal menyalin Alamat.");
    }
  };

  return (
    <div
      data-aos="zoom-in"
      className="
      relative
      overflow-hidden
      rounded-2xl
      bg-white
      p-6
      shadow-xl
      "
    >

      <div
        className="
        absolute
        right-0
        top-0
        h-24
        w-24
        bg-[#9EB8B0]
        rotate-45
        translate-x-10
        -translate-y-10
        "
      />

      <FaGift
        className="
        absolute
        right-4
        top-4
        text-white
        z-10
        "
      />

      <h3 data-aos="fade-up" data-aos-delay="300"  className="text-center text-lg tracking-[3px] font-bold text-gray-500 font-serif">
        Kirim Hadiah Untuk
      </h3>

      <p data-aos="fade-right" data-aos-delay="300" className="mt-10 text-center font-serif">
        {address}
      </p>

      <h4 data-aos="fade-right" data-aos-delay="300" className="mt-6 text-center text-4xl font-semibold font-tangerine">
        {receiver}
      </h4>

      <button
        onClick={copyAddress}
        className="
        mx-auto
        mt-8
        flex
        items-center
        gap-2
        rounded-lg
        bg-[#8FB0A6]
        px-5
        py-3
        text-white
        font-serif
        "
      >
        <FaCopy />

        Copy
      </button>

    </div>
  );
}