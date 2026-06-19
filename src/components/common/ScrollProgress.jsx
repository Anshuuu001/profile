import { useEffect, useState } from "react";

function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScroll(progress);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <>
    
      {/* MAIN PROGRESS BAR */}

      <div
        className="
          fixed
          top-0
          left-0
          h-[4px]
          z-[9999]
          bg-gradient-to-r
          from-cyan-400
          via-purple-400
          to-pink-400
          shadow-[0_0_20px_rgba(168,85,247,0.8)]
          transition-all
          duration-150
        "
        style={{
          width: `${scroll}%`,
        }}
      />

      {/* GLOW EFFECT */}

      <div
        className="
          fixed
          top-0
          left-0
          h-[4px]
          z-[9998]
          blur-md
          bg-gradient-to-r
          from-cyan-400
          via-purple-400
          to-pink-400
          opacity-70
          transition-all
          duration-150
        "
        style={{
          width: `${scroll}%`,
        }}
      />

    </>

  );
}

export default ScrollProgress;