import { motion } from "framer-motion";

function ReelCard({ reel, onClick }) {

  return (

    <motion.div

      whileHover={{
        scale: 1.03,
        y: -10,
      }}

      transition={{
        duration: 0.4,
      }}

      onClick={onClick}

      className="
        relative
        group
        overflow-hidden
        rounded-3xl
        cursor-pointer
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        shadow-[0_0_30px_rgba(168,85,247,0.1)]
        hover:border-cyan-400/30
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          -top-24
          -right-24
          w-52
          h-52
          bg-purple-500/10
          blur-[120px]
          rounded-full
          z-0
        "
      ></div>

      {/* VIDEO / IMAGE */}

      <div
        className="
          relative
          h-[450px]
          overflow-hidden
        "
      >

        {/* VIDEO PREVIEW */}

        <video
          src={reel.video}
          autoPlay
          muted
          loop
          playsInline
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition-all
            duration-700
          "
        />

        {/* DARK OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
          "
        ></div>

        {/* CATEGORY */}

        <div
          className="
            absolute
            top-5
            left-5
            px-4
            py-2
            rounded-full
            bg-black/40
            backdrop-blur-lg
            border
            border-white/10
            text-xs
            uppercase
            tracking-[3px]
            text-cyan-400
            z-20
          "
        >
          {reel.category}
        </div>

        {/* PLAY BUTTON */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            z-10
          "
        >

          <div
            className="
              w-24
              h-24
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              flex
              items-center
              justify-center
              text-5xl
              text-white
              group-hover:scale-110
              transition-all
              duration-300
              shadow-[0_0_40px_rgba(168,85,247,0.3)]
            "
          >
            ▶
          </div>

        </div>

      </div>

      {/* CONTENT */}

      <div className="relative z-10 p-7">

        <h2
          className="
            text-2xl
            font-black
            leading-tight
          "
        >
          {reel.title}
        </h2>

        <p
          className="
            text-gray-400
            mt-4
            leading-7
          "
        >
          Cinematic editing with smooth transitions,
          velocity effects, anime sync, and
          professional motion graphics.
        </p>

        {/* BUTTON */}

        <button
          className="
            mt-6
            px-6
            py-3
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-purple-500
            hover:scale-105
            transition-all
            duration-300
            font-semibold
            shadow-[0_0_20px_rgba(168,85,247,0.4)]
          "
        >
          Watch Reel
        </button>

      </div>

    </motion.div>

  );
}

export default ReelCard;