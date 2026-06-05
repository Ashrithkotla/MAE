import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { testimonials } from "../data/testimonials";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>{children}</motion.div>;
}

const outcomes = [
  { num: "5,000+", label: "Students Got Jobs" },
  { num: "3,000+", label: "Students Got Promotions" },
  { num: "500+", label: "Government Job Selections" },
  { num: "AP & TS", label: "States Served" },
];

const transformations = [
  { before: "Froze in group discussions and presentations", after: "Speaks confidently in front of 30+ people" },
  { before: "Failed 6 consecutive job interviews", after: "Cracked the 7th interview and got placed" },
  { before: "Asked colleagues to write emails", after: "Writes professional emails and presents in meetings" },
  { before: "Could not communicate at schools or hospitals", after: "Speaks fluently in all daily situations" },
  { before: "Failed interview rounds despite passing written exams", after: "Cleared government job interview successfully" },
  { before: "Hesitated to speak even a single sentence", after: "Delivered speech at company annual meeting" },
];

export default function SuccessStories() {
  return (
    <main data-testid="success-stories-page" className="min-h-screen">
      <section className="pt-28 pb-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-xs font-semibold text-primary/80 uppercase tracking-widest mb-4">Success Stories</div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl">Real people. Real results. Real English.</h1>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">Every student you read about below was once exactly where you are — hesitant, unsure, and held back by English. They took one step. You can too.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((o, i) => (
              <div key={i} className="text-center" data-testid={`outcome-stat-${i + 1}`}>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1">{o.num}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mb-16">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Student Stories</div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white max-w-xl leading-tight">Words from those who transformed.</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.id} variants={fadeUp} className={`rounded-2xl p-7 ${i === 0 ? "bg-primary text-white md:col-span-2 lg:col-span-1" : "bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"}`} data-testid={`testimonial-card-${t.id}`}>
                <div className="flex gap-0.5 mb-4">{[1,2,3,4,5].map(s => <span key={s} className={`text-sm ${i === 0 ? "text-amber-300" : "text-amber-400"}`}>★</span>)}</div>
                <blockquote className={`text-sm leading-relaxed mb-6 ${i === 0 ? "text-white/90" : "text-gray-700 dark:text-gray-300"}`}>"{t.text}"</blockquote>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${i === 0 ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>{t.initial}</div>
                  <div>
                    <div className={`text-sm font-semibold ${i === 0 ? "text-white" : "text-gray-900 dark:text-white"}`}>{t.name}</div>
                    <div className={`text-xs ${i === 0 ? "text-white/60" : "text-gray-500 dark:text-gray-400"}`}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mb-16 text-center">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Transformation</div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Before and after Maharshi.</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">The difference our students experience is not subtle — it is complete.</p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {transformations.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden" data-testid={`transformation-${i + 1}`}>
                <div className="grid grid-cols-2">
                  <div className="p-5 border-r border-gray-100 dark:border-gray-800">
                    <div className="text-xs font-bold text-red-500 uppercase tracking-wide mb-3">Before</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{t.before}</p>
                  </div>
                  <div className="p-5 bg-primary/2 dark:bg-primary/5">
                    <div className="text-xs font-bold text-primary uppercase tracking-wide mb-3">After</div>
                    <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium">{t.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Your success story is waiting to be written.</h2>
          <p className="text-gray-400 mb-8">New batches forming soon. Limited seats. Don't wait.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors" data-testid="success-cta-contact">
              Join Now <ArrowRight size={15} />
            </Link>
            <a href="https://wa.me/917286066661" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-colors" data-testid="success-cta-whatsapp">
              <FaWhatsapp size={14} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
