import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { PipelineSteps } from "@/components/PipelineSteps";
import { CTAButton } from "@/components/CTAButton";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { RowDivider } from "@/components/RowDivider";
import { CropIcon, LeafIcon } from "@/components/icons";
import { productLines } from "@/data/products";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Mango Agri Genetics Private Limited develops and supplies hybrid seed genetics for Indian farmers, backed by field trials and agronomy support.",
};

const cropStrip = productLines.map((p) => ({ key: p.key, name: p.name }));

const farmerSupport = [
  {
    title: "Sowing guidance",
    text: "Region-specific sowing windows and seed-rate guidance shared ahead of the season.",
  },
  {
    title: "Field-level support",
    text: "Field staff and dealer partners on the ground for queries through the growing season.",
  },
  {
    title: "Dealer network",
    text: "[Add dealer/distributor locator or enquiry route once network is finalised.]",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Crop strip */}
      <section className="border-b border-forest-100 bg-white py-8">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.08em] text-forest-400 sm:text-left">
            Genetics programmes across
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:justify-start">
            {cropStrip.map((c) => (
              <div key={c.key} className="flex items-center gap-2 text-forest-600">
                <CropIcon crop={c.key} className="h-5 w-5 text-forest-500" />
                <span className="text-sm font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-content items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <PlaceholderImage
            label="Photograph — research farm or field trial plot"
            icon={<LeafIcon className="h-full w-full" />}
            tone="forest"
            ratio="aspect-[5/4]"
          />
          <div>
            <SectionHeading
              eyebrow="About Mango Agri Genetics"
              title="A genetics-first approach to Indian seed"
            />
            <p className="mt-5 text-base leading-relaxed text-forest-600">
              Mango Agri Genetics Private Limited is an Indian agricultural
              genetics company incorporated to develop, produce and
              distribute hybrid seed for the country&rsquo;s major field
              crops. Our work sits at the intersection of applied plant
              breeding and practical, on-ground agronomy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-forest-600">
              [Add founding story, leadership background and company
              milestones once confirmed.]
            </p>
            <div className="mt-8">
              <CTAButton href="/about" tone="outline-forest">
                More about us
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <RowDivider tone="mango" className="opacity-70" />

      {/* Products preview */}
      <section className="bg-forest-50 py-20 sm:py-24">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Our Seeds"
              title="Hybrid seed lines across major field crops"
              intro="A crop-by-crop look at where our genetics programmes are focused today."
            />
            <CTAButton href="/products" tone="outline-forest">
              View all products
            </CTAButton>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productLines.map((product) => (
              <ProductCard key={product.key} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Research preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <SectionHeading
            eyebrow="Research & Genetics"
            title="From breeding line to farmer's field"
            intro="A consistent pipeline carries every hybrid from early selection through to seed in the bag."
          />
          <div className="mt-12">
            <PipelineSteps />
          </div>
          <div className="mt-8">
            <CTAButton href="/research" tone="ghost">
              Read about our research approach
            </CTAButton>
          </div>
        </div>
      </section>

      <RowDivider tone="mango" className="opacity-70" />

      {/* Farmers preview */}
      <section className="bg-forest-900 py-20 text-cream sm:py-24">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <SectionHeading
            eyebrow="For Farmers"
            title="Support that continues after the sale"
            intro="Good genetics is only half the outcome — the other half is agronomy support through the season."
            align="left"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {farmerSupport.map((item) => (
              <div key={item.title} className="rounded-2xl border border-forest-700 bg-forest-800/60 p-6">
                <h3 className="font-display text-base font-semibold text-cream">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-200">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <CTAButton href="/farmers" tone="outline-cream">
              Explore farmer resources
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-mango-500 py-16">
        <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold text-forest-950 sm:text-4xl">
              Growing something together?
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-forest-900/80">
              Whether you&rsquo;re a farmer, a distributor or exploring a
              partnership, we&rsquo;d like to hear from you.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-forest-950 px-7 py-3.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
