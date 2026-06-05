import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";
import trainerImg from "../assets/trianer1.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>{children}</motion.div>;
}

const stats = [
  { target: 10000, suffix: "+", label: "Students Trained" },
  { target: 25, suffix: "+", label: "Years Experience" },
  { target: 98, suffix: "%", label: "Satisfaction Rate" },
  { target: 5000, suffix: "+", label: "Job Placements" },
];

const timeline = [
  { year: "2004", title: "Founded in Vizianagaram", desc: "Ramesh Maharshi established the institute with a single batch and a vision: to make English accessible to every Telugu speaker." },
  { year: "2008", title: "Expanded to 500+ Students", desc: "Word spread across Vizianagaram. New batches were added to meet growing demand." },
  { year: "2013", title: "Launched Online Programs", desc: "Maharshi Advanced English became one of the first institutes in Vizianagaram to offer live online classes." },
  { year: "2019", title: "10,000+ Lives Transformed", desc: "Crossed a major milestone: over 10,000 students trained with placements across AP and Telangana." },
  { year: "2024", title: "22nd Year of Excellence", desc: "Still led personally by Ramesh Maharshi. Still committed to small batches, individual attention, and real results." },
];

const missions = [
  "Delivering spoken English training that builds genuine fluency — not just textbook knowledge",
  "Teaching grammar in a simple, clear, and practical way that students can use every day",
  "Preparing students and professionals for workplace communication, interviews, and career growth",
  "Creating a supportive, encouraging, and judgment-free learning environment",
  "Making quality English education accessible to every person in Telangana and Andhra Pradesh",
  "Maintaining the highest standards of teaching integrity and student accountability",
];

export default function About() {
  return (
    <main data-testid="about-page" className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">About Us</div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                22 years of<br />transforming lives.
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Maharshi Advanced English is not a classroom. It is a launchpad. Since 2004, our founder Ramesh Maharshi has personally guided over 10,000 students from hesitation to fluency — across every profession, age group, and English level.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors" data-testid="about-cta">
                Join the Journey <ArrowRight size={15} />
              </Link>
            </div>
            <div className="relative">
              <img src={trainerImg} alt="Ramesh Maharshi" className="w-full h-[450px] object-cover object-top rounded-2xl shadow-xl" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-lg">
                <div className="font-bold text-gray-900 text-lg">Ramesh Maharshi</div>
                <div className="text-sm text-gray-500">Founder & Lead Trainer — 25+ Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <Section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center" data-testid={`about-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tabular-nums">
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Founder Story */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">The Founder</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">A teacher who believed English could change destinies.</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In 2004, Ramesh Maharshi opened Maharshi Advanced English with a single room, a whiteboard, and a conviction: that English fluency was not a privilege for the few — it was a right for everyone.
                </p>
                <p>
                  His students were engineers who froze in meetings, students who failed interviews despite knowing the answers, homemakers who couldn't communicate with their children's schools, and professionals passed over for promotions because of a language barrier.
                </p>
                <p>
                  He understood that the problem was never intelligence. It was access. Access to structured, practical, personalized English training that focused on real speaking — not memorizing grammar tables.
                </p>
                <p>
                  Over 22 years and 10,000+ students later, that conviction hasn't changed. Ramesh Maharshi still teaches personally. Still knows every student's name. Still cares about outcomes, not enrollment numbers.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              <img src={img3} alt="Classroom" className="w-full h-48 object-cover rounded-2xl col-span-2" />
              <img src={img4} alt="Students" className="w-full h-36 object-cover rounded-2xl" />
              <div className="bg-primary rounded-2xl flex items-center justify-center p-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">22+</div>
                  <div className="text-xs text-white/70">Years of Teaching</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="py-24 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Our Journey</div>
            <h2 className="text-4xl font-bold text-gray-900">Two decades of milestones.</h2>
          </motion.div>
          <motion.div variants={stagger} className="relative">
            <div className="absolute left-[92px] top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
            {timeline.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-8 mb-10 last:mb-0" data-testid={`timeline-item-${i + 1}`}>
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-sm font-bold text-primary bg-primary/5 px-2 py-1 rounded-lg">{item.year}</span>
                </div>
                <div className="flex-shrink-0 flex items-start pt-1 sm:pl-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5 relative z-10" />
                </div>
                <div className="flex-1 pb-10">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Mission */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mb-12">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Our Mission</div>
            <h2 className="text-4xl font-bold text-gray-900 max-w-xl leading-tight">What we stand for.</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {missions.map((m, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100" data-testid={`mission-item-${i + 1}`}>
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{m}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Be the next success story.</h2>
          <p className="text-white/70 mb-8">Join thousands of students who transformed their lives with Maharshi Advanced English.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors" data-testid="about-bottom-cta">
            Get Started Today <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
