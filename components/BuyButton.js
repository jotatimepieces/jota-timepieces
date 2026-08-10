"use client";

import { INFINITEPAY_CHECKOUT_URL } from "../data/config";

export default function BuyButton() {
  const isReady = Boolean(INFINITEPAY_CHECKOUT_URL);

  if (isReady) {
    return (
      <a
        href={INFINITEPAY_CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring block w-full border border-brass bg-brass py-5 text-center text-xs uppercase tracking-widest2 text-bg transition-opacity duration-300 ease-out hover:opacity-90"
      >
        Comprar Agora
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled
      title="O link de pagamento será adicionado em breve"
      className="block w-full cursor-not-allowed border border-brass-dim py-5 text-center text-xs uppercase tracking-widest2 text-ink-muted opacity-70"
    >
      Comprar Agora
    </button>
  );
}
