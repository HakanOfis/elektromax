import type { SiteContent } from "@/content/elektromax";

export const elektromaxEn: SiteContent = {
  name: "Elektromax",
  sector: "General electrical works",
  region: "Antwerp Region",
  contact: {
    phone: "+32 485 77 26 30",
    email: "a.maxelektro@gmail.com",
    addressLine: "Antwerp and surroundings",
  },
  socials: [
    {
      label: "Instagram",
      handle: "amax5522",
      url: "https://www.instagram.com/amax5522",
    },
    {
      label: "X",
      handle: "amax5522",
      url: "https://x.com/amax5522",
    },
  ],
  home: {
    headline: "Safe electrical solutions for homes, commercial premises and construction sites in the Antwerp Region",
    intro:
      "Elektromax serves homes, apartments and small to medium businesses in the Antwerp Region. From general electrical works to AREI/inspection preparation and complete installations for new construction and job sites: we focus on safety, clean execution and a clear process.",
    ctas: [
      {
        label: "Contact us for a pre-inspection check",
        to: "/contact",
      },
      {
        label: "Request a free visit / quote",
        to: "/contact",
      },
    ],
    trust: [
      {
        title: "AREI-compliant",
        text: "Electrical installations in accordance with the rules, ready for the inspection process.",
      },
      {
        title: "Safety focus",
        text: "Correct wiring, correct protection and an organised distribution board.",
      },
      {
        title: "Clear process",
        text: "We explain what we do and why — no surprises afterwards.",
      },
    ],
    audience:
      "Whether you are a homeowner preparing for AREI inspection, a property manager looking after common areas, or a business needing a new installation — Elektromax offers a clear process and reliable execution in the Antwerp Region.",
  },
  services: [
    {
      slug: "genel-elektrik",
      title: "General Electrical Works",
      badge: "Residential & Commercial",
      intro:
        "From replacing sockets and switches to full rewiring of an apartment or commercial space: Elektromax carries out general electrical works with a focus on safety and AREI compliance.",
      seoTitle: "General Electrical Works Antwerp | Elektromax",
      seoDescription:
        "General electrical works in the Antwerp Region: sockets, switches, distribution boards, rewiring. AREI-compliant, neat finishing.",
      blocks: [
        {
          heading: "What does this service include?",
          body: [
            {
              type: "list",
              items: [
                "Replacing or adding sockets, switches and light points",
                "Replacing or upgrading distribution boards (groepenkast)",
                "Partial or complete rewiring of a home or apartment",
                "Adding extra circuits (washing machine, dryer, EV charger)",
                "Checking and repairing existing installations",
                "Preparing the installation for AREI inspection",
              ],
            },
          ],
        },
        {
          heading: "Why choose Elektromax?",
          body: [
            {
              type: "p",
              text: "We work in accordance with AREI regulations — the Belgian standard for electrical installations. Every job is finished neatly: cables concealed, distribution board clearly labelled, and the installation ready for inspection or immediate use.",
            },
          ],
        },
      ],
      cta: {
        title: "Questions or need a quote?",
        subtitle: "Tell us your situation — we will find a suitable solution together.",
        primaryLabel: "Request a quote",
        primaryTo: "/contact",
        secondaryLabel: "Back to services",
        secondaryTo: "/services",
      },
    },
    {
      slug: "keuring-arei",
      title: "Inspection / AREI Preparation",
      badge: "Inspection ready",
      intro:
        "Is your property due for an AREI inspection? Or has the inspection already flagged remarks? Elektromax brings your installation up to standard — efficiently and clearly.",
      seoTitle: "AREI Inspection Preparation Antwerp | Elektromax",
      seoDescription:
        "AREI inspection preparation in the Antwerp Region: remediation of remarks, distribution board upgrades, earthing and protection.",
      blocks: [
        {
          heading: "When is this needed?",
          body: [
            {
              type: "list",
              items: [
                "Before selling or renting a property (mandatory inspection)",
                "After an inspection with non-conformity remarks",
                "When buying an older property with an outdated installation",
                "When in doubt about the safety of your current installation",
              ],
            },
          ],
        },
        {
          heading: "Our approach",
          body: [
            {
              type: "p",
              text: "We review your inspection report and handle the required remediation work: earthing, circuit protection, distribution board upgrades, cable corrections and documentation. After the work, your installation is ready for re-inspection.",
            },
          ],
        },
      ],
      cta: {
        title: "Need to prepare for inspection?",
        subtitle: "Share your report or situation — we will discuss the next steps.",
        primaryLabel: "Contact us",
        primaryTo: "/contact",
        secondaryLabel: "Back to services",
        secondaryTo: "/services",
      },
    },
    {
      slug: "yeni-bina-santiye",
      title: "New Construction & Job Sites",
      badge: "New build",
      intro:
        "Complete electrical installation for new-build homes, apartments and commercial spaces. From the first conduit to the final distribution board.",
      seoTitle: "New Construction Electrical Installation Antwerp | Elektromax",
      seoDescription:
        "Complete electrical installations for new construction and job sites in the Antwerp Region. AREI-compliant, neatly executed.",
      blocks: [
        {
          heading: "What we deliver",
          body: [
            {
              type: "list",
              items: [
                "Complete electrical plan and installation for new-build homes",
                "Apartment block installations: common areas and individual units",
                "Commercial and industrial electrical works",
                "Coordination with other trades on site",
                "Installation ready for AREI inspection",
              ],
            },
          ],
        },
        {
          heading: "Planning and transparency",
          body: [
            {
              type: "p",
              text: "We work closely with the contractor or architect to align the electrical plan with the construction schedule. You receive a clear quote before we start, and we keep you informed throughout the project.",
            },
          ],
        },
      ],
      cta: {
        title: "Planning a new build?",
        subtitle: "Contact us early — good electrical planning saves time later.",
        primaryLabel: "Request a quote",
        primaryTo: "/contact",
        secondaryLabel: "Back to services",
        secondaryTo: "/services",
      },
    },
    {
      slug: "ev-laadpalen",
      title: "EV Charging Stations",
      badge: "Electric vehicles",
      intro:
        "Home or business EV charging point installation. Safe, compliant and with the right connection to your distribution board.",
      seoTitle: "EV Charging Station Installation Antwerp | Elektromax",
      seoDescription:
        "EV charging station (laadpaal) installation in the Antwerp Region. Home and business. AREI-compliant connection.",
      blocks: [
        {
          heading: "What we handle",
          body: [
            {
              type: "list",
              items: [
                "Single-phase and three-phase charging points (up to 22 kW)",
                "New circuit from distribution board to charging point",
                "Distribution board check and upgrade if needed",
                "Installation at home, garage or business premises",
                "Documentation for AREI compliance",
              ],
            },
          ],
        },
        {
          heading: "Important to know",
          body: [
            {
              type: "p",
              text: "A charging point requires a dedicated circuit and the correct protection. We check your existing installation first, so there are no surprises. We can also advise on eligible subsidies for home EV chargers.",
            },
          ],
        },
      ],
      cta: {
        title: "Want to install an EV charger?",
        subtitle: "We will check your installation and provide a clear quote.",
        primaryLabel: "Request a quote",
        primaryTo: "/contact",
        secondaryLabel: "Back to services",
        secondaryTo: "/services",
      },
    },
    {
      slug: "kamera-interkom",
      title: "CCTV & Intercom Systems",
      badge: "Security",
      intro:
        "Camera surveillance and intercom systems for homes and businesses. Professionally installed, neatly integrated into the existing installation.",
      seoTitle: "CCTV & Intercom Installation Antwerp | Elektromax",
      seoDescription:
        "Camera surveillance and intercom (parlofonie) installation in the Antwerp Region. Residential and commercial.",
      blocks: [
        {
          heading: "What we install",
          body: [
            {
              type: "list",
              items: [
                "Outdoor and indoor cameras (wired and wireless)",
                "Video doorbells and intercom systems",
                "Apartment block intercom with multiple units",
                "Integration with existing alarm or access control systems",
                "Remote viewing via app",
              ],
            },
          ],
        },
        {
          heading: "Clean finish",
          body: [
            {
              type: "p",
              text: "We work as neatly as possible: cables concealed where feasible, equipment discreetly positioned. We also explain how to use the system so you get the most out of your installation from day one.",
            },
          ],
        },
      ],
      cta: {
        title: "Questions about security systems?",
        subtitle: "Tell us your situation — we will suggest the right solution.",
        primaryLabel: "Contact us",
        primaryTo: "/contact",
        secondaryLabel: "Back to services",
        secondaryTo: "/services",
      },
    },
  ],
  projects: [
    {
      title: "Home rewiring + AREI preparation",
      description:
        "Complete rewiring of a semi-detached house (1970s) in Antwerp. New distribution board, earthing, circuit protection and preparation for AREI inspection.",
      tags: ["Residential", "AREI", "Distribution board"],
    },
    {
      title: "New-build electrical installation",
      description:
        "Complete electrical installation for a new-build detached house: conduit, wiring, distribution board, sockets and lighting.",
      tags: ["New build", "Residential", "Distribution board"],
    },
    {
      title: "EV charging point — home",
      description:
        "Installation of a 7.4 kW single-phase charging point in a private garage. New dedicated circuit, distribution board upgrade.",
      tags: ["EV charger", "Residential", "Distribution board"],
    },
    {
      title: "Apartment block — common areas",
      description:
        "Renewal of communal electrical installation for an apartment building: lighting, sockets, intercom and meter room.",
      tags: ["Apartment", "Common areas", "Intercom"],
    },
    {
      title: "CCTV + intercom — commercial",
      description:
        "Installation of 4 outdoor cameras, video doorbell and digital intercom for a commercial property in Antwerp.",
      tags: ["CCTV", "Intercom", "Commercial"],
    },
    {
      title: "AREI remediation — rental property",
      description:
        "Remediation of all non-conformity remarks from an AREI inspection report: earthing, circuit protection, distribution board.",
      tags: ["AREI", "Remediation", "Rental"],
    },
  ],
  about: {
    title: "About Elektromax",
    intro:
      "Elektromax is an electrical contractor active in the Antwerp Region. We serve homeowners, property managers, syndics and small to medium businesses with a focus on safety, quality and clear communication.",
    workingStyle: [
      "We start with a thorough inspection of the existing situation before proposing any solution.",
      "We work in accordance with AREI regulations — the Belgian standard for electrical safety.",
      "Every job is finished neatly: cables concealed, distribution board clearly labelled, clean workspace.",
      "We keep you informed throughout the project — no surprises afterwards.",
    ],
    values: [
      {
        title: "Safety first",
        text: "Every installation meets AREI requirements. We do not cut corners on safety.",
      },
      {
        title: "Transparency",
        text: "Clear quote before we start. We explain what we do and why.",
      },
      {
        title: "Quality",
        text: "Neat execution, quality materials, lasting result.",
      },
      {
        title: "Reliability",
        text: "We keep our appointments and finish the job as agreed.",
      },
    ],
    localFocus:
      "Elektromax is based in the Antwerp Region and mainly active in Antwerp and the surrounding municipalities. This allows us to respond quickly and maintain close contact with our clients.",
  },
  contactPage: {
    intro:
      "Do you have a question, need a quote or want to schedule a visit? Get in touch — we usually respond within one working day.",
    formHelp:
      "Describe your situation briefly: type of property, location and what you need. This helps us respond quickly and accurately.",
    closing:
      "Elektromax is active in Antwerp and the surrounding municipalities. Response within one working day.",
  },
};
