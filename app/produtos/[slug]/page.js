import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "../../../data/products";
import BuyButton from "../../../components/BuyButton";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: `${product.name} | Jota Timepieces`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Jota Timepieces`,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <article className="px-6 pb-24 pt-8 md:px-10 md:pb-32 md:pt-12">
      <div className="mx-auto max-w-content">
        <Link
          href="/#colecao"
          className="focus-ring inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink-muted transition-colors duration-300 hover:text-ink"
        >
          <span aria-hidden="true">&larr;</span> Voltar à coleção
        </Link>

        <div className="mt-10 grid gap-14 md:mt-14 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Image */}
          <div className="md:sticky md:top-28 md:self-start">
            <div className="relative aspect-square border border-line-soft bg-bg-elevated p-14 md:p-20">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 768px) 90vw, 560px"
                priority
                className="object-contain"
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

            <div className="mt-10 max-w-md">
              <BuyButton />
              <p className="mt-3 text-center text-[11px] uppercase tracking-widest2 text-ink-faint">
                Pagamento processado com segurança
              </p>
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
      </div>
    </article>
  );
}
