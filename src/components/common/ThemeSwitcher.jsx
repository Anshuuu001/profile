import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {
  FaMoon,
  FaSun,
  FaPalette,
} from "react-icons/fa";

function ThemeSwitcher() {

  const { theme, setTheme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const dark = theme !== "light";

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (

    <div
      className="
        fixed
        right-5
        top-1/2
        -translate-y-1/2
        z-50
        flex
        flex-col
        items-center
        gap-4
      "
    >

      {/* MAIN BUTTON */}

      <button

        onClick={() => setOpen(!open)}

        className="
          w-14
          h-14
          rounded-full
          bg-black/40
          border border-white/10
          backdrop-blur-xl
          flex
          items-center
          justify-center
          text-white
          text-xl
          hover:scale-110
          transition-all
          duration-300
          shadow-[0_0_20px_rgba(168,85,247,0.3)]
        "
      >

        <FaPalette />

      </button>

      {/* THEME COLORS */}

      {open && (

        <div
          className="
            flex
            flex-col
            gap-4
            p-4
            rounded-3xl
            bg-black/40
            border
            border-white/10
            backdrop-blur-xl
            animate-fadeIn
          "
        >

          {/* CYBERPUNK */}

          <button

            onClick={() => setTheme("cyberpunk")}

            className="
              w-12
              h-12
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              hover:scale-110
              transition
              shadow-[0_0_20px_rgba(34,211,238,0.6)]
            "
          />

          {/* ANIME */}

          <button

            onClick={() => setTheme("anime")}

            className="
              w-12
              h-12
              rounded-full
              bg-gradient-to-r
              from-pink-500
              to-red-500
              hover:scale-110
              transition
              shadow-[0_0_20px_rgba(236,72,153,0.6)]
            "
          />

          {/* MINIMAL */}

          <button

            onClick={() => setTheme("minimal")}

            className="
              w-12
              h-12
              rounded-full
              bg-gradient-to-r
              from-gray-200
              to-white
              hover:scale-110
              transition
              shadow-[0_0_20px_rgba(255,255,255,0.4)]
            "
          />

        </div>

      )}

      {/* DARK/LIGHT BUTTON */}

      <button

        onClick={toggleTheme}

        className="
          w-14
          h-14
          rounded-full
          bg-black/40
          border border-white/10
          backdrop-blur-xl
          flex
          items-center
          justify-center
          text-xl
          text-yellow-300
          hover:scale-110
          transition-all
          duration-300
        "
      >

        {dark ? <FaMoon /> : <FaSun />}

      </button>

    </div>

  );
}

export default ThemeSwitcher;