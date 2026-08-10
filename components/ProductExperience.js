"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Controla a experiência interativa da página de produto:
 * troca de imagem, seleção de cor e o botão "Comprar Agora"
 * correspondente à variação escolhida.
 *
 * Se a imagem de uma variação ainda não existir em /public/images/
 * (arquivo não encontrado), o componente usa automaticamente a
 * imagem principal do produto como reserva — a página nunca quebra.
 */
export default function ProductExperience({ product }) {
  const variants =
    product.variants && product.variants.length > 0
      ? product.variants
      : [
          {
            name: product.name,
            image: product.image,
            checkoutUrl: "",
          },
        ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const variant = variants[selectedIndex];
  const [imgSrc, setImgSrc] = useState(variant.image);

  // Sempre que a variação selecionada mudar, tenta carregar a imagem
  // dela de novo (o onError abaixo cuida do fallback caso ela não exista).
  useEffect(() => {
    setImgSrc(variant.image);
  }, [variant.image]);

  const hasCheckout = Boolean(variant.checkoutUrl);

  return (
    <div className="grid gap-14 md:grid-cols-2 md:gap-16 lg:gap-24">
      {/* Image */}
      <div className="md:sticky md:top-28 md:self-start">
        <div className="relative aspect-square border border-line-soft bg-bg-elevated p-14 md:p-20">
          <Image
            key={variant.name}
            src={imgSrc}
            alt={`${product.name} — ${variant.name}`}
            fill
            sizes="(max-width: 768px) 90vw, 560px"
            priority
            className="object-contain transition-opacity duration-500 ease-out"
            onError={() => setImgSrc(product.image)}
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <span className="eyebrow">Jota Timepieces</span>
        <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">
          {product.name}
        </h1>

        <p className="mt-3 font-display text-2xl text-brass">
          {product.price || "R$ XXX,XX"}
        </p>

        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-muted">
          {product.shortDescription}
        </p>

        {/* Variant selector */}
        <div className="mt-10 max-w-md">
          <div className="flex items-baseline justify-between gap-4">
            <span className="eyebrow">Cor</span>
            <span className="font-display text-base text-ink">
              {variant.name}
            </span>
          </div>

          <div
            role="group"
            aria-label="Selecionar cor"
            className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3"
          >
            {variants.map((v, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={v.name}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-pressed={isSelected}
                  className={`focus-ring border px-3 py-3.5 text-center text-[11px] uppercase leading-snug tracking-wide transition-colors duration-300 ease-out ${
                    isSelected
                      ? "border-brass text-brass"
                      : "border-line text-ink-muted hover:border-ink-muted hover:text-ink"
                  }`}
                >
                  {v.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Buy button */}
        <div className="mt-10 max-w-md">
          {hasCheckout ? (
            <a
              href={variant.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring block w-full border border-brass bg-brass py-5 text-center text-xs uppercase tracking-widest2 text-bg transition-opacity duration-300 ease-out hover:opacity-90"
            >
              Comprar Agora
            </a>
          ) : (
            <button
              type="button"
              disabled
              title="O checkout desta variação ainda não está disponível"
              className="block w-full cursor-not-allowed border border-brass-dim py-5 text-center text-xs uppercase tracking-widest2 text-ink-muted opacity-70"
            >
              Comprar Agora
            </button>
          )}

          {!hasCheckout && (
            <p className="mt-3 text-center text-[11px] uppercase tracking-widest2 text-ink-faint">
              Checkout em breve para esta variação
            </p>
          )}
        </div>

        <div className="marker-divider my-12" />

        {/* Specifications */}
        <div>
          <h2 className="font-display text-xl text-ink">Especificações</h2>
          <dl className="mt-6 divide-y divide-line-soft border-t border-line-soft">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <dt className="shrink-0 text-[11px] uppercase tracking-widest2 text-ink-faint sm:w-2/5">
                  {spec.label}
                </dt>
                <dd className="text-sm text-ink sm:w-3/5 sm:text-right">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
