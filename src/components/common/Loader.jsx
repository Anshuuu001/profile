import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (!loading) return null;

  return (

    <div
      className="
        fixed inset-0
        z-[9999]
        bg-[#050816]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          bg-cyan-500/10
          blur-3xl
          rounded-full
        "
      ></div>

      <div
        className="
          relative
          flex
          flex-col
          items-center
          justify-center
        "
      >

        {/* SPINNER */}

        <motion.div

          animate={{ rotate: 360 }}

          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}

          className="
            w-28
            h-28
            rounded-full
            border-4
            border-cyan-400
            border-t-transparent
            absolute
          "
        />

        {/* LOGO */}

        <motion.h1

          initial={{ scale: 0.8, opacity: 0 }}

          animate={{
            scale: [1, 1.08, 1],
            opacity: 1,
          }}

          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}

          className="
            text-6xl
            font-black
            bg-gradient-to-r
            from-cyan-400
            via-purple-400
            to-pink-400
            bg-clip-text
            text-transparent
            z-10
          "
        >
          ANSH
        </motion.h1>

        {/* LOADING BAR */}

        <div
          className="
            w-64
            h-2
            mt-16
            bg-white/10
            rounded-full
            overflow-hidden
            backdrop-blur-md
          "
        >

          <motion.div

            initial={{ width: "0%" }}

            animate={{ width: "100%" }}

            transition={{
              duration: 2.3,
              ease: "easeInOut",
            }}

            className="
              h-full
              bg-gradient-to-r
              from-cyan-400
              via-purple-400
              to-pink-400
            "
          />

        </div>

        {/* TEXT */}

        <p
          className="
            text-gray-400
            mt-6
            tracking-[4px]
            uppercase
            text-sm
          "
        >
          Loading Portfolio...
        </p>

      </div>

    </div>

  );
}

export default Loader;