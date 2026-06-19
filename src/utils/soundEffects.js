
/**
 * Simple sound system for UI clicks, hover, etc.
 */

const sounds = {
  click: "/music/click.mp3",
  hover: "/music/hover.mp3",
};

const audioCache = {};

/**
 * Play sound
 */
export const playSound = (type = "click") => {
  if (!sounds[type]) return;

  if (!audioCache[type]) {
    audioCache[type] = new Audio(sounds[type]);
  }

  const audio = audioCache[type];
  audio.currentTime = 0;
  audio.volume = 0.4;
  audio.play();
};

/**
 * Preload all sounds
 */
export const preloadSounds = () => {
  Object.values(sounds).forEach((src) => {
    const audio = new Audio(src);
    audio.load();
  });
};