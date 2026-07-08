import { Suspense, lazy } from "react";

import Navbar from "../components/common/Navbar";
import BackgroundEffects from "../components/common/BackgroundEffects";
import CustomCursor from "../components/common/CustomCursor";
import Loader from "../components/common/Loader";

import ThemeSwitcher from "../components/common/ThemeSwitcher";
import MusicToggle from "../components/common/MusicToggle";
import ScrollProgress from "../components/common/ScrollProgress";
import FloatingSocials from "../components/common/FloatingSocials";

// 🔥 Lazy loaded sections (optimized performance)
const Hero = lazy(() => import("../components/hero/Hero"));
const CreatorDashboard = lazy(() => import("../components/dashboard/CreatorDashboard"));
const About = lazy(() => import("../components/about/About"));
const Skills = lazy(() => import("../components/skills/Skills"));
const EditingShowcase = lazy(() => import("../components/editing/EditingShowcase"));
const Projects = lazy(() => import("../components/projects/Projects"));
const Analytics = lazy(() => import("../components/analytics/Analytics"));
const Timeline = lazy(() => import("../components/timeline/Timeline"));
const Services = lazy(() => import("../components/services/Services"));
const Testimonials = lazy(() => import("../components/testimonials/Testimonials"));
const Contact = lazy(() => import("../components/contact/Contact"));
const Footer = lazy(() => import("../components/common/Footer"));

function Section({ children }) {
  return (
    <section className="w-full relative py-10 md:py-16">
      {children}
    </section>
  );
}

function Home() {
  return (
    <div className="bg-transparent overflow-hidden">

      {/* Global UI Layer */}
      <ScrollProgress />
      <Loader />
      <CustomCursor />
      <BackgroundEffects />

      <ThemeSwitcher />
      <MusicToggle />
      <FloatingSocials />
      <Navbar />

      {/* Page Content */}
      <Suspense fallback={<Loader />}>
        <Section><Hero /></Section>
        <Section><CreatorDashboard /></Section>
        <Section><About /></Section>
        <Section><Skills /></Section>
        <Section><EditingShowcase /></Section>
        <Section><Projects /></Section>
        <Section><Analytics /></Section>
        <Section><Timeline /></Section>
        <Section><Services /></Section>
        <Section><Testimonials /></Section>
        <Section><Contact /></Section>
        <Section><Footer /></Section>
      </Suspense>

    </div>
  );
}

export default Home;