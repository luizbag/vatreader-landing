const rows = [
  { label: "Data privacy", vat: "Documents stay on your machine", cloud: "Uploaded to third-party servers" },
  { label: "API / processing cost", vat: "0€ — runs locally", cloud: "Per-page or per-document fees" },
  { label: "Document volume limits", vat: "Unlimited (your hardware)", cloud: "Monthly caps / overage charges" },
  { label: "GDPR compliance", vat: "Native — no data transfer", cloud: "Depends on vendor & region" },
  { label: "Offline usage", vat: "Fully offline capable", cloud: "Requires internet connection" },
  { label: "Licensing", vat: "Subscription license key", cloud: "Proprietary SaaS" },
];

export default function Comparison() {
  return (
    <section id="comparison" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Why Local-First?
        </h2>
        <p className="mt-3 text-slate-300">
          ParseVAT vs. traditional cloud SaaS (Contabify, Dext, …)
        </p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-left text-slate-200">
            <tr>
              <th className="px-4 py-3 font-semibold">Capability</th>
              <th className="px-4 py-3 font-semibold text-cyan-300">
                ParseVAT
              </th>
              <th className="px-4 py-3 font-semibold text-slate-400">
                Cloud SaaS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((r) => (
              <tr key={r.label} className="bg-slate-900/40">
                <td className="px-4 py-3 font-medium text-white">{r.label}</td>
                <td className="px-4 py-3 text-emerald-300">{r.vat}</td>
                <td className="px-4 py-3 text-slate-400">{r.cloud}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}