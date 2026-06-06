import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";
import trainerImg from "../assets/trianer1.png";
import img1 from "../assets/img1.jpeg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>{children}</motion.div>;
}

const stats = [
  { target: 10000, suffix: "+", label: "Students Trained", color: "text-violet-400" },
  { target: 25, suffix: "+", label: "Years Experience", color: "text-amber-400" },
  { target: 98, suffix: "%", label: "Satisfaction Rate", color: "text-emerald-400" },
  { target: 5000, suffix: "+", label: "Job Placements", color: "text-primary" },
];

const timeline = [
  { year: "2004", title: "Founded in Vizianagaram", desc: "Ramesh Maharshi opened the institute with one room and a single conviction: English fluency should be accessible to every Telugu speaker." },
  { year: "2008", title: "Expanded to 500+ Students", desc: "Word spread across Vizianagaram. New batches were added every quarter to meet the growing demand." },
  { year: "2013", title: "Online Programs Launched", desc: "One of the first institutes in Vizianagaram to offer live, interactive online English classes." },
  { year: "2019", title: "10,000+ Lives Transformed", desc: "Crossed a landmark milestone — 10,000 students trained, with placements across AP and Telangana." },
  { year: "2024", title: "22nd Year of Excellence", desc: "Still led personally by Ramesh Maharshi. Still small batches, individual attention, and real results." },
];

const missions = [
  "Delivering spoken English training that builds genuine fluency — not textbook knowledge",
  "Teaching grammar in a simple, clear, practical way students can use every day",
  "Preparing students and professionals for workplace communication, interviews, and career growth",
  "Creating a supportive, encouraging, and judgment-free learning environment",
  "Making quality English education accessible to every person in AP and Telangana",
  "Maintaining the highest standards of teaching integrity and student accountability",
];

export default function About() {
  return (
    <main data-testid="about-page" className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-white dark:bg-gray-950 overflow-hidden border-b border-gray-100 dark:border-gray-800">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/6 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Our Story</div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.05] tracking-tight">
                25 years of<br /><span className="text-primary">transforming lives.</span>
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
                Maharshi Advanced English is not a classroom. It is a launchpad. Since 2004, our founder Ramesh Maharshi has personally guided over 10,000 students from hesitation to complete fluency.
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                data-testid="about-cta">
                Join the Journey <ArrowRight size={15} />
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[480px]">
                <img src={trainerImg} alt="Ramesh Maharshi" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="font-bold text-gray-900 dark:text-white">Ramesh Maharshi</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Founder & Lead Trainer — 25+ Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-14 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Reveal>
            <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map(s => (
                <motion.div key={s.label} variants={fadeUp} className="text-center" data-testid={`about-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className={`text-5xl font-black mb-2 tabular-nums ${s.color}`}>
                    <AnimatedCounter target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Founder story */}
      <Reveal className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">The Founder</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">A teacher who believed English could change destinies.</h2>
              <div className="space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                <p>In 2004, Ramesh Maharshi opened Maharshi Advanced English with a single room, a whiteboard, and a conviction: that English fluency was not a privilege for the few — it was a right for everyone.</p>
                <p>His students were engineers who froze in meetings, graduates who failed interviews despite knowing the answers, homemakers who couldn't talk to their children's schools, and professionals passed over for promotions because of a language barrier.</p>
                <p>He understood that the problem was never intelligence. It was access. Access to structured, practical, personalized English training that focused on real speaking — not memorizing grammar tables.</p>
                <p>Over 25 years and 10,000+ students later, that conviction hasn't changed. Ramesh Maharshi still teaches personally. Still knows every student's name. Still cares about outcomes, not enrollment numbers.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              <img src={img1} alt="Classroom session" className="w-full h-52 object-cover rounded-2xl col-span-2" />
              <img src={img3} alt="Grammar class" className="w-full h-40 object-cover rounded-2xl" />
              <div className="bg-primary rounded-2xl flex flex-col items-center justify-center p-6 text-center h-40">
                <div className="text-4xl font-black text-white mb-1">25+</div>
                <div className="text-sm text-white/70">Years of Teaching</div>
              </div>
              <img src={img4} alt="Students" className="w-full h-40 object-cover rounded-2xl col-span-2" />
            </motion.div>
          </div>
        </div>
      </Reveal>

      {/* Timeline */}
      <Reveal className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Our Journey</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">Two decades of milestones.</h2>
          </motion.div>
          <motion.div variants={stagger} className="relative">
            <div className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            {timeline.map((item, i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex gap-8 mb-10 last:mb-0 group"
                data-testid={`timeline-item-${i + 1}`}>
                <div className="flex-shrink-0 w-14 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 relative z-10">
                    <span className="text-[10px] font-black text-white">{item.year.slice(2)}</span>
                  </div>
                </div>
                <div className="flex-1 pb-10 pt-1.5">
                  <div className="text-xs font-bold text-primary mb-1">{item.year}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      {/* Mission */}
      <Reveal className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mb-12">
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Our Mission</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white max-w-xl leading-tight">What we stand for.</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {missions.map((m, i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-md transition-all"
                data-testid={`mission-item-${i + 1}`}>
                <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{m}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Be the next success story.</h2>
          <p className="text-white/70 mb-10 text-lg">Join thousands of students who transformed their lives with Maharshi Advanced English.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors text-base"
            data-testid="about-bottom-cta">
            Get Started Today <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
