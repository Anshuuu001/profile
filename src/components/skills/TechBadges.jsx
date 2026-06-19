const techs = [
  "React",
  "Vite",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "Three.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Java",
  "Android",
];

function TechBadges() {
  return (
    <div
      className="
        flex
        flex-wrap
        justify-center
        gap-5
      "
    >

      {techs.map((tech, index) => (
        <div
          key={index}
          className="
            px-6
            py-3
            rounded-2xl
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            text-gray-200
            hover:border-cyan-400
            hover:scale-105
            transition-all
            duration-300
          "
        >
          {tech}
        </div>
      ))}

    </div>
  );
}

export default TechBadges;