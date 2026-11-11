export default function Options() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Use it your way
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Whether you live in the terminal or prefer a browser, VAT Reader
          fits your workflow.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Command line
          </h3>
          <p className="mb-4 text-gray-600">
            Process invoices in bulk, script your accounting pipeline, and
            export VAT reports straight from the terminal.
          </p>
          <code className="block rounded-lg bg-gray-900 px-4 py-3 font-mono text-sm text-gray-200">
            vatreader extract ./invoices --out vat-report.csv
          </code>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-bold text-gray-900">Web app</h3>
          <p className="mb-4 text-gray-600">
            Drag and drop invoices in your browser, review extracted VAT, and
            download reports — no install required.
          </p>
          <a
            href="#waitlist"
            className="btn inline-flex bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </section>
  );
}