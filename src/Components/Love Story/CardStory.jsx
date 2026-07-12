import { FaHeart } from "react-icons/fa";

export default function CardStory({ story, reverse }) {
  return (
    <div>

      <div
        className={`
          flex
          flex-col
          md:flex-row
          items-center
          gap-8
          ${reverse ? "md:flex-row-reverse" : ""}
        `}
      >
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          data-aos="zoom-in"
          className="
            h-60
            w-full
            md:w-60
            rounded-2xl
            object-cover
            shadow-lg
          "
        />

        <div
          data-aos="fade-up"
          className={`
            flex-1
            text-center
            ${reverse ? "md:text-right" : "md:text-left"}
          `}
        >
          <h3 className="text-4xl font-tangerine text-[#36554C]">
            {story.title}
          </h3>

          <p className="mt-2 text-sm font-semibold font-serif text-[#7FA39B]">
            {story.date}
          </p>

          <p className="mt-4 leading-8 text-gray-700 font-serif">
            {story.description}
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-center">
        <div className="h-px flex-1 bg-gray-300"></div>

        <FaHeart className="mx-4 text-[#7FA39B] animate-pulse" />

        <div className="h-px flex-1 bg-gray-300"></div>
      </div>

    </div>
  );
}