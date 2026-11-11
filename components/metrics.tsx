const metrics = [
  { value: "0€", label: "API Fees" },
  { value: "100%", label: "On-Device (GDPR native)" },
  { value: "27", label: "EU VAT Systems Supported" },
];

export default function Metrics() {
  return (
    <section className="border-y border-white/10 bg-white/5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <p className="font-mono text-4xl font-bold text-cyan-400">
              {m.value}
            </p>
            <p className="mt-1 text-sm text-slate-300">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}