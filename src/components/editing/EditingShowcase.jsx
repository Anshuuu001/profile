import { useState } from "react";

import SectionTitle from "../common/SectionTitle";
import ReelCard from "./ReelCard";
import VideoModal from "./VideoModal";
import BeforeAfter from "./BeforeAfter";
import CinematicPreview from "./CinematicPreview";

function EditingShowcase() {

  const reels = [

    {
      title: "Anime AMV Edit",
      video: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-subway-station-with-neon-lights-and-a-train-40092-large.mp4",
      category: "AMV",
      thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
    },

    {
      title: "Manga Motion Edit",
      video: "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-neon-lights-in-a-futuristic-city-34341-large.mp4",
      category: "Manga",
      thumbnail: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&auto=format&fit=crop&q=80",
    },

    {
      title: "Cinematic Reel",
      video: "https://assets.mixkit.co/videos/preview/mixkit-cinematic-view-of-a-dj-performing-at-a-nightclub-43037-large.mp4",
      category: "Cinematic",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80",
    },

    {
      title: "Instagram Reel",
      video: "https://assets.mixkit.co/videos/preview/mixkit-vertical-video-of-a-man-filming-with-his-smartphone-40003-large.mp4",
      category: "Social Media",
      thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",
    },

  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (

    <section
      id="editing"
      className="
        relative
        px-6
        md:px-16
        py-32
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          bg-pink-500/10
          blur-[140px]
          rounded-full
        "
      ></div>

      <div className="relative z-10">

        {/* TITLE */}

        <SectionTitle
          title="Editing Showcase"
          subtitle="Cinematic • Anime • Motion Graphics"
        />

        {/* DESCRIPTION */}

        <p
          className="
            text-center
            text-gray-400
            mt-6
            max-w-3xl
            mx-auto
            text-lg
            leading-8
          "
        >
          Explore cinematic edits, anime AMVs,
          manga motion graphics, and social media
          reels crafted with advanced transitions,
          effects, storytelling, and creative editing.
        </p>

        {/* REELS GRID */}

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
            mt-20
          "
        >

          {reels.map((reel, index) => (

            <ReelCard
              key={index}
              reel={reel}
              onClick={() => setSelectedVideo(reel)}
            />

          ))}

        </div>

        {/* EXTRA SECTIONS */}

        <div className="mt-32 space-y-28">

          <BeforeAfter />

          <CinematicPreview />

        </div>

      </div>

      {/* VIDEO MODAL */}

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

    </section>

  );
}

export default EditingShowcase;