import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Ambient vignette — quiet, not decorative excess */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 42%, rgba(200,168,118,0.06) 0%, rgba(10,10,10,0) 70%)",
        }}
      />

      <div className="relative flex flex-col items-center">
        <Image
          src="/images/logo.png"
          alt="Jota Timepieces"
          width={1335}
          height={909}
          priority
          className="h-auto w-[220px] opacity-95 sm:w-[280px] md:w-[340px]"
        />

        <div className="mt-10 flex items-center gap-4 md:mt-14">
          <span className="h-px w-8 bg-brass-dim" aria-hidden="true" />
          <p className="font-display text-sm italic tracking-widest2 text-ink-muted md:text-base">
            Timeless Elegance
          </p>
          <span className="h-px w-8 bg-brass-dim" aria-hidden="true" />
        </div>
      </div>

      <a
        href="#colecao"
        className="focus-ring absolute bottom-10 flex flex-col items-center gap-3 text-ink-faint transition-colors duration-300 hover:text-brass"
        aria-label="Rolar até a coleção"
      >
        <span className="text-[10px] uppercase tracking-widest2">Explorar</span>
        <span className="h-10 w-px bg-current" aria-hidden="true" />
      </a>
    </section>
  );
}
