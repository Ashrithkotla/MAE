import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { blogPosts } from "../data/blog";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>{children}</motion.div>;
}

const categories = ["All", ...Array.from(new Set(blogPosts.map(p => p.category)))];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter(p => p.category === activeCategory);

  return (
    <main data-testid="blog-page" className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-24 pb-10 sm:pb-14 lg:pb-20 bg-white dark:bg-gray-950 overflow-hidden border-b border-gray-100 dark:border-gray-800">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-violet-500/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">The Blog</div>
            <h1 className="text-[38px] sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-5 sm:mb-6 leading-[1.05] max-w-3xl tracking-tight">
              English insights.<br /><span className="text-primary">Practical tips.</span><br />Real guidance.
            </h1>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">Articles written by Ramesh Maharshi to help you improve your English — one concept at a time.</p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      <Reveal className="pt-10 sm:pt-14 lg:pt-16 pb-0 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} data-testid="blog-featured">
            <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-shadow">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-[400px] overflow-hidden">
                  <img src={blogPosts[0].featuredImage} alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 lg:p-12 bg-gray-50 dark:bg-gray-900 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/15">{blogPosts[0].category}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">{blogPosts[0].readingTime}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">{blogPosts[0].publishDate}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors">{blogPosts[0].title}</h2>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 text-sm">{blogPosts[0].excerpt}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Read article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </Reveal>

      {/* Filter bar + grid */}
      <Reveal className="py-10 sm:py-14 lg:py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Category pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}>
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map(post => (
              <motion.div key={post.id} variants={fadeUp} layout data-testid={`blog-card-${post.id}`}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-4 bg-gray-100 dark:bg-gray-800">
                    <img src={post.featuredImage} alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wide text-primary">{post.category}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">{post.readingTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 pt-3 border-t border-gray-100 dark:border-gray-800">
                    <span className="font-medium">{post.author}</span><span>·</span><span>{post.publishDate}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400 dark:text-gray-500">
              <Search size={40} className="mx-auto mb-4 opacity-30" />
              <p className="font-medium">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </Reveal>
    </main>
  );
}
