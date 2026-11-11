const capabilities = [
  {
    title: "Multi-Country VAT Parser",
    desc: "Handles DE, FR, IT, ES, PT, NL and more — country-specific VAT IDs, formats, and rules.",
  },
  {
    title: "Line-Item & Reverse-Charge Detection",
    desc: "Detects mixed VAT rates per line and flags reverse-charge / intra-community supplies.",
  },
  {
    title: "Automated Math Verification Engine",
    desc: "Recomputes net, VAT, and gross totals to catch extraction or invoice errors.",
  },
  {
    title: "Local CLI / API & ERP-Ready Export",
    desc: "Export to CSV, JSON, or XLSX — plug into your ERP or accounting pipeline.",
  },
];

export default function EurozoneCapabilities() {
  return (
    <section id="eurozone" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Eurozone Capabilities
        </h2>
        <p className="mt-3 text-slate-300">
          Built for European VAT complexity from day one.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-500/40 hover:bg-white/10"
          >
            <h3 className="mb-2 text-lg font-semibold text-white">{c.title}</h3>
            <p className="text-sm text-slate-300">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}