import React, { useEffect } from "react";
import CookieConsent from "./components/CookieConsent";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import DorobekSection from "./components/DorobekSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const NAVBAR_OFFSET = 72;

export default function App() {
  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
      window.scrollTo(0, top);
      history.pushState(null, "", hash);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <CookieConsent />

      <div className="text-[#16211C] font-sans antialiased selection:bg-[#3F6B52] selection:text-white flex flex-col relative z-10 overflow-x-clip">
        <Navbar />

        <main className="flex-grow">
          <div className="relative z-10 w-full bg-[#F6F5F1]">
            <Hero />
          </div>

          <div className="relative z-20 w-full bg-[#F6F5F1] rounded-t-[36px] sm:rounded-t-[56px] shadow-[0_-30px_70px_rgba(22,33,28,0.12)] border-t border-[#3F6B52]/[0.14]">
            <AboutSection />
            <ServicesSection />
            <DorobekSection />
            <GallerySection />
          </div>

          <div className="relative z-30 bg-[#E7EDE8] rounded-t-[36px] sm:rounded-t-[52px] shadow-[0_-10px_30px_rgba(22,33,28,0.06)] border-t border-[#3F6B52]/[0.14]">
            <ContactSection />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
