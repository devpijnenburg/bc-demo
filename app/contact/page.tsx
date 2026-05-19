"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Neem contact op</h1>
          <p className="text-xl text-blue-100">
            Benieuwd wat BrightCubes voor jouw organisatie kan betekenen? We horen graag van je.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contactgegevens</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <p className="font-semibold text-gray-900">Adres</p>
                <p>Eindhoven, Nederland</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">E-mail</p>
                <p>hello@brightcubes.nl</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Telefoon</p>
                <p>+31 40 123 4567</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Openingstijden</p>
                <p>Ma – Vr: 09:00 – 17:30</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bericht ontvangen!</h3>
                <p className="text-gray-600">We nemen zo snel mogelijk contact met je op.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-blue-600 hover:underline"
                >
                  Nog een bericht sturen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Jan de Vries"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mailadres</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="jan@bedrijf.nl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Vertel ons over je project of vraag..."
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-sm">Er ging iets mis. Probeer het opnieuw.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  {status === "loading" ? "Versturen..." : "Verstuur bericht"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
