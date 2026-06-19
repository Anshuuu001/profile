function CinematicPreview() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
      "
    >

      {/* VIDEO BG */}
      <video
        autoPlay
        muted
        loop
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          opacity-30
        "
      >
        <source src="/videos/cinematic.mp4" />
      </video>

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black
          via-black/50
          to-transparent
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          p-10
          md:p-20
          max-w-3xl
        "
      >

        <p
          className="
            uppercase
            tracking-[5px]
            text-cyan-400
            text-sm
          "
        >
          Cinematic Experience
        </p>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            mt-6
          "
        >
          Visual Storytelling Through Motion
        </h2>

        <p
          className="
            text-gray-300
            mt-8
            leading-8
            text-lg
          "
        >
          Creating emotional, engaging, and
          high-impact edits inspired by anime,
          films, and cinematic transitions.
        </p>

      </div>

    </div>
  );
}

export default CinematicPreview;