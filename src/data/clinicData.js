// Cała treść przepisana verbatim ze scrape'u https://goczewski.pl (strona główna +
// o_mnie/zespol/szkolenia/endodoncja/sterylizacja/kontakt oraz rekurencyjne podlinki:
// formularz, chirurgia_endodontyczna, zamykanie_perforacji, usuwanie_uszczelniacza,
// zamykanie_przetoki, usuwanie_narzedzi_01–06, implantologia (puste — "w budowie"),
// protetyka, stomatologia_estetyczna, radiologia, unity, mikroskopy, wybielanie_zebow).
// Strona nie publikuje godzin przyjęć ani cennika — te sekcje są pominięte, nie wymyślone.

export const clinic = {
  nazwa: "Prywatna Praktyka Stomatologiczna",
  lekarz: "dr n. med. Maciej Goczewski",
  miasto: "Pruszcz Gdański",
  ulica: "ul. Okrzei 4",
  kod: "83-000 Pruszcz Gdański",
  telefon: "+48 (58) 683 22 71",
  telefonHref: "tel:+48586832271",
  komorka: "+48 609 460 474",
  komorkaHref: "tel:+48609460474",
  email: "gabinet@goczewski.pl",
  emailOpis: "Wyślij do nas maila, a my skontaktujemy się z Tobą.",
  copyright: "Copyright © Prywatna Praktyka Stomatologiczna — dr n. med. Maciej Goczewski.",
  cookies: "Ten serwis wykorzystuje pliki cookie. Korzystając ze strony wyrażasz zgodę na ich używanie.",
  stopkaDomena: "Goczewski.pl",
  stronaPrywatna: "www.maciejgoczewski.com",
};

export const nav = [
  { label: "Start", href: "#hero" },
  { label: "O mnie", href: "#o-mnie" },
  { label: "Endodoncja", href: "#endodoncja" },
  { label: "Sprzęt", href: "#sprzet" },
  { label: "Dorobek", href: "#dorobek" },
  { label: "Galeria", href: "#galeria" },
  { label: "Kontakt", href: "#kontakt" },
];

// H1 — verbatim linia z tekstu strony głównej (nie parafraza).
export const hero = {
  tytul: "Praktyka specjalizuje się w endodoncji i chirurgii endodontycznej.",
  akapity: [
    "Gabinet istnieje od 1999 roku. W swojej praktyce z zastosowaniem mikroskopu stomatologicznego wyspecjalizowałem się głównie w endodoncji. Jestem także autorem publikacji naukowych oraz licznych wykładów zagranicznych z zakresu stomatologii mikroskopowej i endodoncji.",
    "We współczesnej stomatologii to przede wszystkim wykorzystanie nowoczesnych rozwiązań technicznych wpływa na jakość, standard i skuteczność leczenia. Dlatego też w mojej pracy zawodowej istotne znaczenie ma nie tylko rozwój merytoryczny, ale przede wszystkim zastosowanie nowoczesnych metod leczenia.",
    "Gabinet rekomendowany przez Polskie Stowarzyszenie Stomatologii Mikroskopowej.",
  ],
};

export const umowWizyte = {
  tytul: "Umów wizytę",
  podtytul: "Skontaktuj się z nami telefonicznie lub mailowo",
  rejestracjaTelefoniczna: "Rejestracja telefoniczna:",
  emailTytul: "E-mail:",
};

export const oNas = {
  lekarz: "dr n. med. Maciej Goczewski",
  tytul: "Prywatna Praktyka Stomatologiczna",
  wstep: "„Witam na stronie mojej prywatnej praktyki stomatologicznej.”",
  cechy: [
    { tytul: "Wykształcenie", opis: "Akademia Medyczna w Gdańsku." },
    {
      tytul: "Pełnione funkcje",
      opis: "Prezes Polskiego Stowarzyszenia Stomatologii Mikroskopowej. Prezes MMG sp. z o.o. Kierownik NZOZ MMG. Prywatna praktyka stomatologiczna.",
    },
    {
      tytul: "Członkowstwo w organizacjach",
      opis: "Polskie Stowarzyszenie Stomatologii Mikroskopowej. Polskie Stowarzyszenie Implantologii Estetycznej. Polskie Towarzystwo Stomatologiczne.",
    },
  ],
  wyposazenie: {
    przed: "Gabinet wyposażony jest w unit stomatologiczny",
    marka: "Stern Weber 300",
    po: "oraz mikroskop stomatologiczny Carl Zeiss Pico.",
  },
};

