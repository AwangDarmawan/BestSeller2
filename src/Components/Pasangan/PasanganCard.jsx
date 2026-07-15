import BungaSection from "../Bunga/BungaSection";

// export default function PasanganCard({
//   image,
//   name,
//   parent,
//   family,
// }) {
//   return (
//     <div className="relative z-30 rounded-3xl bg-white shadow-xl p-8 text-center">
// <BungaSection/>
//       <div className="flex justify-center">

//         <img
//           src={image}
//           alt={name}
//           className="
//           w-44
//           h-56
//           object-cover
//           rounded-full
//           border-4
//           border-white
//           shadow-lg"
//         />

//       </div>

//       <h2 className="mt-8 text-3xl font-tangerine text-[#4b3c2e]">
//         {name}
//       </h2>

//       <p className="mt-3 text-gray-600 italic">
//         {parent}
//       </p>

//       <p className="text-gray-600 italic">
//         {family}
//       </p>

//       <button
//         className="
//         mt-8
//         rounded-full
//         bg-[#7FA39B]
//         px-6
//         py-2
//         text-white
//         hover:bg-[#688981]
//         transition
//         italic
//         "
//       >
//         Pasangan Story
//       </button>

//     </div>
//   );
// }
export default function PasanganCard({
  image,
  name,
  parent,
  family,
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl p-8">

      {/* Bunga di dalam card */}
      <BungaSection />

      {/* Konten */}
      <div className="relative z-20 text-center">
        <div className="flex justify-center">
          <img
            src={image}
            alt={name}
            className="w-44 h-56 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>

        <h2 data-aos ="fade-left" data-aos-delay="300" className="mt-8 text-5xl font-tangerine text-[#4b3c2e]">
          {name}
        </h2>

        <p className="mt-3 italic text-gray-600">{parent}</p>
        <p className="italic text-gray-600">{family}</p>

        <button className="mt-8 rounded-full bg-[#7FA39B] px-6 py-2 text-white font-serif italic">
          Instagram
        </button>
      </div>
    </div>
  );
}