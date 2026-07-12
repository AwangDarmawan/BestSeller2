

import CardAcara from "./CardAcara";
import { DataAcara } from "./DataAcara";

export default function AcaraSection() {
  return (
    <section className="bg-white py-16">

      <div className="mx-auto max-w-md space-y-12">
         <div
      className="mb-12 text-center "
      data-aos="fade-up"
      data-aos-duration="1000"
      
    >
      <p className="text-lg italic 
       bg-gradient-to-b
    from-[#A8C3BA]
    via-[#6FBEA5]
    to-[#68D4B7]
    bg-clip-text
    text-transparent
    drop-shadow-md font-serif">
        Save The Date
      </p>

      <h2 className="mt-2 text-6xl font-tangerine 
         bg-gradient-to-b
    from-[#A8C3BA]
    via-[#6FBEA5]
    to-[#68D4B7]
    bg-clip-text
    text-transparent
    drop-shadow-md">
        Wedding
      </h2>

      <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#9EB8B0]" />
    </div>

        {DataAcara.map((item, index) => (
          <CardAcara
            key={index}
            {...item}
          />
        ))}

      </div>

    </section>
  );
}