import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock, Users, Wifi } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { courses } from "../data/courses";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>{children}</motion.div>;
}

const courseMeta: Record<string, { batchSize: string; mode: string; level: string }> = {
  "spoken-english": { batchSize: "Max 20 Students", mode: "Offline & Online", level: "Beginner to Advanced" },
  "grammar-mastery": { batchSize: "Max 20 Students", mode: "Offline & Online", level: "Beginner to Advanced" },
  "professional-english": { batchSize: "Max 15 Students", mode: "Offline & Online", level: "Intermediate to Advanced" },
  "interview-prep": { batchSize: "Max 15 Students", mode: "Offline & Online", level: "All Levels" },
};

export default function Courses() {
  return (
    <main data-testid="courses-page" className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">All Programs</div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-2xl leading-tight">
              Find the program that fits your goal.
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              Four specialized programs. Every one designed to deliver a specific, measurable outcome — not just grammar rules.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course List */}
      <Section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} className="space-y-8">
            {courses.map((course, i) => {
              const meta = courseMeta[course.slug] || { batchSize: "Max 20 Students", mode: "Offline & Online", level: "All Levels" };
              return (
                <motion.div
                  key={course.id}
                  variants={fadeUp}
                  className={`rounded-2xl border overflow-hidden ${i === 0 ? "border-primary/20 bg-primary/2" : "border-gray-200 bg-white"}`}
                  data-testid={`course-listing-${course.slug}`}
                >
                  <div className="p-8 lg:p-10">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${i === 0 ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-500"}`}>
                            {course.duration}
                          </span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{course.title}</h2>
                        <p className="text-base italic text-gray-500 mb-5">{course.tagline}</p>
                        <p className="text-gray-600 leading-relaxed mb-6">{course.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {course.features.map((f) => (
                            <span key={f} className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 font-medium">{f}</span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-xl p-5 space-y-3">
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Clock size={14} className="text-gray-400" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Users size={14} className="text-gray-400" />
                            <span>{meta.batchSize}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Wifi size={14} className="text-gray-400" />
                            <span>{meta.mode}</span>
                          </div>
                        </div>
                        <Link
                          href={`/courses/${course.slug}`}
                          className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                          data-testid={`course-learn-more-${course.slug}`}
                        >
                          Learn More <ArrowRight size={15} />
                        </Link>
                        <a
                          href="https://wa.me/917286066661?text=Hi! I want to enroll in the course."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3.5 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors text-sm"
                          data-testid={`course-whatsapp-${course.slug}`}
                        >
                          <FaWhatsapp size={14} className="text-[#25D366]" /> Enquire on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Not sure which program is right for you?</h2>
          <p className="text-white/60 mb-8">Talk to us. We will help you choose the right starting point based on your current level and goal.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+917286066661" className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors" data-testid="courses-cta-call">
              Call +91 7286 066 661
            </a>
            <a href="https://wa.me/917286066661" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-colors" data-testid="courses-cta-whatsapp">
              <FaWhatsapp size={14} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
