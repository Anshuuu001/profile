function BeforeAfter() {
  return (
    <div
      className="
        grid
        md:grid-cols-2
        gap-8
      "
    >

      {/* BEFORE */}
      <div
        className="
          rounded-3xl
          overflow-hidden
          border
          border-red-500/20
          bg-white/5
        "
      >

        <div className="p-5 border-b border-white/10">
          <h2 className="text-2xl font-bold text-red-400">
            Before Editing
          </h2>
        </div>

        <img
          src="/images/projects/before.jpg"
          alt="Before"
          className="
            w-full
            h-[400px]
            object-cover
          "
        />

      </div>

      {/* AFTER */}
      <div
        className="
          rounded-3xl
          overflow-hidden
          border
          border-cyan-500/20
          bg-white/5
        "
      >

        <div className="p-5 border-b border-white/10">
          <h2 className="text-2xl font-bold text-cyan-400">
            After Editing
          </h2>
        </div>

        <img
          src="/images/projects/after.jpg"
          alt="After"
          className="
            w-full
            h-[400px]
            object-cover
          "
        />

      </div>

    </div>
  );
}

export default BeforeAfter;