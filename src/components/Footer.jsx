import React from "react";
import { nav, clinic } from "../data/clinicData";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 pb-12 pt-6">
      <div className="max-w-5xl mx-auto">
        <nav className="flex flex-wrap gap-x-7 gap-y-3 pb-8 border-b border-[#3F6B52]/20">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-xs uppercase tracking-[0.15em] text-[#16211C]/65 hover:text-[#3F6B52] transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <p className="font-serif text-[14vw] sm:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.03em] text-[#16211C] font-medium">
            {clinic.stopkaDomena}
          </p>
          <p className="text-[11px] text-[#16211C]/55 leading-relaxed shrink-0">{clinic.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
