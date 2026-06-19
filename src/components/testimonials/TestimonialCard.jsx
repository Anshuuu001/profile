import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

function TestimonialCard({ testimonial }) {

  return (

    <motion.div

      whileHover={{
        y: -10,
        scale: 1.03,
      }}

      transition={{
        duration: 0.4,
      }}

      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-8
        min-h-[340px]
        hover:border-cyan-400/30
        transition-all
        duration-500
        shadow-[0_0_30px_rgba(168,85,247,0.08)]
      "
    >

      {/* GLOW */}

      <div
        className="
          absolute
          -top-20
          -right-20
          w-52
          h-52
          bg-cyan-500/10
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-40
          h-40
          bg-purple-500/10
          blur-[100px]
          rounded-full
        "
      />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* TOP */}

        <div className="flex justify-between items-start">

          <FaQuoteLeft
            className="
              text-5xl
              text-cyan-400/30
            "
          />

          <div className="flex gap-1 text-yellow-400">

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

          </div>

        </div>

        {/* REVIEW */}

        <p
          className="
            text-gray-300
            leading-8
            text-lg
            mt-8
          "
        >
          {testimonial.message}
        </p>

        {/* USER */}

        <div
          className="
            flex
            items-center
            gap-4
            mt-12
          "
        >

          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="
              w-16
              h-16
              rounded-full
              object-cover
              border
              border-cyan-400/30
            "
          />

          <div>

            <h3
              className="
                text-2xl
                font-black
              "
            >
              {testimonial.name}
            </h3>

            <p
              className="
                text-cyan-400
                text-sm
                mt-1
              "
            >
              {testimonial.role}
            </p>

          </div>

        </div>

      </div>

    </motion.div>

  );
}

export default TestimonialCard;