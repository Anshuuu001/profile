const icons = [
  "💻",
  "🎬",
  "⚡",
  "🔥",
  "🎨",
  "🚀",
];

const floatingPositions = icons.map((icon, index) => ({
  icon,
  top: `${Math.random() * 90}%`,
  left: `${Math.random() * 90}%`,
  animationDuration: `${3 + index}s`,
}));

function FloatingIcons() {
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
            text-4xl
            animate-bounce
            opacity-20
          "
          style={{
            top: item.top,
            left: item.left,
            animationDuration: item.animationDuration,
          }}
        >
          {item.icon}
        </div>
      ))}

    </div>
  );
}

export default FloatingIcons;