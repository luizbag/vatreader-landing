import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="border-t border-white/10 bg-[#0F172A]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-sm font-semibold text-white">VAT Reader</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>
            <a href="#waitlist" className="transition hover:text-white">
              Get License Key
            </a>
          </div>
          <p className="text-sm text-slate-500">
            &copy; VAT Reader. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}