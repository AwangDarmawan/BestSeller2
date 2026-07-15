import { FaCopy } from "react-icons/fa6";
import { FaBuildingColumns } from "react-icons/fa6";
import { toast } from "react-toastify";
export default function CardGift({
  logo,
  number,
  owner,
}) {
  // const copyNumber = () => {
  //   navigator.clipboard.writeText(number);
  // };
  const copyNumber = async () => {
  try {
    await navigator.clipboard.writeText(number);

    toast.success("Nomor rekening berhasil disalin!", {
      icon: "📋",
    });
  } catch (error) {
    toast.error("Gagal menyalin nomor rekening.");
  }
};

  return (
    <div
      data-aos="zoom-in"
      className="
      rounded-2xl
      bg-white
      p-6
      shadow-xl
      transition
      hover:-translate-y-2
      duration-300
      "
    >
      <div className="flex items-center justify-between">

        <h3 className="text-xl font-semibold font-serif">
          Gift Card
        </h3>

        <img
          src={logo}
          className="h-10 object-contain rounded-xl"
        />

      </div>

      <FaBuildingColumns
        className="mt-6 text-2xl text-gray-400"
      />

      <p className="mt-5 text-xs uppercase tracking-widest text-gray-400 font-serif">
        Nomor Rekening
      </p>

      <div className="mt-2 flex items-center justify-between">

        <h4 className="text-2xl font-bold font-serif">
          {number}
        </h4>

        <button
          onClick={copyNumber}
          className="
          flex
          items-center
          gap-2
          rounded-lg
          bg-[#8FB0A6]
          px-4
          py-2
          text-white
          transition
          hover:bg-[#7B9F94]
          font-serif
          "
        >
          <FaCopy />

          Copy
        </button>

      </div>

      <p className="mt-5 text-xs uppercase tracking-widest font-serif text-gray-400">
        Nama Pemilik
      </p>

      <h5 data-aos="fade-right" data-aos-delay="300" className="mt-2 text-4xl font-semibold font-tangerine">
        {owner}
      </h5>

    </div>
  );
}