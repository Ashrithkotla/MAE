import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ArrowRight, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { faqs } from "../data/faq";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>{children}</motion.div>;
}

const categories = Array.from(new Set(faqs.map(f => f.category)));

const categoryColors: Record<string, string> = {
  "General": "text-primary bg-primary/10 dark:bg-primary/15",
  "Courses": "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20",
  "Fees & Payment": "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20",
  "Results": "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20",
};

function FAQItem({ faq, accent }: { faq: typeof faqs[0]; accent: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div data-testid={`faq-item-${faq.id}`}>
      <button onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between text-left gap-6 px-6 py-5 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
        data-testid={`faq-toggle-${faq.id}`}>
        <span className="text-sm font-semibold text-gray-900 dark:text-white leading-relaxed">{faq.question}</span>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all mt-0.5 ${open ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-400"}`}>
          <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </div>
      </button>
      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
          className="px-6 pb-5">
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const displayCategories = activeCategory ? [activeCategory] : categories;

  return (
    <main data-testid="faq-page" className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-white dark:bg-gray-950 overflow-hidden border-b border-gray-100 dark:border-gray-800">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">FAQ</div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">Frequently asked<br /><span className="text-primary">questions.</span></h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">Everything you need to know before making your decision. Can't find an answer? Just ask us directly.</p>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <div className="sticky top-16 z-30 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 py-3">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                activeCategory === null ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}>
              All
            </button>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ groups */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10">
          {displayCategories.map(cat => {
            const items = faqs.filter(f => f.category === cat);
            const colorCls = categoryColors[cat] || "text-primary bg-primary/10";
            return (
              <Reveal key={cat} data-testid={`faq-group-${cat.toLowerCase().replace(/\s+/g, "-")}`}>
                <motion.div variants={stagger}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${colorCls}`}>{cat}</span>
                    <span className="text-xs text-gray-400">{items.length} questions</span>
                  </div>
                  <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800 shadow-sm">
                    {items.map(faq => <FAQItem key={faq.id} faq={faq} accent={colorCls} />)}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <motion.div variants={fadeUp} className="rounded-3xl bg-gray-950 dark:bg-gray-900 p-10 lg:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.2),transparent_65%)]" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle size={26} className="text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">Still have a question?</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">No question is too small. Reach out — we reply within a few hours.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors"
                    data-testid="faq-cta-contact">
                    Contact Us <ArrowRight size={15} />
                  </Link>
                  <a href="https://wa.me/917286066661" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
                    data-testid="faq-cta-whatsapp">
                    <FaWhatsapp size={14} /> WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
