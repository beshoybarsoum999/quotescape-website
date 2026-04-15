"use client";

const brands = [
  "Ridgeline Roofing Co.",
  "Apex Paving Group",
  "Ironclad Exteriors",
  "Summit Garage Solutions",
  "Coastal Siding Works",
  "Timberview Construction",
  "Fieldstone Contractors",
  "Atlas Outdoor Living",
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-zinc-100 bg-white/60 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-6">
        <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
          Trusted by contractors across 42 states
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/80 to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center"
            >
              <span className="text-sm md:text-base font-medium text-zinc-300 tracking-tight">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
