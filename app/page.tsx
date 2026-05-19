import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BrightCubes — Digital Transformation for Modern Business",
  description:
    "Transform your business with BrightCubes. We deliver digital transformation, smart analytics, and cloud solutions that drive real growth.",
};

const features = [
  {
    id: 1,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Digital Transformation",
    description:
      "We reimagine your business processes end-to-end, replacing outdated systems with modern, scalable digital workflows that accelerate growth and reduce operational friction.",
    highlights: ["Process Automation", "Legacy Modernization", "Change Management"],
    color: "blue",
  },
  {
    id: 2,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Smart Analytics",
    description:
      "Turn raw data into strategic advantage. Our analytics platform surfaces real-time insights, predictive trends, and actionable intelligence that empower every level of your organization.",
    highlights: ["Real-Time Dashboards", "Predictive Modeling", "Data Governance"],
    color: "purple",
  },
  {
    id: 3,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Cloud Solutions",
    description:
      "Migrate, optimize, and scale confidently in the cloud. We design multi-cloud and hybrid architectures that maximize performance, minimize costs, and keep your data secure.",
    highlights: ["Multi-Cloud Architecture", "Cost Optimization", "Security & Compliance"],
    color: "indigo",
  },
];

const stats = [
  { value: "500+", label: "Clients Worldwide" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Years of Experience" },
  { value: "40+", label: "Countries Served" },
];

const testimonials = [
  {
    id: 1,
    quote:
      "BrightCubes fundamentally changed how we operate. Our process efficiency improved by 60% in the first six months.",
    author: "Sarah Chen",
    role: "CTO, NexaRetail",
    avatar: "SC",
    avatarBg: "bg-blue-500",
  },
  {
    id: 2,
    quote:
      "The analytics platform they built gives us insights we never had before. Decision-making has never been faster or more confident.",
    author: "Marcus Obi",
    role: "VP Operations, LogiFlow",
    avatar: "MO",
    avatarBg: "bg-purple-500",
  },
  {
    id: 3,
    quote:
      "Their cloud migration expertise saved us months of work and reduced our infrastructure costs by 35%.",
    author: "Elena Vasquez",
    role: "Head of Engineering, FinBridge",
    avatar: "EV",
    avatarBg: "bg-indigo-500",
  },
];

const featureColorMap: Record<string, { bg: string; text: string; badge: string }> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    badge: "bg-purple-100 text-purple-700",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    badge: "bg-indigo-100 text-indigo-700",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 py-28 md:py-36 lg:py-44">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Now serving 40+ countries worldwide
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-slide-up">
              Transform Your Business{" "}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                with BrightCubes
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10 animate-slide-up delay-100">
              We partner with forward-thinking companies to architect their digital future —
              from strategy and analytics to full-scale cloud transformation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
              <Link href="/contact" className="btn-primary text-base px-8 py-4 bg-white text-blue-700 hover:bg-blue-50">
                Start Your Transformation
              </Link>
              <Link href="/about" className="btn-ghost text-base px-8 py-4">
                Learn About Us
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-in delay-300">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 80L1440 80L1440 20C1200 60 960 80 720 60C480 40 240 0 0 20L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
              What We Do
            </span>
            <h2 className="section-heading">
              Everything you need to{" "}
              <span className="gradient-text">lead the digital era</span>
            </h2>
            <p className="section-subheading">
              Our three core pillars work in concert to deliver transformation that lasts —
              not just a one-time project, but an ongoing competitive edge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const colors = featureColorMap[feature.color];
              return (
                <div key={feature.id} className="card p-8 group">
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((h) => (
                      <span key={h} className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="section-heading">How we work with you</h2>
            <p className="section-subheading">
              A proven four-step engagement model that delivers measurable results from day one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200" />

            {[
              { step: "01", title: "Discovery", desc: "We immerse ourselves in your business — goals, constraints, data, and teams." },
              { step: "02", title: "Strategy", desc: "We design a tailored roadmap with clear milestones, KPIs, and risk mitigation." },
              { step: "03", title: "Execution", desc: "Agile delivery by our expert engineers, analysts, and architects, sprint by sprint." },
              { step: "04", title: "Growth", desc: "Ongoing optimization, training, and support to compound your returns over time." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-200 relative z-10">
                  {step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="section-heading">What our clients say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="card p-8 flex flex-col gap-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-slate-600 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.avatarBg} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{t.author}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold mb-6">
            Ready to get started?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Your digital transformation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
              starts today
            </span>
          </h2>
          <p className="text-blue-100/90 text-lg max-w-xl mx-auto mb-10">
            Join 500+ companies that chose BrightCubes to navigate and lead their digital future.
            Let&apos;s build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4 bg-white text-blue-700 hover:bg-blue-50">
              Book a Free Consultation
            </Link>
            <Link href="/about" className="btn-ghost text-base px-8 py-4">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
