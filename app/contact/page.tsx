"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email Us",
    value: "hello@brightcubes.io",
    href: "mailto:hello@brightcubes.io",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Call Us",
    value: "+1 (800) 555-0198",
    href: "tel:+18005550198",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Headquarters",
    value: "548 Market St, San Francisco, CA 94104",
    href: "https://maps.google.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Office Hours",
    value: "Monday – Friday, 9 AM – 6 PM PST",
    href: null,
  },
];

const offices = [
  { city: "San Francisco", country: "United States", flag: "🇺🇸", role: "HQ" },
  { city: "New York", country: "United States", flag: "🇺🇸", role: "East Coast" },
  { city: "London", country: "United Kingdom", flag: "🇬🇧", role: "EMEA" },
];

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.subject ? `[${form.subject}] ${form.message}` : form.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    }
  }

  return (
    <>
      {/* ── Page Header ── */}
      <section className="hero-gradient relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Let&apos;s build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
              extraordinary
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
            Whether you&apos;re ready to start a transformation or just exploring your options,
            our team is here to help. We typically respond within one business day.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 15C1200 45 960 60 720 45C480 30 240 0 0 15L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Contact information</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Reach out through any channel below, or fill in the form and we&apos;ll
                  get back to you promptly.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-slate-800 font-medium hover:text-blue-600 transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-800 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Office locations */}
              <div>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                  Our Offices
                </h3>
                <div className="space-y-3">
                  {offices.map(({ city, country, flag, role }) => (
                    <div key={city} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg leading-none">{flag}</span>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{city}</p>
                          <p className="text-xs text-slate-500">{country}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 p-8 md:p-10">
                {status === "success" ? (
                  <div className="text-center py-12 px-4">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Message received!
                    </h3>
                    <p className="text-slate-500 mb-8 max-w-sm mx-auto">
                      Thanks for reaching out. A member of our team will be in touch
                      within one business day.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="btn-primary"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-slate-900 mb-1">
                        Send us a message
                      </h2>
                      <p className="text-sm text-slate-500">
                        All fields marked with <span className="text-red-500">*</span> are required.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      {/* Name + Email row */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-slate-700 mb-1.5"
                          >
                            Full name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Jane Smith"
                            value={form.name}
                            onChange={handleChange}
                            className="input-field"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-700 mb-1.5"
                          >
                            Work email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="jane@company.com"
                            value={form.email}
                            onChange={handleChange}
                            className="input-field"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select a topic...</option>
                          <option value="Digital Transformation">Digital Transformation</option>
                          <option value="Smart Analytics">Smart Analytics</option>
                          <option value="Cloud Solutions">Cloud Solutions</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Careers">Careers</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          placeholder="Tell us about your project, goals, or any questions you have..."
                          value={form.message}
                          onChange={handleChange}
                          className="input-field resize-none"
                        />
                      </div>

                      {/* Error message */}
                      {status === "error" && (
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                          </svg>
                          <p className="text-sm text-red-700">{errorMessage}</p>
                        </div>
                      )}

                      {/* Privacy note + Submit */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                        <p className="text-xs text-slate-400 max-w-xs">
                          By submitting this form you agree to our{" "}
                          <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
                          We never share your data.
                        </p>
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="btn-primary min-w-[160px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                        >
                          {status === "loading" ? (
                            <span className="flex items-center gap-2">
                              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Sending…
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              Send Message
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                              </svg>
                            </span>
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ strip ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-heading">Frequently asked questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How quickly can you start?",
                a: "Most engagements kick off within 2–4 weeks of signing. We'll schedule a discovery call within 48 hours of your inquiry.",
              },
              {
                q: "What size companies do you work with?",
                a: "We work with companies from 50-person scale-ups to global enterprises. Our approach adapts to your scale, budget, and goals.",
              },
              {
                q: "Do you offer fixed-price projects?",
                a: "Yes — for well-defined scopes. We also offer time-and-materials and retainer models depending on the nature of the engagement.",
              },
              {
                q: "Can you work with our existing tech stack?",
                a: "Absolutely. We're technology-agnostic and experienced across all major cloud providers, databases, and frameworks.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="card p-6">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">{q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
