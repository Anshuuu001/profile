import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function FloatingSocials() {

  const socials = [

    {
      icon: <FaInstagram />,
      link: "https://instagram.com",
      hover: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500",
    },

    {
      icon: <FaYoutube />,
      link: "https://youtube.com",
      hover: "hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700",
    },

    {
      icon: <FaGithub />,
      link: "https://github.com",
      hover: "hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500",
    },

    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com",
      hover: "hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700",
    },

  ];

  return (

    <div
      className="
        fixed
        left-5
        top-1/2
        -translate-y-1/2
        z-50
        flex
        flex-col
        gap-5
      "
    >

      {/* LINE */}

      <div
        className="
          w-[2px]
          h-24
          mx-auto
          bg-gradient-to-b
          from-cyan-400
          to-purple-500
          opacity-60
        "
      ></div>

      {/* SOCIAL BUTTONS */}

      {socials.map((social, index) => (

        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          className={`
            w-14
            h-14
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            flex
            items-center
            justify-center
            text-xl
            text-white
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
            ${social.hover}
          `}
        >

          {social.icon}

        </a>

      ))}

      {/* LINE */}

      <div
        className="
          w-[2px]
          h-24
          mx-auto
          bg-gradient-to-b
          from-purple-500
          to-pink-500
          opacity-60
        "
      ></div>

    </div>

  );
}

export default FloatingSocials;