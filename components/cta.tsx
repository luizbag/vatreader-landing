"use client";

import { useState } from "react";

export default function Cta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 p-8 text-center backdrop-blur md:p-12">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Get your license key
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          VAT Reader runs on your own hardware. Request a subscription key to
          unlock the app and keep every invoice on your machine.
        </p>
        <div className="mx-auto mt-6 max-w-2xl rounded-lg border border-white/10 bg-slate-950 p-4 text-left">
          <code className="block font-mono text-sm text-emerald-300">
            docker run -p 8080:8080 -e VAT_READER_LICENSE_KEY=your_key vatreader
          </code>
        </div>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-90"
          >
            View Source
          </a>
        </div>
        <div className="mx-auto mt-8 max-w-md">
          {status === "success" ? (
            <p className="text-sm text-emerald-300">
              Thanks! We&apos;ll be in touch when VAT Reader is ready.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="form-input w-full rounded-lg border border-white/10 bg-white/5 py-2 text-white placeholder:text-slate-400"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20"
              >
                {status === "loading" ? "Joining..." : "Join waitlist"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-2 text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}