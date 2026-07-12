

import { DataGift, giftAddress } from "./DataGift";
import CardGift from "./CardGift";
import AddresCard from "./AddresCard";

export default function GiftSection() {
  return (
    <section className="bg-[#9EB8B0] py-20">

      <div className="mx-auto max-w-6xl px-5">

        <h2
          data-aos="fade-down"
          className="text-center text-6xl font-tangerine text-white"
        >
          Wedding Gift
        </h2>

        <p
          data-aos="fade-up"
          className="mx-auto mt-3 max-w-xl text-center text-white/90"
        >
          Doa Restu Anda merupakan hadiah terindah bagi kami.
          Namun apabila ingin memberikan tanda kasih,
          dapat melalui rekening berikut.
        </p>

        <div
          className="
            mt-12
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {DataGift.map((item) => (
            <CardGift
              key={item.id}
              {...item}
            />
          ))}

          <AddresCard {...giftAddress} />

        </div>

      </div>

    </section>
  );
}