export const zespol = [
  { rola: "Lekarz stomatolog", osoby: ["dr n. med. Maciej Goczewski"] },
  { rola: "Asystentki stomatologiczne", osoby: ["Joanna Ortmann", "Agnieszka Szczepańska"] },
];

// Akordeon "Leczenie" — endodoncja + pozostały zakres praktyki (protetyka,
// stomatologia estetyczna, radiologia — implantologia bez opisu, "w budowie").
export const uslugi = [
  {
    klucz: "endodoncja",
    tytul: "Endodoncja",
    opis: [
      "Endodoncja, czyli leczenie kanałowe jest wąską i wysoko specjalistyczną dziedziną stomatologii zajmującą się leczeniem chorób miazgi zębowej. Wymaga ono ponadprzeciętnych umiejętności operatora, kosztownego instrumentarium oraz nowoczesnego sprzętu.",
    ],
    listaTytul: "Leczenie powikłań endodontycznych:",
    elementy: [
      "Usuwanie złamanych narzędzi",
      "Chirurgia endodontyczna",
      "Zamykanie perforacji",
      "Usuwanie uszczelniacza i gutaperki z kości",
      "Zamykanie przetoki zębopochodnej",
    ],
    podsumowanie: [
      "Dokumentacja fotograficzna wybranych przypadków klinicznych znajduje się w sekcji „Dokumentacja przypadków” poniżej.",
    ],
  },
  {
    klucz: "implantologia",
    tytul: "Implantologia",
    opis: [],
  },
  {
    klucz: "protetyka",
    tytul: "Protetyka",
    opis: [
      "Ubytki w uzębieniu stanowią nie tylko poważny problem estetyczny, ale przede wszystkim nie pozostają one obojętne dla całego układu żucia. Brak nawet jednego zęba może sprawić, że pozostałe zęby są bardziej obciążone, a siły wyzwalane podczas gryzienia pokarmu rozkładają się nierównomiernie, co w konsekwencji może doprowadzać do zakłóceń w jego funkcjonowaniu. Rodzaj protezy dobieramy w zależności od ilości, jakości ubytków oraz ich rozmieszczenia.",
      "Uzupełnienia protetyczne stałe — są to prace cementowane na koronie oszlifowanego zęba, w korzeniu lub na implancie. Zdjąć je może tylko lekarz i wiąże się to najczęściej z ich zniszczeniem. Należą do nich korony, licówki, mosty lub wkłady koronowo-korzeniowe.",
    ],
    listaTytul: "Rodzaje uzupełnień:",
    elementy: [
      "Korony pełnoceramiczne (całkowicie z porcelany)",
      "Korony porcelanowe na podbudowie ze stopów metali",
      "Licówki ceramiczne",
      "Mosty na zębach własnych lub implantach",
      "Wkłady koronowo-korzeniowe (lane, standardowe, kompozytowe)",
    ],
    podsumowanie: [
      "Nie polecam uzupełnień protetycznych ruchomych. W przypadku gdy nie ma możliwości wykonania prac stałych na zębach własnych, proponuję pacjentom wykonanie prac stałych na implantach.",
    ],
  },
  {
    klucz: "stomatologia_estetyczna",
    tytul: "Stomatologia estetyczna",
    opis: [
      "Idealny uśmiech to zęby nie tylko zdrowe, ale przede wszystkim wyglądające naturalnie. Współcześnie stomatologia estetyczna oferuje wiele rozwiązań, które pomagają przywrócić piękny uśmiech.",
      "Wybielanie zębów — metoda nakładkowa (ok. 2 tygodnie, nakładki dopasowane indywidualnie) lub wybielanie w gabinecie przy użyciu preparatów o odpowiednim stężeniu nadtlenku wodoru (ok. 1,5 godziny, efekt utrzymuje się ok. 2 lata).",
      "Licówki porcelanowe — cienkie ceramiczne płytki przyklejane na przednią powierzchnię zębów, rozwiązanie estetyczne przy złamaniu korony, erozji szkliwa, przebarwieniach. Wystarczą zwykle dwie wizyty w miejscowym znieczuleniu.",
    ],
  },
  {
    klucz: "radiologia",
    tytul: "Radiologia",
    opis: [
      "W gabinecie wykonujemy zdjęcia pantomograficzne oraz punktowe. Przed ustaleniem wstępnego planu leczenia dokonujemy analizy zdjęcia pantomograficznego, pozwalającej na wczesne wykrycie problemów ze stanem uzębienia nawet w przypadkach, kiedy pacjenci nie odczuwają żadnych dolegliwości bólowych.",
      "Dodatkowo przy każdym unicie stomatologicznym znajduje się rentgen punktowy z systemem radiowizyjnym — obraz RTG uzyskujemy na ekranie komputera w ciągu 2 sekund od wykonania zdjęcia.",
      "System radiologii wykorzystywany w naszym gabinecie pozwala na redukcję dawki promieni RTG w zdjęciach wewnątrzustnych aż do 90%.",
    ],
  },
];

