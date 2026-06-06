import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Clock, Users, Wifi, CheckCircle2, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { courses } from "../data/courses";

const fadeUp: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>{children}</motion.div>;
}

const courseMeta: Record<string, { batchSize: string; level: string; outcomes: string[] }> = {
  "spoken-english": {
    batchSize: "Max 20 Students",
    level: "Beginner to Advanced",
    outcomes: ["Speak fluently in daily conversations", "Confident in social & professional settings", "Eliminate hesitation permanently"],
  },
  "grammar-mastery": {
    batchSize: "Max 20 Students",
    level: "Beginner to Advanced",
    outcomes: ["Master English grammar with formulas", "Write correctly without second-guessing", "Build a strong language foundation"],
  },
  "professional-english": {
    batchSize: "Max 15 Students",
    level: "Intermediate to Advanced",
    outcomes: ["Write professional emails confidently", "Speak in meetings and presentations", "Get noticed for promotions"],
  },
  "interview-prep": {
    batchSize: "Max 15 Students",
    level: "All Levels",
    outcomes: ["Crack HR and technical interviews", "Answer questions in fluent English", "Build interview confidence fast"],
  },
};

const colors = [
  { bg: "bg-primary/4 dark:bg-primary/8", border: "border-primary/25 dark:border-primary/30", accent: "text-primary", tag: "bg-primary/10 dark:bg-primary/15 text-primary", dot: "bg-primary", btn: "bg-primary" },
  { bg: "bg-violet-50/60 dark:bg-violet-900/10", border: "border-violet-200/60 dark:border-violet-700/30", accent: "text-violet-600 dark:text-violet-400", tag: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400", dot: "bg-violet-500", btn: "bg-violet-600 dark:bg-violet-500" },
  { bg: "bg-emerald-50/60 dark:bg-emerald-900/10", border: "border-emerald-200/60 dark:border-emerald-700/30", accent: "text-emerald-600 dark:text-emerald-400", tag: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400", dot: "bg-emerald-500", btn: "bg-emerald-600 dark:bg-emerald-500" },
  { bg: "bg-amber-50/60 dark:bg-amber-900/10", border: "border-amber-200/60 dark:border-amber-700/30", accent: "text-amber-600 dark:text-amber-400", tag: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400", dot: "bg-amber-500", btn: "bg-amber-600 dark:bg-amber-500" },
];

export default function Courses() {
  return (
    <main data-testid="courses-page" className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-24 pb-10 sm:pb-14 lg:pb-20 bg-white dark:bg-gray-950 overflow-hidden border-b border-gray-100 dark:border-gray-800">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/6 dark:bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-500/5 dark:bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">All Programs</div>
            <h1 className="text-[38px] sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-5 sm:mb-6 leading-[1.05] max-w-3xl tracking-tight">
              Find the program<br /><span className="text-primary">that fits your goal.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">Four specialized programs. Every one designed to deliver a specific, measurable outcome — not just grammar rules.</p>
          </motion.div>
        </div>
      </section>

      {/* Course cards */}
      <Reveal className="py-10 sm:py-14 lg:py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={stagger} className="space-y-6">
            {courses.map((course, i) => {
              const meta = courseMeta[course.slug] || { batchSize: "Max 20 Students", level: "All Levels", outcomes: [] };
              const c = colors[i] || colors[0];
              return (
                <motion.div key={course.id} variants={fadeUp}
                  className={`rounded-3xl border-2 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-0.5 ${c.bg} ${c.border}`}
                  data-testid={`course-listing-${course.slug}`}>
                  <div className="p-8 lg:p-10">
                    <div className="grid lg:grid-cols-3 gap-10 items-start">

                      {/* Left — main content */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                          <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${c.tag}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />{course.duration}
                          </span>
                          <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-full">{meta.level}</span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h2>
                        <p className={`text-base italic mb-5 ${c.accent}`}>{course.tagline}</p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-7">{course.description}</p>

                        {/* What you'll gain */}
                        <div className="mb-7">
                          <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">What you'll gain</div>
                          <div className="space-y-2">
                            {meta.outcomes.map(o => (
                              <div key={o} className="flex items-center gap-2.5">
                                <CheckCircle2 size={15} className={c.accent} />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{o}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Feature tags */}
                        <div className="flex flex-wrap gap-2">
                          {course.features.map(f => (
                            <span key={f} className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-medium">{f}</span>
                          ))}
                        </div>
                      </div>

                      {/* Right — sidebar */}
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 space-y-3.5">
                          <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Course Details</div>
                          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                            <Clock size={14} className="text-gray-400 flex-shrink-0" /><span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                            <Users size={14} className="text-gray-400 flex-shrink-0" /><span>{meta.batchSize}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                            <Wifi size={14} className="text-gray-400 flex-shrink-0" /><span>Offline & Online Available</span>
                          </div>
                        </div>
                        <Link href={`/courses/${course.slug}`}
                          className={`flex items-center justify-center gap-2 w-full py-3.5 text-white font-bold rounded-2xl hover:opacity-90 transition-opacity text-sm ${c.btn}`}
                          data-testid={`course-learn-more-${course.slug}`}>
                          Full Program Details <ArrowRight size={15} />
                        </Link>
                        <a href="https://wa.me/917286066661?text=Hi! I want to enroll in the course."
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-[#25D366]/40 text-[#25D366] font-semibold rounded-2xl hover:bg-[#25D366]/5 transition-colors text-sm"
                          data-testid={`course-whatsapp-${course.slug}`}>
                          <FaWhatsapp size={15} /> Enquire on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Reveal>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(79,70,229,0.2),transparent_60%)]" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="text-xs font-bold text-primary/80 uppercase tracking-widest mb-4">Not Sure?</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Not sure which program is right for you?</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">Talk to us. We'll help you choose based on your current level and goal — no pressure, just honest advice.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+917286066661"
              className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors"
              data-testid="courses-cta-call">
              <Phone size={15} /> Call +91 7286 066 661
            </a>
            <a href="https://wa.me/917286066661" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
              data-testid="courses-cta-whatsapp">
              <FaWhatsapp size={15} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
