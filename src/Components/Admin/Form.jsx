

import PropTypes from "prop-types";

const Form = ({ name, setName, handleSubmit }) => (
  <section
    className="
      w-full
      pb-10
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div className="max-w-6xl mx-auto lg:px-[330px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <p
         data-aos="fade-up"
          className="
           font-serif text-[11px] uppercase tracking-[0.35em] text-white/70
          "
          
        >
          Your Response
        </p>

        <h2
          data-aos="zoom-in"
          className="
             font-tangerine text-4xl text-white sm:text-5xl md:text-5xl lg:text-3xl xl:text-4xl
          "
        >
          Tambahkan Tamu
        </h2>

        <div className="w-20 sm:w-24 h-1  bg-white/10 mx-auto mt-4 rounded-full" />
      </div>

      {/* Form Card */}
      <div
        className="
          w-full
          max-w-xl
          mx-auto
           bg-white/10
          shadow-xl
          rounded-2xl
          p-5
          sm:p-6
          md:p-8
          
        "
      >
        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="
                block
                text-sm
                font-semibold
                text-[#3f8671]
                font-serif
                mb-2
              "
            >
              * Name
            </label>

            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Undangan"
              required
              className="
                w-full
                px-4
                py-3
                border
                border-gray-300
                rounded-lg
                outline-none
                focus:ring-2
                font-semibold
                font-playfair
                text-black
               
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
            font-serif
              bg-gradient-to-r
              from-[#3f8671]
              to-[#25c9a5]
              text-white
              py-3
              rounded-lg
              transition-all
              duration-300
              font-semibold
              hover:scale-105
                font-space
            "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
);

Form.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;