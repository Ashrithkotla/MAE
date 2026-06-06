import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

interface FormState { name: string; phone: string; email: string; city: string; course: string; message: string; }

const batches = [
  { label: "Morning Batch", time: "7:00 AM – 9:00 AM", days: "Mon – Sat" },
  { label: "Afternoon Batch", time: "12:00 PM – 2:00 PM", days: "Mon – Sat" },
  { label: "Evening Batch", time: "6:00 PM – 8:00 PM", days: "Mon – Sat" },
  { label: "Weekend Batch", time: "Flexible", days: "Saturday" },
];

const workingHours = [
  { day: "Monday – Friday", time: "8:00 AM – 10:00 PM" },
  { day: "Saturday", time: "8:00 AM – 5:00 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
];

const social = [
  { name: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/share/1D99Zndkwu/", color: "#1877F2", bg: "bg-[#1877F2]/10 hover:bg-[#1877F2] hover:text-white" },
  { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/maharshiadvancedenglish", color: "#E4405F", bg: "bg-[#E4405F]/10 hover:bg-[#E4405F] hover:text-white" },
  { name: "YouTube", icon: FaYoutube, href: "https://www.youtube.com/channel/UC0lP8W0uCwB_RCrsUPpTLrQ", color: "#FF0000", bg: "bg-[#FF0000]/10 hover:bg-[#FF0000] hover:text-white" },
  { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/917286066661", color: "#25D366", bg: "bg-[#25D366]/10 hover:bg-[#25D366] hover:text-white" },
];

const quickContacts = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 7286 066 661",
    href: "tel:+917286066661",
    accent: "text-primary",
    bg: "bg-primary/10 dark:bg-primary/15",
    border: "hover:border-primary/40",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/917286066661?text=Hi! I want to know more about your English courses.",
    accent: "text-[#25D366]",
    bg: "bg-[#25D366]/10",
    border: "hover:border-[#25D366]/40",
    external: true,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "maharshisoftskills@gmail.com",
    href: "mailto:maharshisoftskills@gmail.com",
    accent: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "hover:border-violet-400/40",
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", city: "", course: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1200);
  };

  const inputCls = "w-full px-4 py-3 text-sm border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-0 focus:border-primary dark:focus:border-primary transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600";

  return (
    <main data-testid="contact-page" className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-24 pb-10 sm:pb-14 lg:pb-20 bg-white dark:bg-gray-950 overflow-hidden border-b border-gray-100 dark:border-gray-800">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Get in Touch</div>
            <h1 className="text-[38px] sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-5 sm:mb-6 leading-[1.05] max-w-3xl tracking-tight">
              Start your English<br /><span className="text-primary">journey today.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">Ask about courses, batch timings, fees, or schedule a free demo class. We typically respond within a few hours.</p>
          </motion.div>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="py-6 sm:py-8 lg:py-10 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickContacts.map((c) => {
              const Icon = c.icon;
              const props = c.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <a key={c.label} href={c.href} {...props}
                  className={`flex items-center gap-4 p-5 bg-white dark:bg-gray-950 rounded-2xl border-2 border-gray-200 dark:border-gray-700 ${c.border} hover:shadow-lg transition-all group`}
                  data-testid={`contact-${c.label.toLowerCase().replace(" ", "-")}-card`}>
                  <div className={`w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
                    <Icon size={20} className={c.accent} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 dark:text-gray-500 mb-0.5">{c.label}</div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{c.value}</div>
                  </div>
                  <ArrowRight size={16} className="text-gray-300 dark:text-gray-600 ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send us a message</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Fill out the form and we'll get back to you within 24 hours.</p>
            </div>

            {status === "success" ? (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-700 rounded-2xl p-10 text-center"
                data-testid="contact-success">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={28} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enquiry Submitted!</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Thank you! Our admissions team will reach out to you shortly.</p>
                <a href="https://wa.me/917286066661?text=Hi! I just submitted an enquiry on your website." target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
                  data-testid="contact-success-whatsapp">
                  <FaWhatsapp size={15} /> Chat on WhatsApp
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputCls} data-testid="input-name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="phone">Phone (WhatsApp) *</label>
                    <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputCls} data-testid="input-phone" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls} data-testid="input-email" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="city">City / Area *</label>
                    <input id="city" name="city" type="text" required value={form.city} onChange={handleChange} placeholder="Vizianagaram, Hyderabad…" className={inputCls} data-testid="input-city" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="course">Course Interested In *</label>
                  <select id="course" name="course" required value={form.course} onChange={handleChange} className={inputCls} data-testid="select-course">
                    <option value="">Select a course...</option>
                    <option>Spoken English Program</option>
                    <option>Grammar Mastery Course</option>
                    <option>Professional Business English</option>
                    <option>Interview Preparation Bootcamp</option>
                    <option>Not Sure — Need Guidance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="message">Message or Question</label>
                  <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange}
                    placeholder="Any specific questions, preferred batch timings, or anything else..."
                    className={`${inputCls} resize-none`} data-testid="textarea-message" />
                </div>
                <button type="submit" disabled={status === "loading"}
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-70 text-sm"
                  data-testid="button-submit">
                  {status === "loading" ? "Submitting..." : "Send Enquiry →"}
                </button>
                <p className="text-xs text-gray-400 text-center">We'll contact you within 24 hours. No spam, ever.</p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-4">
            {/* Location */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin size={15} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">Our Location</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Beside Mayura Tiffins, SVB Complex<br />
                Vizianagaram - 535001<br />
                Andhra Pradesh, India
              </p>
              <a href="https://www.google.com/maps/search/Maharshi+Advanced+English+Vizianagaram" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
                data-testid="contact-directions">
                Get Directions <ArrowRight size={12} />
              </a>
            </div>

            {/* Batch timings */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock size={15} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">Batch Timings</h3>
              </div>
              <div className="space-y-2.5">
                {batches.map(b => (
                  <div key={b.label} className="flex items-start justify-between py-2.5 border-b border-gray-100 dark:border-gray-800 last:border-0">
                    <div>
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{b.label}</span>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{b.days}</div>
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/8 dark:bg-primary/15 px-2 py-1 rounded-lg">{b.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Working hours */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-sm">Working Hours</h3>
              <div className="space-y-2">
                {workingHours.map(h => (
                  <div key={h.day} className="flex justify-between items-center py-1.5">
                    <span className="text-sm text-gray-600 dark:text-gray-300">{h.day}</span>
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-sm">Follow Us</h3>
              <div className="grid grid-cols-4 gap-3">
                {social.map(s => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                    className={`h-12 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700 transition-all ${s.bg}`}
                    aria-label={s.name} data-testid={`contact-social-${s.name.toLowerCase()}`}>
                    <s.icon size={18} style={{ color: s.color }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
