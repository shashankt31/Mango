import { CTAButton } from "@/components/CTAButton";
import { RowDivider } from "@/components/RowDivider";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-forest-950 px-5 py-24 text-center text-cream">
      <p className="font-display text-sm font-medium text-mango-400">Page not found</p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
        This field hasn&rsquo;t been planted yet
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-forest-200">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have
        moved. Head back to the homepage or explore our products.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <CTAButton href="/" tone="mango">
          Back to home
        </CTAButton>
        <CTAButton href="/products" tone="outline-cream">
          View products
        </CTAButton>
      </div>
      <RowDivider tone="cream" className="mt-16 max-w-md opacity-30" />
    </section>
  );
}
