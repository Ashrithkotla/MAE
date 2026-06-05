import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
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
import trainerImg from "../assets/trianer1.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

const features = [
  { num: "01", title: "Live Speaking Practice", desc: "Real conversation sessions to build your speaking confidence from Day 1. No rote memorization." },
  { num: "02", title: "Structured Grammar Modules", desc: "Learn grammar the smart way with structural formulas — not confusion, not memorization." },
  { num: "03", title: "25+ Years of Expertise", desc: "Mentored by Ramesh Maharshi, whose teaching has transformed 10,000+ students across AP and Telangana." },
  { num: "04", title: "Flexible Batch Timings", desc: "Morning, afternoon, evening, and weekend batches available to match your life." },
  { num: "05", title: "Goal-Oriented Learning", desc: "Practical preparation for job interviews, promotions, presentations, and professional communication." },
  { num: "06", title: "Proven Track Record", desc: "5,000+ job placements. 3,000+ promotions. 98% satisfaction rate. Results that speak." },
];

const stats = [
  { target: 10000, suffix: "+", label: "Students Trained" },
  { target: 25, suffix: "+", label: "Years Experience" },
  { target: 98, suffix: "%", label: "Satisfaction Rate" },
  { target: 5000, suffix: "+", label: "Job Placements" },
];

const journeySteps = [
  { num: "01", title: "Enroll", desc: "Register online or visit our center. Select a batch that matches your level and schedule." },
  { num: "02", title: "Assess", desc: "Personal diagnostic session with Ramesh Maharshi to map your language strengths and gaps." },
  { num: "03", title: "Practice", desc: "Live classes, daily conversations, grammar exercises, roleplays, and group debates." },
  { num: "04", title: "Transform", desc: "Graduate with confidence. Crack interviews, earn promotions, and speak fluent English." },
];

const homeFaqs = faqs.slice(0, 5);

