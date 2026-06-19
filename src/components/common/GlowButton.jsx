function GlowButton({
  text = "Click Me",
  onClick,
  className = "",
  icon,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        overflow-hidden
        px-8
        py-4
        rounded-2xl
        font-bold
        text-white
        bg-gradient-to-r
        from-cyan-500
        via-purple-500
        to-pink-500

        shadow-lg
        shadow-cyan-500/20

        transition-all
        duration-300

        hover:scale-105
        hover:shadow-cyan-500/40

        active:scale-95

        ${className}
      `}
    >

      {/* Animated Glow */}
      <div
        className="
          absolute
          inset-0
          bg-white/10
          opacity-0
          hover:opacity-100
          transition
          duration-300
        "
      />

      {/* Shine Animation */}
      <div
        className="
          absolute
          top-0
          left-[-100%]
          w-full
          h-full
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent

          skew-x-12

          hover:left-[100%]

          transition-all
          duration-1000
        "
      />

      {/* Button Content */}
      <span
        className="
          relative
          z-10
          flex
          items-center
          gap-2
        "
      >
        {icon && <span>{icon}</span>}
        {text}
      </span>

    </button>
  );
}

export default GlowButton;