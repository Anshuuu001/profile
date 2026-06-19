import { useState } from "react";

import SectionTitle from "../common/SectionTitle";
import DashboardCard from "./DashboardCard";
import DashboardModal from "./DashboardModal";

import {
  FaUser,
  FaCode,
  FaVideo,
  FaChartLine,
  FaLaptopCode,
  FaEnvelope,
} from "react-icons/fa";

function CreatorDashboard() {

  const dashboardData = [

    {
      title: "About Me",
      value: "Creator",
      icon: <FaUser />,
      growth: 12,
      desc: "Know my creator journey and personal brand growth.",
      target: "Top Creator",
      description:
        "Passionate content creator, video editor, and developer building futuristic digital experiences.",
    },

    {
      title: "Skills",
      value: "10+",
      icon: <FaCode />,
      growth: 20,
      desc: "Frontend, React, editing & creative skills.",
      target: "20+ Skills",
      description:
        "Skilled in React, Tailwind CSS, cinematic editing, EFX editing, UI design, and full-stack development.",
    },

    {
      title: "Editing",
      value: "150+",
      icon: <FaVideo />,
      growth: 30,
      desc: "AMV, reels, velocity edits & cinematic videos.",
      target: "500+ Edits",
      description:
        "Creating anime edits, cinematic reels, AMVs, and social media content with advanced transitions and effects.",
    },

    {
      title: "Analytics",
      value: "1.2M",
      icon: <FaChartLine />,
      growth: 24,
      desc: "Views, reach & creator engagement growth.",
      target: "2M Views",
      description:
        "Your content is performing strongly across platforms with rapid audience growth and engagement.",
    },

    {
      title: "Projects",
      value: "15+",
      icon: <FaLaptopCode />,
      growth: 18,
      desc: "Modern React & full-stack projects.",
      target: "30+ Projects",
      description:
        "Building advanced portfolio websites, dashboards, creator tools, and futuristic web applications.",
    },

    {
      title: "Contact",
      value: "Open",
      icon: <FaEnvelope />,
      growth: 10,
      desc: "Available for work & collaborations.",
      target: "Global Clients",
      description:
        "Open for freelance work, editing collaborations, website projects, and creative partnerships.",
    },

  ];

  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (item) => {

    setSelectedData(item);
    setOpen(true);

  };

  return (

    <section
      id="dashboard"
      className="
        relative
        py-32
        px-6
        md:px-16
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
          bg-purple-500/10
          blur-[150px]
          rounded-full
        "
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TITLE */}

        <SectionTitle
          title="Creator Dashboard"
          subtitle="Performance • Creativity • Growth"
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
          Interactive futuristic dashboard showcasing
          creator analytics, editing skills,
          development projects, and digital growth.
        </p>

        {/* GRID */}

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            mt-20
          "
        >

          {dashboardData.map((item, index) => (

            <DashboardCard

              key={index}

              title={item.title}
              value={item.value}
              icon={item.icon}
              growth={item.growth}
              desc={item.desc}

              onClick={() => openModal(item)}

            />

          ))}

        </div>

      </div>

      {/* MODAL */}

      <DashboardModal
        open={open}
        setOpen={setOpen}
        data={selectedData || {}}
      />

    </section>

  );
}

export default CreatorDashboard;