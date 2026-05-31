import type { Locale } from "@/content";

export type UiStrings = {
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
  };
  routes: {
    services: string;
    projects: string;
    about: string;
    contact: string;
  };
  header: {
    toggleTheme: string;
    openMenu: string;
    closeMenu: string;
    call: string;
    quoteCta: string;
    language: string;
  };
  footer: {
    pages: string;
    contact: string;
    email: string;
    call: string;
    rights: string;
    shortDesc: string;
  };
  common: {
    details: string;
    viewAllServices: string;
    quickContact: string;
    callPrefix: string;
    goToContact: string;
    openForm: string;
    region: string;
  };
  home: {
    servicesTitle: string;
    servicesLead: string;
    audienceTitle: string;
    quoteCta: string;
    projectsCta: string;
    quickContactTitle: string;
    summaryTitle: string;
    call: string;
    mail: string;
  };
  servicesPage: {
    title: string;
    lead: string;
    contactLead: string;
  };
  projectsPage: {
    title: string;
    lead: string;
    ctaTitle: string;
    ctaLead: string;
    servicesCta: string;
  };
  aboutPage: {
    workingStyle: string;
    values: string;
    localFocus: string;
    contactCta: string;
    servicesCta: string;
  };
  contactPage: {
    title: string;
    sendMessage: string;
    name: string;
    contact: string;
    subject: string;
    message: string;
    placeholderName: string;
    placeholderContact: string;
    placeholderMessage: string;
    errorMessage: string;
    sending: string;
    sent: string;
    send: string;
    sendByEmail: string;
    success: string;
    social: string;
    zone: string;
    copy: string;
    copied: string;
    mail: string;
    subjectOptions: string[];
  };
  notFound: {
    title: string;
    lead: string;
    homeCta: string;
    servicesCta: string;
  };
  meta: {
    homeTitle: string;
    homeDescription: string;
    servicesTitle: string;
    servicesDescription: string;
    projectsTitle: string;
    projectsDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
    notFoundTitle: string;
    notFoundDescription: string;
  };
};

