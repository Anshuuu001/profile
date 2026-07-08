import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import TestimonialSlider from "./TestimonialSlider";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const defaultTestimonials = [
    {
      name: "Aryan Sharma",
      role: "Content Creator",
      image: "https://ui-avatars.com/api/?name=Aryan+Sharma&background=0D8ABC&color=fff",
      message:
        "Ansh created an insane cinematic edit for my Instagram reel. The transitions and quality were next level.",
    },
    {
      name: "Rahul Verma",
      role: "Startup Founder",
      image: "https://ui-avatars.com/api/?name=Rahul+Verma&background=22c55e&color=fff",
      message:
        "The portfolio website design was modern, smooth, and super professional. Loved the animations.",
    },
    {
      name: "Soham Patil",
      role: "YouTuber",
      image: "https://ui-avatars.com/api/?name=Soham+Patil&background=a855f7&color=fff",
      message:
        "Best editor and developer combo. Fast delivery and high-quality work every time.",
    },
    {
      name: "Karan Mehta",
      role: "Freelancer",
      image: "https://ui-avatars.com/api/?name=Karan+Mehta&background=eab308&color=fff",
      message:
        "Amazing UI/UX skills with smooth interactions and creative ideas. Highly recommended.",
    },
  ];

  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem("visitor_reviews");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return [...defaultTestimonials, ...parsed];
        }
      } catch (e) {
        console.error(e);
      }
    }
    return defaultTestimonials;
  });

  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    role: "",
    message: "",
  });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.message) return;

    const reviewToAdd = {
      name: newReview.name,
      role: newReview.role || "Visitor",
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(newReview.name)}&background=random&color=fff`,
      message: newReview.message,
    };

    const updated = [...testimonials, reviewToAdd];
    setTestimonials(updated);

    const visitorReviews = JSON.parse(localStorage.getItem("visitor_reviews") || "[]");
    localStorage.setItem("visitor_reviews", JSON.stringify([...visitorReviews, reviewToAdd]));

    setNewReview({ name: "", role: "", message: "" });
    setShowForm(false);
  };

  return (

    <section
      id="testimonials"
      className="
        relative
        py-32
        px-6
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-0
          left-0
          w-72
          h-72
          bg-cyan-500/10
          blur-[140px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-72
          h-72
          bg-purple-500/10
          blur-[140px]
          rounded-full
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}

        <SectionTitle
          title="Client Testimonials"
          subtitle="Feedback • Reviews • Experiences"
        />

        {/* DESCRIPTION */}

        <p
          className="
            text-center
            text-gray-400
            mt-6
            max-w-2xl
            mx-auto
            leading-8
          "
        >
          Trusted by creators, startups, and brands
          for cinematic editing, modern UI/UX, and
          futuristic web experiences.
        </p>

        {/* WRITE A REVIEW BUTTON */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="
              px-6
              py-3
              rounded-2xl
              border
              border-cyan-400/30
              bg-cyan-400/10
              hover:bg-cyan-400/20
              text-cyan-400
              font-bold
              transition-all
              duration-300
              hover:scale-105
            "
          >
            {showForm ? "Cancel Review ❌" : "Write a Review ✍️"}
          </button>
        </div>

        {/* REVIEW FORM */}
        {showForm && (
          <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleReviewSubmit}
            className="
              max-w-xl
              mx-auto
              mt-10
              p-8
              rounded-3xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              space-y-6
              relative
              z-20
            "
          >
            <h3 className="text-2xl font-black text-white text-center">
              Share Your Experience
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-400 block mb-2 text-sm">Name</label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  placeholder="Your Name"
                  className="
                    w-full
                    bg-black/30
                    border
                    border-white/10
                    rounded-2xl
                    px-5
                    py-3
                    outline-none
                    focus:border-cyan-400
                    text-white
                    transition
                  "
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-2 text-sm">Role / Headline</label>
                <input
                  type="text"
                  value={newReview.role}
                  onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                  placeholder="e.g. Visitor, Editor, Creator"
                  className="
                    w-full
                    bg-black/30
                    border
                    border-white/10
                    rounded-2xl
                    px-5
                    py-3
                    outline-none
                    focus:border-cyan-400
                    text-white
                    transition
                  "
                />
              </div>
            </div>

            <div>
              <label className="text-gray-400 block mb-2 text-sm">Your Review</label>
              <textarea
                required
                rows="4"
                value={newReview.message}
                onChange={(e) => setNewReview({ ...newReview, message: e.target.value })}
                placeholder="Write your review here..."
                className="
                  w-full
                  bg-black/30
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-3
                  outline-none
                  resize-none
                  focus:border-cyan-400
                  text-white
                  transition
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-2xl
                font-bold
                text-white
                bg-gradient-to-r
                from-cyan-500
                to-purple-500
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >
              Submit Review 🚀
            </button>
          </motion.form>
        )}

        {/* SLIDER */}

        <div className="mt-20 hidden xl:block">

          <TestimonialSlider
            testimonials={testimonials}
          />

        </div>

        {/* GRID FOR SMALL DEVICES */}

        <div
          className="
            grid
            md:grid-cols-2
            xl:hidden
            gap-8
            mt-20
          "
        >

          {testimonials.map((testimonial, index) => (

            <TestimonialCard
              key={index}
              testimonial={testimonial}
            />

          ))}

        </div>

      </div>

    </section>

  );
}

export default Testimonials;