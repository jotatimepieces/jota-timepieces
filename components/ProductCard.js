import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="focus-ring group block"
      aria-label={`Ver detalhes do ${product.name}`}
    >
      <div className="relative aspect-square overflow-hidden border border-line-soft bg-bg-elevated p-10 md:p-14">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 90vw, 400px"
          className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
      </div>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl tracking-wide text-ink md:text-2xl">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-ink-muted">
            {product.price || "Preço sob consulta"}
          </p>
        </div>

        <span className="btn-ghost mt-2 shrink-0 whitespace-nowrap">
          Ver relógio
          <span
            aria-hidden="true"
            className="transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
