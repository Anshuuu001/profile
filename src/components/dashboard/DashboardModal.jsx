function DashboardModal({
  open,
  setOpen,
  data,
}) {

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-black/60
        backdrop-blur-md
        flex
        items-center
        justify-center
        px-4
      "
    >

      <div
        className="
          relative
          w-full
          max-w-2xl
          rounded-3xl
          border
          border-white/10
          bg-[#0b1120]
          p-8
        "
      >

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="
            absolute
            top-5
            right-5
            text-2xl
            hover:text-cyan-400
            transition
          "
        >
          ✕
        </button>

        {/* CONTENT */}
        <div className="space-y-6">

          <div className="text-6xl">
            {data.icon}
          </div>

          <h2 className="text-4xl font-black">
            {data.title}
          </h2>

          <p className="text-gray-400 leading-8">
            {data.description}
          </p>

          <div
            className="
              grid
              md:grid-cols-3
              gap-4
              mt-8
            "
          >

            <div
              className="
                bg-white/5
                rounded-2xl
                p-5
                border
                border-white/10
              "
            >
              <h3 className="text-gray-400 text-sm">
                Current
              </h3>

              <p className="text-2xl font-bold mt-2">
                {data.value}
              </p>
            </div>

            <div
              className="
                bg-white/5
                rounded-2xl
                p-5
                border
                border-white/10
              "
            >
              <h3 className="text-gray-400 text-sm">
                Growth
              </h3>

              <p className="text-2xl font-bold mt-2 text-green-400">
                +{data.growth}%
              </p>
            </div>

            <div
              className="
                bg-white/5
                rounded-2xl
                p-5
                border
                border-white/10
              "
            >
              <h3 className="text-gray-400 text-sm">
                Target
              </h3>

              <p className="text-2xl font-bold mt-2">
                {data.target}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardModal;