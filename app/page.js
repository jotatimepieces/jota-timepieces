import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="marker-divider" />
      </div>
      <ProductGrid />
    </>
  );
}
