import "../globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { isLocale, dict, type Locale } from "@/lib/i18n";
import Link from "next/link";
import clsx from "classnames";
import ThemeToggle from "@/components/ThemeToggle";
import { Cairo } from "next/font/google";
import { Cabin } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cabin",
  display: "swap",
});

export const dynamic = "force-static";

export default function RootLayout({
  params,
  children,
}: {
  params: { locale: string };
  children: ReactNode;
}) {
  const locale = isLocale(params.locale) ? params.locale : "ar";
  const t = dict[locale];
  const dir = locale === "ar" ? "rtl" : "ltr";
  const lang = locale;
  const fontClass = locale === "ar" ? cairo.variable : cabin.variable;

  return (
    <html
      lang={lang}
      dir={dir}
      className={clsx("h-full", fontClass)}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                const t = localStorage.getItem('theme');
                if (t === 'dark') document.documentElement.classList.add('dark');
              } catch {}
            })();`,
          }}
        />
      </head>
      <body
        className={clsx(
          "min-h-full bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100",
          locale === "ar" ? "font-cairo" : "font-cabin"
        )}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header locale={locale} />
        <main id="main" className="">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}

import Footer from "@/components/Footer";

function Header({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const other = locale === "ar" ? "en" : "ar";
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200 dark:bg-gray-950/70 dark:border-gray-800">
      <div className="container flex items-center justify-between py-3">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <img src="/logos/logo.svg" alt="" className="h-8 w-12" />
          <span className="font-semibold">{dict[locale].brand}</span>
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a
                href="#services"
                className="hover:text-brand-700 dark:hover:text-brand-400"
              >
                {t.nav_services}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-brand-700 dark:hover:text-brand-400"
              >
                {t.nav_about}
              </a>
            </li>
            <li>
              <a
                href="#industries"
                className="hover:text-brand-700 dark:hover:text-brand-400"
              >
                {t.nav_industries}
              </a>
            </li>
            <li>
              <a
                href="#trust"
                className="hover:text-brand-700 dark:hover:text-brand-400"
              >
                {t.nav_trust}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-brand-700 dark:hover:text-brand-400"
              >
                {t.nav_contact}
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href={`/${other}`}
            className="px-2 py-1 rounded border border-gray-300 dark:border-gray-700 text-xs hover:bg-gray-50 dark:hover:bg-gray-900"
            aria-label="Switch language"
          >
            {other.toUpperCase()}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function generateViewport() {
  return {
    themeColor: "#0B5ED7",
  };
}

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "ar";
  const t = dict[locale];
  const title =
    locale === "ar"
      ? "الطيار لخدمات الشحن | شحن جوي وبحري وخدمات متخصصة"
      : "Al TAYYAR Cargo Services | Air, Sea & Specialized Logistics";
  const description =
    locale === "ar"
      ? "شركة لوجستية متميزة بخبرة محلية وانتشار عالمي. شحن جوي وبحري ونقل الجثامين ونقل الحيوانات الحية والتخليص الجمركي."
      : "Premium logistics with local expertise and global reach. Air & sea freight, human remains repatriation, live animal transport, and customs clearance.";

  return {
    title,
    description,
    alternates: { canonical: `/${locale}` },
    openGraph: {
      title,
      description,
      type: "website",
      locale,
      siteName: t.brand,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
