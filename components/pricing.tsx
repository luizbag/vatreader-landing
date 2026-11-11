export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Pricing</h2>
        <p className="mt-3 text-slate-300">
          Choose how you want to run VAT Reader — on your own hardware or fully
          managed in the cloud.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-xl font-bold text-white">Self-hosted</h3>
          <p className="mt-1 text-sm text-slate-400">Small fee · License key</p>
          <p className="mt-4 text-slate-300">
            Run VAT Reader on your own infrastructure. Full control, full
            privacy, unlimited invoices.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>· Runs on your hardware</li>
            <li>· License key activation</li>
            <li>· Unlimited document volume</li>
            <li>· Docker one-command setup</li>
          </ul>
          <a
            href="#waitlist"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20"
          >
            Get license key
          </a>
        </div>
        <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 p-8 backdrop-blur">
          <h3 className="text-xl font-bold text-white">Cloud-hosted</h3>
          <p className="mt-1 text-sm text-slate-400">Managed · No infra</p>
          <p className="mt-4 text-slate-300">
            We host and maintain VAT Reader for you. Just upload invoices — no
            servers to manage.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>· Zero infrastructure to manage</li>
            <li>· Automatic updates</li>
            <li>· Secure EU data residency</li>
            <li>· Priority support</li>
          </ul>
          <a
            href="#waitlist"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-90"
          >
            Start cloud trial
          </a>
        </div>
      </div>
    </section>
  );
}