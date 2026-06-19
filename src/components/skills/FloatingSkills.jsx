const floatingItems = [
  "React",
  "Node",
  "MongoDB",
  "GSAP",
  "Tailwind",
  "Editing",
  "Anime",
  "UI/UX",
];

const floatingPositions = floatingItems.map((item, index) => ({
  item,
  top: `${Math.random() * 90}%`,
  left: `${Math.random() * 90}%`,
  animationDuration: `${3 + index}s`,
}));

function FloatingSkills() {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
    >

      {floatingPositions.map((item, index) => (
        <div
          key={index}
          className="
            absolute
            px-5
            py-2
            rounded-full
            bg-white/5
            border
            border-white/10
            text-sm
            text-cyan-300
            animate-bounce
            backdrop-blur-xl
          "
          style={{
            top: item.top,
            left: item.left,
            animationDuration: item.animationDuration,
          }}
        >
          {item.item}
        </div>
      ))}

    </div>
  );
}

export default FloatingSkills;