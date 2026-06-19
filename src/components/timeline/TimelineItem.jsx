import { motion } from "framer-motion";

function TimelineItem({ item, index }) {

  const isLeft = index % 2 === 0;

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 80,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{ once: true }}

      transition={{
        duration: 0.8,
      }}

      className={`
        relative
        flex
        items-center

        ${
          isLeft
            ? "md:justify-start"
            : "md:justify-end"
        }
      `}
    >

      {/* CARD */}

      <div
        className="
          relative
          w-full
          md:w-[45%]
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          p-8
          hover:-translate-y-2
          hover:border-cyan-400/30
          transition-all
          duration-500
          shadow-[0_0_30px_rgba(168,85,247,0.08)]
        "
      >

        {/* TOP GLOW */}

        <div
          className="
            absolute
            -top-16
            -right-16
            w-40
            h-40
            rounded-full
            bg-cyan-500/10
            blur-[90px]
          "
        />

        {/* BOTTOM GLOW */}

        <div
          className="
            absolute
            bottom-0
            left-0
            w-32
            h-32
            rounded-full
            bg-purple-500/10
            blur-[80px]
          "
        />

        <div className="relative z-10">

          {/* YEAR */}

          <span
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-gradient-to-r
              from-cyan-500/10
              to-purple-500/10
              border
              border-cyan-400/20
              text-cyan-300
              text-sm
              font-semibold
              tracking-[3px]
              uppercase
            "
          >
            ✦ {item.year}
          </span>

          {/* TITLE */}

          <h2
            className="
              text-3xl
              md:text-4xl
              font-black
              mt-7
              leading-tight
            "
          >
            {item.title}
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              text-gray-400
              leading-8
              mt-5
              text-lg
            "
          >
            {item.description}
          </p>

          {/* LINE */}

          <div
            className="
              w-full
              h-[1px]
              bg-gradient-to-r
              from-cyan-400/40
              via-purple-400/30
              to-transparent
              mt-8
            "
          />

          {/* FOOTER */}

          <div
            className="
              flex
              items-center
              justify-between
              mt-6
            "
          >

            <span className="text-gray-500 text-sm">
              Journey Progress
            </span>

            <span
              className="
                text-cyan-400
                font-semibold
                text-sm
              "
            >
              Completed ✓
            </span>

          </div>

        </div>

      </div>

      {/* CENTER DOT */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          hidden
          md:flex
          items-center
          justify-center
        "
      >

        <div
          className="
            absolute
            w-10
            h-10
            rounded-full
            bg-cyan-400/20
            animate-ping
          "
        />

        <div
          className="
            relative
            w-6
            h-6
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            border-4
            border-[#050816]
            shadow-[0_0_25px_rgba(34,211,238,0.8)]
          "
        />

      </div>

    </motion.div>

  );
}

export default TimelineItem;