// Akordeon "Sprzęt".
export const sprzet = [
  {
    klucz: "unity",
    tytul: "Unit Stern Weber 300",
    opis: [
      "Każdy gabinet wyposażony jest w unit stomatologiczny Stern Weber 300. Zastosowanie najnowocześniejszych technologii oraz elektroniczne programowanie wszystkich parametrów pracy daje możliwość wysokiej jakości pracy lekarza, gwarantuje także higienę zabiegu oraz komfort pacjenta.",
    ],
  },
  {
    klucz: "mikroskop",
    tytul: "Mikroskop Carl Zeiss Pico",
    opis: [
      "Każdy unit wyposażony jest w mikroskop stomatologiczny Carl Zeiss Pico. Użycie mikroskopu stomatologicznego pozwala dostrzec najdrobniejsze szczegóły w strukturze zębów zarówno podczas badania diagnostycznego, jak i w trakcie leczenia — ułatwia odnalezienie wszystkich kanałów korzeniowych, ich dokładne opracowanie i wypełnienie.",
    ],
    listaTytul: "By maksymalnie precyzyjnie i szybko przeprowadzić leczenie kanałowe używamy:",
    elementy: [
      "Ręcznych i maszynowych narzędzi do opracowywania kanałów korzeniowych",
      "Endometru do elektronicznego pomiaru długości roboczej kanału korzeniowego",
      "Aparatu RTG z systemem RVG do natychmiastowej oceny leczenia",
      "Systemu B do uplastyczniania gutaperki",
      "Skalera endodontycznego do usuwania złamanych narzędzi z kanałów",
    ],
  },
  {
    klucz: "sterylizacja",
    tytul: "Sterylizacja narzędzi",
    opis: [
      "Dla bezpieczeństwa naszych Pacjentów wiele używanych przez nas narzędzi jest jednorazowego użytku — są one utylizowane zaraz po zabiegu.",
      "Przed ponownym użyciem narzędzi wielokrotnego użytku są one najpierw dezynfekowane, następnie myte, po czym sterylizowane. Do procesu sterylizacji wykorzystujemy autoklaw Lisa 300 firmy W&H — urządzenie klasy B z próżnią frakcjonowaną, spełniające takie same funkcje jak autoklawy szpitalne.",
      "W naszym gabinecie systematycznie sporządzamy protokoły sterylizacji.",
    ],
  },
  {
    klucz: "wybielanie",
    tytul: "Systemy wybielania zębów",
    opis: [
      "Oferujemy skuteczne i bezpieczne systemy wybielające, zarówno pojedynczych zębów jak i całych łuków zębowych, dobierane indywidualnie w zależności od rodzaju szkliwa i wrażliwości zębów.",
    ],
    listaTytul: "System gabinetowy:",
    elementy: [
      "Sapphire — wybielenie o 12 odcieni w ciągu 1 godziny (z lampą plazmową)",
      "Zaris White & Brite (3M ESPE) — aktywacja nadtlenku mocznika, ok. 1,5 godziny",
      "Opalescence Boost — 38% nadtlenku wodoru, bez aktywacji światłem, z fluorem",
      "Opalescence Endo — wybielanie zębów martwych po leczeniu endodontycznym",
    ],
    podsumowanie: [
      "System do wybielania w domu: nakładkowy Sapphire (22% i 32% nadtlenku karbamidu, 30 min/dobę) oraz Opalescence 10%, 15%, 20% (nocny lub kilkugodzinny, z fluorem i azotanem potasu).",
    ],
  },
];

