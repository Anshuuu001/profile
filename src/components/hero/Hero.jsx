import { motion } from "framer-motion";

import Hero3D from "./Hero3D";
import TypingAnimation from "./TypingAnimation";
import FloatingIcons from "./FloatingIcons";
import SocialIcons from "./SocialIcons";
import GlowButton from "../common/GlowButton";

function Hero() {

  return (

    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        px-6
        md:px-16
        pt-24
      "
    >

      {/* BACKGROUND LIGHTS */}

      <div
        className="
          absolute
          top-20
          left-10
          w-72
          h-72
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      ></div>

      <div
        className="
          absolute
          bottom-10
          right-10
          w-72
          h-72
          rounded-full
          bg-purple-500/10
          blur-[140px]
        "
      ></div>

      {/* FLOATING ICONS */}

      <FloatingIcons />

      {/* MAIN CONTAINER */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          gap-20
          items-center
          w-full
        "
      >

        {/* LEFT SIDE */}

        <motion.div

          initial={{
            opacity: 0,
            x: -100,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="max-w-3xl"

        >

          {/* TOP TEXT */}

          <p
            className="
              uppercase
              tracking-[6px]
              text-cyan-400
              text-sm
              mb-6
            "
          >
            Creator • Developer • Editor
          </p>

          {/* MAIN TITLE */}

          <h1
            className="
              text-6xl
              md:text-8xl
              font-black
              leading-none
            "
          >

            Hi, I'm{" "}

            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-purple-400
                to-pink-400
                bg-clip-text
                text-transparent
              "
            >
              ANSH
            </span>

          </h1>

          {/* TYPING */}

          <div className="mt-8">

            <TypingAnimation />

          </div>

          {/* DESCRIPTION */}

          <p
            className="
              text-gray-400
              text-lg
              leading-8
              mt-8
              max-w-2xl
            "
          >
            I build futuristic digital experiences,
            create cinematic anime edits,
            develop modern React applications,
            and design visually immersive content
            for creators and brands.
          </p>

          {/* BUTTONS */}

          <div
            className="
              flex
              flex-wrap
              gap-5
              mt-12
            "
          >

            <GlowButton
              text="View Projects 🚀"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            />

            <a
              href="#contact"
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                hover:scale-105
                hover:border-purple-500/40
                transition-all
                duration-300
              "
            >
              Hire Me
            </a>

          </div>

          {/* SOCIAL ICONS */}

          <div className="mt-14">

            <SocialIcons />

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div

          initial={{
            opacity: 0,
            x: 100,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="
            relative
            flex
            justify-center
            items-center
          "

        >

          {/* HERO 3D */}

          <Hero3D />

          {/* EXTRA GLOW */}

          <div
            className="
              absolute
              w-[400px]
              h-[400px]
              rounded-full
              bg-purple-500/10
              blur-[120px]
              -z-10
            "
          ></div>

        </motion.div>

      </div>

    </section>

  );
}

export default Hero;