import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blog";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>{children}</motion.div>;
}

const categories = ["All", "Speaking Tips", "Fluency Tips", "Grammar", "Institute News"];

export default function Blog() {
  return (
    <main data-testid="blog-page" className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">The Blog</div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-2xl">
              English insights. Practical tips. Real guidance.
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              Articles written by Ramesh Maharshi to help you improve your English — one concept at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <Section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured post */}
          <motion.div variants={fadeUp} className="mb-16" data-testid="blog-featured">
            <Link href={`/blog/${blogPosts[0].slug}`} className="group grid lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={blogPosts[0].featuredImage}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1.5 rounded-lg bg-primary/8">{blogPosts[0].category}</span>
                  <span className="text-xs text-gray-400">{blogPosts[0].readingTime}</span>
                  <span className="text-xs text-gray-400">{blogPosts[0].publishDate}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Read article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="h-px bg-gray-100 mb-16" />

          {/* All posts grid */}
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={fadeUp} data-testid={`blog-card-${post.id}`}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-4">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wide text-primary">{post.category}</span>
                    <span className="text-xs text-gray-400">{post.readingTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-400">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.publishDate}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
