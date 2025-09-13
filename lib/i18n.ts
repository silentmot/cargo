export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"] as const;
export const defaultLocale: Locale = "ar";

export function isLocale(x: string): x is Locale {
  return locales.includes(x as Locale);
}

const en = {
  brand: "Al TAYYAR Cargo Services",
  tagline: "Reliable air, sea & specialized cargo across the globe",
  cta_quote: "Get a Quote",
  cta_contact: "Contact Us",
  nav_services: "Services",
  nav_about: "About",
  nav_industries: "Industries",
  nav_trust: "Trust",
  nav_contact: "Contact",
  hero_sub: "From Tabuk to the world — secure, compliant, and on time.",
  services_title: "Our Services",
  services: [
    { title: "Air Freight", desc: "Fast, secure, and trackable air cargo." },
    { title: "Sea Freight", desc: "Cost‑effective FCL/LCL ocean solutions." },
    { title: "Door‑to‑Door", desc: "End‑to‑end pickup and delivery." },
    {
      title: "Customs Clearance",
      desc: "Hassle‑free documentation & clearance.",
    },
    {
      title: "Human Remains Repatriation",
      desc: "Dignified, compliant handling with utmost sensitivity.",
    },
    {
      title: "Live Animal Transport",
      desc: "IATA‑compliant, welfare‑first procedures.",
    },
  ],
  process_title: "How It Works",
  process: [
    { title: "Consult", desc: "Tell us your route, cargo, and timeline." },
    { title: "Plan", desc: "We design the optimal compliant solution." },
    { title: "Move", desc: "Execution with real‑time updates." },
    { title: "Deliver", desc: "On‑time delivery and confirmation." },
  ],
  stats: {
    years: "Years in business",
    deliveries: "Successful deliveries",
    coverage: "Worldwide Services",
  },
  trust_title: "Trusted by Local & International Partners",
  testimonials_title: "What Clients Say",
  contact_title: "Request a Quote",
  contact_desc: "We reply within 1 business day.",
  contact_success: "Thanks! We received your message.",
  contact_error: "Something went wrong. Please try again.",
  name: "Name",
  email: "Email",
  phone: "Phone (WhatsApp)",
  service_type: "Service Type",
  message: "Message",
  submit: "Send Request",
  loading: "Sending...",
  required: "This field is required",
  invalid_email: "Please enter a valid email",
  footer_about: "Premium logistics with local expertise and global reach.",
  rights: "All rights reserved.",
  theme: "Theme",
  light: "Light",
  dark: "Dark",
  language: "Language",
  about_blurb:
    "We help businesses and individuals ship confidently with compliant, secure logistics.",
  industries_title: "Industries We Serve",
  industries: [
    "Manufacturing",
    "Retail & E‑commerce",
    "Healthcare",
    "Aviation",
    "Agriculture",
    "Government",
  ],
};

const ar = {
  brand: "الطيار لخدمات الشحن",
  tagline: "شحن جوي وبحري وخدمات متخصصة بثقة حول العالم",
  cta_quote: "اطلب عرض سعر",
  cta_contact: "تواصل معنا",
  nav_services: "خدماتنا",
  nav_about: "من نحن",
  nav_industries: "القطاعات",
  nav_trust: "الثقة",
  nav_contact: "تواصل",
  hero_sub: "من تبوك إلى العالم — أمان، التزام، ودقة في المواعيد.",
  services_title: "خدماتنا",
  services: [
    { title: "الشحن الجوي", desc: "سريع وآمن مع إمكانية التتبع." },
    {
      title: "الشحن البحري",
      desc: "حلول اقتصادية بالحاويات الكاملة أو المشتركة.",
    },
    {
      title: "من الباب إلى الباب",
      desc: "استلام وتوصيل شامل من البداية للنهاية.",
    },
    { title: "التخليص الجمركي", desc: "إجراءات ووثائق بدون تعقيد." },
    {
      title: "نقل الجثامين",
      desc: "تعامل إنساني ومتوافق مع الأنظمة بأقصى درجات الحساسية.",
    },
    {
      title: "نقل الحيوانات الحية",
      desc: "وفق معايير IATA مع مراعاة الرفق بالحيوان.",
    },
  ],
  process_title: "آلية العمل",
  process: [
    { title: "استشارة", desc: "أخبرنا بالمسار ونوع الشحنة والموعد." },
    { title: "تخطيط", desc: "نصمم الحل الأمثل المتوافق مع الأنظمة." },
    { title: "تنفيذ", desc: "تنفيذ مع تحديثات فورية." },
    { title: "تسليم", desc: "تسليم في الوقت المحدد وتأكيد ذلك." },
  ],
  stats: {
    years: "سنوات خبرة",
    deliveries: "شحنات ناجحة",
    coverage: "خدمات عالمية",
  },
  trust_title: "شركاء محليون ودوليون يثقون بنا",
  testimonials_title: "ماذا يقول عملاؤنا",
  contact_title: "طلب عرض سعر",
  contact_desc: "نرد خلال يوم عمل واحد.",
  contact_success: "تم استلام رسالتك بنجاح.",
  contact_error: "حدث خطأ، حاول مرة أخرى.",
  name: "الاسم",
  email: "البريد الإلكتروني",
  phone: "رقم الجوال (واتساب)",
  service_type: "نوع الخدمة",
  message: "الرسالة",
  submit: "إرسال الطلب",
  loading: "جارٍ الإرسال...",
  required: "هذا الحقل مطلوب",
  invalid_email: "يرجى إدخال بريد إلكتروني صحيح",
  footer_about: "خدمات لوجستية متميزة بخبرة محلية وانتشار عالمي.",
  rights: "جميع الحقوق محفوظة.",
  theme: "السمة",
  light: "فاتح",
  dark: "داكن",
  language: "اللغة",
  about_blurb:
    "نساعد الشركات والأفراد على الشحن بثقة مع التزام بالامتثال والأمان.",
  industries_title: "القطاعات التي نخدمها",
  industries: [
    "التصنيع",
    "التجزئة والتجارة الإلكترونية",
    "الرعاية الصحية",
    "الطيران",
    "الزراعة",
    "الجهات الحكومية",
  ],
};

export type Dict = typeof en;
export const dict: Record<Locale, Dict> = { en, ar };
