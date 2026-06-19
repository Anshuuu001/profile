import SectionTitle from "../common/SectionTitle";
import CounterCard from "./CounterCard";
import AnalyticsGrid from "./AnalyticsGrid";
import MiniChart from "./MiniChart";

import {
  Eye,
  Video,
  Code2,
  Clock3
} from "lucide-react";

function Analytics() {

  const stats = [

    {
      value: "120K+",
      title: "Total Views",
      icon: <Eye />
    },

    {
      value: "150+",
      title: "Reels Uploaded",
      icon: <Video />
    },

    {
      value: "25+",
      title: "Projects Built",
      icon: <Code2 />
    },

    {
      value: "2000+",
      title: "Editing Hours",
      icon: <Clock3 />
    },

  ];

  return (

    <section
      id="analytics"
      className="relative px-6 md:px-16 py-24 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute top-0 left-0
        w-72 h-72
        bg-cyan-500/10
        blur-3xl rounded-full
        "
      />

      <div
        className="
        absolute bottom-0 right-0
        w-72 h-72
        bg-purple-500/10
        blur-3xl rounded-full
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}

        <SectionTitle
          title="Creator Analytics"
          subtitle="Growth • Reach • Performance"
        />

        {/* STATS */}

        <div
          className="
          grid sm:grid-cols-2 lg:grid-cols-4
          gap-8 mt-20
          "
        >

          {stats.map((stat, index) => (

            <CounterCard
              key={index}
              value={stat.value}
              title={stat.title}
              icon={stat.icon}
            />

          ))}

        </div>

        {/* EXTRA ANALYTICS */}

        <div className="mt-16 space-y-10">

          {/* OPTIONAL GRID */}

          <AnalyticsGrid />

          {/* MINI CHART */}

          <MiniChart />

        </div>

      </div>

    </section>
  );
}

export default Analytics;