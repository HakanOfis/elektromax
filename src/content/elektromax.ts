export type SocialLink = {
  label: string;
  handle: string;
  url: string;
};

export type ServiceSlug =
  | "genel-elektrik"
  | "keuring-arei"
  | "yeni-bina-santiye"
  | "ev-laadpalen"
  | "kamera-interkom";

export type ServiceSection =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export type Service = {
  slug: ServiceSlug;
  title: string;
  badge?: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  blocks: Array<{
    heading: string;
    body: ServiceSection[];
  }>;
  cta: {
    title: string;
    subtitle: string;
    primaryLabel: string;
    primaryTo: string;
    secondaryLabel?: string;
    secondaryTo?: string;
  };
};

export type ProjectCard = {
  title: string;
  description: string;
  tags: string[];
};

export type SiteContent = {
  name: string;
  sector: string;
  region: string;
  contact: {
    phone: string;
    email: string;
    addressLine: string;
  };
  socials: SocialLink[];
  home: {
    headline: string;
    intro: string;
    ctas: Array<{ label: string; to: string }>;
    trust: Array<{ title: string; text: string }>;
    audience: string;
  };
  services: Service[];
  projects: ProjectCard[];
  about: {
    title: string;
    intro: string;
    workingStyle: string[];
    values: Array<{ title: string; text: string }>;
    localFocus: string;
  };
  contactPage: {
    intro: string;
    formHelp: string;
    closing: string;
  };
};

