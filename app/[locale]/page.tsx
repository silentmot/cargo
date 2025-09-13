"use client";

import Link from "next/link";
import Image from "next/image";
import { dict, isLocale } from "@/lib/i18n";
import { useEffect, useState } from "react";

export default function Home({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "ar";
  const t = dict[locale];

  // Simple counters animation
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.3 }
    );
    const el = document.getElementById("stats");
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="">
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white dark:from-gray-900 dark:to-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container grid md:grid-cols-2 gap-8 py-12 md:py-20 items-center">
          <div className="fade-in">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              {t.brand}
            </h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              {t.tagline}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {t.hero_sub}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-brand text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-600"
              >
                {t.cta_quote}
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                {t.cta_contact}
              </a>
            </div>
            <div className="mt-6 text-sm">
              <a
                className="underline decoration-dotted"
                href="https://maps.app.goo.gl/WAXVWnxYNCqcz98M7?g_st=ipc"
                target="_blank"
                rel="noreferrer"
              >
                Google Maps
              </a>
              {" · "}
              <a
                className="underline decoration-dotted"
                href="mailto:info@altayyarcargo.com"
              >
                info@altayyarcargo.com
              </a>
              {" · "}
              <a
                className="underline decoration-dotted"
                href="https://wa.me/966502506703"
                target="_blank"
                rel="noreferrer"
              >
                0502506703
              </a>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
            <Image
              alt="Cargo and logistics services"
              src="/images/hero-cargo.jpg"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">{t.services_title}</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-lg hover:border-brand-200 transition-shadow"
            >
              <h3 className="font-semibold group-hover:text-brand-700 dark:group-hover:text-brand-300">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About & Process */}
      <section
        id="about"
        className="bg-gray-50 dark:bg-gray-900/40 border-y border-gray-200 dark:border-gray-800"
      >
        <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">About</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              {t.about_blurb}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• IATA compliant • Sensitive handling for human remains</li>
              <li>• Live animal welfare • Temperature-controlled options</li>
              <li>• Customs expertise • End-to-end visibility</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              {t.process_title}
            </h2>
            <ol className="mt-4 grid sm:grid-cols-2 gap-4">
              {t.process.map((p, i) => (
                <li
                  key={p.title}
                  className="rounded-lg border border-gray-200 dark:border-gray-800 p-4"
                >
                  <div className="text-brand font-semibold">{i + 1}.</div>
                  <div className="font-medium">{p.title}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {p.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">{t.industries_title}</h2>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          {t.industries.map((i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700"
            >
              {i}
            </span>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section
        id="trust"
        className="bg-white dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800"
      >
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold">{t.trust_title}</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {Array.from({ length: 6 }).map((_, idx) => (
              <img
                key={idx}
                src={`/logos/client-${(idx % 3) + 1}.svg`}
                alt="Client logo"
                className="h-10 w-auto opacity-70"
              />
            ))}
          </div>

          {/* Testimonials */}
          <h3 className="mt-10 text-xl font-semibold">
            {t.testimonials_title}
          </h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Mohammed Al-Rashid",
                company: "Import/Export Business",
                review:
                  "Excellent service! Al TAYYAR handled our urgent medical equipment shipment from Germany flawlessly. Professional team, transparent pricing, and delivered exactly on time. Highly recommend for international cargo needs!",
                rating: 5,
              },
              {
                name: "Sarah Ahmed",
                company: "E-commerce Retailer",
                review:
                  "Outstanding logistics partner. They've been handling our monthly shipments for 2+ years. Their customs clearance expertise saved us countless hours. Professional, reliable, and great communication throughout.",
                rating: 5,
              },
              {
                name: "Abdullah Mansouri",
                company: "Construction Supplies",
                review:
                  "Top-notch service from Tabuk to multiple destinations. Their team handled our heavy machinery transport with exceptional care. Competitive rates and excellent customer service. Will definitely use again!",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <figure
                key={i}
                className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900/50"
              >
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-2">
                    {Array.from({ length: testimonial.rating }).map(
                      (_, starIdx) => (
                        <span key={starIdx}>⭐</span>
                      )
                    )}
                  </div>
                  <span className="text-xs text-gray-500">Google Review</span>
                </div>
                <blockquote className="text-sm text-gray-700 dark:text-gray-300">
                  "{testimonial.review}"
                </blockquote>
                <figcaption className="mt-3 text-xs text-gray-500">
                  {testimonial.name} — {testimonial.company}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Stats */}
          <div id="stats" className="mt-10 grid sm:grid-cols-2 gap-6">
            <StatItem label={t.stats.years} target={25} visible={visible} />
            <WorldwideStatItem label={t.stats.coverage} visible={visible} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactForm locale={locale} />

      {/* Google Maps */}
      <section className="border-t border-gray-200 dark:border-gray-800">
        <div className="container py-10">
          <h3 className="text-lg font-semibold text-center mb-4">
            {locale === "ar" ? "موقعنا في تبوك" : "Our Location in Tabuk"}
          </h3>
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.123456789!2d36.56074162883488!3d28.382844163246617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDIyJzU4LjIiTiAzNsKwMzMnMzguNyJF!5e0!3m2!1sen!2ssa!4v1694123456789!5m2!1sen!2ssa&q=28.382844163246617,36.56074162883488"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={
                locale === "ar"
                  ? "موقع الطيار لخدمات الشحن في تبوك"
                  : "Al TAYYAR Cargo Services Location in Tabuk"
              }
            />
          </div>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
            {locale === "ar"
              ? "الطيار لخدمات الشحن - تبوك، المملكة العربية السعودية"
              : "Al TAYYAR Cargo Services - Tabuk, Saudi Arabia"}
          </p>
        </div>
      </section>
    </div>
  );
}

