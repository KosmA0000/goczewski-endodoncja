import React, { useState, useEffect } from "react";
import { Cookie, X, Check } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("goczewski_cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (choice) => {
    try {
      localStorage.setItem("goczewski_cookie_consent", choice);
    } catch {
      // ignore
    }
    window.dispatchEvent(new CustomEvent("goczewski-cookie-consent"));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Zgoda na pliki cookie"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[990]"
    >
      <div className="relative rounded-3xl bg-white/95 backdrop-blur-lg border border-[#3F6B52]/25 p-5 sm:p-6 shadow-[0_20px_50px_rgba(22,33,28,0.18)] ring-1 ring-black/5">
        <button
          type="button"
          onClick={() => handleConsent("dismissed")}
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#F6F5F1] border border-[#3F6B52]/15 text-[#16211C]/60 hover:text-[#3F6B52] hover:bg-[#E7EDE8] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Zamknij informację o cookies"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3.5 pr-6">
          <Cookie className="w-5 h-5 text-[#3F6B52] shrink-0 mt-1" strokeWidth={1.75} />
          <div>
            <h3 className="font-serif font-bold text-base text-[#16211C] leading-snug">
              Dbamy o Twoją prywatność
            </h3>
            <p className="text-xs text-[#16211C]/75 leading-relaxed mt-1.5">
              Nasz serwis wykorzystuje pliki cookie w celu zapewnienia prawidłowego działania strony
              oraz poprawnego ładowania mapy dojazdu do gabinetu. Korzystając ze strony wyrażasz
              zgodę na ich używanie zgodnie z aktualnymi ustawieniami swojej przeglądarki.
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3.5 border-t border-[#3F6B52]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={() => handleConsent("essential")}
            className="px-4 py-2 rounded-full border border-[#3F6B52]/30 text-[#16211C] hover:bg-[#E7EDE8] text-xs font-medium transition-colors text-center cursor-pointer"
          >
            Tylko niezbędne
          </button>
          <button
            type="button"
            onClick={() => handleConsent("all")}
            className="px-5 py-2 rounded-full bg-[#3F6B52] hover:bg-[#345A44] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 text-center cursor-pointer"
          >
            <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
            Akceptuję wszystkie
          </button>
        </div>
      </div>
    </div>
  );
}
