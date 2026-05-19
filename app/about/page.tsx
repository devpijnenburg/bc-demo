export default function AboutPage() {
  const team = [
    { name: "Lisa van den Berg", role: "CEO & Co-Founder", initials: "LB" },
    { name: "Mark de Vries", role: "CTO & Co-Founder", initials: "MV" },
    { name: "Sara Jansen", role: "Head of Product", initials: "SJ" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Over BrightCubes</h1>
          <p className="text-xl text-blue-100">
            Wij geloven dat elke organisatie de kracht heeft om te transformeren.
            BrightCubes helpt je die kracht te ontgrendelen.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ons verhaal</h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              BrightCubes werd in 2019 opgericht met één duidelijke missie: bedrijven
              helpen om digitale transformatie niet als bedreiging, maar als kans te
              zien. We begonnen klein, met een team van vier gepassioneerde techneuten,
              en zijn uitgegroeid tot een toonaangevend advies- en technologiebedrijf.
            </p>
            <p>
              Onze aanpak combineert diepgaande technische kennis met strategisch inzicht.
              We werken nauw samen met onze klanten om oplossingen te bouwen die echt
              passen bij hun organisatie — geen kant-en-klare producten, maar maatwerk
              dat werkt.
            </p>
            <p>
              Vandaag bedienen we meer dan 80 klanten in diverse sectoren, van zorg en
              onderwijs tot retail en financiële dienstverlening.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Onze waarden</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Transparantie", desc: "Open en eerlijk communiceren, altijd." },
              { title: "Innovatie", desc: "Nieuwsgierig blijven en nieuwe wegen verkennen." },
              { title: "Impact", desc: "Bouwen aan oplossingen die er echt toe doen." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Ons team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
