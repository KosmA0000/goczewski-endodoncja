import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'site', 'index.html');

const css = `
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;900&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');

:root{
  --primary:#0891B2;
  --primary-ink:#0E5A6E;
  --secondary:#22D3EE;
  --accent:#059669;
  --accent-ink:#046C50;
  --background:#FFFFFF;
  --tint:#ECFEFF;
  --surface:#FFFFFF;
  --foreground:#123B47;
  --muted:#4C6672;
  --muted-bg:#F0FAFC;
  --border:#CFF3F8;
  --ring:#0891B2;
  --radius:14px;
  --shadow:0 10px 40px -12px rgba(8,60,73,.18);
  --font-display:'Lexend',system-ui,sans-serif;
  --font-body:'Source Sans 3',system-ui,sans-serif;
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;background:var(--background);color:var(--foreground);
  font-family:var(--font-body);line-height:1.6;font-size:16px;
  -webkit-tap-highlight-color:transparent;
}
html.js body{cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M4 2 L4 20 L9 15.5 L12.5 22 L15 20.5 L11.5 14 L19 14 Z' fill='%230891B2' stroke='white' stroke-width='1.2'/%3E%3C/svg%3E") 4 2, auto !important;}
@media (hover:hover) and (pointer:fine){
  html.js a, html.js button, html.js summary, html.js input, html.js textarea{
    cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='34' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='9' fill='%23059669' fill-opacity='.85' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E") 17 17, pointer !important;
  }
}
img{max-width:100%;display:block}
a{color:inherit}
h1,h2,h3,h4{font-family:var(--font-display);margin:0;letter-spacing:-.01em}
p{margin:0 0 1em}
.container{width:min(1120px,92%);margin-inline:auto}
.skip-link{position:absolute;left:-999px;top:0;background:var(--primary);color:#fff;padding:.75em 1.25em;z-index:200;border-radius:0 0 8px 0}
.skip-link:focus{left:0}
:focus-visible{outline:3px solid var(--primary);outline-offset:2px}

.progress-bar{position:fixed;top:0;left:0;height:3px;width:100%;background:linear-gradient(90deg,var(--primary),var(--accent));transform:scaleX(0);transform-origin:0 0;z-index:100;transition:transform .05s linear}

header.site{position:sticky;top:0;z-index:90;background:rgba(255,255,255,.88);backdrop-filter:blur(10px);border-bottom:1px solid var(--border);transition:padding .25s ease,box-shadow .25s ease}
header.site .bar{display:flex;align-items:center;justify-content:space-between;padding:18px 0;transition:padding .25s ease}
header.site.is-scrolled .bar{padding:10px 0}
header.site.is-scrolled{box-shadow:0 4px 24px -8px rgba(8,60,73,.15)}
.brand{display:flex;align-items:center;gap:.6em;font-family:var(--font-display);font-weight:700;font-size:1.05rem;color:var(--primary-ink);text-decoration:none}
.brand img{width:38px;height:38px;border-radius:50%;object-fit:cover;transition:width .25s ease,height .25s ease}
header.site.is-scrolled .brand img{width:30px;height:30px}
nav.main{display:flex;gap:1.6em;list-style:none;margin:0;padding:0}
nav.main a{text-decoration:none;font-size:.94rem;font-weight:500;color:var(--muted);padding:.3em 0;border-bottom:2px solid transparent;transition:color .2s ease,border-color .2s ease}
nav.main a:hover,nav.main a.active{color:var(--primary-ink);border-color:var(--accent)}
.nav-wrap{display:flex;align-items:center;gap:2em}
.call-pill{display:inline-flex;align-items:center;gap:.5em;background:var(--accent);color:#fff;padding:.55em 1.1em;border-radius:999px;font-weight:600;font-size:.92rem;text-decoration:none;white-space:nowrap;transition:background .2s ease,transform .2s ease}
.call-pill:hover{background:var(--accent-ink);transform:translateY(-1px)}
.menu-toggle{display:none}

section{padding:clamp(3.5rem,7vw,6.5rem) 0;position:relative}
section.tint{background:var(--tint)}
.eyebrow{display:inline-block;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--accent-ink);font-weight:700;margin-bottom:.9em}
h2.section-title{font-size:clamp(1.7rem,3.4vw,2.5rem);font-weight:700;color:var(--primary-ink);margin-bottom:.5em}
.lede{font-size:1.08rem;color:var(--muted);max-width:60ch}

.hero{position:relative;overflow:clip;padding-top:clamp(3rem,8vw,6rem)}
.hero-blob{position:absolute;top:-140px;right:-160px;width:600px;height:600px;border-radius:50%;
  background:radial-gradient(circle at 30% 30%,var(--secondary),transparent 70%);opacity:.35;filter:blur(10px);pointer-events:none;z-index:0}
.hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:1.1fr .9fr;gap:3rem;align-items:center}
.hero h1{font-size:clamp(2.1rem,4.6vw,3.4rem);color:var(--primary-ink);line-height:1.08;margin-bottom:.4em}
.hero .tagline{color:var(--accent-ink);font-weight:600;font-size:1.05rem;margin-bottom:1em}
.hero p.intro{color:var(--muted);font-size:1.05rem;max-width:56ch}
.hero-ctas{display:flex;gap:.9em;margin-top:1.6em;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:.5em;padding:.85em 1.5em;border-radius:10px;font-weight:600;text-decoration:none;font-size:.98rem;transition:transform .2s ease,box-shadow .2s ease,background .2s ease;border:2px solid transparent;touch-action:manipulation}
.btn-primary{background:var(--accent);color:#fff}
.btn-primary:hover{background:var(--accent-ink);transform:translateY(-2px);box-shadow:var(--shadow)}
.btn-ghost{border-color:var(--border);color:var(--primary-ink);background:#fff}
.btn-ghost:hover{border-color:var(--primary);transform:translateY(-2px)}
.hero-photo{position:relative;border-radius:22px;overflow:hidden;box-shadow:var(--shadow)}
.hero-photo img{width:100%;height:420px;object-fit:cover}
.hero-badges{display:flex;gap:1.6rem;margin-top:2.4rem;flex-wrap:wrap}
.hero-badge{font-size:.85rem;color:var(--muted);max-width:200px;padding-left:1.1em;border-left:3px solid var(--accent)}

.mobile-callbar{display:none;position:fixed;bottom:0;left:0;right:0;z-index:95;background:var(--primary-ink);color:#fff;padding:.85em 1em;text-align:center;font-weight:600;text-decoration:none;font-size:.98rem;box-shadow:0 -6px 20px rgba(0,0,0,.15)}

.reveal{opacity:1;transform:none}
html.js .reveal{opacity:0;transform:translateY(16px)}
html.js .reveal.in{opacity:1;transform:none;transition:opacity .5s ease,transform .5s ease}
html.js .reveal.dir-l{transform:translateX(-24px)}
html.js .reveal.dir-l.in{transform:none}
html.js .reveal.dir-r{transform:translateX(24px)}
html.js .reveal.dir-r.in{transform:none}
.scrollcard{--p:0}
html.js .scrollcard{opacity:calc(1 - var(--p,0)*.6);transform:scale(calc(1 - var(--p,0)*.06))}

.highlights{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem}
.highlight-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:1.6rem;box-shadow:var(--shadow)}
.highlight-card svg{color:var(--accent);margin-bottom:.7em}
.highlight-card p{color:var(--muted);margin:0;font-size:.96rem}

.bio-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:3rem;align-items:start}
.bio-photo{border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow)}
.bio-photo img{width:100%;height:340px;object-fit:cover}
.bio-list{margin:1.2em 0}
.bio-list h4{font-size:.95rem;text-transform:uppercase;letter-spacing:.06em;color:var(--accent-ink);margin-bottom:.5em}
.bio-list ul{margin:0 0 1.4em;padding-left:1.2em;color:var(--muted)}
.bio-list li{margin-bottom:.3em}
.bio-link{color:var(--primary);font-weight:600;text-decoration:underline;text-underline-offset:3px}

.accordion-group{border-top:1px solid var(--border)}
details.accordion{border-bottom:1px solid var(--border)}
details.accordion summary{list-style:none;cursor:pointer;padding:1.15em .2em;display:flex;align-items:center;justify-content:space-between;gap:1em;font-family:var(--font-display);font-weight:600;color:var(--primary-ink);touch-action:manipulation}
details.accordion summary::-webkit-details-marker{display:none}
.accordion-title{font-size:1.02rem}
.accordion-ico{flex:0 0 auto;transition:transform .25s ease;color:var(--accent)}
details.accordion[open] .accordion-ico{transform:rotate(90deg)}
.accordion-body{padding:0 .2em 1.4em;color:var(--muted);animation:fadein .3s ease}
.accordion-body p{margin:0 0 .7em}
.accordion-body .meta-row{display:flex;flex-wrap:wrap;gap:.4em 1.6em;margin:.8em 0}
.accordion-body .meta-row div{font-size:.92rem}
.accordion-body .meta-row strong{color:var(--primary-ink);display:block;font-size:.78rem;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.15em}
.accordion-with-img{display:flex;gap:1.2rem;align-items:flex-start;flex-wrap:wrap}
.accordion-with-img .txt{flex:1 1 260px}
.accordion-with-img img{flex:0 0 180px;width:180px;height:135px;object-fit:cover;border-radius:10px}
@keyframes fadein{from{opacity:0}to{opacity:1}}
.event-item{margin-bottom:1.1em;padding-bottom:1.1em;border-bottom:1px dashed var(--border)}
.event-item:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
.event-date{font-weight:700;color:var(--accent-ink);font-size:.85rem;display:block;margin-bottom:.2em}

.gallery-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1rem}
.gallery-item{border-radius:12px;overflow:hidden;position:relative;box-shadow:var(--shadow)}
.gallery-item img{width:100%;height:150px;object-fit:cover;transition:transform .4s ease}
.gallery-item:hover img{transform:scale(1.06)}
.gallery-cap{position:absolute;left:0;right:0;bottom:0;background:linear-gradient(0deg,rgba(8,60,73,.85),transparent);color:#fff;font-size:.78rem;padding:.6em .7em .4em;font-weight:600}

.team-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.4rem}
.team-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:1.5rem;text-align:center}
.team-card .avatar{width:64px;height:64px;border-radius:50%;background:var(--tint);display:flex;align-items:center;justify-content:center;margin:0 auto .8em;color:var(--primary)}
.team-card h4{font-size:1.02rem;color:var(--primary-ink)}
.team-card p{color:var(--muted);font-size:.88rem;margin:.3em 0 0}

.case-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:.8rem}
.case-grid img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:10px;border:1px solid var(--border)}

.split{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center}
.split img{border-radius:var(--radius);box-shadow:var(--shadow);width:100%;height:320px;object-fit:cover}

.cta-band{background:linear-gradient(120deg,var(--primary-ink),var(--primary));color:#fff;border-radius:20px;padding:clamp(2rem,5vw,3.5rem);display:flex;align-items:center;justify-content:space-between;gap:2rem;flex-wrap:wrap}
.cta-band h3{font-size:clamp(1.4rem,2.6vw,1.9rem);margin-bottom:.3em}
.cta-band p{color:rgba(255,255,255,.85);margin:0}
.cta-band .btn-primary{background:var(--accent)}
.cta-band .btn-primary:hover{background:var(--accent-ink)}

.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:3rem}
.contact-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:2rem;box-shadow:var(--shadow)}
.contact-row{display:flex;gap:.9em;margin-bottom:1.2em;align-items:flex-start}
.contact-row svg{flex:0 0 auto;color:var(--accent);margin-top:.15em}
.contact-row strong{display:block;color:var(--primary-ink);font-size:.8rem;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.2em}
.map-cta{display:flex;align-items:center;justify-content:center;background:var(--tint);border:1px solid var(--border);border-radius:var(--radius);min-height:260px;text-align:center;padding:2rem}
.map-cta a{color:var(--primary);font-weight:700;text-decoration:underline}

footer.site{background:var(--primary-ink);color:#fff;padding:3rem 0 2rem}
footer.site .foot-grid{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:2rem;margin-bottom:2rem}
footer.site h5{font-family:var(--font-display);font-size:.95rem;margin-bottom:.8em;color:#fff}
footer.site p, footer.site a{color:rgba(255,255,255,.75);text-decoration:none;font-size:.92rem}
footer.site a:hover{color:#fff}
footer.site .foot-bottom{border-top:1px solid rgba(255,255,255,.15);padding-top:1.4em;font-size:.82rem;color:rgba(255,255,255,.6);display:flex;justify-content:space-between;flex-wrap:wrap;gap:.5em}

@media (max-width:860px){
  nav.main{position:fixed;inset:64px 0 0 0;background:#fff;flex-direction:column;padding:2rem 1.4rem;gap:1.4rem;transform:translateX(100%);transition:transform .3s ease;overflow-y:auto}
  nav.main.open{transform:translateX(0)}
  nav.main a{font-size:1.1rem}
  .nav-wrap .call-pill{display:none}
  .menu-toggle{display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:8px;border:1px solid var(--border);background:#fff}
  .hero-grid{grid-template-columns:1fr}
  .hero-photo img{height:260px}
  .highlights{grid-template-columns:1fr}
  .bio-grid{grid-template-columns:1fr}
  .split{grid-template-columns:1fr;gap:1.5rem}
  .contact-grid{grid-template-columns:1fr}
  footer.site .foot-grid{grid-template-columns:1fr;gap:1.6rem}
  .case-grid{grid-template-columns:repeat(3,1fr)}
  body{padding-bottom:60px}
  .mobile-callbar{display:block}
  .accordion-with-img img{width:100%;flex-basis:100%;height:180px}
}

@media (prefers-reduced-motion: reduce){
  *{animation:none !important;transition:none !important}
  html.js .reveal{opacity:1 !important;transform:none !important}
  .scrollcard{opacity:1 !important;transform:none !important}
  html{scroll-behavior:auto}
}
`;

