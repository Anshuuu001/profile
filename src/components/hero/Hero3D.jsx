function Hero3D() {
  return (
    <div
      className="
        hidden
        lg:flex
        flex-1
        items-center
        justify-center
        relative
      "
    >

      {/* MAIN CIRCLE */}
      <div
        className="
          relative
          w-[450px]
          h-[450px]
          rounded-full
          border
          border-cyan-400/20
          flex
          items-center
          justify-center
        "
      >

        {/* GLOW */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-cyan-500/10
            blur-[80px]
          "
        />

        {/* IMAGE */}
        <img
          src="/profile.jpg"
          alt="profile"
          className="
            relative
            z-10
            w-[350px]
            h-[350px]
            object-cover
            rounded-full
            border
            border-white/10
            shadow-2xl
          "
        />

        {/* FLOATING RINGS */}
        <div
          className="
            absolute
            inset-[-30px]
            rounded-full
            border
            border-purple-400/20
            animate-spin
          "
          style={{ animationDuration: "12s" }}
        />

        <div
          className="
            absolute
            inset-[-60px]
            rounded-full
            border
            border-cyan-400/10
            animate-spin
          "
          style={{
            animationDuration: "20s",
            animationDirection: "reverse",
          }}
        />

      </div>

    </div>
  );
}

export default Hero3D;