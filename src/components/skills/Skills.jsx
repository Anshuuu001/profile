import SectionTitle from "../common/SectionTitle";
import SkillCard from "./SkillCard";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
  FaVideo,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";

function Skills() {

  const skills = [

    {
      icon: <FaReact />,
      title: "React",
      level: "Learning",
      desc: "Learning modern React apps with reusable components and animations.",
    },

    {
      icon: <FaJs />,
      title: "JavaScript",
      level: "Learning",
      desc: "Learning interactive frontend logic and dynamic web experiences.",
    },

    {
      icon: <FaHtml5 />,
      title: "HTML5",
      level: "Learning",
      desc: "Learning semantic structure and responsive modern layouts.",
    },

    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      level: "Learning",
      desc: "Learning glassmorphism, gradients, responsive UI, and animations.",
    },

    {
      icon: <FaNodeJs />,
      title: "Node.js",
      level: "Learning",
      desc: "Learning backend APIs, authentication systems, and database integrations.",
    },

    {
      icon: <FaDatabase />,
      title: "MongoDB",
      level: "Learning",
      desc: "Learning database management for MERN stack applications.",
    },

    {
      icon: <FaFigma />,
      title: "UI/UX Design",
      level: "Learning",
      desc: "Learning futuristic UI concepts and clean user experiences.",
    },

    {
      icon: <FaVideo />,
      title: "Video Editing",
      level: "Intermediate",
      desc: "Creating anime AMVs, cinematic edits, reels, and motion graphics.",
    },

    {
      icon: <FaGithub />,
      title: "GitHub",
      level: "Learning",
      desc: "Learning version control and project collaboration workflows.",
    },

    {
      icon: <FaMobileAlt />,
      title: "Android Dev",
      level: "Learning",
      desc: "Learning Java-based Android apps and AI assistant projects.",
    },

  ];

  return (

    <section
      id="skills"
      className="
        relative
        py-32
        px-6
        md:px-16
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[600px]
          h-[600px]
          rounded-full
          bg-purple-500/10
          blur-[140px]
        "
      ></div>

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TITLE */}

        <SectionTitle
          title="Skills & Tech"
          subtitle="Development • Editing • Creativity"
        />

        {/* DESCRIPTION */}

        <p
          className="
            text-center
            text-gray-400
            mt-6
            max-w-3xl
            mx-auto
            text-lg
            leading-8
          "
        >
          Combining frontend development, cinematic editing,
          motion graphics, and creative design to build
          futuristic digital experiences for modern creators.
        </p>

        {/* SKILLS GRID */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
            gap-8
            mt-20
          "
        >

          {skills.map((skill, index) => (

            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              level={skill.level}
              desc={skill.desc}
            />

          ))}

        </div>

      </div>

    </section>

  );
}

export default Skills;