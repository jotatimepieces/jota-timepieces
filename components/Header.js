import Link from "next/link";
import Image from "next/image";
import { INSTAGRAM_URL } from "../data/config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3"
          aria-label="Jota Timepieces — Página inicial"
        >
          <Image
            src="/images/logo.png"
            alt="Jota Timepieces"
            width={94}
            height={64}
            priority
            className="h-6 w-auto opacity-90 md:h-7"
          />
        </Link>

        <nav aria-label="Navegação principal" className="flex items-center gap-6 md:gap-9">
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
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}
