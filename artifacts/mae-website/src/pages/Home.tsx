import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, Star, Users, Clock, Award, TrendingUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import AnimatedCounter from "../components/AnimatedCounter";
import { courses } from "../data/courses";
import { testimonials } from "../data/testimonials";
import { blogPosts } from "../data/blog";
import { faqs } from "../data/faq";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import heroImg from "../assets/hero.png";
import trainerImg from "../assets/trianer1.png";
import summerImg from "../assets/MAE SUMMER CLASSES.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

const stats = [
  { target: 10000, suffix: "+", label: "Students Trained", icon: Users },
  { target: 25, suffix: "+", label: "Years Experience", icon: Award },
  { target: 98, suffix: "%", label: "Satisfaction Rate", icon: Star },
  { target: 5000, suffix: "+", label: "Job Placements", icon: TrendingUp },
];

const features = [
  { num: "01", title: "Live Speaking Practice", desc: "Real conversation sessions every day. No theory overload — just real practice that builds real confidence." },
  { num: "02", title: "Structured Grammar", desc: "Learn grammar with smart structural formulas. No confusion, no memorization — just clarity." },
  { num: "03", title: "Personal Mentoring", desc: "Ramesh Maharshi personally guides every student. Small batches. Individual attention. Real outcomes." },
  { num: "04", title: "Flexible Batches", desc: "Morning, afternoon, evening, and weekend options to fit your schedule and lifestyle." },
  { num: "05", title: "Goal-Oriented", desc: "Built for interviews, promotions, presentations, and professional communication — not textbook exams." },
  { num: "06", title: "Proven Results", desc: "5,000+ placements. 3,000+ promotions. 25+ years. The numbers don't lie." },
];

const journeySteps = [
  { num: "01", title: "Enroll", desc: "Register online or visit our center in Vizianagaram." },
  { num: "02", title: "Assess", desc: "Personal diagnostic session to map your level." },
  { num: "03", title: "Practice", desc: "Daily live classes, conversations, and debates." },
  { num: "04", title: "Transform", desc: "Speak fluently. Crack interviews. Get promoted." },
];

const homeFaqs = faqs.slice(0, 5);

