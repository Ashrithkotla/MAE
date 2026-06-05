import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

interface FormState {
  name: string;
  phone: string;
  email: string;
  city: string;
  course: string;
  message: string;
}

const batches = [
  { label: "Morning Batch", time: "7:00 AM – 9:00 AM" },
  { label: "Afternoon Batch", time: "12:00 PM – 2:00 PM" },
  { label: "Evening Batch", time: "6:00 PM – 8:00 PM" },
  { label: "Weekend Batch", time: "Saturday, flexible" },
];

const workingHours = [
  { day: "Monday – Friday", time: "8:00 AM – 10:00 PM" },
  { day: "Saturday", time: "8:00 AM – 5:00 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
];

const social = [
  { name: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/share/1D99Zndkwu/", color: "#1877F2" },
  { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/maharshiadvancedenglish", color: "#E4405F" },
  { name: "YouTube", icon: FaYoutube, href: "https://www.youtube.com/channel/UC0lP8W0uCwB_RCrsUPpTLrQ", color: "#FF0000" },
  { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/917286066661", color: "#25D366" },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", city: "", course: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1200);
  };

  return (
    <main data-testid="contact-page" className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Get in Touch</div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-2xl">
              Start your English journey today.
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              Ask about courses, batch timings, fees, or schedule a free demo class. We typically respond within a few hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="py-12 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="tel:+917286066661" className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all group" data-testid="contact-call-card">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Phone size={18} className="text-primary group-hover:text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5">Call us</div>
                <div className="font-semibold text-gray-900 text-sm">+91 7286 066 661</div>
              </div>
            </a>
            <a href="https://wa.me/917286066661?text=Hi! I want to know more about your English courses." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-200 hover:border-[#25D366]/40 hover:shadow-md transition-all group" data-testid="contact-whatsapp-card">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] transition-all">
                <FaWhatsapp size={18} className="text-[#25D366] group-hover:text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5">WhatsApp</div>
                <div className="font-semibold text-gray-900 text-sm">Chat with us</div>
              </div>
            </a>
            <a href="mailto:maharshisoftskills@gmail.com" className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all group" data-testid="contact-email-card">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all">
                <Mail size={18} className="text-primary group-hover:text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5">Email</div>
                <div className="font-semibold text-gray-900 text-sm">maharshisoftskills@gmail.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
            <p className="text-sm text-gray-500 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center"
                data-testid="contact-success"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Enquiry Submitted</h3>
                <p className="text-sm text-gray-500 mb-6">
                  Thank you! Our admissions team will reach out to you shortly. For faster response, chat with us on WhatsApp.
                </p>
                <a
                  href="https://wa.me/917286066661?text=Hi! I just submitted an enquiry on your website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-medium rounded-xl text-sm hover:opacity-90 transition-opacity"
                  data-testid="contact-success-whatsapp"
                >
                  <FaWhatsapp size={14} /> Chat on WhatsApp
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="phone">Phone (WhatsApp) *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="city">City / Area *</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Vizianagaram, Hyderabad…"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      data-testid="input-city"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="course">Course Interested In *</label>
                  <select
                    id="course"
                    name="course"
                    required
                    value={form.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                    data-testid="select-course"
                  >
                    <option value="">Select a course...</option>
                    <option>Spoken English Program</option>
                    <option>Grammar Mastery Course</option>
                    <option>Professional Business English</option>
                    <option>Interview Preparation Bootcamp</option>
                    <option>Not Sure — Need Guidance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="message">Message or Question</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any specific questions, preferred batch timings, or anything else we should know..."
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-70 text-sm"
                  data-testid="button-submit"
                >
                  {status === "loading" ? "Submitting..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Location</h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600 leading-relaxed">
                  Beside Mayura Tiffins, SVB Complex<br />
                  Vizianagaram - 535001<br />
                  Andhra Pradesh, India
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/Maharshi+Advanced+English+Vizianagaram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:underline"
                data-testid="contact-directions"
              >
                Get Directions <ArrowRight size={12} />
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Batch Timings</h3>
              <div className="space-y-2">
                {batches.map((b) => (
                  <div key={b.label} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0" data-testid={`batch-${b.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <span className="text-sm font-medium text-gray-700">{b.label}</span>
                    <span className="text-xs text-gray-500">{b.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Working Hours</h3>
              <div className="space-y-2">
                {workingHours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-1.5" data-testid={`hours-${h.day.toLowerCase().replace(/\s+/g, "-")}`}>
                    <span className="text-sm text-gray-600">{h.day}</span>
                    <span className="text-xs font-medium text-gray-700">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Follow Us</h3>
              <div className="flex gap-3">
                {social.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:border-gray-300 transition-colors"
                    aria-label={s.name}
                    data-testid={`contact-social-${s.name.toLowerCase()}`}
                  >
                    <s.icon size={15} style={{ color: s.color }} />
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
