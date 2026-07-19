import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

export default function Cover() {
  const navigate = useNavigate();
  const { nama } = useParams();

  const handleOpen = () => {
    navigate("/home");
       localStorage.setItem("playMusic", "true");

  };

  return (
    <section
      className="
        relative
        overflow-hidden
        h-screen
        w-full
        lg:max-w-[430px]
        lg:mx-auto
       
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 " />

      {/* Gradient */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[300px]
          z-0
          bg-gradient-to-t
          from-[#A9C9BE]
          via-[#A9C9BE]/60
          to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          absolute
          inset-x-0
          bottom-16
          z-20
          flex
          justify-center
          px-6
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full text-center text-white"
        >
          <p className="text-sm italic  font-bold">
            The Wedding of
          </p>

          <h1
          data-aos="fade-right"
          data-aos-delay="200"
            className="
              mt-2
              font-tangerine
              text-5xl
              sm:text-6xl
              drop-shadow-lg
              font-bold
            "
          >
            Aditya & Mida
          </h1>

          <p className="mt-7 text-sm">
            Kepada Yth:
          </p>

          <h2   data-aos="fade-right"
          data-aos-delay="300" 
          className=" mt-2 text-xl font-bold">
            {nama}
          </h2>

          <button
            onClick={handleOpen}
            className="
              mt-5
              rounded-full
              bg-[#7FAF9C]
              px-8
              py-2
              font-semibold
              italic
              text-white
              shadow-xl
              transition
              hover:scale-105
              border
            "
          >
            Buka Undangan
          </button>
        </motion.div>
      </div>
    </section>
  );
}