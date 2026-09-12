import React from "react";
import { CalendarCheck, CheckCircle2, Globe } from "lucide-react";
import { MaskedHeading, StaggerReveal } from "./Reveal";
import { clinic, umowWizyte } from "../data/clinicData";

export default function ContactSection() {
  const mapQuery = encodeURIComponent(clinic.ulica + " " + clinic.kod);

  return (
    <section id="kontakt" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F6F5F1]">
      <div className="max-w-5xl mx-auto">
        <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <span aria-hidden="true" className="hidden md:block absolute -top-24 right-0 lg:right-4 font-serif text-[9rem] lg:text-[12rem] leading-none text-[#3F6B52]/[0.06] select-none pointer-events-none">07</span>
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#3F6B52]/20 text-xs font-semibold uppercase tracking-widest text-[#3F6B52] shadow-sm">
            <CalendarCheck className="w-3.5 h-3.5" />
            {umowWizyte.tytul}
          </div>
          <MaskedHeading className="relative font-serif font-medium text-[#16211C] tracking-[-0.03em] leading-[0.98] text-5xl sm:text-6xl lg:text-[4.6vw]">
            Rejestracja i dane kontaktowe
          </MaskedHeading>
          <p className="relative text-sm sm:text-base text-[#16211C]/75 max-w-2xl mx-auto">{umowWizyte.podtytul}</p>
        </div>

        <StaggerReveal className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-3xl bg-[#16211C] text-[#F6F5F1] p-7 border border-[#3F6B52]/40 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#A8C9B4]">{umowWizyte.rejestracjaTelefoniczna}</h3>
              <p className="text-xs text-[#F6F5F1]/70 mt-1 mb-4">Zadzwoń do nas, aby ustalić dogodny termin wizyty:</p>
              <div className="space-y-2.5">
                <a href={clinic.telefonHref} className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/[0.08] border border-white/10 hover:border-[#A8C9B4] hover:bg-white/[0.14] transition-all group">
                  <span className="text-xs text-[#F6F5F1]/80">Telefon stacjonarny:</span>
                  <span className="font-serif text-lg font-medium text-[#F6F5F1] group-hover:text-[#A8C9B4] transition-colors tabular-nums">{clinic.telefon}</span>
                </a>
                <a href={clinic.komorkaHref} className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/[0.08] border border-white/10 hover:border-[#A8C9B4] hover:bg-white/[0.14] transition-all group">
                  <span className="text-xs text-[#F6F5F1]/80">Telefon komórkowy:</span>
                  <span className="font-serif text-lg font-medium text-[#F6F5F1] group-hover:text-[#A8C9B4] transition-colors tabular-nums">{clinic.komorka}</span>
                </a>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#F6F5F1]/60">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#A8C9B4] shrink-0" />
              <span>Szybka rezerwacja telefoniczna</span>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-[#3F6B52]/[0.14] p-7 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#3F6B52]">{umowWizyte.emailTytul}</h3>
              <p className="text-xs sm:text-sm text-[#16211C]/80 mt-2 leading-relaxed">{clinic.emailOpis}</p>
              <div className="mt-4">
                <a href={"mailto:" + clinic.email} className="block p-3 rounded-2xl bg-[#F6F5F1] border border-[#16211C]/10 hover:border-[#3F6B52] transition-colors">
                  <span className="block text-[10px] uppercase font-bold text-[#3F6B52]">Adres:</span>
                  <span className="font-serif text-sm sm:text-base text-[#16211C] break-all">{clinic.email}</span>
                </a>
              </div>
              <a
                href={"https://" + clinic.stronaPrywatna}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 p-3 rounded-2xl bg-[#F6F5F1] border border-[#16211C]/10 hover:border-[#3F6B52] transition-colors"
              >
                <Globe className="w-4 h-4 text-[#3F6B52] shrink-0" strokeWidth={1.6} />
                <span className="text-sm text-[#16211C] break-all">{clinic.stronaPrywatna}</span>
              </a>
            </div>
          </div>
        </StaggerReveal>

        <div className="mt-4 rounded-3xl bg-white border border-[#3F6B52]/[0.14] p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#3F6B52]">Adres gabinetu:</p>
              <address className="not-italic font-serif text-base sm:text-lg text-[#16211C] mt-0.5 leading-snug">
                {clinic.ulica}, {clinic.kod}
              </address>
            </div>
          </div>
          <a
            href={"https://www.google.com/maps?q=" + mapQuery}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3F6B52] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#345A44] transition-colors shrink-0 shadow-sm"
          >
            Nawiguj w Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
