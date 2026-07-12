import PropTypes from "prop-types";
import iconbunga from "../../assets/IMG/Flower3.png";


export default function Bunga({
  position,
  rotate = "normal",
  size = "w-[200px] sm:w-[100px] md:w-[300px] lg:w-[400px] xl:w-[200px] 2xl:w-[400px]",
 
  opacity = "opacity-90",
}) {
  return (
    <img
     data-aos="zoom-in"
           data-aos-delay="300"
      src={iconbunga}
      alt=""
      aria-hidden="true"
      draggable={false}
      loading="eager"
      decoding="async"
      className={`
        absolute
        pointer-events-none
        select-none
        z-0
        
        ${position}
        ${size}
        ${opacity}
        ${
          rotate === "reverse"
            ? "animate-mandala-reverse"
            : "animate-mandala"
        }
      `}
    />
  );
}

Bunga.propTypes = {
  position: PropTypes.string.isRequired,
  rotate: PropTypes.oneOf(["normal", "reverse"]),
  size: PropTypes.string,
  opacity: PropTypes.string,
};