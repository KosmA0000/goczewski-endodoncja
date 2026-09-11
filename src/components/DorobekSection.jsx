import React from "react";
import { Newspaper, Users2, BookOpen } from "lucide-react";
import { MaskedHeading, StaggerReveal } from "./Reveal";
import { wyklady, publikacje, prasa, konferencje, szkolenie, wspolpraca } from "../data/clinicData";

function Timeline({ title, items }) {
  return (
    <div>
      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#3F6B52] mb-3">{title}</p>
      <div className="grid gap-2">
        {items.map((w) => (
          <div
            key={w.data + w.miejsce}
            className="rounded-2xl bg-[#F6F5F1] border border-[#16211C]/[0.08] p-3 sm:p-3.5 grid sm:grid-cols-[110px_1fr] gap-1.5 sm:gap-4"
          >
            <span className="font-mono text-xs text-[#3F6B52] shrink-0">{w.data}</span>
            <div>
              {w.tytul && <p className="text-xs sm:text-sm text-[#16211C]/80 leading-snug">{w.tytul}</p>}
              <p className="text-xs text-[#16211C]/55 mt-1">{w.miejsce}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DorobekSection() {
  return (
    <section id="dorobek" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F6F5F1] border-t border-[#3F6B52]/[0.14]">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-12 sm:mb-16">
          <span aria-hidden="true" className="hidden md:block absolute -top-10 -right-4 lg:-right-10 font-serif text-[9rem] lg:text-[12rem] leading-none text-[#3F6B52]/[0.07] select-none pointer-events-none">05</span>
          <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
            <MaskedHeading className="font-serif font-medium text-[#16211C] tracking-[-0.03em] leading-[0.94] text-5xl sm:text-6xl lg:text-[5.5vw] max-w-2xl">
              Dorobek naukowy
            </MaskedHeading>
          </div>
        </div>

        <StaggerReveal className="grid lg:grid-cols-2 gap-3.5 mb-3.5">
          <div className="rounded-3xl bg-white border border-[#3F6B52]/[0.14] p-6 shadow-sm">
            <Timeline title="Wykłady zagraniczne" items={wyklady.zagraniczne} />
          </div>
          <div className="rounded-3xl bg-white border border-[#3F6B52]/[0.14] p-6 shadow-sm">
            <Timeline title="Wykłady krajowe" items={wyklady.krajowe} />
          </div>
        </StaggerReveal>

        <StaggerReveal className="grid lg:grid-cols-2 gap-3.5">
          <div className="rounded-3xl bg-white border border-[#3F6B52]/[0.14] p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3.5">
              <BookOpen className="w-4 h-4 text-[#3F6B52]" strokeWidth={1.6} />
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#3F6B52]">Publikacje naukowe</p>
            </div>
            <div className="grid gap-2">
              {publikacje.map((p, i) => (
                <div key={p} className="rounded-2xl bg-[#F6F5F1] border border-[#16211C]/[0.08] p-3 flex gap-3">
                  <span className="font-mono text-[#3F6B52] text-xs shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xs sm:text-sm text-[#16211C]/80 leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-[#3F6B52]/[0.14] p-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-2 mb-3.5">
              <Newspaper className="w-4 h-4 text-[#3F6B52]" strokeWidth={1.6} />
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#3F6B52]">Prasa i telewizja</p>
            </div>
            <div className="grid gap-2 mb-4">
              {prasa.map((p) => (
                <div key={p.source} className="rounded-2xl bg-[#F6F5F1] border border-[#16211C]/[0.08] p-3">
                  <p className="text-sm font-semibold text-[#16211C]">
                    {p.source} <span className="text-[#16211C]/45 font-mono text-xs">— {p.date}</span>
                  </p>
                  <p className="text-xs text-[#16211C]/70 mt-1 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-2 flex items-center gap-2">
              <Users2 className="w-4 h-4 text-[#3F6B52] shrink-0" strokeWidth={1.6} />
              <p className="text-xs text-[#16211C]/65 leading-relaxed">
                <span className="font-semibold text-[#16211C]">Wykłady dla:</span> {konferencje.organizacje.join(" · ")}
              </p>
            </div>
          </div>
        </StaggerReveal>

        <div className="mt-8 rounded-3xl bg-[#16211C] text-[#F6F5F1] p-7 sm:p-10 border border-[#3F6B52]/30 shadow-md grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#A8C9B4] mb-2">{szkolenie.podtytul}</p>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F5F1] leading-snug mb-4">{szkolenie.tytul}</h3>
            <dl className="text-xs sm:text-sm space-y-2 text-[#F6F5F1]/80">
              <div className="flex gap-2"><dt className="text-[#F6F5F1]/50 w-28 shrink-0">Prowadzący</dt><dd>{szkolenie.prowadzacy}</dd></div>
              <div className="flex gap-2"><dt className="text-[#F6F5F1]/50 w-28 shrink-0">Miejsce</dt><dd>{szkolenie.miejsce}</dd></div>
              <div className="flex gap-2"><dt className="text-[#F6F5F1]/50 w-28 shrink-0">Czas trwania</dt><dd>{szkolenie.czas}</dd></div>
              <div className="flex gap-2"><dt className="text-[#F6F5F1]/50 w-28 shrink-0">Uczestnicy</dt><dd>{szkolenie.uczestnicy}</dd></div>
              <div className="flex gap-2"><dt className="text-[#F6F5F1]/50 w-28 shrink-0">Zapisy</dt><dd>{szkolenie.zapisy.osoba}, tel. {szkolenie.zapisy.tel}</dd></div>
            </dl>
          </div>
          <div className="grid gap-2.5">
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-3.5">
              <p className="text-xs font-semibold text-[#A8C9B4] mb-1.5">Część teoretyczna</p>
              <p className="text-xs text-[#F6F5F1]/75 leading-relaxed">{szkolenie.teoria.join(" · ")}</p>
            </div>
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-3.5">
              <p className="text-xs font-semibold text-[#A8C9B4] mb-1.5">Część praktyczna</p>
              <p className="text-xs text-[#F6F5F1]/75 leading-relaxed">{szkolenie.praktyka.join(" · ")}</p>
            </div>
          </div>
        </div>

        <div className="mt-3.5 rounded-3xl bg-white border border-[#3F6B52]/[0.14] p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#3F6B52]">Współpraca dla lekarzy</p>
              <p className="text-sm text-[#16211C]/75 mt-1 max-w-lg leading-relaxed">{wspolpraca.tekst}</p>
            </div>
          </div>
          <a
            href={`mailto:${wspolpraca.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3F6B52] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#345A44] transition-colors shrink-0 shadow-sm"
          >
            {wspolpraca.email}
          </a>
        </div>
      </div>
    </section>
  );
}
