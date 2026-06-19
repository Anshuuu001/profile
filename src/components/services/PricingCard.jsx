import { motion } from "framer-motion";

function PricingCard({ service }) {

  return (

    <motion.div

      whileHover={{
        scale: 1.03,
        y: -10,
      }}

      transition={{
        duration: 0.4,
      }}

      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-8
        hover:border-cyan-400/30
        transition-all
        duration-500
        shadow-[0_0_30px_rgba(168,85,247,0.08)]
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          -top-20
          -right-20
          w-52
          h-52
          bg-cyan-500/10
          blur-[120px]
          rounded-full
        "
      ></div>

      <div
        className="
          absolute
          bottom-0
          left-0
          w-40
          h-40
          bg-purple-500/10
          blur-[100px]
          rounded-full
        "
      ></div>

      {/* CONTENT */}

      <div className="relative z-10">

        {/* ICON */}

        <div
          className="
            w-20
            h-20
            rounded-3xl
            bg-gradient-to-br
            from-cyan-500/20
            to-purple-500/20
            border
            border-white/10
            flex
            items-center
            justify-center
            text-4xl
            shadow-[0_0_25px_rgba(34,211,238,0.15)]
          "
        >
          {service.icon}
        </div>

        {/* TITLE */}

        <h2
          className="
            text-3xl
            font-black
            mt-8
          "
        >
          {service.title}
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            text-gray-400
            leading-7
            mt-5
          "
        >
          {service.description}
        </p>

        {/* PRICE */}

        <div className="mt-8">

          <span
            className="
              text-5xl
              font-black
              bg-gradient-to-r
              from-cyan-400
              via-purple-400
              to-pink-400
              bg-clip-text
              text-transparent
            "
          >
            {service.price}
          </span>

          <span
            className="
              text-gray-400
              ml-3
              text-lg
            "
          >
            Starting
          </span>

        </div>

        {/* FEATURES */}

        <div
          className="
            space-y-4
            mt-10
          "
        >

          {service.features.map((feature, index) => (

            <div
              key={index}
              className="
                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  w-3
                  h-3
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_10px_rgba(34,211,238,0.8)]
                "
              ></div>

              <p className="text-gray-300">
                {feature}
              </p>

            </div>

          ))}

        </div>

        {/* BUTTONS */}

        <div
          className="
            flex
            gap-4
            mt-12
          "
        >

          <button
            className="
              flex-1
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-purple-500
              font-bold
              hover:scale-[1.02]
              transition-all
              duration-300
              shadow-[0_0_25px_rgba(168,85,247,0.35)]
            "
          >
            Get Started
          </button>

          <button
            className="
              px-6
              py-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            💬
          </button>

        </div>

      </div>

    </motion.div>

  );
}

export default PricingCard;