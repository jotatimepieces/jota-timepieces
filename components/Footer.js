import Link from "next/link";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../data/config";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto flex max-w-content flex-col items-center gap-8 px-6 py-16 text-center md:px-10">
        <span className="font-display text-lg tracking-widest2 text-ink">
          JOTA TIMEPIECES
        </span>

        <nav
          aria-label="Navegação do rodapé"
          className="flex items-center gap-8"
        >
          <Link
            href="/"
            className="focus-ring text-[11px] uppercase tracking-widest2 text-ink-muted transition-colors duration-300 hover:text-ink"
          >
            Início
          </Link>
          <Link
            href="/#colecao"
            className="focus-ring text-[11px] uppercase tracking-widest2 text-ink-muted transition-colors duration-300 hover:text-ink"
          >
            Relógios
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-[11px] uppercase tracking-widest2 text-ink-muted transition-colors duration-300 hover:text-brass"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </nav>

        <p className="text-[11px] uppercase tracking-widest2 text-ink-faint">
          © 2026 Jota Timepieces. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
