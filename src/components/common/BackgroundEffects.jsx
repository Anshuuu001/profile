import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

function BackgroundEffects() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (

    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* PARTICLES */}

      <Particles

        id="tsparticles"

        className="absolute inset-0"

        options={{

          background: {
            color: "#050816",
          },

          fpsLimit: 60,

          particles: {

            number: {
              value: 50,
            },

            color: {
              value: ["#22d3ee", "#a855f7", "#ec4899"],
            },

            links: {
              enable: true,
              color: "#a855f7",
              opacity: 0.3,
            },

            move: {
              enable: true,
              speed: 1,
            },

            opacity: {
              value: 0.5,
            },

            size: {
              value: 2,
            },

          },

        }}

      />

      {/* TOP GLOW */}

      <div
        className="
          absolute
          top-[-200px]
          left-[-100px]
          w-[500px]
          h-[500px]
          bg-cyan-500/20
          blur-[140px]
          rounded-full
        "
      />

      {/* BOTTOM GLOW */}

      <div
        className="
          absolute
          bottom-[-200px]
          right-[-100px]
          w-[500px]
          h-[500px]
          bg-purple-500/20
          blur-[140px]
          rounded-full
        "
      />

      {/* CENTER GLOW */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[400px]
          h-[400px]
          bg-pink-500/10
          blur-[120px]
          rounded-full
        "
      />

    </div>

  );
}

export default BackgroundEffects;