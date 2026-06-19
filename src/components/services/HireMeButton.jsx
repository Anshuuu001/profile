function HireMeButton() {
  return (
    <a
      href="#contact"
      className="
        relative
        overflow-hidden
        px-10
        py-5
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500
        via-purple-500
        to-pink-500
        text-white
        text-lg
        font-bold
        shadow-2xl
        hover:scale-105
        transition-all
        duration-300
      "
    >

      {/* SHINE */}
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

      <span className="relative z-10">
        Hire Me 🚀
      </span>

    </a>
  );
}

export default HireMeButton;