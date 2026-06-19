function MapBackground() {
  return (
    <div
      className="
        absolute
        inset-0
        opacity-10
        pointer-events-none
      "
    >

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-full
          bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_60%)]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

    </div>
  );
}

export default MapBackground;