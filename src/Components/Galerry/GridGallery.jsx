
import { DataGallery } from "./DataGallery";
import CardGallery from "./CardGallery";

export default function GridGallery() {
  return (
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      "
    >
      {DataGallery.map((item) => (
        <CardGallery
          key={item.id}
          image={item.image}
        />
      ))}
    </div>
  );
}