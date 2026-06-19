import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

function TestimonialSlider({ testimonials }) {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === testimonials.length - 1
          ? 0
          : prev + 1
      );

    }, 4000);

    return () => clearInterval(interval);

  }, [testimonials.length]);

  return (
    <div className="relative max-w-5xl mx-auto">

      {/* CARD */}
      <TestimonialCard
        testimonial={testimonials[current]}
      />

      {/* DOTS */}
      <div
        className="
          flex
          justify-center
          gap-4
          mt-8
        "
      >

        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              w-4
              h-4
              rounded-full
              transition-all
              duration-300

              ${
                current === index
                  ? "bg-cyan-400 scale-125"
                  : "bg-white/20"
              }
            `}
          />
        ))}

      </div>

    </div>
  );
}

export default TestimonialSlider;