import { motion } from "framer-motion";

function SkillCard({
  icon,
  title,
  level,
  desc,
}) {

  const progressWidth = {
    Beginner: "40%",
    Learning: "55%",
    Intermediate: "70%",
    Advanced: "85%",
    Professional: "95%",
    Creative: "90%",
  };

  return (

    <motion.div

      whileHover={{
        scale: 1.04,
        y: -10,
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
        hover:border-cyan-400/30
        transition-all
        duration-500
        shadow-[0_0_30px_rgba(168,85,247,0.08)]
      "
    >

      {/* BACKGROUND GLOW */}

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
      ></div>

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
      ></div>

      {/* CONTENT */}

      <div className="relative z-10">

        {/* TOP */}

        <div className="flex justify-between items-start">

          {/* ICON */}

          <div
            className="
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-br
              from-cyan-500/20
              to-purple-500/20
              border
              border-white/10
              flex
              items-center
              justify-center
              text-4xl
              text-cyan-400
              shadow-[0_0_25px_rgba(34,211,238,0.15)]
            "
          >
            {icon}
          </div>

          {/* LEVEL */}

          <span
            className="
              px-4
              py-2
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-400/20
              text-cyan-400
              text-sm
              font-bold
            "
          >
            {level}
          </span>

        </div>

        {/* TITLE */}

        <h2
          className="
            text-3xl
            font-black
            mt-8
          "
        >
          {title}
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            text-gray-400
            leading-7
            mt-5
          "
        >
          {desc}
        </p>

        {/* PROGRESS BAR */}

        <div className="mt-8">

          <div
            className="
              flex
              justify-between
              text-sm
              text-gray-400
              mb-3
            "
          >

            <span>Skill Progress</span>

            <span>
              {progressWidth[level]}
            </span>

          </div>

          <div
            className="
              w-full
              h-3
              rounded-full
              bg-white/10
              overflow-hidden
            "
          >

            <motion.div

              initial={{
                width: 0,
              }}

              whileInView={{
                width: progressWidth[level],
              }}

              transition={{
                duration: 1,
              }}

              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-purple-400
                to-pink-500
                shadow-[0_0_20px_rgba(168,85,247,0.5)]
              "

            />

          </div>

        </div>

      </div>

    </motion.div>

  );
}

export default SkillCard;