// src/layouts/MainLayout.jsx

import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import ScrollToTop from "../components/common/ScrollToTop";

import CustomCursor from "../components/common/CustomCursor";

import BackgroundEffects from "../components/common/BackgroundEffects";

function MainLayout() {

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* GLOBAL EFFECTS */}

      <BackgroundEffects />

      <CustomCursor />

      <ScrollToTop />

      {/* NAVBAR */}

      <Navbar />

      {/* PAGE CONTENT */}

      <main className="relative z-10">

        <Outlet />

      </main>

      {/* FOOTER */}

      <Footer />

    </div>
  );
}

export default MainLayout;