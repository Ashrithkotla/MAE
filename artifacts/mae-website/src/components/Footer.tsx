import { Link } from "wouter";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logoImg from "../assets/logo.png";

const courseLinks = [
  { href: "/courses/spoken-english", label: "Spoken English Program" },
  { href: "/courses/grammar-mastery", label: "Grammar Mastery Course" },
  { href: "/courses/professional-english", label: "Professional Business English" },
  { href: "/courses/interview-prep", label: "Interview Preparation Bootcamp" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About Us" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.facebook.com/share/1D99Zndkwu/", icon: FaFacebookF, label: "Facebook" },
  { href: "https://www.instagram.com/maharshiadvancedenglish", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.youtube.com/channel/UC0lP8W0uCwB_RCrsUPpTLrQ", icon: FaYoutube, label: "YouTube" },
  { href: "https://wa.me/917286066661", icon: FaWhatsapp, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImg} alt="MAE" className="h-10 w-auto brightness-0 invert opacity-90" />
              <div>
                <div className="text-white text-sm font-semibold leading-tight">Maharshi</div>
                <div className="text-gray-500 text-xs leading-tight">Advanced English</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-6">
              Vizianagaram's most trusted English training institute since 2004. Transforming hesitation into fluency, one student at a time.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                  aria-label={s.label}
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Our Courses</h4>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                    data-testid={`footer-course-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Contact</h4>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-gray-600 mb-1 uppercase tracking-wide">Address</div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Beside Mayura Tiffins, SVB Complex<br />
                  Vizianagaram - 535001, Andhra Pradesh
                </p>
              </div>
              <div>
                <div className="text-xs text-gray-600 mb-1 uppercase tracking-wide">Phone</div>
                <a href="tel:+917286066661" className="text-sm text-gray-400 hover:text-white transition-colors" data-testid="footer-phone">
                  +91 7286 066 661
                </a>
              </div>
              <div>
                <div className="text-xs text-gray-600 mb-1 uppercase tracking-wide">Email</div>
                <a href="mailto:maharshisoftskills@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors" data-testid="footer-email">
                  maharshisoftskills@gmail.com
                </a>
              </div>
              <div>
                <div className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Hours</div>
                <div className="text-sm text-gray-500 space-y-1">
                  <div>Mon–Fri: 8:00 AM – 10:00 PM</div>
                  <div>Saturday: 8:00 AM – 5:00 PM</div>
                  <div>Sunday: 10:00 AM – 2:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Maharshi Advanced English. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
