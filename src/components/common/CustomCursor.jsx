import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.matchMedia("(pointer: coarse)").matches
      );
    };
    checkMobile();

    const moveCursor = (e) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";

        cursorDotRef.current.style.left = e.clientX + "px";
        cursorDotRef.current.style.top = e.clientY + "px";
      }
    };

    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "translate(-50%, -50%) scale(0.7)";
      }
    };

    const handleMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* OUTER CURSOR */}
      <div
        ref={cursorRef}
        id="cursor"
        style={{ left: "-100px", top: "-100px" }}
        className="
          fixed
          w-10
          h-10
          border
          border-cyan-400
          rounded-full
          pointer-events-none
          z-[9999]
          -translate-x-1/2
          -translate-y-1/2
          transition-transform
          duration-150
          mix-blend-difference
          backdrop-blur-sm
        "
      />

      {/* INNER DOT */}
      <div
        ref={cursorDotRef}
        id="cursor-dot"
        style={{ left: "-100px", top: "-100px" }}
        className="
          fixed
          w-3
          h-3
          bg-gradient-to-r
          from-cyan-400
          to-purple-500
          rounded-full
          pointer-events-none
          z-[9999]
          -translate-x-1/2
          -translate-y-1/2
          shadow-[0_0_20px_rgba(168,85,247,0.8)]
        "
      />
    </>
  );
}

export default CustomCursor;