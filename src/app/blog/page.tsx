import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20" />
      <section className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-widest text-emerald-600 font-medium">
              Blog
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mt-3 max-w-[28ch]">
              Insights for contractors who close on the first visit.
            </h1>
            <p className="text-base text-zinc-500 mt-4 max-w-[60ch]">
              Tips, strategies, and product updates to help you sell smarter in the field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "How Visual Proposals 3x Your Close Rate",
                category: "Sales Strategy",
                date: "Mar 18, 2026",
                image:
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
                excerpt:
                  "Homeowners buy what they can see. Learn why contractors who visualize projects on-site are closing deals faster than ever.",
              },
              {
                title: "5 Mistakes Reps Make During Home Inspections",
                category: "Field Tips",
                date: "Mar 10, 2026",
                image:
                  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop",
                excerpt:
                  "From forgetting to photograph the property to leaving without a proposal — here are the costly mistakes to avoid.",
              },
              {
                title: "The Future of On-Site Sales for Outdoor Living",
                category: "Industry Trends",
                date: "Feb 28, 2026",
                image:
                  "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&h=400&fit=crop",
                excerpt:
                  "AR visualization, instant proposals, and mobile-first tools are changing how contractors sell. Here's what's next.",
              },
            ].map((post) => (
              <article
                key={post.title}
                className="group bg-white rounded-2xl border border-zinc-200/50 overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-zinc-400">{post.date}</span>
                  </div>
                  <h2 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
