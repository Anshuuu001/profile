function VideoModal({ video, onClose }) {

  if (!video) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-black/80
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
          max-w-5xl
          rounded-3xl
          overflow-hidden
          border
          border-white/10
          bg-black
        "
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="
            absolute
            top-5
            right-5
            z-20
            w-12
            h-12
            rounded-full
            bg-black/40
            backdrop-blur-lg
            text-2xl
            hover:scale-110
            transition
          "
        >
          ✕
        </button>

        {/* VIDEO */}
        <video
          src={video.video}
          controls
          autoPlay
          className="
            w-full
            max-h-[80vh]
            object-cover
          "
        />

      </div>

    </div>
  );
}

export default VideoModal;