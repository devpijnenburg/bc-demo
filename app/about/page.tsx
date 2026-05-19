import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About BrightCubes",
  description:
    "Learn about BrightCubes — our story, mission, values, and the expert team driving digital transformation for businesses worldwide.",
};

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
  shadowColor: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alexandra Kim",
    role: "Chief Executive Officer",
    bio: "Alexandra brings 18 years of experience leading digital initiatives at Fortune 500 companies. Before founding BrightCubes, she was VP of Digital Strategy at Accenture, overseeing $2B+ in transformation programs across five continents.",
    initials: "AK",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-700",
    shadowColor: "shadow-blue-200",
  },
  {
    id: 2,
    name: "Daniel Osei",
    role: "Chief Technology Officer",
    bio: "Daniel is a cloud architect with deep expertise in AWS, GCP, and Azure ecosystems. He previously led engineering at two successful SaaS startups and holds patents in distributed systems optimization.",
    initials: "DO",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-700",
    shadowColor: "shadow-purple-200",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Head of Analytics",
    bio: "Priya is a data scientist turned strategist with a PhD in Applied Mathematics from MIT. She founded BrightCubes' analytics practice and has designed data platforms that process over 500 million events daily.",
    initials: "PN",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-indigo-700",
    shadowColor: "shadow-indigo-200",
  },
];

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Excellence",
    description:
      "We hold ourselves to the highest standard in everything we deliver — from architecture diagrams to boardroom presentations.",
    colorBg: "bg-blue-50",
    colorText: "text-blue-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Partnership",
    description:
      "We treat every client as a long-term partner. Their success is our success — we measure ourselves by their outcomes.",
    colorBg: "bg-purple-50",
    colorText: "text-purple-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Innovation",
    description:
      "We stay at the cutting edge of technology so our clients don't have to. From AI to edge computing, we bring what's next, today.",
    colorBg: "bg-indigo-50",
    colorText: "text-indigo-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Integrity",
    description:
      "Transparent pricing, honest assessments, and no hidden agendas — ever. We say what we mean and do what we say.",
    colorBg: "bg-green-50",
    colorText: "text-green-600",
  },
];

const milestones = [
  {
    year: "2012",
    event: "BrightCubes founded in San Francisco by Alexandra Kim with a team of five.",
    accent: "bg-gradient-to-br from-blue-500 to-blue-700 shadow-blue-200",
  },
  {
    year: "2014",
    event: "Launched our first enterprise analytics platform, adopted by 30 clients in year one.",
    accent: "bg-gradient-to-br from-purple-500 to-purple-700 shadow-purple-200",
  },
  {
    year: "2016",
    event: "Opened London and New York offices; crossed 100 enterprise clients worldwide.",
    accent: "bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-indigo-200",
  },
  {
    year: "2019",
    event: "Introduced our Cloud Center of Excellence practice — 3× growth in cloud engagements.",
    accent: "bg-gradient-to-br from-blue-500 to-blue-700 shadow-blue-200",
  },
  {
    year: "2021",
    event: "Surpassed 300 global clients and launched the BrightCubes AI/ML advisory service.",
    accent: "bg-gradient-to-br from-purple-500 to-purple-700 shadow-purple-200",
  },
  {
    year: "2024",
    event: "Serving 500+ clients across 40+ countries with 200+ team members worldwide.",
    accent: "bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-indigo-200",
  },
];

export default function AboutPage() {
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
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            The people behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
              BrightCubes
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
            We&apos;re a team of technologists, strategists, and innovators united by a
            single mission: make digital transformation accessible, human, and results-driven.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 15C1200 45 960 60 720 45C480 30 240 0 0 15L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Mission / Story ── */}
      <section id="story" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-5">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                We believe technology should{" "}
                <span className="gradient-text">work for people</span>,{" "}
                not the other way around
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-[15px]">
                <p>
                  BrightCubes was founded in 2012 on a simple but powerful idea: every
                  business — regardless of size or industry — deserves access to world-class
                  digital expertise. Too often, transformation projects fail not because of
                  technology, but because of poor strategy, siloed teams, and one-size-fits-all
                  solutions.
                </p>
                <p>
                  We built BrightCubes to be different. We combine the rigor of a top-tier
                  consultancy with the agility of a modern tech company. Every engagement starts
                  with deep listening — understanding your goals, constraints, and culture —
                  before we ever propose a solution.
                </p>
                <p>
                  The result? Transformations that stick. Systems that scale. Teams that are
                  empowered, not dependent. Over 500 clients worldwide trust us as their
                  long-term digital partner.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Work with us
                </Link>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  value: "2012",
                  label: "Founded",
                  sub: "San Francisco, CA",
                  border: "border-l-blue-500",
                  text: "text-blue-600",
                },
                {
                  value: "500+",
                  label: "Global Clients",
                  sub: "Across 40+ countries",
                  border: "border-l-purple-500",
                  text: "text-purple-600",
                },
                {
                  value: "200+",
                  label: "Team Members",
                  sub: "In 8 offices worldwide",
                  border: "border-l-indigo-500",
                  text: "text-indigo-600",
                },
                {
                  value: "98%",
                  label: "Satisfaction Rate",
                  sub: "Based on 2024 survey",
                  border: "border-l-green-500",
                  text: "text-green-600",
                },
              ].map(({ value, label, sub, border, text }) => (
                <div key={label} className={`card p-6 border-l-4 ${border}`}>
                  <div className={`text-3xl font-extrabold mb-1 ${text}`}>{value}</div>
                  <div className="font-semibold text-slate-900 text-sm">{label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="section-heading">12 years of milestones</h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical connector */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200" />

            <div className="space-y-8">
              {milestones.map(({ year, event, accent }) => (
                <div key={year} className="relative flex gap-8 items-start">
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full ${accent} flex items-center justify-center flex-shrink-0 font-extrabold text-sm text-white shadow-lg`}
                  >
                    {year}
                  </div>
                  <div className="card flex-1 p-5 mt-2">
                    <p className="text-slate-600 text-sm leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">
              What We Stand For
            </span>
            <h2 className="section-heading">Our core values</h2>
            <p className="section-subheading">
              These aren&apos;t posters on a wall — they&apos;re the criteria by which we
              hire, promote, and make every decision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card p-6 text-center group">
                <div
                  className={`w-14 h-14 rounded-2xl ${value.colorBg} ${value.colorText} flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  {value.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
              Leadership
            </span>
            <h2 className="section-heading">Meet the team</h2>
            <p className="section-subheading">
              World-class expertise, genuine passion, and a shared commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="card overflow-hidden group">
                {/* Placeholder avatar */}
                <div
                  className={`bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} p-10 flex flex-col items-center justify-center gap-3`}
                >
                  <div
                    className={`w-24 h-24 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center text-white text-3xl font-extrabold shadow-xl ${member.shadowColor}`}
                  >
                    {member.initials}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium mt-0.5">
                        {member.role}
                      </p>
                    </div>
                    {/* LinkedIn icon placeholder */}
                    <a
                      href="#"
                      aria-label={`${member.name} on LinkedIn`}
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-blue-100 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors duration-200 flex-shrink-0"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Want to join the team?
          </h2>
          <p className="text-blue-100/90 text-lg max-w-xl mx-auto mb-8">
            We&apos;re always looking for exceptional people who share our values and want
            to shape the future of digital business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-4 bg-white text-blue-700 hover:bg-blue-50"
            >
              View Open Roles
            </Link>
            <Link href="/contact" className="btn-ghost text-base px-8 py-4">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
