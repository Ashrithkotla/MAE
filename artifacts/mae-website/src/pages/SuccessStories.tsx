import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Star, TrendingUp, Award, Users, Briefcase } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { testimonials } from "../data/testimonials";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>{children}</motion.div>;
}

const outcomes = [
  { num: "5,000+", label: "Students Got Jobs", icon: Briefcase, color: "text-primary", bg: "bg-primary/10 dark:bg-primary/15" },
  { num: "3,000+", label: "Got Promotions", icon: TrendingUp, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
  { num: "500+", label: "Govt. Job Selections", icon: Award, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/20" },
  { num: "2 States", label: "AP & Telangana", icon: Users, color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-900/20" },
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

      {/* Hero — dark cinematic */}
      <section className="relative pt-24 pb-12 sm:pb-16 lg:pb-24 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(79,70,229,0.25),transparent_65%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-xs font-bold text-primary/80 uppercase tracking-widest mb-4">Success Stories</div>
            <h1 className="text-[38px] sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-5 sm:mb-6 leading-[1.05] max-w-3xl tracking-tight">
              Real people.<br />Real results.<br /><span className="text-primary">Real English.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">Every student you read about below was once exactly where you are — hesitant, unsure, and held back by English. They took one step. You can too.</p>
          </motion.div>
        </div>
      </section>

      {/* Outcome stats */}
      <Reveal className="py-10 sm:py-14 lg:py-16 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {outcomes.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.div key={i} variants={fadeUp}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                  data-testid={`outcome-stat-${i + 1}`}>
                  <div className={`w-12 h-12 rounded-2xl ${o.bg} flex items-center justify-center mb-4`}>
                    <Icon size={22} className={o.color} />
                  </div>
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">{o.num}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{o.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Reveal>

      {/* Testimonial cards */}
      <Reveal className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mb-10 sm:mb-14">
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Student Stories</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white max-w-xl leading-tight">Words from those who transformed.</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={t.id} variants={fadeUp}
                className={`rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  i === 0
                    ? "bg-gray-950 dark:bg-gray-800 lg:col-span-1 md:col-span-2 lg:row-span-1"
                    : "bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                }`}
                data-testid={`testimonial-card-${t.id}`}>
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={13} className={`fill-amber-400 text-amber-400 ${i === 0 ? "fill-amber-400" : ""}`} />)}
                </div>
                <blockquote className={`text-sm leading-relaxed mb-6 ${i === 0 ? "text-white/85" : "text-gray-700 dark:text-gray-300"}`}>"{t.text}"</blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100/10 dark:border-gray-700/50">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${i === 0 ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"}`}>{t.initial}</div>
                  <div>
                    <div className={`text-sm font-bold ${i === 0 ? "text-white" : "text-gray-900 dark:text-white"}`}>{t.name}</div>
                    <div className={`text-xs ${i === 0 ? "text-white/50" : "text-gray-500 dark:text-gray-400"}`}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      {/* Before / After */}
      <Reveal className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">The Transformation</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Before and after Maharshi.</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">The difference our students experience is not subtle — it is complete.</p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {transformations.map((t, i) => (
              <motion.div key={i} variants={fadeUp}
                className="bg-white dark:bg-gray-900/80 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                data-testid={`transformation-${i + 1}`}>
                <div className="grid grid-cols-2 h-full">
                  <div className="p-5 border-r border-gray-100 dark:border-gray-800">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-lg mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Before
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{t.before}</p>
                  </div>
                  <div className="p-5 bg-primary/3 dark:bg-primary/8">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded-lg mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> After
                    </div>
                    <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium">{t.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      {/* CTA */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(79,70,229,0.2),transparent_60%)]" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Your success story is waiting to be written.</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">New batches forming soon. Limited seats per batch. Don't wait.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors"
              data-testid="success-cta-contact">
              Join Now <ArrowRight size={15} />
            </Link>
            <a href="https://wa.me/917286066661" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
              data-testid="success-cta-whatsapp">
              <FaWhatsapp size={15} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
