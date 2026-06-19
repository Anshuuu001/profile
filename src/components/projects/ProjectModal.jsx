import TechStack from "./TechStack";

function ProjectModal({ project, onClose }) {

  if (!project) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-black/80
        backdrop-blur-md
        flex
        items-center
        justify-center
        px-4
      "
    >

      <div
        className="
          relative
          w-full
          max-w-4xl
          rounded-3xl
          overflow-hidden
          border
          border-white/10
          bg-[#0b1120]
        "
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="
            absolute
            top-5
            right-5
            z-20
            w-12
            h-12
            rounded-full
            bg-black/40
            backdrop-blur-lg
            text-2xl
            hover:scale-110
            transition
          "
        >
          ✕
        </button>

        {/* IMAGE */}
        <div className="h-[350px] overflow-hidden">

          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              h-full
              object-cover
            "
          />

        </div>

        {/* CONTENT */}
        <div className="p-8">

          <span
            className="
              text-cyan-400
              uppercase
              tracking-[4px]
              text-sm
            "
          >
            {project.category}
          </span>

          <h2
            className="
              text-4xl
              font-black
              mt-4
            "
          >
            {project.title}
          </h2>

          <p
            className="
              text-gray-400
              leading-8
              mt-6
            "
          >
            {project.description}
          </p>

          {/* TECH */}
          <div className="mt-8">
            <TechStack tech={project.tech} />
          </div>

          {/* BUTTONS */}
          <div className="flex gap-5 mt-10">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                px-8
                py-4
                rounded-2xl
                bg-white/5
                border
                border-white/10
                hover:border-cyan-400
                transition
              "
            >
              GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-purple-500
                font-semibold
                hover:scale-105
                transition
              "
            >
              Live Demo
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProjectModal;