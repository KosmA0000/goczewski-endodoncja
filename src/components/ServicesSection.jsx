import React, { useState, useRef, useLayoutEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { MaskedHeading } from "./Reveal";
import { uslugi, sprzet, przypadki } from "../data/clinicData";
import sprzetBg from "../assets/gallery/mikroskop-zeiss-01.jpg";
import leczenieBg from "../assets/gallery/gabinet-02.jpg";

import sprzetUnit from "../assets/gallery/unit-sw300.jpg";
import sprzetMikroskop from "../assets/gallery/mikroskop-zeiss-02.jpg";
import sprzetAutoklaw from "../assets/gallery/autoklaw-lisa300.jpg";

const sprzetZdjecia = {
  unity: { src: sprzetUnit, alt: "Unit stomatologiczny Stern Weber 300", nazwa: "Stern Weber 300", opisKrotki: "Unit stomatologiczny", producent: "Stern Weber" },
  mikroskop: { src: sprzetMikroskop, alt: "Mikroskop stomatologiczny Carl Zeiss Pico", nazwa: "Carl Zeiss Pico", opisKrotki: "Mikroskop operacyjny", producent: "Carl Zeiss" },
  sterylizacja: { src: sprzetAutoklaw, alt: "Autoklaw Lisa 300 firmy W&H", nazwa: "Lisa 300, klasa B", opisKrotki: "Autoklaw z próżnią frakcjonowaną", producent: "W&H" },
};

const przypadkiImages = import.meta.glob("../assets/case-studies/*.jpg", { eager: true, import: "default" });
function przypadekImg(file) {
  return przypadkiImages[`../assets/case-studies/${file}`];
}

function Akordeon({ pozycje, zdjeciaMap }) {
  const [openIndex, setOpenIndex] = useState(0);
  const btnRefs = useRef([]);
  const pendingRef = useRef(null);

  const toggle = (idx) => {
    const btn = btnRefs.current[idx];
    pendingRef.current = { idx, beforeTop: btn ? btn.getBoundingClientRect().top : null };
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  useLayoutEffect(() => {
    const pending = pendingRef.current;
    pendingRef.current = null;
    if (!pending || pending.beforeTop == null) return;
    const btn = btnRefs.current[pending.idx];
    if (!btn) return;
    const afterTop = btn.getBoundingClientRect().top;
    const delta = afterTop - pending.beforeTop;
    if (delta === 0) return;
    const lenis = window.__lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(window.scrollY + delta, { immediate: true, force: true });
    } else {
      window.scrollBy(0, delta);
    }
  }, [openIndex]);

  return (
    <div className="space-y-3.5">
      {pozycje.map((p, idx) => {
        const isOpen = openIndex === idx;
        const noExpand = !p.opis?.length && !p.przypadki?.length && !p.elementy?.length;
        const foto = zdjeciaMap && zdjeciaMap[p.klucz];

        if (noExpand) {
          return (
            <div key={p.klucz} className="rounded-3xl border border-[#16211C]/[0.12] bg-white shadow-sm">
              <div className="p-4 sm:p-6">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#3F6B52]">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className="font-serif font-bold text-base sm:text-xl text-[#16211C] mt-0.5 leading-snug pb-0.5">{p.tytul}</h3>
              </div>
            </div>
          );
        }

        return (
          <div
            key={p.klucz}
            className={
              "rounded-3xl border transition-all duration-300 overflow-hidden bg-white " +
              (isOpen ? "border-[#3F6B52] shadow-lg ring-1 ring-[#3F6B52]/20" : "border-[#16211C]/[0.12] shadow-sm hover:border-[#3F6B52]/50")
            }
            style={{ contain: "layout paint" }}
          >
            <button
              ref={(el) => (btnRefs.current[idx] = el)}
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
            >
              <div className="min-w-0">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#3F6B52]">
                  {String(idx + 1).padStart(2, "0")}
                  {p.przypadki && (
                    <span className="text-[#16211C]/45 font-normal"> &nbsp;•&nbsp; {p.przypadki.length} {p.przypadki.length === 1 ? "przypadek" : "przypadki"}</span>
                  )}
                </span>
                <h3 className="font-serif font-bold text-base sm:text-xl text-[#16211C] mt-0.5 leading-snug pb-0.5">{p.tytul}</h3>
              </div>
              <div
                className={
                  "w-8 h-8 rounded-full flex items-center justify-center border shrink-0 transition-transform duration-350 " +
                  (isOpen ? "bg-[#16211C] text-[#F6F5F1] border-[#16211C] rotate-180" : "bg-[#F6F5F1] text-[#16211C]/60 border-[#16211C]/15")
                }
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <div className={"grid " + (isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden min-h-0">
                <div
                  className={
                    "px-4 pb-6 sm:px-6 sm:pb-8 pt-4 border-t border-[#16211C]/[0.10] bg-[#F6F5F1] transition-[opacity,transform] duration-300 ease-out " +
                    (isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1.5")
                  }
                >
                  {p.przypadki ? (
                    <div className="space-y-4">
                      {p.przypadki.map((c, i) => (
                        <div key={i} className="rounded-2xl border border-[#3F6B52]/25 bg-white p-4 sm:p-5">
                          {p.przypadki.length > 1 && (
                            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#3F6B52] mb-2">Przypadek {i + 1}</p>
                          )}
                          <p className="text-xs sm:text-sm text-[#16211C]/80 leading-relaxed">{c.text}</p>
                          {c.caption && <p className="text-xs sm:text-sm text-[#16211C]/60 leading-relaxed mt-2 italic">{c.caption}</p>}
                          {c.obrazy?.length > 0 && (
                            <div className="mt-3.5 flex gap-2.5 overflow-x-auto snap-x snap-mandatory pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                              {c.obrazy.map((file) => {
                                const src = przypadekImg(file);
                                if (!src) return null;
                                return (
                                  <img
                                    key={file}
                                    src={src}
                                    alt={p.tytul}
                                    loading="lazy"
                                    decoding="async"
                                    className="shrink-0 snap-center w-[38vw] sm:w-36 aspect-square object-cover rounded-xl border border-[#3F6B52]/20"
                                  />
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : foto ? (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                      <div className="lg:col-span-7 space-y-3.5 order-2 lg:order-1">
                        {p.opis?.length > 0 && (
                          <div className="rounded-2xl bg-white border border-[#16211C]/[0.10] p-4 sm:p-5 space-y-3">
                            {p.opis.map((akapit, i) => (
                              <p key={i} className="text-[#16211C]/80 text-xs sm:text-sm leading-relaxed">{akapit}</p>
                            ))}
                          </div>
                        )}
                        {p.listaTytul && (
                          <h4 className="text-xs sm:text-sm font-semibold text-[#16211C] mb-2.5 flex items-center gap-2 pt-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3F6B52] shrink-0" />
                            <span>{p.listaTytul}</span>
                          </h4>
                        )}
                        {p.elementy?.length > 0 && (
                          <div className="grid gap-2.5">
                            {p.elementy.map((item, i) => (
                              <div key={i} className="rounded-2xl bg-white border border-[#16211C]/[0.10] p-3 sm:p-3.5 flex items-start gap-2.5 shadow-sm">
                                <div className="w-5 h-5 rounded-full bg-[#E7EDE8] text-[#3F6B52] flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-3 h-3" strokeWidth={2.5} />
                                </div>
                                <span className="text-xs sm:text-sm text-[#16211C]/85 font-medium leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="pt-2 flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7EDE8] text-[#3F6B52] text-[11px] font-semibold">
                            <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                            Sprzęt gabinetowy
                          </span>
                          {foto.producent && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-[#16211C]/10 text-[#16211C]/70 text-[11px] font-medium shadow-xs">
                              Producent: {foto.producent}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="group/card relative rounded-2xl bg-white border border-[#3F6B52]/20 p-3 shadow-md hover:shadow-xl hover:border-[#3F6B52]/50 transition-all duration-300">
                          <div className="relative w-full h-48 sm:h-56 md:h-60 rounded-xl bg-gradient-to-br from-[#F6F5F1] via-white to-[#E7EDE8] border border-[#3F6B52]/10 flex items-center justify-center p-2 overflow-hidden">
                            <img src={foto.src} alt={foto.alt} className="relative z-10 w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out group-hover/card:scale-105" loading="lazy" />
                          </div>
                          <div className="pt-2.5 px-1.5 pb-0.5">
                            <p className="text-xs sm:text-sm font-semibold text-[#16211C] truncate leading-tight">{foto.nazwa || p.tytul}</p>
                            {foto.opisKrotki && <p className="text-[11px] text-[#3F6B52] font-medium truncate mt-0.5">{foto.opisKrotki}</p>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {p.opis?.length > 0 && (
                        <div className="rounded-2xl bg-white border border-[#16211C]/[0.10] p-4 sm:p-5 space-y-3 mb-4">
                          {p.opis.map((akapit, i) => (
                            <p key={i} className="text-[#16211C]/75 text-xs sm:text-sm leading-relaxed">{akapit}</p>
                          ))}
                        </div>
                      )}
                      {p.listaTytul && (
                        <h4 className="text-xs sm:text-sm font-semibold text-[#16211C] mb-2.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3F6B52] shrink-0" />
                          <span>{p.listaTytul}</span>
                        </h4>
                      )}
                      {p.elementy?.length > 0 && (
                        <div className="grid sm:grid-cols-2 gap-2.5 mb-3">
                          {p.elementy.map((item, i) => (
                            <div key={i} className="rounded-2xl bg-white border border-[#16211C]/[0.10] p-3 sm:p-3.5 flex items-start gap-2.5 shadow-sm hover:border-[#3F6B52]/40 hover:shadow-md transition-all">
                              <div className="w-5 h-5 rounded-full bg-[#E7EDE8] text-[#3F6B52] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3" strokeWidth={2.5} />
                              </div>
                              <span className="text-xs sm:text-sm text-[#16211C]/85 font-medium leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {p.podsumowanie?.length > 0 && (
                        <div className="rounded-2xl bg-white border border-[#16211C]/[0.10] p-4 sm:p-5 space-y-3 mt-3">
                          {p.podsumowanie.map((akapit, i) => (
                            <p key={i} className="text-[#16211C]/75 text-xs sm:text-sm leading-relaxed">{akapit}</p>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <>
      <section id="endodoncja" className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#E7EDE8] border-t border-[#3F6B52]/[0.14]">
        <div className="absolute inset-x-0 top-0 h-[620px] sm:h-[680px] lg:h-[760px] pointer-events-none select-none overflow-hidden" style={{ transform: "translateZ(0)", willChange: "transform", contain: "paint" }}>
          <img src={leczenieBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35 sm:opacity-45 object-center pointer-events-none" style={{ transform: "translateZ(0)" }} loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#E7EDE8]/85 via-[#E7EDE8]/70 to-[#E7EDE8]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="relative mb-12 sm:mb-16">
            <span aria-hidden="true" className="hidden md:block absolute -top-10 -right-4 lg:-right-10 font-serif text-[9rem] lg:text-[12rem] leading-none text-[#3F6B52]/[0.07] select-none pointer-events-none">02</span>
            <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 max-w-3xl">
              <MaskedHeading className="font-serif font-medium text-[#16211C] tracking-[-0.03em] leading-[0.94] text-5xl sm:text-6xl lg:text-[5.5vw]">
                Zakres leczenia
              </MaskedHeading>
            </div>
          </div>
          <Akordeon pozycje={uslugi} />
        </div>
      </section>

      <section id="przypadki" className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F6F5F1] border-t border-[#3F6B52]/[0.14]">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="relative mb-12 sm:mb-16">
            <span aria-hidden="true" className="hidden md:block absolute -top-10 -right-4 lg:-right-10 font-serif text-[9rem] lg:text-[12rem] leading-none text-[#3F6B52]/[0.07] select-none pointer-events-none">03</span>
            <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 max-w-3xl">
              <MaskedHeading className="font-serif font-medium text-[#16211C] tracking-[-0.03em] leading-[0.94] text-5xl sm:text-6xl lg:text-[5.5vw]">
                Dokumentacja przypadków
              </MaskedHeading>
            </div>
          </div>
          <Akordeon pozycje={przypadki} />
        </div>
      </section>

      <section id="sprzet" className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#E7EDE8] border-t border-[#3F6B52]/[0.14]">
        <div className="absolute inset-x-0 top-0 h-[620px] sm:h-[680px] lg:h-[760px] pointer-events-none select-none overflow-hidden" style={{ transform: "translateZ(0)", willChange: "transform", contain: "paint" }}>
          <img src={sprzetBg} alt="Nowoczesny sprzęt gabinetu stomatologicznego" className="absolute inset-0 w-full h-full object-cover opacity-60 sm:opacity-75 object-center pointer-events-none" style={{ transform: "translateZ(0)" }} loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#E7EDE8]/75 via-[#E7EDE8]/45 to-[#E7EDE8]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="relative mb-12 sm:mb-16">
            <span aria-hidden="true" className="hidden md:block absolute -top-10 -right-4 lg:-right-10 font-serif text-[9rem] lg:text-[12rem] leading-none text-[#3F6B52]/[0.07] select-none pointer-events-none">04</span>
            <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 max-w-3xl">
              <MaskedHeading className="font-serif font-medium text-[#16211C] tracking-[-0.03em] leading-[0.94] text-5xl sm:text-6xl lg:text-[5.5vw]">
                Czym pracujemy
              </MaskedHeading>
            </div>
          </div>
          <Akordeon pozycje={sprzet} zdjeciaMap={sprzetZdjecia} />
        </div>
      </section>
    </>
  );
}
