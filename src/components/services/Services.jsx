import SectionTitle from "../common/SectionTitle";
import PricingCard from "./PricingCard";
import HireMeButton from "./HireMeButton";

function Services() {

  const services = [

    {
      title: "Video Editing",
      price: "₹999",
      icon: "🎬",

      description:
        "Professional anime edits, cinematic reels, AMVs, and social media content with smooth transitions and effects.",

      features: [
        "Anime AMV Editing",
        "Cinematic Reels",
        "Velocity Effects",
        "Color Grading",
        "4K Export",
      ],
    },

    {
      title: "Web Development",
      price: "₹4999",
      icon: "💻",

      description:
        "Modern futuristic websites and full-stack applications using React, Node.js, and premium UI design.",

      features: [
        "Modern UI/UX",
        "React Frontend",
        "Node.js Backend",
        "Responsive Design",
        "SEO Optimization",
      ],
    },

    {
      title: "Motion Graphics",
      price: "₹1999",
      icon: "🚀",

      description:
        "Creative motion graphics, intro animations, branding visuals, and engaging content for creators.",

      features: [
        "Logo Animation",
        "Motion Design",
        "Social Branding",
        "Thumbnail Design",
        "Creative Effects",
      ],
    },

  ];

  return (

    <section
      id="services"
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
          top-20
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-purple-500/10
          blur-[150px]
        "
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TITLE */}

        <SectionTitle
          title="My Services"
          subtitle="Creative • Development • Branding"
        />

        {/* DESCRIPTION */}

        <p
          className="
            text-center
            text-gray-400
            max-w-3xl
            mx-auto
            mt-6
            text-lg
            leading-8
          "
        >
          I provide high-quality creative services
          for content creators, brands, and startups —
          from cinematic editing and motion graphics
          to modern full-stack web development.
        </p>

        {/* SERVICES GRID */}

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            mt-20
          "
        >

          {services.map((service, index) => (

            <PricingCard
              key={index}
              service={service}
            />

          ))}

        </div>

        {/* CTA */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            mt-24
          "
        >

          <p
            className="
              text-gray-400
              text-center
              mb-8
              max-w-2xl
            "
          >
            Ready to create something futuristic and cinematic?
            Let’s work together and build your next big project.
          </p>

          <HireMeButton />

        </div>

      </div>

    </section>

  );
}

export default Services;