export const ui: Record<Locale, UiStrings> = {
  nl: {
    nav: {
      home: "Home",
      services: "Diensten",
      projects: "Projecten",
      about: "Over ons",
      contact: "Contact",
    },
    routes: {
      services: "/diensten",
      projects: "/projecten",
      about: "/over-ons",
      contact: "/contact",
    },
    header: {
      toggleTheme: "Thema wisselen",
      openMenu: "Menu openen",
      closeMenu: "Menu sluiten",
      call: "Bel",
      quoteCta: "Offerte / afspraak",
      language: "Taal kiezen",
    },
    footer: {
      pages: "Pagina's",
      contact: "Contact",
      email: "E-mail",
      call: "Bel",
      rights: "Alle rechten voorbehouden.",
      shortDesc:
        "Veilige elektriciteitswerken voor woning, appartement, handelspand en werf in Regio Antwerpen. Focus op AREI en duidelijke planning.",
    },
    common: {
      details: "Details",
      viewAllServices: "Bekijk alle diensten",
      quickContact: "Snel contact",
      callPrefix: "Bel:",
      goToContact: "Ga naar contact",
      openForm: "Open formulier",
      region: "Regio",
    },
    home: {
      servicesTitle: "Diensten",
      servicesLead:
        "Doel bij elk project: veilige installatie, ordelijke kast en een helder traject. Kies de dienst die past bij uw situatie.",
      audienceTitle: "Duidelijke voordelen voor eigenaars, syndici en bedrijven",
      quoteCta: "Offerte / afspraak",
      projectsCta: "Bekijk voorbeelden",
      quickContactTitle: "Snel contact",
      summaryTitle: "Korte samenvatting",
      call: "Bel",
      mail: "Mail",
    },
    servicesPage: {
      title: "Diensten",
      lead:
        "Algemene elektriciteitswerken, keuring/AREI voorbereiding, nieuwbouw en werfinstallaties, EV laadpalen en beveiligingssystemen.",
      contactLead:
        "Voor keuring, nieuwbouw, renovatie of vragen rond elektriciteit: contacteer ons.",
    },
    projectsPage: {
      title: "Referenties / Projecten",
      lead:
        "Deze voorbeelden tonen typische opdrachten in Regio Antwerpen. Later kunnen foto's en extra details toegevoegd worden.",
      ctaTitle: "Plant u een gelijkaardige opdracht?",
      ctaLead:
        "Voor keuring, installatie, renovatie of beveiliging: stuur kort uw vraag, dan denken we mee naar een passende oplossing.",
      servicesCta: "Bekijk de diensten",
    },
    aboutPage: {
      workingStyle: "Samenvatting",
      values: "Diensten",
      localFocus: "Extra info",
      contactCta: "Contacteer ons",
      servicesCta: "Bekijk de diensten",
    },
    contactPage: {
      title: "Contact",
      sendMessage: "Stuur een bericht",
      name: "Naam",
      contact: "Telefoon of e-mail",
      subject: "Onderwerp",
      message: "Bericht",
      placeholderName: "Uw naam",
      placeholderContact: "+32… of e-mail",
      placeholderMessage: "Type pand, locatie, uw vraag en timing.",
      errorMessage: "Schrijf uw vraag iets concreter in het berichtveld.",
      sending: "Verzenden…",
      sent: "Verzonden",
      send: "Verzenden",
      sendByEmail: "Verstuur via e-mail",
      success:
        "Uw bericht is ontvangen. We nemen zo snel mogelijk contact op. Voor snelle info kan u bellen.",
      social: "Social media",
      zone: "Regio",
      copy: "Kopieer",
      copied: "Gekopieerd",
      mail: "Mail",
      subjectOptions: [
        "Keuring / AREI voorbereiding",
        "Algemene elektriciteitswerken",
        "Nieuwbouw & werfinstallaties",
        "EV laadpaal (laadpalen)",
        "Camerabewaking / parlofonie",
        "Andere",
      ],
    },
    notFound: {
      title: "Pagina niet gevonden",
      lead: "Deze link is ongeldig of de pagina werd verplaatst.",
      homeCta: "Terug naar home",
      servicesCta: "Bekijk de diensten",
    },
    meta: {
      homeTitle: "Elektromax | Elektricien Antwerpen – Regio Antwerpen",
      homeDescription:
        "Algemene elektriciteitswerken, keuring/AREI voorbereiding, nieuwbouw & werfinstallaties, EV laadpalen, camerabewaking en parlofonie in Regio Antwerpen.",
      servicesTitle: "Diensten | Elektromax – Regio Antwerpen",
      servicesDescription:
        "Algemene elektriciteitswerken, keuring/AREI voorbereiding, nieuwbouw & werfinstallaties, EV laadpalen, camerabewaking en parlofonie.",
      projectsTitle: "Projecten | Elektromax – Regio Antwerpen",
      projectsDescription:
        "Voorbeelden: keuring/AREI, nieuwbouwinstallatie, camerabewaking & parlofonie en EV laadpalen.",
      aboutTitle: "Wie zijn wij? | Elektromax – Regio Antwerpen",
      aboutDescription:
        "Elektromax: lokaal in Antwerpen, focus op veiligheid, kwaliteit en duidelijke afspraken. AREI-conforme oplossingen.",
      contactTitle: "Contact | Elektromax – Regio Antwerpen",
      contactDescription:
        "Contacteer Elektromax voor keuring/AREI voorbereiding, algemene elektriciteitswerken, nieuwbouw, EV laadpaal en beveiligingsoplossingen.",
      notFoundTitle: "Pagina niet gevonden | Elektromax",
      notFoundDescription: "De pagina die u zoekt bestaat niet.",
    },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    routes: {
      services: "/services",
      projects: "/projects",
      about: "/about",
      contact: "/contact",
    },
    header: {
      toggleTheme: "Toggle theme",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      call: "Call",
      quoteCta: "Get a quote",
      language: "Choose language",
    },
    footer: {
      pages: "Pages",
      contact: "Contact",
      email: "Email",
      call: "Call",
      rights: "All rights reserved.",
      shortDesc:
        "Safe electrical works for homes, apartments, commercial premises and construction sites in the Antwerp Region.",
    },
    common: {
      details: "Details",
      viewAllServices: "View all services",
      quickContact: "Quick contact",
      callPrefix: "Call:",
      goToContact: "Go to contact",
      openForm: "Open form",
      region: "Region",
    },
    home: {
      servicesTitle: "Services",
      servicesLead:
        "Our goal on every job: safe installation, organised distribution board, clear process. Choose the service that fits your situation.",
      audienceTitle: "Clear benefits for homeowners, property managers and businesses",
      quoteCta: "Get a quote",
      projectsCta: "View project examples",
      quickContactTitle: "Quick Contact",
      summaryTitle: "Service Summary",
      call: "Call",
      mail: "Email",
    },
    servicesPage: {
      title: "Services",
      lead:
        "General electrical works, AREI/inspection preparation, new construction and job-site installations, EV charging stations and security systems.",
      contactLead:
        "For inspection preparation, new installations or any electrical question — get in touch.",
    },
    projectsPage: {
      title: "References / Projects",
      lead:
        "These examples show typical jobs carried out by Elektromax in the Antwerp Region. Photos and further details can be added later.",
      ctaTitle: "Planning a similar project?",
      ctaLead:
        "For inspection, installation, renovation or security: share your question briefly and we will work out a suitable solution together.",
      servicesCta: "View services",
    },
    aboutPage: {
      workingStyle: "How we work",
      values: "Values",
      localFocus: "Local focus — Antwerp Region",
      contactCta: "Get in touch",
      servicesCta: "View services",
    },
    contactPage: {
      title: "Contact",
      sendMessage: "Send a message",
      name: "Full name",
      contact: "Phone or email",
      subject: "Subject",
      message: "Message",
      placeholderName: "Your name",
      placeholderContact: "+32… or email",
      placeholderMessage: "Type of property, location, your question and preferred timing.",
      errorMessage: "Please describe your request in a bit more detail.",
      sending: "Sending…",
      sent: "Sent",
      send: "Send",
      sendByEmail: "Send via email",
      success:
        "Your message has been received. We will get back to you as soon as possible. For urgent matters, please call us.",
      social: "Social media",
      zone: "Region",
      copy: "Copy",
      copied: "Copied",
      mail: "Email us",
      subjectOptions: [
        "Inspection / AREI preparation",
        "General electrical works",
        "New construction & job-site installation",
        "EV charging station",
        "CCTV / intercom systems",
        "Other",
      ],
    },
    notFound: {
      title: "Page not found",
      lead: "This link may be invalid or the page has moved.",
      homeCta: "Back to home",
      servicesCta: "View services",
    },
    meta: {
      homeTitle: "Elektromax | Electrician Antwerp – Antwerp Region",
      homeDescription:
        "General electrical works, AREI/inspection preparation, new construction installations, EV charging stations, CCTV and intercom in the Antwerp Region.",
      servicesTitle: "Services | Elektromax – Antwerp Region",
      servicesDescription:
        "General electrical works, AREI inspection preparation, new construction, EV charging stations, CCTV and intercom.",
      projectsTitle: "Projects | Elektromax – Antwerp Region",
      projectsDescription:
        "Project examples: AREI inspection, new-build installation, CCTV & intercom and EV charging stations.",
      aboutTitle: "About | Elektromax – Antwerp Region",
      aboutDescription:
        "Elektromax: local in Antwerp, focused on safety, quality and clear communication. AREI-compliant electrical solutions.",
      contactTitle: "Contact | Elektromax – Antwerp Region",
      contactDescription:
        "Contact Elektromax for AREI inspection, general electrical works, new installations, EV chargers and security solutions.",
      notFoundTitle: "Page not found | Elektromax",
      notFoundDescription: "The page you are looking for does not exist.",
    },
  },


  tr: {
    nav: {
      home: "Ana Sayfa",
      services: "Hizmetler",
      projects: "Projeler",
      about: "Hakkimizda",
      contact: "Iletisim",
    },
    routes: {
      services: "/hizmetler",
      projects: "/projeler",
      about: "/hakkimizda",
      contact: "/iletisim",
    },
    header: {
      toggleTheme: "Tema degistir",
      openMenu: "Menuyu ac",
      closeMenu: "Menuyu kapat",
      call: "Ara",
      quoteCta: "Teklif / randevu isteyin",
      language: "Dil sec",
    },
    footer: {
      pages: "Sayfalar",
      contact: "Iletisim",
      email: "E-posta",
      call: "Ara",
      rights: "Tum haklari saklidir.",
      shortDesc: "Regio Antwerpen'de konut, apartman, isyeri ve santiyeler icin guvenli elektrik isleri.",
    },
    common: {
      details: "Detaylar",
      viewAllServices: "Tum hizmetleri goruntuleyin",
      quickContact: "Hizli iletisim",
      callPrefix: "Ara:",
      goToContact: "Iletisim sayfasina git",
      openForm: "Formu ac",
      region: "Bolge",
    },
    home: {
      servicesTitle: "Hizmetler",
      servicesLead: "Her iste amac: guvenli altyapi, duzenli pano, net surec.",
      audienceTitle: "Ev sahipleri, syndicus ve isletmeler icin net faydalar",
      quoteCta: "Teklif / randevu isteyin",
      projectsCta: "Ornek proje tiplerini inceleyin",
      quickContactTitle: "Hizli Iletisim",
      summaryTitle: "Hizmet Ozeti",
      call: "Ara",
      mail: "Mail",
    },
    servicesPage: {
      title: "Hizmetler",
      lead: "Konut, apartman ve isyerlerinde genel elektrik isleri; keuring/AREI hazirligi; yeni bina ve santiye projeleri.",
      contactLead: "Keuring oncesi hazirlik, yeni tesisat veya elektrikle ilgili sorulariniz icin bize ulasin.",
    },
    projectsPage: {
      title: "Referanslar / Projeler",
      lead: "Asagidaki ornekler, Elektromax'in Regio Antwerpen'de sik gerceklestirdigi is turlerini gosterir.",
      ctaTitle: "Benzer bir is mi planliyorsunuz?",
      ctaLead: "Keuring oncesi hazirlik, yeni tesisat veya guvenlik sistemleri icin kisa bir bilgi paylasin.",
      servicesCta: "Hizmetleri inceleyin",
    },
    aboutPage: {
      workingStyle: "Calisma tarzimiz",
      values: "Degerler",
      localFocus: "Yerel bolge odagi",
      contactCta: "Iletisime gecin",
      servicesCta: "Hizmetleri inceleyin",
    },
    contactPage: {
      title: "Iletisim",
      sendMessage: "Mesaj gonderin",
      name: "Ad Soyad",
      contact: "Telefon veya e-posta",
      subject: "Konu",
      message: "Mesaj",
      placeholderName: "Adiniz",
      placeholderContact: "+32... veya email",
      placeholderMessage: "Mekan tipi, bolge, ihtiyaciniz ve zaman tercihinizi yazin.",
      errorMessage: "Mesaj alanina talebinizi biraz daha detayli yazin.",
      sending: "Gonderiliyor...",
      sent: "Gonderildi",
      send: "Gonder",
      sendByEmail: "E-posta ile gonder",
      success: "Mesajiniz alindi. En kisa surede donus yapacagiz.",
      social: "Sosyal medya",
      zone: "Bolge",
      copy: "Kopyala",
      copied: "Kopyalandi",
      mail: "Mail at",
      subjectOptions: [
        "Keuring / AREI hazirligi",
        "Genel elektrik isleri",
        "Yeni bina & santiye tesisati",
        "EV sarj istasyonu (laadpalen)",
        "Kamera / interkom sistemleri",
        "Diger",
      ],
    },
    notFound: {
      title: "Sayfa bulunamadi",
      lead: "Bu baglanti gecersiz olabilir veya sayfa tasinmis olabilir.",
      homeCta: "Ana sayfaya don",
      servicesCta: "Hizmetleri inceleyin",
    },
    meta: {
      homeTitle: "Elektromax | Elektricien Antwerpen",
      homeDescription: "Regio Antwerpen'de genel elektrik isleri, keuring/AREI hazirligi, EV laadpalen, kamera ve interkom sistemleri.",
      servicesTitle: "Hizmetler | Elektromax",
      servicesDescription: "Genel elektrik isleri, keuring/AREI hazirligi, yeni bina tesisati, EV laadpalen, kamera ve interkom.",
      projectsTitle: "Projeler | Elektromax",
      projectsDescription: "Ornek proje tipleri: keuring/AREI hazirligi, yeni bina tesisati, kamera ve EV laadpalen.",
      aboutTitle: "Hakkimizda | Elektromax",
      aboutDescription: "Elektromax: guvenlik, kalite odakli yerel elektrik hizmeti. Antwerpen ve cevresinde AREI uyumlu cozumler.",
      contactTitle: "Iletisim | Elektromax",
      contactDescription: "Keuring/AREI hazirligi veya EV laadpalen icin Elektromax ile iletisime gecin.",
      notFoundTitle: "Sayfa bulunamadi | Elektromax",
      notFoundDescription: "Aradiginiz sayfa bulunamadi.",
    },
  },
};
