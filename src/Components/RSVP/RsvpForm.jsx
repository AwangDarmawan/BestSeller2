import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import { CreatePesan } from "../../Services/Api";

export default function RsvpForm({ PropfetchData }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nama: "",
    pesan: "",
    kehadiran: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nama.trim()) {
      return toast.error("Nama wajib diisi");
    }

    if (!form.pesan.trim()) {
      return toast.error("Ucapan wajib diisi");
    }

    if (!form.kehadiran) {
      return toast.error("Pilih konfirmasi kehadiran");
    }

    try {
      setLoading(true);

      await CreatePesan(form);
      await PropfetchData();

      toast.success("Ucapan berhasil dikirim");

      setForm({
        nama: "",
        pesan: "",
        kehadiran: "",
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const radioClass = (value) =>
    `cursor-pointer rounded-xl border px-4 py-3 text-center transition-all duration-300 ${
      form.kehadiran === value
        ? "bg-[#7FA39B] text-white border-[#7FA39B] shadow-lg"
        : "bg-[#F8FBFA] border-[#DDE8E3] text-[#36554C] hover:bg-[#EDF5F2]"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-12 w-full max-w-3xl space-y-7"
    >
      {/* Nama */}

      <div>
        <label data-aos="fade-up" data-aos-delay="300"  className="mb-2 block font-serif font-semibold text-[#36554C]">
          Nama
        </label>

        <input
          type="text"
          name="nama"
          value={form.nama}
          required
          onChange={handleChange}
          placeholder="Masukkan Nama"
          className="
            w-full
            rounded-xl
            border
            border-[#DDE8E3]
            bg-[#F8FBFA]
            px-5
            py-4
            text-[#36554C]
            placeholder:text-gray-400
            outline-none
            transition
            focus:border-[#7FA39B]
            focus:ring-4
            focus:ring-[#7FA39B]/20
            font-serif
          "
        />
      </div>

      {/* Pesan */}

      <div>
        <label data-aos="fade-right" data-aos-delay="300"  className="mb-2 block font-semibold text-[#36554C] font-serif">
          Ucapan & Doa
        </label>

        <textarea
          rows={5}
          id="pesan"
          name="pesan"
          required
          value={form.pesan}
          onChange={handleChange}
          placeholder="Tuliskan ucapan dan doa terbaik..."
          className="
          font-serif
            w-full
            resize-none
            rounded-xl
            border
            border-[#DDE8E3]
            bg-[#F8FBFA]
            px-5
            py-4
            text-[#36554C]
            placeholder:text-gray-400
            outline-none
            transition
            focus:border-[#7FA39B]
            focus:ring-4
            focus:ring-[#7FA39B]/20
          "
        />
      </div>

      {/* Kehadiran */}

      <div>
        <label data-aos="fade-right" data-aos-delay="300"  className="mb-3 block font-serif font-semibold text-[#36554C]">
          Kehadiran
        </label>

        <div className=" font-serif grid grid-cols-1 gap-3 sm:grid-cols-3">
          {["Ya", "Mungkin", "Tidak"].map((item) => (
            <label key={item} className={radioClass(item)}>
              <input
                type="radio"
                name="kehadiran"
                value={item}
                checked={form.kehadiran === item}
                onChange={handleChange}
                className="hidden"
              />

              {item === "Ya" && "✅ Hadir"}
              {item === "Mungkin" && "🤔 Mungkin"}
              {item === "Tidak" && "❌ Tidak Hadir"}
            </label>
          ))}
        </div>
      </div>

      {/* Button */}

      <button
        type="submit"
        disabled={loading}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-gradient-to-r
          from-[#9EB8B0]
          to-[#7FA39B]
          px-6
          py-4
          text-lg
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:shadow-xl
          disabled:cursor-not-allowed
          disabled:opacity-60
          font-serif
        "
      >
        <FaPaperPlane />

        {loading ? "Mengirim..." : "Kirim"}
      </button>
    </form>
  );
}