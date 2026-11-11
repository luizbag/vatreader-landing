export default function HeroHome() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.15),_transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
              Local-first · Eurozone · License key required
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Local AI Invoice Extraction for the Eurozone.{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                100% Private.
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Zero API costs, local Ollama/VLM execution, multi-tier EU VAT
              handling, and GDPR compliance out of the box. Parse invoices on
              your own hardware — your documents never leave your machine.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-90"
              >
                Get Started / Self-Host
              </a>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request Access
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-400">
              <span>0€ API fees</span>
              <span>·</span>
              <span>100% on-device</span>
              <span>·</span>
              <span>All 27 EU VAT systems</span>
            </div>
          </div>
          {/* Mock app */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
                <p className="mb-2 text-xs font-medium text-slate-400">
                  Sample invoice
                </p>
                <div className="space-y-2 rounded-lg bg-slate-800/60 p-3 text-xs text-slate-300">
                  <p className="font-semibold text-white">Rechnung #2024-0187</p>
                  <p>Muster GmbH · DE123456789</p>
                  <p>Netto: 1.000,00 €</p>
                  <p>MwSt 19%: 190,00 €</p>
                  <p>MwSt 7%: 70,00 €</p>
                  <p className="font-semibold text-emerald-400">
                    Gesamt: 1.260,00 €
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
                <p className="mb-2 text-xs font-medium text-slate-400">
                  Extracted JSON
                </p>
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-3 font-mono text-[11px] leading-relaxed text-emerald-300">
{`{
  "invoice_number": "2024-0187",
  "vat_id": "DE123456789",
  "currency": "EUR",
  "lines": [
    { "rate": 0.19, "net": 1000.00 },
    { "rate": 0.07, "net": 1000.00 }
  ],
  "vat_total": 260.00,
  "gross_total": 1260.00
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}