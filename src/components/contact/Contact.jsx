import SectionTitle from "../common/SectionTitle";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";
import WhatsAppButton from "./WhatsAppButton";
import MapBackground from "./MapBackground";
import siteConfig from "../../config/siteConfig";

function Contact() {

  return (

    <section
      id="contact"
      className="
        relative
        px-6
        md:px-16
        py-32
        overflow-hidden
      "
    >

      {/* BACKGROUND */}

      <MapBackground />

      {/* SECTION TITLE */}

      <SectionTitle
        title="Contact Me"
        subtitle="Let's Build Something Amazing"
      />

      {/* MAIN CONTENT */}

      <div
        className="
          relative
          z-10
          grid
          lg:grid-cols-2
          gap-12
          mt-20
          max-w-7xl
          mx-auto
        "
      >

        {/* LEFT SIDE */}

        <div className="space-y-8">

          <div
            className="
              bg-white/5
              border
              border-white/10
              backdrop-blur-2xl
              rounded-3xl
              p-10
              shadow-[0_0_40px_rgba(168,85,247,0.15)]
            "
          >

            <h2
              className="
                text-4xl
                font-black
                mb-6
                bg-gradient-to-r
                from-cyan-400
                via-purple-400
                to-pink-400
                bg-clip-text
                text-transparent
              "
            >
              Get In Touch
            </h2>

            <p
              className="
                text-gray-400
                leading-8
                text-lg
              "
            >
              Whether it's a creative editing project,
              portfolio website, full stack app,
              or content collaboration —
              feel free to contact me anytime.
            </p>

            {/* CONTACT INFO */}

            <div className="mt-10 space-y-5">

              <div
                className="
                  flex
                  items-center
                  gap-4
                  p-4
                  rounded-2xl
                  bg-black/20
                  border border-white/10
                "
              >

                <span className="text-2xl">📧</span>

                <div>

                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {siteConfig.contactEmail}
                  </p>

                </div>

              </div>

              <div
                className="
                  flex
                  items-center
                  gap-4
                  p-4
                  rounded-2xl
                  bg-black/20
                  border border-white/10
                "
              >

                <span className="text-2xl">📍</span>

                <div>

                  <h4 className="font-semibold">
                    Location
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Nagpur, Maharashtra
                  </p>

                </div>

              </div>

            </div>

            {/* SOCIAL LINKS */}

            <div className="mt-10">

              <SocialLinks />

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div
          className="
            bg-white/5
            border
            border-white/10
            backdrop-blur-2xl
            rounded-3xl
            p-8
            shadow-[0_0_40px_rgba(34,211,238,0.15)]
          "
        >

          <ContactForm />

        </div>

      </div>

      {/* WHATSAPP */}

      <WhatsAppButton />

    </section>

  );
}

export default Contact;