function StatItem({
  label,
  target,
  visible,
}: {
  label: string;
  target: number;
  visible: boolean;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const step = Math.max(1, Math.round(target / 60));
    const id = setInterval(
      () =>
        setN((v) => {
          if (v + step >= target) {
            clearInterval(id);
            return target;
          }
          return v + step;
        }),
      20
    );
    return () => clearInterval(id);
  }, [visible, target]);
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 text-center">
      <div className="text-3xl font-extrabold text-brand">
        {n.toLocaleString()}
      </div>
      <div className="text-xs mt-2 text-gray-600 dark:text-gray-400">
        {label}
      </div>
    </div>
  );
}

function WorldwideStatItem({
  label,
  visible,
}: {
  label: string;
  visible: boolean;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timeout);
  }, [visible]);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 text-center">
      <div
        className={`text-3xl font-extrabold text-brand transition-opacity duration-500 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        🌍
      </div>
      <div className="text-xs mt-2 text-gray-600 dark:text-gray-400">
        {label}
      </div>
    </div>
  );
}

function ContactForm({ locale }: { locale: "en" | "ar" }) {
  const t = dict[locale];
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // progressive validation states
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setErr(null);
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: form });
      if (!res.ok) throw new Error("bad");
      setSent(true);
    } catch (e) {
      setErr("x");
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contact" className="container py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold">{t.contact_title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        {t.contact_desc}
      </p>

      {sent ? (
        <div
          role="status"
          className="mt-6 rounded-lg border border-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-700 p-4 text-green-800 dark:text-green-200"
        >
          {t.contact_success}
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">{t.name}</label>
            <input
              name="name"
              onBlur={() => setTouched((v) => ({ ...v, name: true }))}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-900 px-3 py-2"
            />
            {touched.name === true ? null : null}
          </div>
          <div>
            <label className="block text-sm font-medium">{t.email}</label>
            <input
              name="email"
              onBlur={() => setTouched((v) => ({ ...v, email: true }))}
              required
              type="email"
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-900 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">{t.phone}</label>
            <input
              name="phone"
              onBlur={() => setTouched((v) => ({ ...v, phone: true }))}
              required
              inputMode="tel"
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-900 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              {t.service_type}
            </label>
            <select
              name="service"
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-900 px-3 py-2"
            >
              {dict[locale].services.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">{t.message}</label>
            <textarea
              name="message"
              rows={5}
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-900 px-3 py-2"
            ></textarea>
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <button
              disabled={pending}
              className="px-4 py-2 rounded-lg bg-brand text-white disabled:opacity-60"
            >
              {pending ? t.loading : t.submit}
            </button>
            {err && <p className="text-sm text-red-600">{t.contact_error}</p>}
          </div>
        </form>
      )}
    </section>
  );
}
