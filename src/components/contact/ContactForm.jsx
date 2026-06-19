import { useState } from "react";
import GlowButton from "../common/GlowButton";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "918554095764";
    const text = `Hello! I contacted you from your portfolio:
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        rounded-3xl
        p-8
        space-y-6
      "
    >

      <h2 className="text-3xl font-black">
        Send Message
      </h2>

      {/* NAME */}
      <div>

        <label className="text-gray-400 block mb-2">
          Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="
            w-full
            bg-black/30
            border
            border-white/10
            rounded-2xl
            px-5
            py-4
            outline-none
            focus:border-cyan-400
            transition
          "
        />

      </div>

      {/* EMAIL */}
      <div>

        <label className="text-gray-400 block mb-2">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="
            w-full
            bg-black/30
            border
            border-white/10
            rounded-2xl
            px-5
            py-4
            outline-none
            focus:border-cyan-400
            transition
          "
        />

      </div>

      {/* MESSAGE */}
      <div>

        <label className="text-gray-400 block mb-2">
          Message
        </label>

        <textarea
          rows="6"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message..."
          required
          className="
            w-full
            bg-black/30
            border
            border-white/10
            rounded-2xl
            px-5
            py-4
            outline-none
            resize-none
            focus:border-cyan-400
            transition
          "
        />

      </div>

      <GlowButton
        text="Send Message 🚀"
        className="w-full justify-center"
      />

    </form>
  );
}

export default ContactForm;