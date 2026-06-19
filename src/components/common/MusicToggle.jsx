import { useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaMusic,
} from "react-icons/fa";

function MusicToggle() {

  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {

    if (!audioRef.current) return;

    if (playing) {

      audioRef.current.pause();

    } else {

      audioRef.current.play();

    }

    setPlaying(!playing);

  };

  return (

    <div
      className="
        fixed
        bottom-6
        left-6
        z-50
      "
    >

      {/* AUDIO */}

      <audio
        ref={audioRef}
        loop
        src="/music/lofi.mp3"
      />

      {/* BUTTON */}

      <button

        onClick={toggleMusic}

        className={`
          relative
          w-16
          h-16
          rounded-full
          backdrop-blur-xl
          border
          border-white/10
          flex
          items-center
          justify-center
          text-2xl
          text-white
          overflow-hidden
          transition-all
          duration-300
          hover:scale-110
          ${
            playing
              ? "bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)]"
              : "bg-black/40"
          }
        `}
      >

        {/* PULSE EFFECT */}

        {playing && (

          <span
            className="
              absolute
              inset-0
              rounded-full
              animate-ping
              bg-purple-500/40
            "
          ></span>

        )}

        {/* ICON */}

        <span className="relative z-10">

          {playing ? <FaPause /> : <FaPlay />}

        </span>

      </button>

      {/* LABEL */}

      <div
        className="
          flex
          items-center
          gap-2
          mt-3
          text-sm
          text-gray-300
          tracking-wide
        "
      >

        <FaMusic className="text-purple-400" />

        <span>
          {playing ? "Now Playing" : "Music Off"}
        </span>

      </div>

    </div>

  );
}

export default MusicToggle;