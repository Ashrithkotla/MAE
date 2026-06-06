import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView, useAnimationFrame, useMotionValue } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, Star, Users, Award, TrendingUp, CheckCircle2, Calendar, Clock, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import AnimatedCounter from "../components/AnimatedCounter";
import { courses } from "../data/courses";
import { testimonials } from "../data/testimonials";
import { faqs } from "../data/faq";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import trainerImg from "../assets/trianer1.png";
import summerImg from "../assets/MAE SUMMER CLASSES.jpeg";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>{children}</motion.div>;
}

function InfiniteMarquee({ items, speed = 40, reverse = false }: { items: string[]; speed?: number; reverse?: boolean }) {
  const x = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  useAnimationFrame((_, delta) => {
    const direction = reverse ? 1 : -1;
    x.set(x.get() + direction * (delta / 1000) * speed);
    if (ref.current) {
      const halfW = ref.current.scrollWidth / 2;
      if (!reverse && x.get() < -halfW) x.set(0);
      if (reverse && x.get() > 0) x.set(-halfW);
    }
  });
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <motion.div ref={ref} style={{ x }} className="flex gap-4 w-max">
        {doubled.map((item, i) => (
          <span key={i} className="whitespace-nowrap text-sm font-semibold text-gray-500 dark:text-gray-400 px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex-shrink-0">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function TestimonialMarquee() {
  const x = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  useAnimationFrame((_, delta) => {
    x.set(x.get() - (delta / 1000) * 32);
    if (ref.current) {
      const halfW = ref.current.scrollWidth / 2;
      if (x.get() < -halfW) x.set(0);
    }
  });
  const doubled = [...testimonials, ...testimonials];
  return (
    <div className="overflow-hidden">
      <motion.div ref={ref} style={{ x }} className="flex gap-5 w-max">
        {doubled.map((t, i) => (
          <div key={i} className="w-[300px] sm:w-[340px] flex-shrink-0 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm">
            <div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map(s => <Star key={s} size={13} className="fill-amber-400 text-amber-400" />)}</div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-5 line-clamp-4">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">{t.initial}</div>
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{t.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const stats = [
  { target: 10000, suffix: "+", label: "Students Trained", icon: Users, color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-900/20" },
  { target: 25, suffix: "+", label: "Years Experience", icon: Award, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/20" },
  { target: 98, suffix: "%", label: "Satisfaction Rate", icon: Star, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
  { target: 5000, suffix: "+", label: "Job Placements", icon: TrendingUp, color: "text-primary dark:text-primary", bg: "bg-primary/8 dark:bg-primary/15" },
];

const marqueePhrases = [
  "10,000+ Students Trained", "25+ Years of Excellence", "98% Satisfaction Rate",
  "5,000+ Job Placements", "Vizianagaram's #1 English Institute",
  "Spoken English · Grammar · Professional English · Interview Prep",
  "Morning & Evening Batches Available", "Online & Offline Classes",
];

const batches = [
  { batch: "Spoken English", timing: "Mon – Sat, 7:00 AM", seats: "3 seats left", urgent: true },
  { batch: "Grammar Mastery", timing: "Mon – Sat, 6:00 PM", seats: "5 seats left", urgent: false },
  { batch: "Interview Prep", timing: "Sat & Sun, 10:00 AM", seats: "4 seats left", urgent: true },
  { batch: "Professional English", timing: "Mon – Fri, 12:00 PM", seats: "6 seats left", urgent: false },
];

const features = [
  { icon: "🎯", title: "Goal-Oriented Learning", desc: "Every class is built around your specific outcome — job interview, promotion, or daily fluency." },
  { icon: "🗣️", title: "Live Speaking Practice", desc: "Real conversations every day. Not just textbooks — actual practice that builds real confidence." },
  { icon: "📐", title: "Structured Grammar", desc: "Learn grammar with proven formulas. Clear, simple, practical — not confusing." },
  { icon: "👤", title: "Personal Mentoring", desc: "Small batches. Individual attention. Ramesh Maharshi personally guides every student." },
  { icon: "📅", title: "Flexible Batches", desc: "Morning, afternoon, evening, and weekend options. Study around your schedule." },
  { icon: "🏆", title: "Proven Track Record", desc: "5,000+ placements. 3,000+ promotions. 25+ years. The numbers speak for themselves." },
];

const homeFaqs = faqs.slice(0, 5);

export default function Home() {
  return (
    <main>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-950">
        {/* Animated gradient blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/8 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-violet-500/6 dark:bg-violet-500/8 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-15"
          style={{ backgroundImage: "linear-gradient(rgba(79,70,229,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.08) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 lg:pb-0 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 lg:items-center lg:min-h-[calc(100vh-5rem)]">

            {/* Text column */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: "easeOut" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/8 dark:bg-primary/15 border border-primary/20 mb-6 sm:mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold text-primary tracking-wide">Trusted since 2004 · Vizianagaram, AP</span>
              </motion.div>

              <h1 className="font-bold text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-5 sm:mb-6">
                <span className="block text-[40px] sm:text-5xl lg:text-6xl xl:text-[70px]">English fluency</span>
                <span className="block text-[40px] sm:text-5xl lg:text-6xl xl:text-[70px] relative">
                  <span className="text-primary relative">
                    that changes
                    <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" preserveAspectRatio="none" fill="none">
                      <path d="M0 6 Q75 0 150 5 Q225 10 300 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
                    </svg>
                  </span>
                </span>
                <span className="block text-[40px] sm:text-5xl lg:text-6xl xl:text-[70px]">everything.</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-7 sm:mb-10 max-w-lg">
                From silence to fluency. From hesitation to confidence. Over <strong className="text-gray-700 dark:text-gray-200 font-semibold">10,000 lives</strong> transformed across Andhra Pradesh and Telangana.
              </p>

              {/* Buttons — stacked on mobile, row on sm+ */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
                <Link href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all hover:shadow-2xl hover:shadow-primary/30 text-base w-full sm:w-auto">
                  Book Free Demo
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="https://wa.me/917286066661?text=Hi! I want to know more about your English courses."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/5 transition-all text-base w-full sm:w-auto">
                  <FaWhatsapp size={18} className="text-[#25D366]" /> WhatsApp Us
                </a>
              </div>

              {/* Mobile-only hero image */}
              <div className="lg:hidden mb-8 rounded-2xl overflow-hidden shadow-xl relative h-52 sm:h-64">
                <img src={img1} alt="Maharshi English classroom" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                    <img src={trainerImg} alt="Ramesh Maharshi" className="w-10 h-10 rounded-full object-cover object-top flex-shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-gray-900 dark:text-white">Ramesh Maharshi</div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400">Founder · 25+ Years Experience</div>
                    </div>
                    <div className="ml-auto flex gap-0.5">{[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-amber-400 text-amber-400" />)}</div>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className={`rounded-xl p-3 sm:p-3.5 ${s.bg} border border-gray-100 dark:border-gray-800`}>
                      <Icon size={15} className={`${s.color} mb-1.5`} />
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tabular-nums">
                        <AnimatedCounter target={s.target} suffix={s.suffix} />
                      </div>
                      <div className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5 leading-tight">{s.label}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Desktop image collage — hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative hidden lg:block h-[580px]"
            >
              <motion.div className="absolute top-0 right-0 w-[75%] h-[68%] rounded-3xl overflow-hidden shadow-2xl" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                <img src={img1} alt="Maharshi English classroom" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-bold">Live Speaking Session</div>
                  <div className="text-xs text-white/70">Daily practice · Small batches</div>
                </div>
              </motion.div>
              <motion.div className="absolute bottom-0 left-0 w-[50%] h-[46%] rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-950" whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }}>
                <img src={img2} alt="Students practicing" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div className="absolute bottom-[36%] right-[20%] w-[36%] h-[28%] rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-950" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <img src={summerImg} alt="Summer classes" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div className="absolute bottom-[10%] right-3 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-3.5 border border-gray-100 dark:border-gray-700 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
                <img src={trainerImg} alt="Ramesh Maharshi" className="w-12 h-12 rounded-full object-cover object-top ring-2 ring-primary/20" />
                <div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">Ramesh Maharshi</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Founder · 25+ Years</div>
                  <div className="flex gap-0.5 mt-1">{[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-amber-400 text-amber-400" />)}</div>
                </div>
              </motion.div>
              <motion.div className="absolute top-3 left-3 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-3.5"
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Overall Rating</div>
                <div className="flex gap-0.5 mb-1">{[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-amber-400 text-amber-400" />)}</div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">98% Satisfaction</div>
                <div className="text-xs text-gray-400">10,000+ students</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator — desktop only */}
        <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5">
          <span className="text-xs text-gray-400">Scroll to explore</span>
          <ChevronDown size={16} className="text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          MARQUEE STRIP
      ══════════════════════════════════════ */}
      <div className="py-3.5 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800 overflow-hidden">
        <InfiniteMarquee items={marqueePhrases} speed={45} />
      </div>

      {/* ══════════════════════════════════════
          PHOTO GALLERY
      ══════════════════════════════════════ */}
      <Reveal className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7 sm:mb-10">
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Inside Our Classrooms</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white leading-tight">Where transformation happens.</h2>
            </div>
            <Link href="/success-stories" className="text-sm font-semibold text-primary hover:underline whitespace-nowrap inline-flex items-center gap-1">
              See success stories <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Mobile/Tablet gallery — 2-column grid */}
          <motion.div variants={stagger} className="grid grid-cols-2 gap-2.5 lg:hidden">
            {[
              { img: img1, label: "Live Speaking Sessions" },
              { img: img3, label: "Grammar Mastery" },
              { img: img4, label: "Interview Prep" },
              { img: img2, label: "Group Activities" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="relative rounded-2xl overflow-hidden aspect-square">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">{item.label}</div>
              </motion.div>
            ))}
            <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden aspect-square">
              <img src={img5} alt="Spoken English" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Spoken English</div>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl bg-primary flex flex-col items-center justify-center aspect-square text-white">
              <div className="text-4xl font-black mb-1">10K+</div>
              <div className="text-xs text-white/70 text-center px-2">Lives Changed Since 2004</div>
            </motion.div>
          </motion.div>

          {/* Desktop masonry — large screens only */}
          <motion.div variants={stagger} className="hidden lg:grid grid-cols-12 grid-rows-3 gap-3 h-[520px]">
            <motion.div variants={fadeUp} className="col-span-5 row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer">
              <img src={img1} alt="Live session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <div className="text-base font-bold mb-0.5">Live Speaking Sessions</div>
                <div className="text-xs text-white/70">Daily practice · Real conversations</div>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full">LIVE CLASS</div>
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-4 row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer">
              <img src={img3} alt="Grammar class" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Grammar Mastery</div>
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-3 row-span-1 rounded-3xl bg-primary flex flex-col items-center justify-center text-white p-4">
              <div className="text-5xl font-black mb-1">10K+</div>
              <div className="text-sm text-white/70 text-center">Lives Changed Since 2004</div>
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-4 row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer">
              <img src={img4} alt="Students" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Interview Prep</div>
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-3 row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer">
              <img src={summerImg} alt="Summer classes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/75 to-transparent" />
              <div className="absolute inset-0 flex items-center pl-4">
                <div className="text-white"><div className="text-sm font-bold">Summer Batches</div><div className="text-xs text-white/80">Enroll now</div></div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-4 row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer">
              <img src={img2} alt="Group learning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Group Activities</div>
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-4 row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer">
              <img src={img5} alt="Classroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Spoken English</div>
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-4 row-span-1 rounded-3xl bg-gray-900 dark:bg-gray-800 flex flex-col items-center justify-center p-6 text-center">
              <div className="text-3xl font-black text-white mb-1">5000+</div>
              <div className="text-sm text-gray-400 mb-3">Job Placements</div>
              <Link href="/success-stories" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">Read stories <ArrowRight size={12} /></Link>
            </motion.div>
          </motion.div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════
          UPCOMING BATCHES
      ══════════════════════════════════════ */}
      <section className="py-12 sm:py-14 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-7">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">Limited Seats</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Upcoming batches — join now.</h2>
            </div>
            <a href="tel:+917286066661" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors w-full sm:w-auto">
              <Phone size={15} /> Call to Reserve Seat
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {batches.map((b) => (
              <div key={b.batch} className={`rounded-2xl border p-5 transition-all hover:-translate-y-1 cursor-pointer ${b.urgent ? "border-red-500/40 bg-red-500/5" : "border-gray-700 bg-gray-900"}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-sm font-bold text-white">{b.batch}</div>
                  {b.urgent && <span className="text-xs font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded-full">Filling fast</span>}
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-2"><Clock size={12} /> {b.timing}</div>
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-4"><MapPin size={12} /> Vizianagaram · Offline & Online</div>
                <div className="text-xs font-bold text-primary">{b.seats}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-4 text-center">New batches start monthly. Contact us for exact start dates and fee details.</p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY MAHARSHI
      ══════════════════════════════════════ */}
      <Reveal className="py-14 sm:py-20 lg:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 lg:mb-16">
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Why Maharshi</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
                The institute that delivers results,<br className="hidden sm:block" /><span className="text-primary">not just promises.</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-base lg:text-lg">Not another grammar class. A transformation program built around real speaking, real practice, and real-world outcomes — backed by 25 years of proof.</p>
            </div>
            <div className="relative h-60 sm:h-72 lg:h-80">
              <img src={img3} alt="Students" className="w-full h-full object-cover rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-primary rounded-2xl p-4 sm:p-5 text-white shadow-xl shadow-primary/30">
                <div className="text-2xl sm:text-3xl font-black">25+</div>
                <div className="text-xs text-white/70 mt-0.5">Years Teaching</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp}
                className="group p-5 sm:p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all cursor-pointer bg-white dark:bg-gray-950">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{f.icon}</div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════
          TRAINER SPOTLIGHT
      ══════════════════════════════════════ */}
      <Reveal className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 to-[#12123a]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(79,70,229,0.25),transparent_65%)]" />
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="grid lg:grid-cols-5 gap-0 items-stretch">
              <div className="relative z-10 lg:col-span-3 p-7 sm:p-10 lg:p-14 flex flex-col justify-center">
                <div className="text-xs font-bold text-primary/80 uppercase tracking-widest mb-4">Meet Your Mentor</div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 leading-tight">
                  Ramesh Maharshi —<br />25 years, 10,000+ lives.
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                  In 2004, Ramesh Maharshi opened with one room and one conviction: English fluency should not be a privilege for the few. Today, more than 10,000 students call him the teacher who changed their life. He still teaches personally.
                </p>
                <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8">
                  {[["10,000+", "Students Trained"], ["5,000+", "Placements"], ["25+", "Years of Teaching"]].map(([num, label]) => (
                    <div key={label}>
                      <div className="text-xl sm:text-2xl font-black text-white">{num}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary/90 transition-colors">
                    Book a Demo Class
                  </Link>
                  <Link href="/about" className="inline-flex items-center justify-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                    Read the full story <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block lg:col-span-2">
                <img src={trainerImg} alt="Ramesh Maharshi" className="w-full h-full object-cover object-top min-h-[420px]" style={{ objectPosition: "top center" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════
          COURSES
      ══════════════════════════════════════ */}
      <Reveal className="py-14 sm:py-20 lg:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Our Programs</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">Four pathways.<br />One destination.</h2>
            </div>
            <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline whitespace-nowrap">
              View all <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {courses.map((course, i) => {
              const colors = [
                "border-primary/30 hover:border-primary bg-primary/3 dark:bg-primary/5",
                "border-violet-300/30 dark:border-violet-700/30 hover:border-violet-500 bg-violet-50/50 dark:bg-violet-900/10",
                "border-emerald-300/30 dark:border-emerald-700/30 hover:border-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/10",
                "border-amber-300/30 dark:border-amber-700/30 hover:border-amber-500 bg-amber-50/50 dark:bg-amber-900/10",
              ];
              const accents = ["text-primary", "text-violet-600 dark:text-violet-400", "text-emerald-600 dark:text-emerald-400", "text-amber-600 dark:text-amber-400"];
              const dotColors = ["bg-primary", "bg-violet-500", "bg-emerald-500", "bg-amber-500"];
              return (
                <motion.div key={course.id} variants={fadeUp}>
                  <Link href={`/courses/${course.slug}`}
                    className={`group flex flex-col h-full p-5 sm:p-7 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colors[i]}`}>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 ${accents[i]}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${dotColors[i]}`} />
                      {course.duration}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">{course.title}</h3>
                    <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">{course.tagline}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5 sm:mb-6 flex-1 line-clamp-3">{course.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                      {course.features.slice(0, 3).map(f => (
                        <span key={f} className="flex items-center gap-1 text-xs px-2 sm:px-2.5 py-1 rounded-lg bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 font-medium border border-gray-200 dark:border-gray-700">
                          <CheckCircle2 size={11} className={accents[i]} /> {f}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-bold ${accents[i]} group-hover:underline`}>Learn more</span>
                      <ArrowRight size={15} className={`${accents[i]} group-hover:translate-x-1.5 transition-transform`} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-8 sm:mb-10">
          <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Student Voices</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white max-w-xl leading-tight">Stories louder than promises.</h2>
            <Link href="/success-stories" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline whitespace-nowrap">
              All stories <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="px-5 sm:px-6 lg:px-8">
            <TestimonialMarquee />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <Reveal className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-12">
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">FAQ</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Common questions</h2>
            <p className="text-gray-500 dark:text-gray-400">Everything you need to know before enrolling.</p>
          </motion.div>
          <motion.div variants={stagger} className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900">
            {homeFaqs.map(faq => <FAQItem key={faq.id} faq={faq} />)}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 text-center">
            <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              View all questions <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <Reveal className="pb-12 sm:pb-16 lg:pb-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img src={img4} alt="Students" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-950/92 via-gray-950/80 to-primary/40" />
            </div>
            <div className="relative z-10 py-14 sm:py-20 px-6 sm:px-8 lg:px-24">
              <div className="max-w-2xl">
                <div className="text-xs font-bold text-primary/80 uppercase tracking-widest mb-4">Start Today</div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 sm:mb-6 leading-tight">
                  Your English fluency<br />journey starts now.
                </h2>
                <p className="text-base sm:text-lg text-white/60 mb-8 sm:mb-10 max-w-lg">New batches forming soon. Limited seats per batch. Book your free demo session today.</p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Link href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all text-base w-full sm:w-auto">
                    Book Free Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="tel:+917286066661"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/25 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/8 transition-all text-base w-full sm:w-auto">
                    <Phone size={16} /> +91 7286 066 661
                  </a>
                  <a href="https://wa.me/917286066661" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#22c55e] transition-all text-base w-full sm:w-auto">
                    <FaWhatsapp size={18} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Reveal>

    </main>
  );
}

function FAQItem({ faq }: { faq: { id: number; question: string; answer: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left gap-4 px-5 sm:px-6 py-4 sm:py-5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">{faq.question}</span>
        <ChevronDown size={16} className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-4 sm:pb-5">
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}