// Akordeon "Dokumentacja przypadków klinicznych" — verbatim z podstron
// chirurgia_endodontyczna.html, zamykanie_perforacji.html, usuwanie_uszczelniacza.html,
// zamykanie_przetoki.html oraz usuwanie_narzedzi_01–06.html (linkowanych z galerii
// miniatur na usuwanie_narzedzi.html) — żadna z tych 10 podstron nie była wcześniej
// zescrapowana.
export const przypadki = [
  {
    klucz: "usuwanie_narzedzi",
    tytul: "Usuwanie złamanych narzędzi",
    przypadki: [
      {
        text: "Pacjentka skierowana do mnie na usunięcie złamanego narzędzia z kanału korzeniowego zęba górnego lewego 5. Narzędzie było złamane bardzo głęboko i tkwiło poza krzywizną kanału.",
        caption: "Zdjęcie wykonane po usunięciu złamanego narzędzia z kanału. Zabieg niezwykle skomplikowany.",
        obrazy: ["narzedzia-01-01.jpg", "narzedzia-01-02.jpg"],
      },
      {
        text: "Pacjentka skierowana do mnie na usunięcie złamanego narzędzia z kanału mezjalnego zęba 6 górnego lewego. Wymiary narzędzia: długość 4 mm, średnica 0,10 mm. Narzędzie tkwiło 2 mm swojej długości w zatoce szczękowej i było złamane poza krzywizną kanału.",
        caption: "Zdjęcie RVG po usunięciu złamanego narzędzia.",
        obrazy: ["narzedzia-02-01.jpg", "narzedzia-02-02.jpg"],
      },
      {
        text: "Pacjentka skierowana na usunięcie trzech narzędzi złamanych w kanale korzenia zęba 5 dolnego.",
        caption: "Zdjęcie po usunięciu narzędzi. Zdjęcie RVG po wypełnieniu kanału.",
        obrazy: ["narzedzia-03-01.jpg", "narzedzia-03-02.jpg", "narzedzia-03-03.jpg"],
      },
      {
        text: "Pacjentka skierowana do mnie na usunięcie narzędzia z zęba 8 dolnego lewego.",
        caption: "Zdjęcie RVG po usunięciu narzędzia. Zdjęcie po wypełnieniu kanałów.",
        obrazy: ["narzedzia-04-01.jpg", "narzedzia-04-02.jpg", "narzedzia-04-03.jpg"],
      },
      {
        text: "Pacjentka skierowana do mnie na usunięcie 2 mm złamanego narzędzia z kanału korzenia dystalnego zęba 6 dolnego. Narzędzie tkwiło 1 mm poza kanałem w kości. W dnie komory była perforacja.",
        caption: "Zamknięcie perforacji materiałem Pro Root MTA, wyjęcie złamanego narzędzia, wypełnienie kanałów mezjalnych AH plus/gutaperka. Obraz leczenia po 2 latach.",
        obrazy: [
          "narzedzia-05-01.jpg", "narzedzia-05-02.jpg", "narzedzia-05-03.jpg", "narzedzia-05-04.jpg", "narzedzia-05-05.jpg",
          "narzedzia-05-06.jpg", "narzedzia-05-07.jpg", "narzedzia-05-08.jpg", "narzedzia-05-09.jpg", "narzedzia-05-10.jpg",
        ],
      },
      {
        text: "Ząb 8 dolny lewy ze złamanym narzędziem w kanale korzeniowym mezjalnym.",
        caption: "Zdjęcie RVG po wyjęciu złamanego narzędzia.",
        obrazy: ["narzedzia-06-01.jpg", "narzedzia-06-02.jpg"],
      },
    ],
  },
  {
    klucz: "chirurgia_endodontyczna",
    tytul: "Chirurgia endodontyczna",
    przypadki: [
      {
        text: "Pacjent został skierowany do mnie od innego lekarza na wyjęcie złamanego narzędzia z korzenia dystalnego zęba górnego lewego 6. Narzędzie po złamaniu zostało przepchnięte przez otwór wierzchołkowy i utkwiło w tkankach poza korzeniem — jedyną możliwością usunięcia było wykonanie zabiegu chirurgicznego.",
        caption: "Przy wykorzystaniu mikroskopu odnaleziono złamane narzędzie w tkankach miękkich jamy ustnej i je usunięto. Zdjęcie po usunięciu.",
        obrazy: ["chirurgia-01.jpg", "chirurgia-02.jpg", "chirurgia-03.jpg"],
      },
    ],
  },
  {
    klucz: "zamykanie_perforacji",
    tytul: "Zamykanie perforacji",
    przypadki: [
      {
        text: "Pacjentka skierowana do mnie na zamknięcie perforacji dna komory zęba 6 górnego, powstałej w wyniku szukania kanału dystalnego.",
        caption: "Perforacja zamknięta materiałem Pro ROOT MTA, kanał dystalny wypełniony gutaperką z uszczelniaczem AH plus, Pro ROOT MTA przykryty cementem Harward.",
        obrazy: ["perforacja-01.jpg", "perforacja-02.jpg", "perforacja-03.jpg", "perforacja-04.jpg"],
      },
    ],
  },
  {
    klucz: "usuwanie_uszczelniacza",
    tytul: "Usuwanie uszczelniacza i gutaperki z kości",
    przypadki: [
      {
        text: "Ząb prawy dolny 7. Uszczelniacz wraz z gutaperką przepchnięty przez otwór wierzchołkowy.",
        caption: "Zdjęcie RVG po przeprowadzeniu ponownego leczenia kanałowego i usunięciu przez kanał przepchniętego uszczelniacza wraz z gutaperką.",
        obrazy: ["uszczelniacz-01.jpg", "uszczelniacz-02.jpg"],
      },
    ],
  },
  {
    klucz: "zamykanie_przetoki",
    tytul: "Zamykanie przetoki zębopochodnej",
    przypadki: [
      {
        text: "Pacjentka została skierowana do mnie na leczenie kanałowe zęba 6 górnego lewego z czynną przetoką.",
        caption: "Po przeleczeniu 4 kanałów korzeniowych przetoka cofnęła się samoistnie w ciągu 7 dni od rozpoczęcia leczenia.",
        obrazy: ["przetoka-01.jpg", "przetoka-02.jpg", "przetoka-03.jpg", "przetoka-04.jpg", "przetoka-05.jpg"],
      },
    ],
  },
];

