const learning = [
  "Advanced React",
  "Node.js APIs",
  "GSAP Animations",
  "Three.js",
  "MongoDB",
  "UI/UX Design",
  "Cinematic Editing",
  "Motion Graphics",
];

function CurrentLearning() {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 hover:scale-[1.01] transition duration-300">

      <h2 className="text-2xl font-bold mb-6 text-pink-400">
        Currently Learning
      </h2>

      <div className="flex flex-wrap gap-4">

        {learning.map((item, index) => (
          <div
            key={index}
            className="
              px-4 py-2
              rounded-full
              bg-gradient-to-r
              from-cyan-500/20
              to-purple-500/20
              border border-white/10
              text-sm
              hover:scale-105
              transition
            "
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}

export default CurrentLearning;