// ---------- copy deck (1:1 from goczewski.pl) ----------
const phone1 = '+48 (58) 683 22 71';
const phone2 = '+48 609 460 474';
const phoneHref = 'tel:+48586832271';
const email = 'gabinet@goczewski.pl';

const highlights = [
  'Praktyka specjalizuje się w endodoncji i chirurgii endodontycznej.',
  'Zapraszamy na kursy z zakresu endodncji i stomatologii mikroskopowej.',
  'Gabinet rekomendowany przez Polskie Stowarzyszenie Stomatologii Mikroskopowej.'
];

const ctaFoot = [
  'W celu umówienia się na wizytę wypełnij formularz on-line lub skontaktuj się z nami telefonicznie.',
  'Zapraszamy na indywidualne oraz grupowe szkolenia z zakresu stomatologii mikroskopowej i endodoncji.',
  'Zapraszamy lekarzy do współpracy w zakresie leczenia kanałowego i powikłań powstałych podczas leczenia endodontycznego.'
];

const galleryRooms = [
  ['gabinet-1.jpg','Gabinet stomatologiczny'],
  ['gabinet-2.jpg','Gabinet stomatologiczny'],
  ['higiena.jpg','Gabinet higieny'],
  ['biuro-1.jpg','Biuro'],
  ['biuro-2.jpg','Biuro'],
  ['recepcja.jpg','Recepcja'],
  ['poczekalnia-1.jpg','Poczekalnia'],
  ['poczekalnia-2.jpg','Poczekalnia'],
  ['poczekalnia-3.jpg','Poczekalnia'],
  ['toaleta.jpg','Toaleta dla pacjentów'],
  ['wejscie.jpg','Wejście'],
  ['autoklaw.jpg','Autoklaw'],
  ['unit.jpg','Unit Stern Weber 300'],
  ['mikroskop-1.jpg','Mikroskop Carl Zeiss'],
  ['autoklaw-lisa.jpg','Autoklaw W&H Lisa 300'],
  ['luk-plazmowy.jpg','Łuk plazmowy'],
  ['rtg.jpg','RTG panoramiczny'],
  ['mikroskop-2.jpg','Mikroskop Carl Zeiss'],
];

