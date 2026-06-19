import { useEffect } from "react";

export default function useScrollEffects() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const navbar = document.querySelector("nav");

      if (navbar) {
        if (scrollY > 50) {
          navbar.style.background = "rgba(0,0,0,0.6)";
          navbar.style.backdropFilter = "blur(10px)";
        } else {
          navbar.style.background = "transparent";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}