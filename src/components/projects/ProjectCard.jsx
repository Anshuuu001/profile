import { motion } from "framer-motion";

import TechStack from "./TechStack";

function ProjectCard({ project, onClick }) {

  return (

    <motion.div

      whileHover={{
        scale: 1.03,
        y: -10,
        rotateY: 5,
      }}

      transition={{
        duration: 0.4,
      }}

      onClick={onClick}

      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        cursor-pointer
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        hover:border-cyan-400/30
        transition-all
        duration-500
        shadow-[0_0_30px_rgba(168,85,247,0.1)]
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
          bg-cyan-500/10
          blur-[120px]
          rounded-full
          z-0
        "
      ></div>

      {/* IMAGE */}

      <div
        className="
          relative
          h-[260px]
          overflow-hidden
        "
      >

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition-all
            duration-700
          "
        />

        {/* OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/30
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
          {project.category}
        </div>

      </div>

      {/* CONTENT */}

      <div className="relative z-10 p-7">

        {/* TITLE */}

        <h2
          className="
            text-3xl
            font-black
            leading-tight
          "
        >
          {project.title}
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            text-gray-400
            leading-7
            mt-4
          "
        >
          {project.description}
        </p>

        {/* TECH STACK */}

        <div className="mt-6">

          <TechStack tech={project.tech} />

        </div>

        {/* BUTTONS */}

        <div
          className="
            flex
            gap-4
            mt-8
          "
        >

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              px-5
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
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              px-5
              py-3
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              hover:border-purple-500/40
              hover:bg-purple-500/10
              transition-all
              duration-300
              font-semibold
            "
          >
            GitHub
          </a>

        </div>

      </div>

    </motion.div>

  );
}

export default ProjectCard;