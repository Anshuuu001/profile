import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Basic fade-in animation
 */
export const fadeInUpGSAP = (el) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }
  );
};

/**
 * Scroll animation helper
 */
export const scrollFade = (el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 80,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    }
  );
};

/**
 * Timeline animation
 */
export const timelineAnim = (el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      scale: 0.9,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
    }
  );
};

export default gsap;