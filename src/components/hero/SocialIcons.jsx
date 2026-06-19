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

function SocialIcons() {
  return (
    <div className="flex gap-5">

      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          className="
            w-14
            h-14
            rounded-2xl
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            flex
            items-center
            justify-center
            text-2xl
            hover:scale-110
            hover:border-cyan-400
            transition-all
            duration-300
          "
        >
          {social.icon}
        </a>
      ))}

    </div>
  );
}

export default SocialIcons;