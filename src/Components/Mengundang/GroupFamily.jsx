import { FaHeart } from "react-icons/fa";

import CardFamily from "./CardFamily";

export default function GroupFamily({
  title,
  data,
}) {
  return (
    <div data-aos="fade-up">

      <div className="mb-8 text-center">

        <FaHeart className="mx-auto mb-3 text-[#7FA39B]" />

        <h3 className="text-4xl font-tangerine text-[#36554C]">
          {title}
        </h3>

      </div>

      <div className="space-y-5">
        {data.map((item) => (
          <CardFamily
            key={item.id}
            {...item}
          />
        ))}
      </div>

    </div>
  );
}