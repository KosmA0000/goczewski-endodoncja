import React, { useRef } from "react";
import gsap from "gsap";
import { Quote, Stethoscope } from "lucide-react";
import { MaskedHeading, StaggerReveal, useInView } from "./Reveal";
import { oNas, hero, zespol } from "../data/clinicData";

export default function AboutSection() {
  const quoteRef = useRef(null);
  const quoteIconRef = useRef(null);
  const quoteTextRef = useRef(null);

  useInView(quoteRef, () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(quoteRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, clearProps: "transform" });
    if (quoteIconRef.current) {
      // Only y/opacity here — this element also carries a Tailwind
      // `group-hover:scale-105` class, and GSAP animating "scale" on the same
      // element (even via fromTo+clearProps) fights Tailwind's own CSS `scale`
      // property, which is what caused the "scale not eligible for reset" spam.
      tl.fromTo(
        quoteIconRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, clearProps: "y" },
        "-=0.9"
      );
    }
    if (quoteTextRef.current) {
      tl.fromTo(quoteTextRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, clearProps: "transform" }, "-=0.75");
    }
  });

  return (
    <section id="o-mnie" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F6F5F1] border-t border-[#3F6B52]/[0.14]">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-12 sm:mb-16">
          <span
            aria-hidden="true"
            className="hidden md:block absolute -top-10 -right-4 lg:-right-10 font-serif text-[9rem] lg:text-[12rem] leading-none text-[#3F6B52]/[0.07] select-none pointer-events-none"
          >
            01
          </span>
          <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
            <MaskedHeading className="font-serif font-medium text-[#16211C] tracking-[-0.03em] leading-[0.94] text-5xl sm:text-6xl lg:text-[5.5vw] max-w-2xl">
              {oNas.tytul}
            </MaskedHeading>
          </div>
        </div>

        <StaggerReveal className="grid sm:grid-cols-3 gap-3.5 mb-3.5">
          {hero.akapity.map((a, i) => (
            <div key={i} className="rounded-3xl bg-white border border-[#3F6B52]/[0.14] p-6 hover:border-[#3F6B52]/50 transition-colors shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#3F6B52]">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2.5 text-sm text-[#16211C]/70 leading-relaxed">{a}</p>
            </div>
          ))}
        </StaggerReveal>

        <div
          ref={quoteRef}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#16211C] via-[#1C2A22] to-[#111A15] text-[#F6F5F1] p-7 sm:p-11 border border-[#3F6B52]/40 shadow-xl transition-all duration-500 hover:border-[#3F6B52]/70 hover:shadow-2xl"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#3F6B52]/25 blur-3xl transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-[#A8C9B4]/15 blur-3xl transition-opacity duration-700 group-hover:opacity-100 opacity-40" />
          <div ref={quoteIconRef} className="relative z-10 inline-block mb-5 transition-transform duration-500 group-hover:scale-105">
            <Quote className="w-10 h-10 text-[#A8C9B4]/70 transition-colors duration-500 group-hover:text-[#A8C9B4]" strokeWidth={1.3} />
          </div>
          <p ref={quoteTextRef} className="relative z-10 font-serif text-lg sm:text-2xl leading-[1.5] text-[#F6F5F1] tracking-wide">
            {oNas.wstep}
          </p>
        </div>

        <StaggerReveal className="grid sm:grid-cols-3 gap-3.5 mt-3.5">
          {oNas.cechy.map((c) => (
            <div key={c.tytul} className="rounded-3xl bg-white border border-[#3F6B52]/20 p-6 hover:border-[#3F6B52] transition-colors shadow-sm">
              <h3 className="font-serif text-lg text-[#16211C] leading-snug pb-0.5">{c.tytul}</h3>
              <p className="text-xs text-[#16211C]/65 leading-relaxed mt-2">{c.opis}</p>
            </div>
          ))}
        </StaggerReveal>

        <p className="mt-3.5 rounded-3xl bg-white border border-[#3F6B52]/[0.14] p-6 text-sm text-[#16211C]/75 leading-relaxed shadow-sm">
          {oNas.wyposazenie.przed} <strong className="text-[#3F6B52]">{oNas.wyposazenie.marka}</strong> {oNas.wyposazenie.po}
        </p>

        <div className="mt-12">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#3F6B52]/20 text-xs font-semibold uppercase tracking-widest text-[#3F6B52] shadow-sm">
              <Stethoscope className="w-3.5 h-3.5" />
              Zespół
            </div>
          </div>
          <StaggerReveal className="grid sm:grid-cols-2 gap-3.5">
            {zespol.map((z) => (
              <div key={z.rola} className="rounded-3xl bg-[#16211C] text-[#F6F5F1] p-6 sm:p-7 border border-[#3F6B52]/30 shadow-md">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A8C9B4]">{z.rola}</span>
                <div className="mt-2 space-y-1">
                  {z.osoby.map((o) => (
                    <p key={o} className="font-serif text-lg text-[#F6F5F1] leading-snug">
                      {o}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