export const elektromax: SiteContent = {
  name: "Elektromax",
  sector: "Algemene elektriciteitswerken",
  region: "Regio Antwerpen",
  contact: {
    phone: "+32 485 77 26 30",
    email: "info@maxelektro.be",
    addressLine: "Antwerpen ve çevresi",
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
    headline: "Antwerpen’de konut, işyeri ve şantiyeler için güvenli elektrik çözümleri",
    intro:
      "Elektromax, Regio Antwerpen’de (Antwerpen ve çevresi) konut, apartman ve işletmelere yönelik genel elektrik işleri, keuring/AREI hazırlığı ve yeni bina elektrik tesisatı alanlarında hizmet verir. Güvenliği ve standartlara uygunluğu merkeze alarak, ihtiyaca göre net ve planlı çözümler sunar.",
    ctas: [
      {
        label: "Keuring öncesi elektrik kontrolü için iletişime geçin",
        to: "/iletisim",
      },
      {
        label: "Ücretsiz keşif / teklif isteyin",
        to: "/iletisim",
      },
    ],
    trust: [
      {
        title: "AREI uyumu",
        text: "Elektrik tesisatı kurallarına uygun, kontrol sürecine hazır altyapı.",
      },
      {
        title: "Güvenlik odağı",
        text: "Doğru kablolama, doğru koruma ve düzenli pano yaklaşımı.",
      },
      {
        title: "Yerel hizmet",
        text: "Antwerpen bölgesindeki bina tiplerine ve ihtiyaçlara hakim uygulama.",
      },
      {
        title: "Net süreç",
        text: "Keşif → plan → uygulama → teslim adımlarıyla şeffaf ilerleyiş.",
      },
    ],
    audience:
      "Ev sahipleri için güvenli ve sorunsuz bir altyapı, apartman yöneticileri (syndicus) için ortak alan çözümleri, işletmeler için kesintisiz çalışmayı destekleyen planlı uygulamalar. “Elektricien Antwerpen” arayanlar için hızlı iletişim ve ihtiyaca uygun çözüm odaklı yaklaşım.",
  },
  services: [
    {
      slug: "genel-elektrik",
      badge: "algemene elektriciteitswerken",
      title: "Genel Elektrik İşleri",
      intro:
        "Konut, apartman ve işyerlerinde yeni kurulumdan modernizasyona kadar, güvenli ve düzenli elektrik işleri.",
      seoTitle: "Algemene elektriciteitswerken | Elektricien Antwerpen – Elektromax",
      seoDescription:
        "Regio Antwerpen’de algemene elektriciteitswerken: tesisat kurulumu, yenileme, aydınlatma, pano düzenleme ve arıza onarım hizmetleri.",
      blocks: [
        {
          heading: "Neleri kapsar?",
          body: [
            {
              type: "p",
              text: "Elektrik altyapısı zamanla ihtiyaçlara göre değişir: yeni priz noktaları, aydınlatma düzeni, renovasyon sonrası hatların güncellenmesi veya pano kapasitesinin iyileştirilmesi gibi. Elektromax, genel elektrik işlerinde doğru planlama ve temiz işçilikle ilerler.",
            },
            {
              type: "list",
              items: [
                "Yeni tesisat kurulumu ve mevcut tesisatın düzenlenmesi",
                "Elektrik yenileme / modernizasyon",
                "Ek priz, anahtar ve aydınlatma noktaları",
                "Sigorta panosu düzenleme ve güvenlik iyileştirmeleri",
                "Arıza tespiti ve onarım",
              ],
            },
          ],
        },
        {
          heading: "Kimler için?",
          body: [
            {
              type: "list",
              items: [
                "Yeni ev/daire alan ve taşınma öncesi kontrol yaptırmak isteyenler",
                "Renovasyon yapan ev sahipleri",
                "İşyerini yenileyen ve yeni cihaz/hat ekleyen işletmeler",
                "Apartman ortak alanlarında düzen ve güvenlik isteyen syndicus/yöneticiler",
              ],
            },
          ],
        },
        {
          heading: "Güvenlik ve AREI uyumu",
          body: [
            {
              type: "p",
              text: "Elektrik işlerinde küçük bir hata bile ileride arızaya, cihaz hasarına veya güvenlik riskine dönüşebilir. Bu nedenle doğru kablolama, uygun sigorta/koruma seçimi ve pano düzeni kritik önemdedir. Elektromax uygulamaları AREI kurallarına uygun şekilde planlar.",
            },
          ],
        },
        {
          heading: "Anahtar aramalar",
          body: [
            {
              type: "p",
              text: "Elektricien Antwerpen, algemene elektriciteitswerken regio Antwerpen.",
            },
          ],
        },
      ],
      cta: {
        title: "Elektrik işi planlı ilerlesin",
        subtitle: "Keşif ve teklif için kısa bir mesaj bırakın.",
        primaryLabel: "Ücretsiz keşif isteyin",
        primaryTo: "/iletisim",
        secondaryLabel: "Tüm hizmetleri görün",
        secondaryTo: "/hizmetler",
      },
    },
    {
      slug: "keuring-arei",
      title: "Keuring / AREI Hazırlığı",
      intro:
        "Elektrische keuring öncesi mevcut tesisatı kontrol edip eksikleri gidererek sistemi AREI’ye uygun hale getiriyoruz.",
      seoTitle: "Keuring / AREI hazırlığı – Elektromax | Regio Antwerpen",
      seoDescription:
        "Antwerpen’de keuring öncesi elektrik kontrolü, eksik tespiti, düzeltme ve AREI’ye uygun hale getirme hizmeti.",
      blocks: [
        {
          heading: "Keuring / AREI nedir?",
          body: [
            {
              type: "p",
              text: "Belçika’da elektrik tesisatı belirli durumlarda kontrolden (keuring) geçmelidir. Ev satışı, kiralama veya büyük renovasyonlarda tesisatın güvenli ve kurallara uygun (AREI) olması beklenir. Amaç, sistemin güvenli çalıştığından emin olmaktır.",
            },
          ],
        },
        {
          heading: "Elektromax nasıl yardımcı olur?",
          body: [
            {
              type: "list",
              items: [
                "Mevcut tesisatı yerinde inceleme",
                "Eksik/hatalı noktaları tespit etme",
                "Gerekli düzeltmeleri yapma",
                "Keuring öncesi sistemi düzenli ve kontrol edilebilir hale getirme",
              ],
            },
          ],
        },
        {
          heading: "Sık görülen sorunlar",
          body: [
            {
              type: "list",
              items: [
                "Eski binalarda karışık kablolama",
                "Sigorta panosunda düzensizlik ve yetersiz koruma",
                "Standart dışı bağlantılar veya sonradan eklenmiş hatlar",
                "Etiketleme/organizasyon eksikliği",
              ],
            },
          ],
        },
        {
          heading: "Avantajlar",
          body: [
            {
              type: "list",
              items: [
                "Zaman kaybını azaltır, süreci netleştirir",
                "İkinci kez kontrol masrafı riskini düşürür",
                "Daha güvenli ve düzenli bir tesisat sağlar",
              ],
            },
          ],
        },
      ],
      cta: {
        title: "Keuring öncesi kontrol için randevu alın",
        subtitle: "Kısa bir bilgi paylaşın, en uygun adımı birlikte netleştirelim.",
        primaryLabel: "Randevu talep edin",
        primaryTo: "/iletisim",
        secondaryLabel: "Elektrische keuring için hazırlık",
        secondaryTo: "/iletisim",
      },
    },
    {
      slug: "yeni-bina-santiye",
      title: "Yeni Bina & Şantiye Elektrik Tesisatı",
      intro:
        "Müteahhit ve proje sahipleri için planlı, koordineli ve standartlara uygun komple elektrik tesisatı kurulumu.",
      seoTitle: "Yeni bina & şantiye elektrik tesisatı – Elektromax | Antwerpen",
      seoDescription:
        "Antwerpen’de yeni bina ve şantiye projelerinde komple elektrik tesisatı: kablolama, pano, priz ve aydınlatma altyapısı.",
      blocks: [
        {
          heading: "Yeni inşaat projeleri için kapsam",
          body: [
            {
              type: "list",
              items: [
                "Kablolama altyapısı ve hatların planlı uygulanması",
                "Priz, anahtar ve aydınlatma altyapısının hazırlanması",
                "Sigorta panosu kurulumu ve düzenleme",
                "Gerekli güvenlik korumaları ve standartlara uygun uygulama",
              ],
            },
          ],
        },
        {
          heading: "Şantiye disiplini ve koordinasyon",
          body: [
            {
              type: "p",
              text: "Şantiye ortamında iş programına uyum ve koordinasyon, proje kalitesi kadar önemlidir. Elektromax, takvime göre aşamalı ilerler ve diğer ekiplerle uyumlu çalışır.",
            },
          ],
        },
        {
          heading: "İşveren için avantaj",
          body: [
            {
              type: "list",
              items: [
                "Tek elden çözüm ve net iş takibi",
                "Düzenli ve standartlara uygun (AREI) tesisat",
                "Proje sonrası ihtiyaçlarda destek odaklı yaklaşım",
              ],
            },
          ],
        },
      ],
      cta: {
        title: "Projeniz için elektrik altyapısını planlayalım",
        subtitle: "Şantiye takvimi, kapsam ve ihtiyaçlarınızı kısaca iletin.",
        primaryLabel: "Teklif isteyin",
        primaryTo: "/iletisim",
        secondaryLabel: "Projeleri görün",
        secondaryTo: "/projeler",
      },
    },
    {
      slug: "ev-laadpalen",
      badge: "EV laadpalen",
      title: "Araç Şarj İstasyonu (EV Laadpalen)",
      intro:
        "Ev, apartman otoparkı ve işyerleri için güvenli EV şarj noktası altyapısı ve montajı.",
      seoTitle: "EV laadpalen kurulumu – Elektromax | Regio Antwerpen",
      seoDescription:
        "Antwerpen’de EV şarj istasyonu (laadpalen) kurulumu: kapasite kontrolü, güvenli kablolama, koruma ve devreye alma.",
      blocks: [
        {
          heading: "Neden özel şarj noktası?",
          body: [
            {
              type: "p",
              text: "Elektrikli araç kullanımının artmasıyla birlikte evde veya işyerinde kendi şarj noktanıza sahip olmak konfor sağlar. Doğru kurulum hem güvenlik hem de şarj verimliliği açısından kritiktir.",
            },
          ],
        },
        {
          heading: "Sunulan çözümler",
          body: [
            {
              type: "list",
              items: [
                "Ev tipi şarj istasyonu kurulumu",
                "Apartman otoparkı altyapısı ve ortak alan çözümleri",
                "İşyerlerinde personel/müşteri için şarj noktası planlama ve montaj",
              ],
            },
          ],
        },
        {
          heading: "Teknik konuları sade anlatım",
          body: [
            {
              type: "p",
              text: "Şarj istasyonunda güç kapasitesi, doğru kablo kesiti ve uygun koruma elemanları (sigorta/kaçak akım koruması gibi) güvenlik için önemlidir. Elektromax, sahada değerlendirme yaparak ihtiyaca uygun kurulum hedefler.",
            },
          ],
        },
      ],
      cta: {
        title: "EV şarj istasyonu için keşif talep edin",
        subtitle: "Kurulum yeri, mevcut elektrik kapasitesi ve kullanım hedefini kısaca belirtin.",
        primaryLabel: "Keşif isteyin",
        primaryTo: "/iletisim",
        secondaryLabel: "Diğer hizmetler",
        secondaryTo: "/hizmetler",
      },
    },
    {
      slug: "kamera-interkom",
      badge: "camerabewaking • videofonie",
      title: "Kamera & Interkom Sistemleri",
      intro:
        "Apartman, ev ve işyerleri için camerabewaking ile videofonie/parlofonie çözümleri: montaj, kablolama ve devreye alma.",
      seoTitle: "Camerabewaking ve interkom – Elektromax | Antwerpen",
      seoDescription:
        "Antwerpen’de güvenlik kamerası (camerabewaking) ve interkom/videofonie sistemleri kurulumu: uygun sistem seçimi, montaj ve devreye alma.",
      blocks: [
        {
          heading: "Güvenlik kamerası (camerabewaking)",
          body: [
            {
              type: "list",
              items: [
                "Apartman girişleri ve ortak alanlar",
                "Otopark ve depo alanları",
                "İşyeri içi ve dışı izleme noktaları",
              ],
            },
          ],
        },
        {
          heading: "Interkom / görüntülü diafon (videofonie / parlofonie)",
          body: [
            {
              type: "list",
              items: [
                "Apartmanlarda giriş kontrolü çözümleri",
                "Müstakil evlerde kapı önü iletişim ve görüntüleme",
                "İşyerlerinde ziyaretçi ve teslimat yönetimi",
              ],
            },
          ],
        },
        {
          heading: "Avantajlar",
          body: [
            {
              type: "list",
              items: [
                "Güvenlik artışı ve caydırıcılık",
                "Ziyaretçi/teslimat kontrolü ile daha düzenli giriş yönetimi",
                "Kayıt imkanıyla geriye dönük inceleme (sisteme göre değişebilir)",
              ],
            },
          ],
        },
        {
          heading: "Elektromax’in katkısı",
          body: [
            {
              type: "p",
              text: "Uygun sistem seçimi, montaj, kablolama ve devreye alma adımlarını tek bir planla yönetiriz. Amaç: sorunsuz kullanım ve düzenli kurulum.",
            },
          ],
        },
      ],
      cta: {
        title: "Güvenlik ve giriş kontrolünü güçlendirin",
        subtitle: "Alanı ve ihtiyacı kısaca yazın, size uygun sistemi birlikte seçelim.",
        primaryLabel: "İletişime geçin",
        primaryTo: "/iletisim",
        secondaryLabel: "Projeleri görün",
        secondaryTo: "/projeler",
      },
    },
  ],
  projects: [
    {
      title: "Antwerpen’de apartman dairesinde keuring öncesi tesisat yenileme",
      description:
        "Eski tesisatta karışık kablolama ve pano düzensizliği tespit edildi. Gerekli düzeltmeler yapılarak hatlar düzenlendi ve sistem AREI kontrolü için hazır hale getirildi.",
      tags: ["Keuring", "AREI", "Apartman"],
    },
    {
      title: "Yeni inşaat projesinde komple elektrik tesisatı",
      description:
        "Yeni bina projesinde priz, aydınlatma ve pano altyapısı proje planına uygun kuruldu. Şantiye takvimine göre aşamalı ilerlenerek koordinasyon sağlandı.",
      tags: ["Şantiye", "Yeni bina", "Tesisat"],
    },
    {
      title: "İşyeri için kamera ve interkom kurulumu",
      description:
        "Giriş ve kritik noktalar için camerabewaking sistemi planlandı, kablolama yapıldı ve devreye alındı. Ek olarak giriş kontrolü için interkom çözümü kuruldu.",
      tags: ["Camerabewaking", "Videofonie", "İşyeri"],
    },
    {
      title: "EV şarj istasyonu montajı (ev/işyeri)",
      description:
        "Mevcut elektrik kapasitesi kontrol edildi, uygun hat ve koruma ekipmanları belirlendi. EV laadpalen montajı tamamlandı ve güvenli şekilde devreye alındı.",
      tags: ["EV", "Laadpalen", "Kurulum"],
    },
  ],
  about: {
    title: "Hakkımızda (Over ons)",
    intro:
      [
        "⚡ Elektromax – Elektrikte 35 Yıllık Tecrübe!",
        "Her türlü elektrik işlerinizde uzman kadromuzla hızlı, güvenli ve kaliteli çözümler sunuyoruz.",
        "Ev, iş yeri veya sanayi… İhtiyacınız olan her yerde yanınızdayız! Güvenilir Hizmet, Usta Dokunuş!",
        "",
        "📞 Telefon: 0485772630",
        "E-posta: a.maxelektro@gmail.com",
      ].join("\n"),
    workingStyle: [
      "Şeffaf yaklaşım: İhtiyaç netleştirilir, çözüm açık şekilde anlatılır",
      "Randevuya sadakat: Planlı çalışma ve düzenli iletişim",
      "Güvenli ve temiz işçilik: Uygulama sonrası düzenli teslim anlayışı",
      "Müşteri odaklılık: Ev sahibi, syndicus ve işletmelerin farklı ihtiyaçlarına uygun çözüm",
    ],
    values: [
      {
        title: "Hizmetlerimiz",
        text: [
          "✓ Gehele elektrische installatie plaatsen",
          "◦ Domotica",
          "◦ Zekeringkast vernieuwen / aanpassen",
          "◦ Stopcontacten en schakelaars vervangen",
          "◦ Plaatsen extra stopcontacten of lichtpunten",
          "◦ Installatie voorbereiden voor de keuring",
          "◦ Eendraadsschema en situatieschema maken",
          "◦ Plaatsen zonnepanelen",
          "◦ Plaatsen laadpalen walbox",
          "◦ Batterij plaatsen",
          "◦ Camera installatie",
          "◦ Brandinstallatie",
          "◦ Rookmelders installeren",
          "◦ Krachtstroom 400V installeren",
        ].join("\n"),
      },
      {
        title: "Güvenlik",
        text: "Doğru uygulama, doğru koruma, doğru altyapı.",
      },
      {
        title: "Kalite",
        text: "Sağlam ve sürdürülebilir çözümler.",
      },
      {
        title: "Dürüstlük",
        text: "Net iletişim ve gerçekçi yönlendirme.",
      },
      {
        title: "Uzun vadeli bakış",
        text: "Bugünü çözerken yarını da düşünmek.",
      },
    ],
    localFocus:
      "Antwerpen ve çevresinde hizmet veren yerel bir elektrikçi olarak, bölgedeki bina tiplerini ve renovasyon süreçlerini yakından bilen bir yaklaşımla çalışır. “Elektricien Antwerpen” arayışınızda hızlı ulaşılabilir ve çözüm odaklı bir hizmet hedeflenir.",
  },
  contactPage: {
    intro:
      "Keuring öncesi hazırlık, yeni tesisat veya elektrikle ilgili sorularınız için bizimle iletişime geçin. Regio Antwerpen’de hızlı geri dönüş ve net süreç hedefliyoruz.",
    formHelp:
      "Aşağıdaki formu doldurun, size en kısa sürede dönüş yapalım. Mümkünse talebinizi kısaca (mekan tipi, bölge, ihtiyaç ve zaman tercihi) belirtin.",
    closing:
      "Hızlı bilgi almak için arayabilir veya e-posta gönderebilirsiniz. Elektromax, Antwerpen bölgesinde güvenli ve standartlara uygun elektrik çözümleri için yanınızda.",
  },
};

export function getService(slug: ServiceSlug) {
  const s = elektromax.services.find((x) => x.slug === slug);
  if (!s) {
    throw new Error("Service not found");
  }
  return s;
}
