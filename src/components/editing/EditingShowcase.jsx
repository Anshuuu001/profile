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
      video: "/videos/amv.mp4",
      category: "AMV",
      thumbnail: "/images/projects/amv.jpg",
    },

    {
      title: "Manga Motion Edit",
      video: "/videos/manga.mp4",
      category: "Manga",
      thumbnail: "/images/projects/manga.jpg",
    },

    {
      title: "Cinematic Reel",
      video: "/videos/cinematic.mp4",
      category: "Cinematic",
      thumbnail: "/images/projects/cinematic.jpg",
    },

    {
      title: "Instagram Reel",
      video: "/videos/reel1.mp4",
      category: "Social Media",
      thumbnail: "/images/projects/reel.jpg",
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