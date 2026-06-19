const journeyData = [
  {
    year: "2023",
    title: "Started Content Creation",
    desc: "Started making editing videos and anime content.",
  },

  {
    year: "2024",
    title: "Learned Web Development",
    desc: "Started learning React, Node.js, and UI/UX design.",
  },

  {
    year: "2025",
    title: "Built Full Stack Projects",
    desc: "Created creator dashboards, portfolio systems, and APIs.",
  },

  {
    year: "2026",
    title: "Building Creator Brand",
    desc: "Growing social platforms and creating cinematic experiences.",
  },
];

function Journey() {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 hover:scale-[1.01] transition duration-300">

      <h2 className="text-2xl font-bold mb-8 text-purple-400">
        My Journey
      </h2>

      <div className="space-y-8">

        {journeyData.map((item, index) => (
          <div
            key={index}
            className="relative border-l border-cyan-500 pl-6"
          >

            <div className="absolute w-3 h-3 rounded-full bg-cyan-400 -left-[6px] top-1" />

            <h3 className="text-lg font-semibold">
              {item.year} — {item.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Journey;