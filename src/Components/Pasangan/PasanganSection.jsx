
import Ayat from "./Ayat";
import PasanganCard from "./PasanganCard";
import Pria from "../../assets/IMG/Ardi.jpg"
import Cewe from "../../assets/IMG/Cewe.png"

export default function PasanganSection() {
  return (
    <main className="min-h-screen z-30 bg-[#9EB8B0] flex justify-center">
      <div
        className="
        w-full
        max-w-md
        lg:max-w-lg
        xl:max-w-xl
        bg-[#9EB8B0]
        relative
        overflow-hidden"
      >
        <Ayat />

        <section className="px-5 py-8 space-y-16">

          <PasanganCard
            image={Pria}
            name="Aditya Putra"
            parent="Putra Pertama dari"
            family="Bapak Lorem dan Ibu Ipsum"
          />

          <div className="text-center">
            <h2 className="text-9xl animate-pulse text-white font-tangerine font-bold">&</h2>
          </div>

          <PasanganCard
            image={Cewe}
            name="Mida Putri "
            parent="Putri Pertama dari"
            family="Bapak Lorem dan Ibu Ipsum"
          />

        </section>
      </div>
    </main>
  );
}