export default function Home() {
  return (
    <main data-testid="home-page">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-gray-950" data-testid="hero-section">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(79,70,229,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.03) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/12 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-primary">Trusted since 2004 in Vizianagaram</span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-[1.05] mb-6 tracking-tight">
                English fluency<br />
                <span className="text-primary">that changes</span><br />
                everything.
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-lg">
                From silence to fluency. From hesitation to confidence. Maharshi Advanced English has transformed over 10,000 lives across Andhra Pradesh and Telangana.
              </p>
              <div className="flex flex-wrap gap-4 mb-14">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20" data-testid="hero-cta-primary">
                  Book Free Demo <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/917286066661?text=Hi! I want to know more about your English courses." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all" data-testid="hero-cta-whatsapp">
                  <FaWhatsapp size={16} className="text-[#25D366]" /> WhatsApp Us
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <div key={s.label} data-testid={`hero-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white tabular-nums">
                      <AnimatedCounter target={s.target} suffix={s.suffix} />
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }} className="relative hidden lg:block">
              <img src={img1} alt="Students learning English" className="w-full h-[480px] object-cover rounded-2xl shadow-xl" />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <img src={trainerImg} alt="Ramesh Maharshi" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">Ramesh Maharshi</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Lead Trainer, 25+ Years</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-3 border border-gray-100 dark:border-gray-700">
                <div className="flex gap-0.5 mb-1">{[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-sm">★</span>)}</div>
                <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">98% Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400">Scroll to explore</span>
          <ChevronDown size={16} className="text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* ─── SOCIAL PROOF STRIP ─── */}
      <section className="border-y border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 py-8" data-testid="social-proof-strip">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest whitespace-nowrap">Our students work at</span>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {["IT Companies", "Banks", "Government Offices", "Schools & Colleges", "BPOs", "MNCs", "Hospitals", "Private Firms"].map(org => (
              <span key={org} className="text-sm font-medium text-gray-400 dark:text-gray-500">{org}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <Section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mb-16">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Why Maharshi</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 max-w-xl leading-tight">The institute that delivers results.</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg">Not another grammar class. A transformation program backed by 22 years of proven results.</p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
            {features.map((f, i) => (
              <motion.div key={f.num} variants={fadeUp} className="bg-white dark:bg-gray-950 p-8 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group" data-testid={`feature-card-${i + 1}`}>
                <div className="text-xs font-mono text-primary/40 mb-6">{f.num}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ─── COURSES ─── */}
      <Section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Programs</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">Four pathways.<br />One destination.</h2>
            </div>
            <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors whitespace-nowrap" data-testid="courses-view-all">
              View all programs <ArrowRight size={14} />
            </Link>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, i) => (
              <motion.div key={course.id} variants={fadeUp}>
                <Link href={`/courses/${course.slug}`} className={`block p-8 rounded-2xl border hover:shadow-lg transition-all group ${i === 0 ? "bg-primary text-white border-primary" : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-primary/5"}`} data-testid={`course-card-${course.slug}`}>
                  <div className={`text-xs font-semibold uppercase tracking-widest mb-4 ${i === 0 ? "text-white/60" : "text-primary"}`}>{course.duration}</div>
                  <h3 className={`text-xl font-bold mb-2 ${i === 0 ? "text-white" : "text-gray-900 dark:text-white"}`}>{course.title}</h3>
                  <p className={`text-sm italic mb-6 ${i === 0 ? "text-white/70" : "text-gray-500 dark:text-gray-400"}`}>{course.tagline}</p>
                  <p className={`text-sm leading-relaxed mb-8 ${i === 0 ? "text-white/80" : "text-gray-500 dark:text-gray-400"}`}>{course.description}</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${i === 0 ? "text-white" : "text-primary"}`}>Learn more</span>
                    <ArrowRight size={14} className={`group-hover:translate-x-1 transition-transform ${i === 0 ? "text-white" : "text-primary"}`} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ─── JOURNEY ─── */}
      <Section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Your Journey</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">How transformation happens</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-200 dark:bg-gray-700 -z-0" />
            {journeySteps.map((step) => (
              <motion.div key={step.num} variants={fadeUp} className="text-center relative" data-testid={`journey-step-${step.num}`}>
                <div className="w-20 h-20 rounded-full bg-primary/5 dark:bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-6 relative z-10 bg-white dark:bg-gray-950">
                  <span className="text-2xl font-bold text-primary">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ─── GALLERY ─── */}
      <Section className="py-24 bg-gray-50/50 dark:bg-gray-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mb-12">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Inside Maharshi</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white max-w-md">Real classrooms. Real results.</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-12 grid-rows-2 gap-3 h-[480px]">
            <motion.div variants={fadeUp} className="col-span-5 row-span-2 rounded-2xl overflow-hidden"><img src={img2} alt="Classroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></motion.div>
            <motion.div variants={fadeUp} className="col-span-4 row-span-1 rounded-2xl overflow-hidden"><img src={img3} alt="Students" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></motion.div>
            <motion.div variants={fadeUp} className="col-span-3 row-span-1 rounded-2xl overflow-hidden"><img src={img4} alt="Speaking" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></motion.div>
            <motion.div variants={fadeUp} className="col-span-4 row-span-1 rounded-2xl overflow-hidden"><img src={img5} alt="Group" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></motion.div>
            <motion.div variants={fadeUp} className="col-span-3 row-span-1 rounded-2xl overflow-hidden bg-primary flex items-center justify-center p-6">
              <div className="text-center text-white"><div className="text-4xl font-bold mb-1">10K+</div><div className="text-sm text-white/70">Lives Changed</div></div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ─── TESTIMONIALS ─── */}
      <Section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mb-16">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Student Voices</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white max-w-xl leading-tight">Stories that speak louder than promises.</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="lg:col-span-2 bg-gray-950 dark:bg-gray-900 text-white rounded-2xl p-10 relative overflow-hidden" data-testid="testimonial-featured">
              <div className="text-8xl font-serif text-white/5 absolute top-4 left-8 leading-none select-none">"</div>
              <div className="relative z-10">
                <div className="flex gap-0.5 mb-6">{[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-lg">★</span>)}</div>
                <blockquote className="text-xl lg:text-2xl leading-relaxed text-white/90 mb-8 font-light">{testimonials[0].text}</blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">{testimonials[0].initial}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonials[0].name}</div>
                    <div className="text-sm text-white/50">{testimonials[0].role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={stagger} className="flex flex-col gap-6">
              {testimonials.slice(1, 3).map(t => (
                <motion.div key={t.id} variants={fadeUp} className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-2xl p-7 border border-gray-100 dark:border-gray-800" data-testid={`testimonial-${t.id}`}>
                  <div className="flex gap-0.5 mb-4">{[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-xs">★</span>)}</div>
                  <blockquote className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">"{t.text.slice(0, 160)}..."</blockquote>
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
            <Link href="/success-stories" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" data-testid="testimonials-see-more">
              Read all success stories <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ─── BLOG ─── */}
      <Section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">From the Blog</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">English made simple.</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors whitespace-nowrap" data-testid="blog-view-all">
              All articles <ArrowRight size={14} />
            </Link>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <motion.div variants={fadeUp} className="lg:col-span-3" data-testid="blog-post-featured">
              <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
                <div className="rounded-2xl overflow-hidden mb-5 aspect-[16/9]">
                  <img src={blogPosts[0].featuredImage} alt={blogPosts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{blogPosts[0].category}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{blogPosts[0].readingTime}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors leading-snug">{blogPosts[0].title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{blogPosts[0].excerpt}</p>
              </Link>
            </motion.div>
            <motion.div variants={stagger} className="lg:col-span-2 flex flex-col gap-8">
              {blogPosts.slice(1, 3).map(post => (
                <motion.div key={post.id} variants={fadeUp} data-testid={`blog-post-${post.id}`}>
                  <Link href={`/blog/${post.slug}`} className="group flex gap-5">
                    <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                      <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide block mb-2">{post.category}</span>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors leading-snug mb-1 line-clamp-3">{post.title}</h3>
                      <span className="text-xs text-gray-400 dark:text-gray-500">{post.readingTime}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ─── FAQ ─── */}
      <Section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">FAQ</div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Common questions</h2>
            <p className="text-gray-500 dark:text-gray-400">Everything you need to know before enrolling.</p>
          </motion.div>
          <motion.div variants={stagger} className="divide-y divide-gray-100 dark:divide-gray-800">
            {homeFaqs.map(faq => <FAQItem key={faq.id} faq={faq} />)}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 text-center">
            <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline" data-testid="faq-view-all">
              View all questions <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ─── CTA ─── */}
      <Section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="relative rounded-3xl bg-[#1a1a2e] overflow-hidden p-12 lg:p-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(79,70,229,0.3),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(79,70,229,0.15),transparent_60%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="text-xs font-semibold text-primary/80 uppercase tracking-widest mb-4">Start Today</div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">Your English fluency<br />journey starts now.</h2>
              <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">New batches forming soon. Limited seats per batch. Book your free demo session today.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30" data-testid="cta-book-demo">
                  Book Free Demo <ArrowRight size={16} />
                </Link>
                <a href="tel:+917286066661" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:border-white/40 hover:bg-white/5 transition-all" data-testid="cta-call">
                  <Phone size={16} /> +91 7286 066 661
                </a>
                <a href="https://wa.me/917286066661" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:border-white/40 hover:bg-white/5 transition-all" data-testid="cta-whatsapp">
                  <FaWhatsapp size={16} className="text-[#25D366]" /> WhatsApp Us
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
    <motion.div variants={fadeUp} className="py-5" data-testid={`faq-item-${faq.id}`}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left gap-4" data-testid={`faq-toggle-${faq.id}`}>
        <span className="text-base font-semibold text-gray-900 dark:text-white">{faq.question}</span>
        <ChevronDown size={18} className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed pr-8">{faq.answer}</p>}
    </motion.div>
  );
}
