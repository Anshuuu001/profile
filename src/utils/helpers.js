
/**
 * Smooth scroll to section
 */
export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

/**
 * Format number (for analytics counters)
 */
export const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num;
};

/**
 * Delay helper
 */
export const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Random ID generator
 */
export const generateId = () =>
  Math.random().toString(36).substring(2, 10);