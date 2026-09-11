import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { MaskedHeading } from "./Reveal";
import { gallery } from "../data/clinicData";

const images = import.meta.glob("../assets/gallery/*.jpg", { eager: true, import: "default" });
function galleryImg(file) {
  return images[`../assets/gallery/${file}`];
}

const N = gallery.length;
const displayGallery = [...gallery, ...gallery, ...gallery];

export default function GallerySection() {
  const track = useRef(null);
  const cardOffsetsRef = useRef([]);
  const currentIndexRef = useRef(N);
  const isAnimatingRef = useRef(false);
  const [activeNum, setActiveNum] = useState(1);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const measure = useCallback(() => {
    const t = track.current;
    if (!t || !t.children || t.children.length < N * 3) return;
    const viewportW = t.parentElement ? t.parentElement.clientWidth : window.innerWidth;
    const offs = [];
    for (let i = 0; i < t.children.length; i++) {
      const child = t.children[i];
      offs.push(child.offsetLeft + child.offsetWidth / 2 - viewportW / 2);
    }
    cardOffsetsRef.current = offs;
    const curr = currentIndexRef.current;
    if (offs[curr] !== undefined) gsap.set(t, { x: -offs[curr] });
  }, []);

  useLayoutEffect(() => {
    measure();
    const raf = requestAnimationFrame(measure);
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    const imgs = track.current ? [...track.current.querySelectorAll("img")] : [];
    imgs.forEach((im) => im.addEventListener("load", measure));
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      imgs.forEach((im) => im.removeEventListener("load", measure));
    };
  }, [measure]);

  const nudge = useCallback((dir) => {
    const t = track.current;
    const offs = cardOffsetsRef.current;
    if (!t || !offs.length || isAnimatingRef.current) return;
    gsap.killTweensOf(t);

    let curr = currentIndexRef.current;
    if (curr >= 2 * N) {
      curr -= N;
      gsap.set(t, { x: -offs[curr] });
    } else if (curr < N) {
      curr += N;
      gsap.set(t, { x: -offs[curr] });
    }

    const nextTarget = curr + dir;
    currentIndexRef.current = nextTarget;
    isAnimatingRef.current = true;
    const normalized = ((nextTarget % N) + N) % N;
    setActiveNum(normalized + 1);

    gsap.to(t, {
      x: -offs[nextTarget],
      duration: 0.45,
      ease: "power2.out",
      onComplete: () => {
        if (nextTarget >= 2 * N) {
          const reset = nextTarget - N;
          currentIndexRef.current = reset;
          gsap.set(t, { x: -offs[reset] });
        } else if (nextTarget < N) {
          const reset = nextTarget + N;
          currentIndexRef.current = reset;
          gsap.set(t, { x: -offs[reset] });
        }
        isAnimatingRef.current = false;
      },
    });
  }, []);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40;
    if (diff > threshold) nudge(1);
    else if (diff < -threshold) nudge(-1);
  };

  return (
    <section id="galeria" className="relative py-14 sm:py-20 md:py-24 bg-[#F6F5F1] border-t border-[#3F6B52]/[0.14] overflow-hidden select-none">
      <div className="w-full">
        <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-8 sm:mb-12 w-full">
          <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <span aria-hidden="true" className="hidden md:block absolute -top-12 -right-4 lg:-right-10 font-serif text-[9rem] lg:text-[12rem] leading-none text-[#3F6B52]/[0.06] select-none pointer-events-none">06</span>
            <MaskedHeading className="relative font-serif font-medium text-[#16211C] tracking-[-0.03em] leading-[0.94] text-5xl sm:text-6xl lg:text-[5.5vw]">
              Gabinet
            </MaskedHeading>
          </div>

          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button type="button" onClick={() => nudge(-1)} aria-label="Poprzednie zdjęcie" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-[#3F6B52]/35 text-[#3F6B52] flex items-center justify-center hover:bg-[#3F6B52] hover:text-white shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer shrink-0">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#3F6B52] font-semibold px-3.5 py-1.5 bg-white rounded-full border border-[#3F6B52]/20 shadow-sm flex items-center gap-1.5">
              <span>{String(activeNum).padStart(2, "0")}</span>
              <span className="text-[#3F6B52]/40">/</span>
              <span>{String(N).padStart(2, "0")}</span>
            </div>
            <button type="button" onClick={() => nudge(1)} aria-label="Następne zdjęcie" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-[#3F6B52]/35 text-[#3F6B52] flex items-center justify-center hover:bg-[#3F6B52] hover:text-white shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer shrink-0">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className="w-full overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y">
          <div ref={track} className="flex gap-4 sm:gap-6 md:gap-7 px-4 sm:px-10 w-max will-change-transform transform-gpu">
            {displayGallery.map((g, i) => {
              const src = galleryImg(g.file);
              if (!src) return null;
              return (
                <figure key={`${g.file}-${i}`} className="shrink-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-[#E7EDE8] border border-[#3F6B52]/[0.14] shadow-sm w-[78vw] sm:w-[34vw] md:w-[27vw] max-w-[460px]">
                  <img
                    src={src}
                    alt={g.label}
                    loading={i >= N && i < 2 * N ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-[52vw] sm:h-[24vw] md:h-[19vw] max-h-[340px] min-h-[190px] object-cover filter brightness-[0.98] hover:scale-[1.03] transition-transform duration-500 ease-out pointer-events-none"
                  />
                </figure>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center items-center gap-1.5 mt-5 px-4">
          {gallery.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                const currentNorm = activeNum - 1;
                const diff = idx - currentNorm;
                if (diff !== 0) nudge(diff);
              }}
              aria-label={`Przejdź do zdjęcia ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeNum - 1 ? "w-6 bg-[#3F6B52]" : "w-1.5 bg-[#3F6B52]/25 hover:bg-[#3F6B52]/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
