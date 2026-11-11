const steps = [
  { n: "01", title: "Drop Invoices (PDF/Scan)", desc: "Upload PDFs or scanned images — single files or bulk folders." },
  { n: "02", title: "Local VLM Parsing", desc: "A local vision-language model extracts fields, line items, and VAT rates on your hardware." },
  { n: "03", title: "Validate & Export", desc: "Review verified totals and export to CSV, JSON, or XLSX for your ERP." },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          How It Works
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <p className="font-mono text-3xl font-bold text-cyan-400">{s.n}</p>
            <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}