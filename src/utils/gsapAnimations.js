import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade up animation
 */
export const fadeUp = (el) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  );
};

/**
 * Stagger animation for cards
 */
export const staggerCards = (el) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    }
  );
};

/**
 * Scroll trigger animation
 */
export const scrollAnim = (el) => {
  gsap.fromTo(
    el,
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    }
  );
};