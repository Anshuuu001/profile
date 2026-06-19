import { useEffect } from "react";
import gsap from "gsap";

export default function useAnimations(ref) {
  useEffect(() => {
    if (!ref?.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, [ref]);
}