import { motion } from "framer-motion";
import TiltEffect from "./TiltEffect";

function DashboardCard({
  title,
  value,
  icon,
  growth,
  desc,
  onClick,
}) {

  return (

    <TiltEffect>

      <motion.div

        whileHover={{
          y: -10,
          scale: 1.03,
        }}

        transition={{
          duration: 0.3,
        }}

        onClick={onClick}

        className="
          relative
          overflow-hidden
          cursor-pointer
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          p-8
          hover:border-cyan-400/30
          transition-all
          duration-500
          shadow-[0_0_30px_rgba(168,85,247,0.1)]
        "
      >

        {/* GLOW EFFECT */}

        <div
          className="
            absolute
            -top-24
            -right-24
            w-52
            h-52
            bg-cyan-500/10
            blur-[120px]
            rounded-full
          "
        ></div>

        <div
          className="
            absolute
            bottom-[-80px]
            left-[-80px]
            w-44
            h-44
            bg-purple-500/10
            blur-[100px]
            rounded-full
          "
        ></div>

        {/* CONTENT */}

        <div className="relative z-10">

          {/* TOP */}

          <div className="flex justify-between items-start">

            <div>

              <p
                className="
                  text-gray-400
                  text-sm
                  uppercase
                  tracking-widest
                "
              >
                {title}
              </p>

              <h2
                className="
                  text-4xl
                  md:text-5xl
                  font-black
                  mt-3
                "
              >
                {value}
              </h2>

            </div>

            {/* ICON */}

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500/20
                to-purple-500/20
                border
                border-white/10
                flex
                items-center
                justify-center
                text-3xl
                text-cyan-400
                shadow-[0_0_20px_rgba(34,211,238,0.2)]
              "
            >
              {icon}
            </div>

          </div>

          {/* DESCRIPTION */}

          {desc && (

            <p
              className="
                text-gray-400
                mt-6
                leading-relaxed
              "
            >
              {desc}
            </p>

          )}

          {/* GROWTH */}

          {growth && (

            <div className="mt-6">

              <span
                className="
                  text-green-400
                  text-sm
                  font-semibold
                "
              >
                +{growth}%
              </span>

              <span className="text-gray-500 ml-2">
                this month
              </span>

            </div>

          )}

        </div>

      </motion.div>

    </TiltEffect>

  );
}

export default DashboardCard;