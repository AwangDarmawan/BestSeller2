export default function CardGallery({ image }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="800"
      className="group overflow-hidden rounded-2xl shadow-xl"
    >
      <img
        src={image}
        alt="Wedding Gallery"
        loading="lazy"
        className="
          h-48
          w-full
          object-cover
          transition-all
          duration-500
          group-hover:scale-110
         
        "
      />
    </div>
  );
}