const procedureSteps = [
  ['zabieg-1.jpg','Przygotowanie do zabiegu'],
  ['zabieg-2.jpg','Znieczulenie'],
  ['zabieg-3.jpg','Leczenie endodontyczne'],
  ['zabieg-4.jpg','Zdjęcie kontrolne RVG'],
];

function icon(name){
  const icons = {
    tooth:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3c-2.2 0-3 1.2-4.5 1.2S5 3 3.7 3.7C2.3 4.4 2 6.2 2.3 8c.4 2.3 1.7 3 1.9 5.6.2 2.7 1 6.4 2.6 6.4 1.7 0 1.5-4.5 2.6-4.5s.9 4.5 2.6 4.5c1.6 0 2.4-3.7 2.6-6.4.2-2.6 1.5-3.3 1.9-5.6.3-1.8 0-3.6-1.4-4.3C15 3 14.2 4.2 12 3Z"/></svg>`,
    course:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>`,
    badge:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5"/></svg>`,
    phone:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.5a2 2 0 0 1 2-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z"/></svg>`,
    mail:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>`,
    pin:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    chevron:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m9 6 6 6-6 6"/></svg>`,
    user:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>`,
  };
  return icons[name] || '';
}

function accordion(id, title, bodyHtml, groupName){
  return `<details class="accordion" name="${groupName}"${id==='first'?' open':''}>
    <summary><span class="accordion-title">${title}</span><span class="accordion-ico">${icon('chevron')}</span></summary>
    <div class="accordion-body">${bodyHtml}</div>
  </details>`;
}

const html = `<!doctype html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<script>document.documentElement.className+=' js'</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Stomatolog Pruszcz Gdański | Praktyka Stomatologiczna dr n. med. Maciej Goczewski</title>
<meta name="description" content="Prywatna Praktyka Stomatologiczna w Pruszczu Gdańskim - lek. stom. Maciej Goczewski. Kompleksowe leczenie stomatologiczne przy wykorzystaniu mikroskopu.">
<meta name="theme-color" content="#0891B2">
<meta name="color-scheme" content="light">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<style>${css}</style>
</head>
<body>
<a href="#main-content" class="skip-link">Przejdź do treści</a>
<div class="progress-bar" id="progressBar"></div>

<header class="site" id="siteHeader">
  <div class="container bar">
    <a href="#hero" class="brand"><img src="img/gabinet-1.jpg" alt="" width="38" height="38">Praktyka Stomatologiczna<br>dr n. med. Maciej Goczewski</a>
    <div class="nav-wrap">
      <nav class="main" id="mainNav">
        <a href="#o-lekarzu">O lekarzu</a>
        <a href="#endodoncja">Endodoncja</a>
        <a href="#sterylizacja">Sterylizacja</a>
        <a href="#zespol">Zespół</a>
        <a href="#galeria">Galeria</a>
        <a href="#szkolenia">Szkolenia</a>
        <a href="#wspolpraca">Współpraca</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
      <a class="call-pill" href="${phoneHref}">${icon('phone')} ${phone1}</a>
      <button class="menu-toggle" id="menuToggle" aria-label="Otwórz menu" aria-expanded="false" aria-controls="mainNav">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </div>
  </div>
</header>

<main id="main-content">

<section class="hero" id="hero">
  <div class="hero-blob" id="heroBlob"></div>
  <div class="container hero-grid">
    <div class="reveal dir-l">
      <span class="eyebrow">Stomatolog Pruszcz Gdański</span>
      <h1>Witam na stronie mojej prywatnej praktyki stomatologicznej.</h1>
      <p class="tagline">Dr n. med. Maciej Goczewski — leczenie kanałowe pod mikroskopem</p>
      <p class="intro">Gabinet istnieje od 1999 roku. W swojej praktyce z zastosowaniem mikroskopu stomatologicznego wyspecjalizowałem się głównie w endodoncji. Jestem także autorem publikacji naukowych oraz licznych wykładów zagranicznych z zakresu stomatologii mikroskopowej i endodoncji.</p>
      <p class="intro">We współczesnej stomatologii to przede wszystkim wykorzystanie nowoczesnych rozwiązań technicznych wpływa na jakość, standard i skuteczność leczenia. Dlatego też w mojej pracy zawodowej istotne znaczenie ma nie tylko rozwój merytoryczny, ale przede wszystkim zastosowanie nowoczesnych metod leczenia, co znacząco przyczynia się do powodzenia przeprowadzanych zabiegów.</p>
      <div class="hero-ctas">
        <a class="btn btn-primary" href="${phoneHref}">${icon('phone')} Zadzwoń: ${phone1}</a>
        <a class="btn btn-ghost" href="#kontakt">Umów wizytę</a>
      </div>
      <div class="hero-badges">
        <div class="hero-badge">Gabinet istnieje od 1999 roku</div>
        <div class="hero-badge">Rekomendacja Polskiego Stowarzyszenia Stomatologii Mikroskopowej</div>
        <div class="hero-badge">Prezes Polskiego Stowarzyszenia Stomatologii Mikroskopowej</div>
      </div>
    </div>
    <div class="hero-photo reveal dir-r" data-parallax="0.08">
      <img src="img/mikroskop-1.jpg" alt="Mikroskop Carl Zeiss w gabinecie stomatologicznym" width="800" height="600" fetchpriority="high">
    </div>
  </div>
</section>

<section class="tint">
  <div class="container">
    <div class="highlights">
      ${highlights.map((h,i)=>`<div class="highlight-card reveal scrollcard" style="transition-delay:${i*80}ms">${icon(['tooth','course','badge'][i])}<p>${h}</p></div>`).join('\n')}
    </div>
  </div>
</section>

<section id="o-lekarzu">
  <div class="container">
    <span class="eyebrow reveal">O lekarzu</span>
    <h2 class="section-title reveal">Dr n. med. Maciej Goczewski</h2>
    <div class="bio-grid">
      <div class="bio-photo reveal dir-l"><img src="img/zabieg-3.jpg" alt="Dr n. med. Maciej Goczewski podczas zabiegu leczenia endodontycznego pod mikroskopem" width="800" height="600" loading="lazy"></div>
      <div class="reveal dir-r">
        <div class="bio-list">
          <h4>Wykształcenie</h4>
          <ul><li>Akademia Medyczna w Gdańsku</li></ul>
          <h4>Pełnione funkcje</h4>
          <ul>
            <li>Prezes Polskiego Stowarzyszenia Stomatologii Mikroskopowej</li>
            <li>Prezes MMG sp. z o. o.</li>
            <li>Kierownik NZOZ MMG</li>
            <li>Prywatna praktyka stomatologiczna</li>
          </ul>
          <h4>Członkowstwo w organizacjach</h4>
          <ul>
            <li>Polskie Stowarzyszenie Stomatologii Mikroskopowej</li>
            <li>Polskie Stowarzyszenie Implantologii Estetycznej</li>
            <li>Polskie Towarzystwo Stomatologiczne</li>
          </ul>
        </div>
        <p>Strona Prywatna: <a class="bio-link" href="http://www.maciejgoczewski.com" target="_blank" rel="noopener">www.maciejgoczewski.com</a></p>
      </div>
    </div>

    <div style="margin-top:3rem" class="reveal">
      <h3 style="font-family:var(--font-display);color:var(--primary-ink);margin-bottom:.6em;font-size:1.3rem">Osiągnięcia i publikacje</h3>
      <div class="accordion-group">
        ${accordion('first','Wygłoszone przeze mnie wykłady zagraniczne', `
          <div class="event-item"><span class="event-date">1-3.02 2011</span><a href="#" class="bio-link">Konferencja AEEDC w Dubaju</a><p style="margin-top:.5em">Tematy moich wykładów:</p><ul><li>1) Six vs Four Handed Dentistry Utilizing Microscope</li><li>2) Dental Ergonomics</li><li>3) Microscope in Dentistry</li></ul></div>
          <div class="event-item"><span class="event-date">04.05.2007</span><p>Konferencja w Monachium zorganizowana przez Niemieckie Towarzystwo Endodontyczne i Europejską Federację Stowarzyszeń Stomatologii Mikroskopowej. Temat mojego wykładu: Six versus four handed team working approach under the operating microscope.</p></div>
          <div class="event-item"><span class="event-date">19.06.2006</span><p>Konferencja w Amsterdamie podczas corocznego międzynarodowego zjazdu światowej organizacji endodontycznej ROOTS. Temat wykładu: Team ergonomic treatment delivery for endodontics.</p></div>
          <div class="event-item"><span class="event-date">03.06.2006</span><p>Konferencja w Porto (Portugalia) zorganizowana przez Europejskie Stowarzyszenie Stomatologii Ergonomicznej. Temat wykładu: How to incorporate a microscope in a private practice.</p></div>
        `,'osiagniecia-accordion')}
        ${accordion('','Wygłoszone przeze mnie wykłady w Polsce', `
          <div class="event-item"><span class="event-date">21.11.2008</span><p>I Gdańska Konferencja Stomatologiczna organizowana przez Gdańską Izbę Lekarską. Temat prezentacji: Przyczyny błędów popełnianych podczas leczenia stomatologicznego i ich eliminowanie.</p></div>
          <div class="event-item"><span class="event-date">07.06.2008</span><p>Konferencja organizowana przez Forum Dentysty Praktyka. Temat wykładu: Zasady ergonomii pracy członków zespołu stomatologicznego.</p></div>
          <div class="event-item"><span class="event-date">19.10.2005</span><p>Wykład dla Polskiego Towarzystwa Stomatologicznego. Akademia Medyczna w Gdańsku.</p></div>
          <div class="event-item"><span class="event-date">14.05.2005</span><p>Pierwszy zjazd Polskiego Towarzystwa Endodontycznego. Wykład na temat: Jak przyspieszyć leczenie endodontyczne.</p></div>
        `,'osiagniecia-accordion')}
        ${accordion('','Publikacje naukowe', `
          <ul>
            <li>Mikroskop operacyjny w stomatologii. Techniki pracy na 6 rąk w endodoncji.</li>
            <li>Mikroskop operacyjny w stomatologii. Obciążenie statyczne zespołu stomatologicznego w technice pracy na sześć rąk.</li>
            <li>Mikroskop operacyjny w stomatologii. Pozycja pacjenta, operatora i asyst w technice pracy na sześć rąk.</li>
            <li>Analiza obciążeń układu nerwowego i mięśniowo-szkieletowego u operatorów w stomatologii pracujących w mikroskopie operacyjnym.</li>
            <li>Mikroskop operacyjny w stomatologii. Trzymanie i przekazywanie instrumentów w technice pracy na sześć rąk.</li>
            <li>Samobójstwo wśród dentystów. Wpływ stresu, wypalenia zawodowego, zaburzeń lękowych...</li>
          </ul>
        `,'osiagniecia-accordion')}
        ${accordion('','Konferencje', `
          <p>W mojej pracy zawodowej miałem przyjemność być wykładowcą podczas międzynarodowych seminariów organizowanych przez najbardziej liczące się światowe organizacje stomatologiczne.</p>
          <p>Wykładałem m.in. dla <strong>Niemieckiego Towarzystwa Endodontycznego</strong>, <strong>Europejskiego Stowarzyszenia Stomatologii Ergonomicznej, Europejskiej Federacji Stowarzyszeń Stomatologii Mikroskopowej</strong> oraz <strong>ROOTS</strong>.</p>
          <p>Lokalizacje: Dubai, Portugalia, Monachium, Wrocław, Amsterdam, Gdańsk.</p>
        `,'osiagniecia-accordion')}
        ${accordion('','Prasa / TV', `
          <p>Artykuł z Art of Dentistry, lipiec 2011: <a href="#" class="bio-link">Relacja z konferencji AEEDC Dubai 2011</a></p>
          <p>Artykuł z Gazety Lekarskiej, styczeń 2009: <a href="#" class="bio-link">Relacja z I Gdańskiej Konferencji Stomatologicznej</a></p>
          <p>Dnia 3.10.2005 w stacji telewizyjnej <strong>TVN24</strong> ukazał się materiał filmowy, w którym zaprezentowałem zastosowanie mikroskopu w stomatologii. Materiał został zrealizowany w moim gabinecie podczas wykonywania zabiegu endodontycznego.</p>
        `,'osiagniecia-accordion')}
      </div>
    </div>
  </div>
</section>

<section id="endodoncja" class="tint">
  <div class="container">
    <span class="eyebrow reveal">Nasza specjalizacja</span>
    <h2 class="section-title reveal">Endodoncja</h2>
    <div class="split">
      <div class="reveal dir-l">
        <p>Endodoncja, czyli leczenie kanałowe jest wąską i wysoko specjalistyczną dziedziną stomatologii zajmującą się leczeniem chorób miazgi zębowej. Wymaga ono ponadprzeciętnych umiejętności operatora, kosztownego instrumentarium oraz nowoczesnego sprzętu.</p>
        <p>Leczenie endodontyczne polega na usunięciu miazgi z komory i systemu kanałowego korzeni zębów, mechanicznym i chemicznym opracowaniu kanałów, a następnie ich szczelnym wypełnieniu.</p>
        <p>W swojej praktyce oprócz leczenia kanałowego wyspecjalizowałem się w szczególności w leczeniu powikłań powstałych podczas zabiegów endodontyznych, polegającym na:</p>
        <ul>
          <li>usuwaniu złamanych narzędzi,</li>
          <li>chirurgii endodontycznej,</li>
          <li>zamykaniu perforacji,</li>
          <li>usuwaniu uszczelniacza i gutaperki z kości,</li>
          <li>zamykaniu przetoki zębopochodnej.</li>
        </ul>
      </div>
      <img class="reveal dir-r" src="img/zabieg-2.jpg" alt="Znieczulenie przed zabiegiem endodontycznym" width="800" height="600" loading="lazy">
    </div>

    <div style="margin-top:3rem" class="reveal">
      <h3 style="font-family:var(--font-display);color:var(--primary-ink);margin-bottom:1em;font-size:1.2rem">Zabieg leczenia endodontycznego (Dr n. med. Maciej Goczewski z dwoma asystami)</h3>
      <div class="gallery-grid">
        ${procedureSteps.map(([img,cap])=>`
        <div class="gallery-item reveal scrollcard">
          <img src="img/${img}" alt="${cap}" width="800" height="600" loading="lazy">
          <div class="gallery-cap">${cap}</div>
        </div>`).join('\n')}
      </div>
    </div>

    <div style="margin-top:3rem" class="reveal">
      <h3 style="font-family:var(--font-display);color:var(--primary-ink);margin-bottom:1em;font-size:1.2rem">Przypadki kliniczne</h3>
      <div class="case-grid">
        ${[1,2,3,4,5,6].map(n=>`<img class="reveal scrollcard" src="img/case-${n}.jpg" alt="Przypadek ${n}" width="150" height="113" loading="lazy">`).join('\n')}
      </div>
    </div>
  </div>
</section>

<section id="sterylizacja">
  <div class="container">
    <span class="eyebrow reveal">Bezpieczeństwo pacjentów</span>
    <h2 class="section-title reveal">Sterylizacja</h2>
    <div class="split">
      <img class="reveal dir-l" src="img/autoklaw-lisa.jpg" alt="Autoklaw W&H Lisa 300" width="800" height="600" loading="lazy">
      <div class="reveal dir-r">
        <p>Dla bezpieczeństwa naszych Pacjentów wiele używanych przez nas narzędzi jest jednorazowego użytku. Są one utylizowane zaraz po zabiegu.</p>
        <p>Przed ponownym użyciem narzędzi wielokrotnego użytku są one najpierw dezynfekowane, następnie myte, po czym sterylizowane. Do procesu sterylizacji wykorzystujemy autoklaw <strong>Lisa 300 firmy W&H.</strong> Jest to urządzenie <strong>klasy B</strong> z próżnią frakcjonowaną (autoklaw ten spełnia takie same funkcje jak autoklawy szpitalne). Próżnia frakcjonowana stanowi najlepszą spośród aktualnie dostępnych technik, umożliwiająca sterylizację każdego rodzaju produktu.</p>
        <p><strong>W naszym gabinecie systematycznie sporządzamy protokoły steryzlizacji.</strong></p>
      </div>
    </div>
  </div>
</section>

<section id="zespol" class="tint">
  <div class="container">
    <span class="eyebrow reveal">Kto się Tobą zajmie</span>
    <h2 class="section-title reveal">Zespół</h2>
    <p class="lede reveal">W celu umówienia się na wizytę wypełnij formularz on-line lub skontaktuj się z nami telefonicznie.</p>
    <div class="team-grid" style="margin-top:2rem">
      <div class="team-card reveal scrollcard"><div class="avatar">${icon('user')}</div><h4>Dr n. med. Maciej Goczewski</h4><p>Lekarz stomatolog</p></div>
      <div class="team-card reveal scrollcard" style="transition-delay:80ms"><div class="avatar">${icon('user')}</div><h4>Joanna Ortmann</h4><p>Asystentka stomatologiczna</p></div>
      <div class="team-card reveal scrollcard" style="transition-delay:160ms"><div class="avatar">${icon('user')}</div><h4>Agnieszka Szczepańska</h4><p>Asystentka stomatologiczna</p></div>
    </div>
  </div>
</section>

<section id="galeria">
  <div class="container">
    <span class="eyebrow reveal">Zobacz gabinet</span>
    <h2 class="section-title reveal">Galeria</h2>
    <div class="gallery-grid">
      ${galleryRooms.map(([img,cap],i)=>`
      <div class="gallery-item reveal scrollcard" style="transition-delay:${(i%4)*60}ms">
        <img src="img/${img}" alt="${cap}" width="800" height="600" loading="lazy">
        <div class="gallery-cap">${cap}</div>
      </div>`).join('\n')}
    </div>
  </div>
</section>

<section id="szkolenia" class="tint">
  <div class="container">
    <span class="eyebrow reveal">Dla lekarzy stomatologów</span>
    <h2 class="section-title reveal">Szkolenia — Mikroskop w stomatologii</h2>
    <p class="lede reveal">Indywidualny kurs teoretyczny i praktyczny. Zapraszamy na indywidualne oraz grupowe szkolenia z zakresu stomatologii mikroskopowej i endodoncji.</p>
    <div class="accordion-group reveal" style="margin-top:2rem">
      ${accordion('first','Część teoretyczna', `
        <ol>
          <li>Budowa mikroskopu</li>
          <li>Przygotowanie mikroskopu do pracy</li>
          <li>Ergonomia pracy z mikroskopem</li>
          <li>Techniki pracy z mikroskopem</li>
          <li>Metody pracy z mikroskopem</li>
          <li>Transfer instrumentów</li>
          <li>Praca z monitorem</li>
          <li>Ustawienie gabinetu do pracy z mikroskopem</li>
          <li>Jaki mikroskop kupić</li>
          <li>Analiza nagrań wideo wybranych zabiegów wykonanych pod mikroskopem z dziedzin: -stomatologii zachowawczej -protetyki -mikrochirurgii -endodoncji</li>
        </ol>
      `,'szkolenia-accordion')}
      ${accordion('','Część praktyczna', `
        <ol>
          <li>Prezentacja leczenia pod mikroskopem (zabieg na żywo)</li>
          <li>Praktyczna nauka pracy z mikroskopem</li>
        </ol>
      `,'szkolenia-accordion')}
      ${accordion('','Informacje organizacyjne', `
        <div class="meta-row">
          <div><strong>Prowadzący</strong>dr n. med. Maciej Goczewski</div>
          <div><strong>Miejsce szkolenia</strong>Klinika Stomatologiczna MMG, Pruszcz Gdański, Ul. Okrzei 4</div>
          <div><strong>Czas szkolenia</strong>Kurs jednodniowy, osiem godzin</div>
          <div><strong>Liczba uczestników</strong>Maksymalnie 3 osoby</div>
          <div><strong>Informacje i zapisy</strong>Joanna Ortmann, tel. 609 460 474, e-mail: maciej@goczewski.pl</div>
        </div>
      `,'szkolenia-accordion')}
    </div>
  </div>
</section>

<section id="wspolpraca">
  <div class="container">
    <div class="cta-band reveal">
      <div>
        <h3>Współpraca dla lekarzy</h3>
        <p>Zapraszamy do współpracy lekarzy w zakresie leczenia kanałowego z użyciem mikroskopu oraz leczenia powikłań powstałych podczas leczenia endodontycznego. Z gabinetami podpisujemy umowę cywilnoprawną gwarantującą lekarzowi zlecającemu wykonanie przez mnie wyłącznie wskazanego przez niego zabiegu endodontycznego, jak również nie podejmowania się leczenia pacjenta w innym zakresie na czas trwania umowy.</p>
      </div>
      <a class="btn btn-primary" href="mailto:${email}">${icon('mail')} Napisz do nas</a>
    </div>
  </div>
</section>

<section id="kontakt" class="tint">
  <div class="container">
    <span class="eyebrow reveal">Jak do nas trafić</span>
    <h2 class="section-title reveal">Kontakt</h2>
    <div class="contact-grid">
      <div class="contact-card reveal dir-l">
        <div class="contact-row">${icon('pin')}<div><strong>Adres</strong>Ul. Okrzei 4<br>83-000 Pruszcz Gdański</div></div>
        <div class="contact-row">${icon('phone')}<div><strong>Rejestracja</strong>tel: ${phone1}<br>tel. kom: ${phone2}</div></div>
        <div class="contact-row">${icon('mail')}<div><strong>E-mail</strong><a href="mailto:${email}">${email}</a></div></div>
        <div class="hero-ctas">
          <a class="btn btn-primary" href="${phoneHref}">${icon('phone')} Zadzwoń teraz</a>
        </div>
      </div>
      <div class="map-cta reveal dir-r">
        <div>
          <p style="color:var(--muted)">Jak do nas trafić?</p>
          <a href="http://maps.google.pl/maps?f=q&source=s_q&hl=pl&geocode=&q=NZOZ+mmg,+pruszcz+gda%C5%84ski&sll=54.337093,18.624232&sspn=0.34468,1.054687&ie=UTF8&z=15&iwloc=A" target="_blank" rel="noopener">Sprawdź na Google Maps</a>
        </div>
      </div>
    </div>
  </div>
</section>

</main>

<a class="mobile-callbar" href="${phoneHref}">${icon('phone')} Zadzwoń: ${phone1}</a>

<footer class="site">
  <div class="container">
    <div class="foot-grid">
      <div>
        <h5>Praktyka Stomatologiczna dr n. med. Maciej Goczewski</h5>
        <p>Ul. Okrzei 4, 83-000 Pruszcz Gdański</p>
      </div>
      <div>
        <h5>Kontakt</h5>
        <p><a href="${phoneHref}">${phone1}</a></p>
        <p><a href="tel:+48609460474">${phone2}</a></p>
        <p><a href="mailto:${email}">${email}</a></p>
      </div>
      <div>
        <h5>Nawigacja</h5>
        <p><a href="#o-lekarzu">O lekarzu</a></p>
        <p><a href="#endodoncja">Endodoncja</a></p>
        <p><a href="#kontakt">Kontakt</a></p>
      </div>
    </div>
    <div class="foot-bottom">
      <span>Prywatna Praktyka Stomatologiczna — gabinet istnieje od 1999 roku.</span>
    </div>
  </div>
</footer>

<script>
(function(){
  var header = document.getElementById('siteHeader');
  var progressBar = document.getElementById('progressBar');
  var blob = document.getElementById('heroBlob');
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('mainNav');

  toggle && toggle.addEventListener('click', function(){
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav && nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); });
  });

  var ticking = false;
  function onScroll(){
    var y = window.scrollY || 0;
    header.classList.toggle('is-scrolled', y > 8);
    var max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
    if (blob) blob.style.transform = 'translateY(' + (y * 0.15) + 'px)';

    var vh = window.innerHeight;
    var center = vh / 2;
    document.querySelectorAll('.scrollcard').forEach(function(el){
      var r = el.getBoundingClientRect();
      var elCenter = r.top + r.height / 2;
      var dist = Math.abs(elCenter - center);
      var p = Math.min(dist / (vh * 0.8), 1);
      el.style.setProperty('--p', p.toFixed(3));
    });
    ticking = false;
  }
  window.addEventListener('scroll', function(){
    if (!ticking){ window.requestAnimationFrame(onScroll); ticking = true; }
  }, {passive:true});
  onScroll();

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ en.target.classList.toggle('in', en.isIntersecting); });
  }, {threshold:0.12, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  var navLinks = document.querySelectorAll('nav.main a');
  var sections = Array.from(navLinks).map(function(a){ return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  var spy = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (en.isIntersecting){
        navLinks.forEach(function(a){ a.classList.remove('active'); });
        var match = Array.from(navLinks).find(function(a){ return a.getAttribute('href') === '#' + en.target.id; });
        if (match) match.classList.add('active');
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px'});
  sections.forEach(function(s){ spy.observe(s); });

  var ctx;
  function playClick(){
    try{
      if(!ctx) ctx = new (window.AudioContext||window.webkitAudioContext)();
      var t = ctx.currentTime, osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.type='sine'; osc.frequency.setValueAtTime(210,t); osc.frequency.exponentialRampToValueAtTime(110,t+0.1);
      gain.gain.setValueAtTime(0.0001,t); gain.gain.exponentialRampToValueAtTime(0.45,t+0.008); gain.gain.exponentialRampToValueAtTime(0.0001,t+0.16);
      osc.connect(gain).connect(ctx.destination); osc.start(t); osc.stop(t+0.16);
    }catch(e){}
  }
  document.addEventListener('click', function(e){ if (e.target.closest('a,button,summary')) playClick(); });
})();
</script>
</body>
</html>`;

fs.writeFileSync(OUT, html, 'utf-8');
console.log('Written', OUT, html.length, 'chars');
