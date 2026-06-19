const socials = [
  {
    name: "Instagram",
    icon: "📸",
    link: "https://instagram.com",
  },

  {
    name: "YouTube",
    icon: "▶",
    link: "https://youtube.com",
  },

  {
    name: "GitHub",
    icon: "💻",
    link: "https://github.com",
  },

  {
    name: "LinkedIn",
    icon: "💼",
    link: "https://linkedin.com",
  },
];

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4 mt-8">

      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            gap-3
            px-5
            py-3
            rounded-2xl
            bg-white/5
            border
            border-white/10
            hover:border-cyan-400
            hover:scale-105
            transition-all
            duration-300
          "
        >

          <span className="text-xl">
            {social.icon}
          </span>

          <span>
            {social.name}
          </span>

        </a>
      ))}

    </div>
  );
}

export default SocialLinks;