
import CardStory from "./CardStory";
import { DataStory } from "./DataStory";


export default function StorySection() {
  return (
    <section className="bg-[#9EB8B0] py-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-2xl md:p-10">

        <h2
          className="
            text-center
            text-5xl
            md:text-6xl
            font-tangerine
            text-[#36554C]
            mb-12
          "
          data-aos="fade-down"
        >
          Love Story
        </h2>

        <div className="space-y-16">
          {DataStory.map((story, index) => (
            <CardStory
              key={story.id}
              story={story}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}