export default function Home() {
  return (
    <main data-testid="home-page">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-gray-950">
        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
          style={{ backgroundImage: "linear-gradient(rgba(79,70,229,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.06) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">

            {/* Left — text */}
            <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 dark:bg-primary/15 border border-primary/15 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold text-primary">Trusted since 2004 · Vizianagaram</span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-[1.05] mb-6 tracking-tight">
                English fluency<br />
                <span className="text-primary">that changes</span><br />
                everything.
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-lg">
                From silence to fluency. From hesitation to confidence. Over 10,000 lives transformed across Andhra Pradesh and Telangana.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
                  Book Free Demo <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/917286066661?text=Hi! I want to know more about your English courses."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-primary/40 hover:bg-primary/4 dark:hover:bg-primary/10 transition-all">
                  <FaWhatsapp size={17} className="text-[#25D366]" /> WhatsApp Us
                </a>
              </div>
              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {stats.map((s) => (
                  <div key={s.label} className="group">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white tabular-nums">
                      <AnimatedCounter target={s.target} suffix={s.suffix} />
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — image collage */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="relative hidden lg:block h-[560px]"
            >
              {/* Main classroom image */}
              <div className="absolute top-0 right-0 w-[78%] h-[72%] rounded-3xl overflow-hidden shadow-2xl">
                <img src={img1} alt="Maharshi Advanced English classroom" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Secondary image bottom-left */}
              <div className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-950">
                <img src={img2} alt="Students practicing English" className="w-full h-full object-cover" />
              </div>

              {/* Summer classes image — small accent */}
              <div className="absolute top-[42%] right-[22%] w-[34%] h-[30%] rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-950">
                <img src={summerImg} alt="Summer classes" className="w-full h-full object-cover" />
              </div>

              {/* Trainer badge */}
              <div className="absolute bottom-[12%] right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-3.5 border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                <img src={trainerImg} alt="Ramesh Maharshi" className="w-11 h-11 rounded-full object-cover object-top" />
                <div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">Ramesh Maharshi</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Founder · 25+ Yrs</div>
                </div>
              </div>

              {/* Rating badge */}
              <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-3.5 border border-gray-100 dark:border-gray-700">
                <div className="flex gap-0.5 mb-1">{[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-amber-400 text-amber-400" />)}</div>
                <div className="text-xs font-bold text-gray-800 dark:text-white">98% Satisfaction</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">10,000+ students</div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <span className="text-xs text-gray-400">Scroll to explore</span>
          <ChevronDown size={16} className="text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ── */}
      <section className="border-y border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Our students work at</span>
            {["IT Companies", "Banks", "Govt. Offices", "Schools", "BPOs", "MNCs", "Hospitals", "Private Firms"].map(org => (
              <span key={org} className="text-sm font-semibold text-gray-500 dark:text-gray-400">{org}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO SHOWCASE ── */}
      <Section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Inside Our Classrooms</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">Where transformation happens.</h2>
          </motion.div>

          {/* Masonry-style photo grid */}
          <motion.div variants={stagger} className="grid grid-cols-12 gap-3 h-[480px] lg:h-[540px]">
            <motion.div variants={fadeUp} className="col-span-7 row-span-2 relative rounded-3xl overflow-hidden group">
              <img src={img1} alt="Classroom session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <div className="text-lg font-bold">Live Speaking Sessions</div>
                <div className="text-sm text-white/70">Daily practice with real conversations</div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-5 rounded-3xl overflow-hidden group">
              <img src={img3} alt="Group study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-3 rounded-3xl overflow-hidden group">
              <img src={img4} alt="Grammar class" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-2 rounded-3xl overflow-hidden bg-primary flex items-center justify-center">
              <div className="text-center text-white p-4">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-xs text-white/70 mt-1">Lives Changed</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Second row */}
          <motion.div variants={stagger} className="grid grid-cols-12 gap-3 mt-3 h-[180px]">
            <motion.div variants={fadeUp} className="col-span-4 rounded-3xl overflow-hidden group">
              <img src={img2} alt="Students learning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-4 rounded-3xl overflow-hidden group">
              <img src={img5} alt="Group activity" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-4 rounded-3xl overflow-hidden group relative">
              <img src={summerImg} alt="Summer classes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent flex items-center pl-5">
                <div className="text-white">
                  <div className="text-sm font-bold">Summer Batches</div>
                  <div className="text-xs text-white/80">Enroll now</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ── WHY MAHARSHI ── */}
      <Section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Why Maharshi</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">The institute that delivers results — not promises.</h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Not another grammar class. A transformation program built around real speaking, real practice, and real-world outcomes — backed by 25 years of proof.</p>
            </div>
            <div className="relative h-72 lg:h-80">
              <img src={img3} alt="Students in class" className="w-full h-full object-cover rounded-3xl shadow-xl" />
              <div className="absolute -bottom-4 -right-4 bg-primary rounded-2xl p-5 text-white shadow-lg shadow-primary/30">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-xs text-white/70 mt-0.5">Years Teaching</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
            {features.map((f, i) => (
              <motion.div key={f.num} variants={fadeUp}
                className="bg-white dark:bg-gray-900 p-7 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                <div className="text-xs font-mono text-primary/40 mb-5">{f.num}</div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── TRAINER SPOTLIGHT ── */}
      <Section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(79,70,229,0.2),transparent_65%)]" />
            <div className="grid lg:grid-cols-2 gap-0 items-stretch">
              <div className="relative z-10 p-10 lg:p-14 flex flex-col justify-center">
                <div className="text-xs font-semibold text-primary/80 uppercase tracking-widest mb-5">Meet Your Mentor</div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">Ramesh Maharshi —<br />25 years, 10,000+ lives.</h2>
                <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                  In 2004, Ramesh Maharshi opened with one room and a single conviction: English fluency should not be a privilege. Today, more than 10,000 students across Andhra Pradesh and Telangana call him the teacher who changed their lives. He still teaches personally. Still knows every student's name.
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  {[["10,000+", "Students"], ["5,000+", "Placements"], ["25+", "Years"]].map(([num, label]) => (
                    <div key={label}>
                      <div className="text-2xl font-bold text-white">{num}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
                <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                  Read the full story <ArrowRight size={14} />
                </Link>
              </div>
              <div className="relative hidden lg:block">
                <img src={trainerImg} alt="Ramesh Maharshi" className="w-full h-full object-cover object-top min-h-[400px]" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── COURSES ── */}
      <Section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Programs</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">Four pathways.<br />One destination.</h2>
            </div>
            <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline whitespace-nowrap">
              View all programs <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {courses.map((course, i) => (
              <motion.div key={course.id} variants={fadeUp}>
                <Link href={`/courses/${course.slug}`}
                  className={`group flex flex-col h-full p-8 rounded-2xl border-2 transition-all hover:-translate-y-1 hover:shadow-xl ${
                    i === 0
                      ? "bg-primary text-white border-primary hover:shadow-primary/20"
                      : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-gray-200/50 dark:hover:shadow-none"
                  }`}>
                  <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${i === 0 ? "text-white/60" : "text-primary"}`}>
                    {course.duration}
                  </div>
                  <h3 className={`text-xl font-bold mb-1.5 ${i === 0 ? "text-white" : "text-gray-900 dark:text-white"}`}>{course.title}</h3>
                  <p className={`text-sm italic mb-5 ${i === 0 ? "text-white/70" : "text-gray-500 dark:text-gray-400"}`}>{course.tagline}</p>
                  <p className={`text-sm leading-relaxed mb-7 flex-1 ${i === 0 ? "text-white/80" : "text-gray-500 dark:text-gray-400"}`}>{course.description}</p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {course.features.slice(0, 3).map(f => (
                      <span key={f} className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                        i === 0 ? "bg-white/15 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                      }`}>{f}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className={`text-sm font-semibold ${i === 0 ? "text-white" : "text-primary"}`}>Learn more</span>
                    <ArrowRight size={14} className={`group-hover:translate-x-1 transition-transform ${i === 0 ? "text-white" : "text-primary"}`} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── JOURNEY ── */}
      <Section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Your Journey</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">How transformation happens</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step, i) => (
              <motion.div key={step.num} variants={fadeUp}
                className="relative p-7 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-lg transition-all group">
                <div className="text-5xl font-black text-primary/8 dark:text-primary/12 mb-5 select-none">{step.num}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                {i < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200 dark:bg-gray-700" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mb-14">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Student Voices</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white max-w-xl leading-tight">Stories that speak louder than promises.</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured large testimonial */}
            <motion.div variants={fadeUp} className="lg:col-span-2 bg-gray-950 dark:bg-gray-800 text-white rounded-3xl p-10 relative overflow-hidden">
              <div className="text-[120px] font-serif text-white/4 absolute -top-4 left-4 leading-none select-none">"</div>
              <div className="relative z-10">
                <div className="flex gap-0.5 mb-6">{[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}</div>
                <blockquote className="text-xl lg:text-2xl leading-relaxed text-white/90 mb-8 font-light">{testimonials[0].text}</blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white font-bold">{testimonials[0].initial}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonials[0].name}</div>
                    <div className="text-sm text-white/50">{testimonials[0].role}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={stagger} className="flex flex-col gap-5">
              {testimonials.slice(1, 3).map(t => (
                <motion.div key={t.id} variants={fadeUp}
                  className="flex-1 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                  <div className="flex gap-0.5 mb-4">{[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}</div>
                  <blockquote className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-5">"{t.text.slice(0, 150)}..."</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">{t.initial}</div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 text-center">
            <Link href="/success-stories" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Read all success stories <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ── BLOG PREVIEW ── */}
      <Section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">From the Blog</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">English made simple.</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline whitespace-nowrap">
              All articles <ArrowRight size={14} />
            </Link>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.div key={post.id} variants={fadeUp}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className={`rounded-2xl overflow-hidden mb-4 ${i === 0 ? "aspect-[4/3]" : "aspect-[16/9]"}`}>
                    <img src={post.featuredImage} alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wide text-primary">{post.category}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">{post.readingTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">{post.excerpt}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">FAQ</div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Common questions</h2>
            <p className="text-gray-500 dark:text-gray-400">Everything you need to know before enrolling.</p>
          </motion.div>
          <motion.div variants={stagger} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
            {homeFaqs.map(faq => <FAQItem key={faq.id} faq={faq} />)}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 text-center">
            <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              View all questions <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="relative rounded-3xl overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <img src={img4} alt="Students" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gray-950/88" />
            </div>
            <div className="relative z-10 py-20 px-8 lg:px-20 text-center">
              <div className="text-xs font-semibold text-primary/80 uppercase tracking-widest mb-4">Start Today</div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Your English fluency<br />journey starts now.
              </h2>
              <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">New batches forming soon. Limited seats. Book your free demo session today and take the first step.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
                  Book Free Demo <ArrowRight size={16} />
                </Link>
                <a href="tel:+917286066661"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/8 transition-all">
                  <Phone size={16} /> +91 7286 066 661
                </a>
                <a href="https://wa.me/917286066661" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:opacity-90 transition-all">
                  <FaWhatsapp size={16} /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}

function FAQItem({ faq }: { faq: { id: number; question: string; answer: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div data-testid={`faq-item-${faq.id}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left gap-4 px-6 py-5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
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
