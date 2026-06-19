import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Analytics",
  "Contact",
];

function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <motion.nav

      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}

      className={`
        fixed top-0 left-0
        w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }
      `}
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-5
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}

        <h1
          className="
            text-3xl
            font-black
            bg-gradient-to-r
            from-cyan-400
            via-purple-400
            to-pink-400
            bg-clip-text
            text-transparent
            tracking-wide
          "
        >
          ANSH
        </h1>

        {/* DESKTOP MENU */}

        <ul className="hidden md:flex gap-10">

          {navItems.map((item, index) => (

            <li key={index}>

              <a
                href={`#${item.toLowerCase()}`}
                className="
                  text-gray-300
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  font-medium
                  relative
                  group
                "
              >

                {item}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    w-0
                    h-[2px]
                    bg-cyan-400
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                ></span>

              </a>

            </li>

          ))}

        </ul>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-2xl
            text-white
          "
        >

          {open ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* MOBILE MENU */}

      {open && (

        <motion.div

          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}

          className="
            md:hidden
            bg-black/90
            backdrop-blur-xl
            border-t
            border-white/10
          "
        >

          <ul
            className="
              flex
              flex-col
              items-center
              gap-8
              py-10
            "
          >

            {navItems.map((item, index) => (

              <li key={index}>

                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="
                    text-xl
                    text-gray-300
                    hover:text-cyan-400
                    transition
                  "
                >
                  {item}
                </a>

              </li>

            ))}

          </ul>

        </motion.div>

      )}

    </motion.nav>
  );
}

export default Navbar;