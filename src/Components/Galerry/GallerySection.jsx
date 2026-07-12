
import GridGallery from "./GridGallery";
import TitleGallery from "./TitleGallery";

export default function GallerySection() {
  return (
    <section className="bg-[#9EB8B0] py-20">
      <div className="mx-auto max-w-7xl px-5">

        <TitleGallery />

        <GridGallery />

      </div>
    </section>
  );
}