function GlassCard({
  children,
  className = "",
  hover = true,
  glow = true,
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
        transition-all
        duration-500

        ${
          hover
            ? "hover:-translate-y-2 hover:scale-[1.02]"
            : ""
        }

        ${className}
      `}
    >

      {/* Glow Effect */}
      {glow && (
        <>
          <div
            className="
              absolute
              -top-20
              -left-20
              w-40
              h-40
              bg-cyan-500/20
              blur-[80px]
              rounded-full
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -right-20
              w-40
              h-40
              bg-purple-500/20
              blur-[80px]
              rounded-full
            "
          />
        </>
      )}

      {/* Border Gradient */}
      <div
        className="
          absolute
          inset-0
          rounded-3xl
          border
          border-white/5
          pointer-events-none
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}

export default GlassCard;