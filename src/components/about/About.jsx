import { motion } from "framer-motion";

import SectionTitle from "../common/SectionTitle";
import Story from "./Story";
import Journey from "./Journey";
import CurrentLearning from "./CurrentLearning";
import PersonalDetails from "./PersonalDetails";

function About() {

  return (

    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div
        className="absolute top-0 left-0
        w-72 h-72 bg-purple-500/10
        blur-3xl rounded-full"
      />

      <div
        className="absolute bottom-0 right-0
        w-72 h-72 bg-cyan-500/10
        blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <SectionTitle
          title="About Me"
          subtitle="Creator • Developer • Editor"
        />

        <div
          className="mt-20
          grid lg:grid-cols-2 gap-16 items-start"
        >

          {/* LEFT SIDE */}

          <motion.div

            initial={{ opacity:0,x:-100 }}
            whileInView={{ opacity:1,x:0 }}

            transition={{ duration:1 }}

            className="space-y-8"
          >

            {/* IMAGE */}

            <div className="flex justify-center">

              <div
                className="relative
                w-[350px] h-[450px]
                rounded-3xl overflow-hidden
                border border-purple-500/30
                bg-white/5 backdrop-blur-xl
                shadow-2xl"
              >

                <img
                  src="/stand.jpg"
                  alt="Ansh Bansod"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />

              </div>

            </div>

            {/* STORY CARD */}
            <Story />

            {/* PERSONAL DETAILS CARD */}
            <PersonalDetails />

            {/* CURRENT LEARNING CARD */}
            <CurrentLearning />

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div

            initial={{ opacity:0,x:100 }}
            whileInView={{ opacity:1,x:0 }}

            transition={{ duration:1 }}

            className="space-y-8"
          >

            {/* ABOUT TEXT */}

            <div
              className="p-8 rounded-3xl
              bg-white/5 backdrop-blur-xl
              border border-white/10"
            >

              <p
                className="uppercase tracking-[5px]
                text-purple-400"
              >
                About Me
              </p>

              <h1
                className="text-5xl font-black
                mt-5"
              >
                Creator + Developer
              </h1>

              <p
                className="mt-8 text-gray-400
                leading-relaxed text-lg"
              >
                I am a creative developer and video editor
                passionate about futuristic UI design,
                cinematic editing and modern web experiences.
              </p>

              <p
                className="mt-5 text-gray-400
                leading-relaxed text-lg"
              >
                Currently learning advanced React,
                animations, backend development,
                motion graphics and 3D web experiences.
              </p>

              {/* STATS */}

              <div
                className="mt-10 grid grid-cols-2 gap-5"
              >

                <div
                  className="p-5 rounded-2xl
                  bg-black/30 border border-white/10"
                >

                  <h2
                    className="text-3xl font-black
                    text-purple-400"
                  >
                    1+
                  </h2>

                  <p className="mt-2 text-gray-400">
                    Years Editing
                  </p>

                </div>

                <div
                  className="p-5 rounded-2xl
                  bg-black/30 border border-white/10"
                >

                  <h2
                    className="text-3xl font-black
                    text-purple-400"
                  >
                    10+
                  </h2>

                  <p className="mt-2 text-gray-400">
                    Projects Built
                  </p>

                </div>

              </div>

            </div>

            {/* JOURNEY */}
            <Journey />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;