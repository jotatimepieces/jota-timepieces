import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "../../../data/products";
import ProductExperience from "../../../components/ProductExperience";

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

        <div className="mt-10 md:mt-14">
          <ProductExperience product={product} />
        </div>
      </div>
    </article>
  );
}
