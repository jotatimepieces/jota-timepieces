import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center px-6 text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-4 font-display text-3xl text-ink md:text-4xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-sm text-sm text-ink-muted">
        O relógio ou página que você procura não existe ou foi movido.
      </p>
      <Link href="/" className="btn-outline mt-10">
        Voltar ao início
      </Link>
    </div>
  );
}
