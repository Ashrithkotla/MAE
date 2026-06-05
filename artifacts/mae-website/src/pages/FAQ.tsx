import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { faqs } from "../data/faq";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>{children}</motion.div>;
}

const categories = Array.from(new Set(faqs.map(f => f.category)));

function FAQGroup({ category, items }: { category: string; items: typeof faqs }) {
  return (
    <div className="mb-12" data-testid={`faq-group-${category.toLowerCase().replace(/\s+/g, "-")}`}>
      <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">{category}</h2>
      <div className="divide-y divide-gray-100 dark:divide-gray-800 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
        {items.map(faq => <FAQItem key={faq.id} faq={faq} />)}
      </div>
    </div>
  );
}

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div data-testid={`faq-item-${faq.id}`}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left gap-6 px-6 py-5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" data-testid={`faq-toggle-${faq.id}`}>
        <span className="text-sm font-semibold text-gray-900 dark:text-white">{faq.question}</span>
        <ChevronDown size={16} className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <main data-testid="faq-page" className="min-h-screen">
      <section className="pt-28 pb-16 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">FAQ</div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">Frequently asked questions.</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">Everything you need to know before making your decision. Can't find an answer? Just ask us directly.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {categories.map(cat => (
            <Section key={cat}>
              <motion.div variants={stagger}>
                <FAQGroup category={cat} items={faqs.filter(f => f.category === cat)} />
              </motion.div>
            </Section>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Still have a question?</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">No question is too small. Reach out — we reply within 24 hours.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors" data-testid="faq-cta-contact">
              Contact Us <ArrowRight size={15} />
            </Link>
            <a href="https://wa.me/917286066661" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" data-testid="faq-cta-whatsapp">
              <FaWhatsapp size={14} className="text-[#25D366]" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
