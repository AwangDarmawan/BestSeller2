export default function CardFamily({ title, name }) {
  return (
    <div
      data-aos="fade-up"
      className="
      rounded-2xl
      bg-white
      border
      border-[#E7EFEA]
      p-6
      shadow-md
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      <p className="uppercase tracking-[4px] text-xs text-[#7FA39B]">
        {title}
      </p>

      <h3 className="mt-3 text-xl font-serif text-[#36554C] font-semibold">
        {name}
      </h3>
    </div>
  );
}