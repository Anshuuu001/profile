import { useEffect, useState } from "react";

const texts = [
  "Full Stack Developer",
  "Anime Editor",
  "Content Creator",
  "UI/UX Designer",
];

function TypingAnimation() {

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {

    if (
      subIndex === texts[index]?.length + 1 &&
      !deleting
    ) {
      const timeout = setTimeout(() => setDeleting(true), 1000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && deleting) {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 0);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {

      setSubIndex((prev) =>
        prev + (deleting ? -1 : 1)
      );

      setCurrentText(
        texts[index]?.substring(0, subIndex)
      );

    }, deleting ? 50 : 120);

    return () => clearTimeout(timeout);

  }, [subIndex, index, deleting]);

  return (
    <h2
      className="
        text-2xl
        md:text-4xl
        font-bold
        text-gray-200
      "
    >
      {currentText}

      <span className="text-cyan-400 animate-pulse">
        |
      </span>

    </h2>
  );
}

export default TypingAnimation;