import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Clock, Users, Wifi, BarChart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { courses } from "../data/courses";

const curriculum: Record<string, { week: string; title: string; desc: string }[]> = {
  "spoken-english": [
    { week: "Week 1–2", title: "Breaking the Ice & Basics", desc: "Introductory vocabulary, structural basics, simple conversational frames, and everyday greetings." },
    { week: "Week 3–4", title: "Daily Conversational Situations", desc: "Role-playing at restaurants, banks, shopping malls, and introducing yourself dynamically." },
    { week: "Week 5–6", title: "Intermediate Conversational Skills", desc: "Expressing opinions, agreement and disagreement frameworks, and narrating events." },
    { week: "Week 7–8", title: "Advanced Fluency & Public Speaking", desc: "Extempore speeches, situational debates, speech modulation, and peer group conversations." },
  ],
  "grammar-mastery": [
    { week: "Week 1–2", title: "Tense Mastery", desc: "All 12 tenses explained with formulas, patterns, and real-world examples." },
    { week: "Week 3–4", title: "Sentence Construction", desc: "Simple, compound, and complex sentences. Active and passive voice." },
    { week: "Week 5–6", title: "Parts of Speech", desc: "Nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions." },
    { week: "Week 7–8", title: "Error Correction & Application", desc: "Identifying and fixing common grammatical errors. Writing practice." },
  ],
  "professional-english": [
    { week: "Week 1", title: "Professional Vocabulary & Email Writing", desc: "Business vocabulary, formal email etiquette, and professional tone." },
    { week: "Week 2", title: "Meeting & Presentation Skills", desc: "Participating in meetings, delivering presentations, handling Q&A." },
    { week: "Week 3", title: "Report Writing & Documentation", desc: "Writing formal reports, memos, and business documents." },
    { week: "Week 4", title: "Telephone & Client Communication", desc: "Professional phone etiquette, client communication, and negotiation." },
  ],
  "interview-prep": [
    { week: "Week 1", title: "Resume Building & Self-Introduction", desc: "Crafting a powerful resume and mastering the 'Tell me about yourself' answer." },
    { week: "Week 2", title: "HR Round & Technical Questions", desc: "Common HR questions, behavioral interview techniques, and technical communication." },
    { week: "Week 3", title: "Mock Interviews & Feedback", desc: "Live mock interviews with detailed feedback. Body language and confidence coaching." },
  ],
};

const courseMeta: Record<string, { batchSize: string; mode: string; level: string }> = {
  "spoken-english": { batchSize: "Max 20 Students", mode: "Offline & Online", level: "Beginner to Advanced" },
  "grammar-mastery": { batchSize: "Max 20 Students", mode: "Offline & Online", level: "Beginner to Advanced" },
  "professional-english": { batchSize: "Max 15 Students", mode: "Offline & Online", level: "Intermediate to Advanced" },
  "interview-prep": { batchSize: "Max 15 Students", mode: "Offline & Online", level: "All Levels" },
};

export default function CourseDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Course not found</h1>
          <Link href="/courses" className="text-primary hover:underline">Back to Courses</Link>
        </div>
      </main>
    );
  }

  const weeks = curriculum[slug] || [];
  const meta = courseMeta[slug] || { batchSize: "Max 20", mode: "Offline & Online", level: "All Levels" };

  return (
    <main data-testid="course-detail-page" className="min-h-screen">
      <section className="pt-24 pb-16 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/courses" className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors" data-testid="course-back">
              <ArrowLeft size={14} /> All Programs
            </Link>
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2">
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg bg-primary/10 text-primary mb-5">{course.duration}</span>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">{course.title}</h1>
                <p className="text-xl italic text-gray-500 dark:text-gray-400 mb-6">{course.tagline}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{course.description}</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300"><Clock size={15} className="text-gray-400" /><span><strong>Duration:</strong> {course.duration}</span></div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300"><Users size={15} className="text-gray-400" /><span><strong>Batch Size:</strong> {meta.batchSize}</span></div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300"><Wifi size={15} className="text-gray-400" /><span><strong>Mode:</strong> {meta.mode}</span></div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300"><BarChart size={15} className="text-gray-400" /><span><strong>Level:</strong> {meta.level}</span></div>
                </div>
                <a href="https://wa.me/917286066661?text=Hi! I want to enroll in the course." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors mb-3" data-testid="course-enroll-whatsapp">
                  <FaWhatsapp size={15} /> Enquire on WhatsApp
                </a>
                <a href="tel:+917286066661" className="flex items-center justify-center gap-2 w-full py-3.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm" data-testid="course-enroll-call">
                  Call +91 7286 066 661
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">What you will learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.features.map(f => (
                <div key={f} className="flex items-start gap-3 bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
                  <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {weeks.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Course curriculum</h2>
              <div className="space-y-4">
                {weeks.map((w, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800" data-testid={`curriculum-week-${i + 1}`}>
                    <div className="flex-shrink-0 w-24 text-xs font-bold uppercase tracking-wide text-primary">{w.week}</div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">{w.title}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{w.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to enroll in {course.title}?</h2>
          <p className="text-white/70 mb-8">Contact us today to know about the next batch dates, timings, and fee structure.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors" data-testid="course-detail-cta-contact">
              Get in Touch <ArrowRight size={15} />
            </Link>
            <a href="https://wa.me/917286066661" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-colors" data-testid="course-detail-cta-whatsapp">
              <FaWhatsapp size={15} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
