import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sitemapData = [
  {
    section: "Main",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    section: "Courses",
    links: [
      { href: "/courses", label: "All Courses" },
      { href: "/courses/spoken-english", label: "Spoken English Program" },
      { href: "/courses/grammar-mastery", label: "Grammar Mastery Course" },
      { href: "/courses/professional-english", label: "Professional Business English" },
      { href: "/courses/interview-prep", label: "Interview Preparation Bootcamp" },
    ],
  },
  {
    section: "Success Stories",
    links: [
      { href: "/success-stories", label: "Student Success Stories" },
    ],
  },
  {
    section: "Blog",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/blog/common-english-mistakes-telugu-speakers", label: "10 Common English Mistakes Telugu Speakers Make" },
      { href: "/blog/how-to-stop-translating-telugu-to-english", label: "How to Stop Translating in Your Head" },
      { href: "/blog/best-spoken-english-course-vizianagaram", label: "Best Spoken English Course in Vizianagaram 2025" },
    ],
  },
  {
    section: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/sitemap", label: "Sitemap" },
    ],
  },
];

export default function Sitemap() {
  return (
    <main data-testid="sitemap-page" className="min-h-screen">
      <section className="pt-28 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Navigation</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
            <p className="text-gray-500">A complete overview of all pages on the Maharshi Advanced English website.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sitemapData.map((section) => (
              <div key={section.section} data-testid={`sitemap-section-${section.section.toLowerCase()}`}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">{section.section}</h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors" data-testid={`sitemap-link-${link.href}`}>
                        <ArrowRight size={12} className="text-gray-300" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
