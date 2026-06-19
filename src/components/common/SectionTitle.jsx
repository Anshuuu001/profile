function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">

      {/* Subtitle */}
      <p
        className="
          text-cyan-400
          uppercase
          tracking-[4px]
          text-sm
          mb-4
          font-semibold
        "
      >
        {subtitle}
      </p>

      {/* Main Title */}
      <h2
        className="
          text-4xl
          md:text-6xl
          font-black
          bg-gradient-to-r
          from-cyan-400
          via-purple-400
          to-pink-400
          bg-clip-text
          text-transparent
          leading-tight
        "
      >
        {title}
      </h2>

      {/* Bottom Line */}
      <div
        className="
          w-32
          h-1
          mx-auto
          mt-6
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-purple-400
          to-pink-400
        "
      ></div>

    </div>
  );
}

export default SectionTitle;