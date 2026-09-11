import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, clinic } from "../data/clinicData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex flex-nowrap items-center justify-between gap-3 xl:gap-6 px-5 sm:px-10 py-4 transition-all duration-400 ease-out ${
          scrolled
            ? "rounded-b-[28px] bg-[#16211C]/75 backdrop-blur-xl border-b border-x border-[#3F6B52]/30 shadow-lg shadow-black/10"
            : "rounded-none bg-[#16211C] border-b border-[#3F6B52]/30"
        }`}
      >
        <a href="#hero" className="min-w-0 flex items-center gap-2 shrink-0 mr-1">
          <span className="font-serif text-xl sm:text-2xl tracking-wide text-[#F6F5F1] leading-normal pb-0.5 truncate">
            M. <span className="text-[#A8C9B4]">Goczewski</span>
          </span>
        </a>

        <nav className="hidden lg:flex flex-nowrap items-center gap-3 xl:gap-6 min-w-0">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap text-[10px] xl:text-xs uppercase tracking-[0.04em] xl:tracking-[0.12em] text-[#F6F5F1]/80 hover:text-[#A8C9B4] transition-colors py-1"
            >
              {item.label}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#A8C9B4] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={clinic.telefonHref}
          className="hidden lg:flex flex-nowrap whitespace-nowrap items-center gap-2 border border-[#3F6B52] bg-[#3F6B52]/20 text-[#F6F5F1] text-[10px] xl:text-xs uppercase tracking-[0.04em] xl:tracking-[0.12em] px-3.5 xl:px-4 py-2 rounded-full hover:bg-[#3F6B52] hover:text-white transition-colors shrink-0 shadow-sm"
        >
          <Phone size={14} className="text-[#A8C9B4]" /> {clinic.telefon}
        </a>

        <button onClick={() => setOpen(true)} className="lg:hidden shrink-0 text-[#F6F5F1]" aria-label="Otwórz menu">
          <Menu size={26} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-[#16211C] flex flex-col">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#3F6B52]/25">
            <span className="font-serif text-xl text-[#F6F5F1]">
              M. <span className="text-[#A8C9B4]">Goczewski</span>
            </span>
            <button onClick={() => setOpen(false)} className="text-[#F6F5F1] shrink-0" aria-label="Zamknij menu">
              <X size={26} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 py-8 overflow-y-auto">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-[#3F6B52]/15 text-[#F6F5F1] font-serif text-2xl"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto mx-5 mb-8 flex flex-col gap-2.5">
            <a
              href={clinic.telefonHref}
              className="text-center border border-[#3F6B52] bg-[#3F6B52] text-white uppercase tracking-[0.12em] px-4 py-3.5 rounded-full shadow-md font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Phone size={16} /> Zadzwoń: {clinic.telefon}
            </a>
            <a
              href={`mailto:${clinic.email}`}
              className="text-center border border-white/20 bg-white/10 text-[#F6F5F1] uppercase tracking-[0.12em] px-4 py-3 rounded-full font-medium text-xs flex items-center justify-center gap-2"
            >
              {clinic.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
