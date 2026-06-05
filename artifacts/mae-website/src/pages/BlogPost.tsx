import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blog";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
          <Link href="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </div>
      </main>
    );
  }

  const others = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <main data-testid="blog-post-page" className="min-h-screen">
      <section className="pt-24 pb-12 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors" data-testid="post-back">
              <ArrowLeft size={14} /> All Articles
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1.5 rounded-lg bg-primary/8">{post.category}</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">{post.readingTime}</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">{post.publishDate}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">{post.title}</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8">{post.excerpt}</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">R</div>
              <div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">{post.author}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Founder, Maharshi Advanced English</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-8">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <img src={post.featuredImage} alt={post.title} className="w-full rounded-2xl aspect-[16/8] object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-950">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-3xl mx-auto px-6 lg:px-8">
          <div
            className="prose prose-lg prose-gray dark:prose-invert max-w-none prose-headings:font-bold prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-gray-900 dark:prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n\n/g, "</p><p>").replace(/^/, "<p>").replace(/$/, "</p>") }}
          />
        </motion.div>
      </section>

      {others.length > 0 && (
        <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8">More from the blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map(p => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group block" data-testid={`related-post-${p.id}`}>
                  <div className="rounded-xl overflow-hidden aspect-[16/9] mb-3">
                    <img src={p.featuredImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-xs font-bold uppercase text-primary tracking-wide block mb-2">{p.category}</span>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors leading-snug">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-primary">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Want to improve your English?</h2>
          <p className="text-white/70 mb-6 text-sm">Join a batch at Maharshi Advanced English and put these tips into real practice.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors text-sm" data-testid="post-cta">
            Book Free Demo <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
