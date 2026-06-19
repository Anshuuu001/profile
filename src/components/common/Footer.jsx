import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

function Footer() {

  return (

    <footer
      className="
        border-t border-white/10
        py-16
        px-6
        bg-black/30
        backdrop-blur-xl
        relative
        overflow-hidden
      "
    >

      {/* TOP GLOW */}

      <div
        className="
          absolute
          top-0 left-1/2
          -translate-x-1/2
          w-72 h-72
          bg-cyan-500/10
          blur-3xl
          rounded-full
        "
      ></div>

      <div
        className="
          max-w-7xl
          mx-auto
          relative
          z-10
        "
      >

        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-10
          "
        >

          {/* LEFT */}

          <div className="text-center md:text-left">

            <h1
              className="
                text-4xl
                font-black
                bg-gradient-to-r
                from-cyan-400
                via-purple-400
                to-pink-400
                bg-clip-text
                text-transparent
              "
            >
              ANSH
            </h1>

            <p
              className="
                text-gray-400
                mt-4
                text-lg
              "
            >
              Creator • Developer • Editor
            </p>

          </div>

          {/* SOCIAL ICONS */}

          <div
            className="
              flex
              gap-6
              text-3xl
            "
          >

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="
                hover:text-pink-400
                transition
                duration-300
                hover:scale-110
              "
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="
                hover:text-cyan-400
                transition
                duration-300
                hover:scale-110
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="
                hover:text-blue-400
                transition
                duration-300
                hover:scale-110
              "
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="
            border-t
            border-white/10
            mt-12
            pt-8
            text-center
            text-gray-500
            text-sm
          "
        >

          <p
            className="
              flex
              items-center
              justify-center
              gap-2
              flex-wrap
            "
          >
            © 2026 ANSH — Built with React, Tailwind &

            <span className="text-pink-400">
              <FaHeart />
            </span>

          </p>

        </div>

      </div>

    </footer>

  );
}

export default Footer;