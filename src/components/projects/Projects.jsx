import { useState } from "react";

import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function Projects() {

  const projects = [

    {
      title: "Anime Streaming App",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80",

      description:
        "Modern anime streaming platform with authentication, dashboard, dark UI, and responsive experience.",

      tech: ["React", "Node.js", "MongoDB"],

      github: "#",
      live: "#",
    },

    {
      title: "Creator Portfolio",
      category: "Portfolio",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",

      description:
        "3D cinematic portfolio website with futuristic animations, dashboard analytics, and glassmorphism UI.",

      tech: ["React", "Tailwind", "GSAP"],

      github: "#",
      live: "#",
    },

    {
      title: "Realtime Chat App",
      category: "Realtime",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop&q=80",

      description:
        "Realtime chat application with socket connection, authentication, typing status, and modern interface.",

      tech: ["Socket.io", "Express", "React"],

      github: "#",
      live: "#",
    },

    {
      title: "AI Voice Assistant",
      category: "AI",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&auto=format&fit=crop&q=80",

      description:
        "Voice-controlled assistant app using speech recognition, AI automation, and Android integration.",

      tech: ["Java", "Android", "Firebase"],

      github: "#",
      live: "#",
    },

    {
      title: "Cyberpunk Dashboard",
      category: "Dashboard",
      image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=800&auto=format&fit=crop&q=80",

      description:
        "Interactive creator dashboard with charts, animations, analytics, and futuristic UI design.",

      tech: ["React", "Framer Motion", "Tailwind"],

      github: "#",
      live: "#",
    },

    {
      title: "E-Commerce Website",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",

      description:
        "Modern e-commerce platform with product filtering, cart system, payment flow, and admin panel.",

      tech: ["MERN Stack", "Redux", "Stripe"],

      github: "#",
      live: "#",
    },

  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (

    <section
      id="projects"
      className="
        relative
        px-6
        md:px-16
        py-32
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-cyan-500/10
          blur-[150px]
          rounded-full
        "
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TITLE */}

        <SectionTitle
          title="Featured Projects"
          subtitle="Creative • Futuristic • Full Stack"
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
          Explore futuristic full-stack applications,
          cinematic portfolio designs, AI-powered tools,
          creator dashboards, and modern React experiences
          crafted with creativity and performance.
        </p>

        {/* PROJECT GRID */}

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            mt-20
          "
        >

          {projects.map((project, index) => (

            <ProjectCard

              key={index}

              project={project}

              onClick={() =>
                setSelectedProject(project)
              }

            />

          ))}

        </div>

      </div>

      {/* PROJECT MODAL */}

      <ProjectModal
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />

    </section>

  );
}

export default Projects;