// Dorobek naukowy.
export const wyklady = {
  zagraniczne: [
    { data: "1–3.02.2011", miejsce: "AEEDC, Dubaj", tytul: "Six vs Four Handed Dentistry Utilizing Microscope / Dental Ergonomics / Microscope in Dentistry" },
    { data: "04.05.2007", miejsce: "Monachium — Niemieckie Towarzystwo Endodontyczne, Europejska Federacja Stowarzyszeń Stomatologii Mikroskopowej", tytul: "Six versus four handed team working approach under the operating microscope" },
    { data: "19.06.2006", miejsce: "Amsterdam, ROOTS", tytul: "Team ergonomic treatment delivery for endodontics" },
    { data: "03.06.2006", miejsce: "Porto, Portugalia — Europejskie Stowarzyszenie Stomatologii Ergonomicznej", tytul: "How to incorporate a microscope in a private practice" },
  ],
  krajowe: [
    { data: "21.11.2008", miejsce: "I Gdańska Konferencja Stomatologiczna, Gdańska Izba Lekarska", tytul: "Przyczyny błędów popełnianych podczas leczenia stomatologicznego i ich eliminowanie" },
    { data: "07.06.2008", miejsce: "Forum Dentysty Praktyka", tytul: "Zasady ergonomii pracy członków zespołu stomatologicznego" },
    { data: "19.10.2005", miejsce: "Polskie Towarzystwo Stomatologiczne, Akademia Medyczna w Gdańsku", tytul: null },
    { data: "14.05.2005", miejsce: "I Kongres Polskiego Towarzystwa Endodontycznego", tytul: "Jak przyspieszyć leczenie endodontyczne" },
  ],
};

