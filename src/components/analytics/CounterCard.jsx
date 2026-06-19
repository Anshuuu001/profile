import { motion } from "framer-motion";

function CounterCard({ title, value, icon }) {

  return (

    <motion.div

      whileHover={{
        scale: 1.05,
        y: -10
      }}

      transition={{
        type: "spring",
        stiffness: 200
      }}

      className="
      relative overflow-hidden
      bg-white/5
      border border-white/10
      backdrop-blur-xl
      rounded-3xl
      p-6
      shadow-xl
      group
      "

    >

      {/* GLOW EFFECT */}

      <div
        className="
        absolute inset-0
        bg-gradient-to-r
        from-cyan-500/10
        to-purple-500/10
        opacity-0
        group-hover:opacity-100
        transition duration-500
        "
      />

      {/* BORDER GLOW */}

      <div
        className="
        absolute -top-10 -right-10
        w-32 h-32
        bg-purple-500/20
        blur-3xl
        rounded-full
        "
      />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* ICON */}

        {icon && (

          <div
            className="
            text-5xl mb-5
            text-purple-400
            "
          >
            {icon}
          </div>

        )}

        {/* TITLE */}

        <h3
          className="
          text-gray-400
          text-sm tracking-wide
          uppercase
          "
        >
          {title}
        </h3>

        {/* VALUE */}

        <h1
          className="
          text-4xl font-black
          mt-3
          "
        >
          {value}
        </h1>

      </div>

    </motion.div>
  );
}

export default CounterCard;