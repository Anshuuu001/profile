function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918554095764"
      target="_blank"
      rel="noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-16
        h-16
        rounded-full
        bg-green-500
        flex
        items-center
        justify-center
        text-3xl
        shadow-2xl
        hover:scale-110
        transition-all
        duration-300
      "
    >
      💬
    </a>
  );
}

export default WhatsAppButton;