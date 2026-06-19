import SectionTitle from "../common/SectionTitle";
import TimelineItem from "./TimelineItem";
import NeonTimeline from "./NeonTimeline";

function Timeline() {

  const timelineData = [

    {
      year: "2023",
      title: "Started Editing Journey",
      description:
        "Began learning cinematic editing, anime AMVs, and Instagram reel creation.",
    },

    {
      year: "2024",
      title: "Learned Frontend Development",
      description:
        "Started learning HTML, CSS, JavaScript, and modern UI design principles.",
    },

    {
      year: "2025",
      title: "Started React Projects",
      description:
        "Built futuristic portfolio websites, dashboards, and full-stack applications.",
    },

    {
      year: "2026",
      title: "Building Creator Brand",
      description:
        "Growing as a creator, freelancer, developer, and cinematic editor.",
    },

  ];

  return (

    <section
      id="timeline"
      className="
        relative
        py-32
        px-6
        overflow-hidden
      "
    >

      {/* BACKGROUND EFFECT */}

      <NeonTimeline />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TITLE */}

        <SectionTitle
          title="My Journey"
          subtitle="Timeline • Growth • Experience"
        />

        {/* DESCRIPTION */}

        <p
          className="
            text-center
            text-gray-400
            max-w-2xl
            mx-auto
            mt-6
            leading-8
          "
        >
          My journey from cinematic editing and
          anime AMVs to building futuristic React
          applications and creator-focused projects.
        </p>

        {/* TIMELINE */}

        <div
          className="
            relative
            mt-24
          "
        >

          {/* CENTER LINE */}

          <div
            className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2
              w-1
              h-full
              bg-gradient-to-b
              from-cyan-400
              via-purple-500
              to-pink-500
              rounded-full
              hidden md:block
            "
          />

          {/* ITEMS */}

          <div className="space-y-20">

            {timelineData.map((item, index) => (

              <TimelineItem
                key={index}
                item={item}
                left={index % 2 === 0}
              />

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}

export default Timeline;