export const publikacje = [
  "Mikroskop operacyjny w stomatologii. Techniki pracy na 6 rąk w endodoncji.",
  "Obciążenie statyczne zespołu stomatologicznego w technice pracy na sześć rąk.",
  "Pozycja pacjenta, operatora i asysty w technice pracy na sześć rąk.",
  "Analiza obciążeń układu nerwowego i mięśniowo-szkieletowego u operatorów w stomatologii pracujących w mikroskopie operacyjnym.",
  "Trzymanie i przekazywanie instrumentów w technice pracy na sześć rąk.",
  "Samobójstwo wśród dentystów. Wpływ stresu, wypalenia zawodowego, zaburzeń lękowych.",
];

export const prasa = [
  { source: "Art of Dentistry", date: "lipiec 2011", desc: "Relacja z konferencji AEEDC w Dubaju." },
  { source: "Gazeta Lekarska", date: "styczeń 2009", desc: "Relacja z I Gdańskiej Konferencji Stomatologicznej." },
  { source: "TVN24", date: "3.10.2005", desc: "Materiał telewizyjny nakręcony w gabinecie podczas zabiegu leczenia kanałowego z użyciem mikroskopu." },
];

export const konferencje = {
  organizacje: [
    "Niemieckie Towarzystwo Endodontyczne",
    "Europejskie Stowarzyszenie Stomatologii Ergonomicznej",
    "Europejska Federacja Stowarzyszeń Stomatologii Mikroskopowej",
    "ROOTS",
  ],
};

export const wspolpraca = {
  tekst: "Zapraszamy lekarzy do współpracy w zakresie leczenia kanałowego i powikłań powstałych podczas leczenia endodontycznego, na podstawie umowy cywilnoprawnej ograniczającej zakres współpracy.",
  email: "maciej@goczewski.pl",
};

export const szkolenie = {
  tytul: "MIKROSKOP W STOMATOLOGII",
  podtytul: "Indywidualny kurs teoretyczny i praktyczny",
  teoria: [
    "Budowa mikroskopu", "Przygotowanie mikroskopu do pracy", "Ergonomia pracy z mikroskopem",
    "Techniki pracy z mikroskopem", "Metody pracy z mikroskopem", "Transfer instrumentów",
    "Praca z monitorem", "Ustawienie gabinetu do pracy z mikroskopem", "Jaki mikroskop kupić",
    "Analiza nagrań wideo wybranych zabiegów wykonanych pod mikroskopem",
  ],
  praktyka: ["Prezentacja leczenia pod mikroskopem (zabieg na żywo)", "Praktyczna nauka pracy z mikroskopem"],
  prowadzacy: "dr n. med. Maciej Goczewski",
  miejsce: "Klinika Stomatologiczna MMG, Pruszcz Gdański, ul. Okrzei 4",
  czas: "Kurs jednodniowy, osiem godzin",
  uczestnicy: "Maksymalnie 3 osoby",
  zapisy: { osoba: "Joanna Ortmann", tel: "609 460 474", email: "maciej@goczewski.pl" },
};

export const gallery = [
  { file: "recepcja.jpg", label: "Recepcja" },
  { file: "poczekalnia-01.jpg", label: "Poczekalnia" },
  { file: "poczekalnia-02.jpg", label: "Poczekalnia" },
  { file: "poczekalnia-03.jpg", label: "Poczekalnia" },
  { file: "biuro-01.jpg", label: "Biuro" },
  { file: "biuro-02.jpg", label: "Biuro" },
  { file: "gabinet-01.jpg", label: "Gabinet stomatologiczny" },
  { file: "gabinet-02.jpg", label: "Gabinet stomatologiczny" },
  { file: "gabinet-higieny.jpg", label: "Gabinet higieny" },
  { file: "toaleta.jpg", label: "Toaleta dla pacjentów" },
  { file: "wejscie.jpg", label: "Wejście" },
  { file: "autoklaw.jpg", label: "Autoklaw" },
  { file: "autoklaw-lisa300.jpg", label: "Autoklaw W&H Lisa 300" },
  { file: "unit-sw300.jpg", label: "Unit Stern Weber 300" },
  { file: "mikroskop-zeiss-01.jpg", label: "Mikroskop Carl Zeiss" },
  { file: "mikroskop-zeiss-02.jpg", label: "Mikroskop Carl Zeiss" },
  { file: "luk-plazmowy.jpg", label: "Łuk plazmowy" },
  { file: "rtg-panoramiczny.jpg", label: "RTG panoramiczny" },
];
