import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section id="colecao" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow flex items-center gap-3">
            <span className="h-[3px] w-[3px] rounded-full bg-brass" aria-hidden="true" />
            Nossa Coleção
          </span>
          <h2 className="mt-5 font-display text-3xl text-ink md:text-4xl">
            The Collection
          </h2>
        </div>

        <div
          className={`mx-auto mt-16 grid gap-x-10 gap-y-20 md:mt-20 ${
            products.length === 1
              ? "max-w-md"
              : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
