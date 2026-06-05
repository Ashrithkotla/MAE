import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import logoImg from "../assets/logo-new.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm"
            : "bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <div
                className="rounded-lg transition-all"
                style={dark ? { background: "white", padding: "3px 8px" } : {}}
              >
                <img
                  src={logoImg}
                  alt="Maharshi Advanced English Institute"
                  className="w-40 h-auto object-contain"
                  style={{ mixBlendMode: dark ? "normal" : "multiply" }}
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const active =
                  location === link.href ||
                  (link.href !== "/" && location.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                      active
                        ? "text-primary bg-primary/8 dark:bg-primary/15"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <button
                onClick={toggle}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {dark ? <Sun size={17} /> : <Moon size={17} />}
              </button>

              {/* Call CTA — hidden on small mobile, shown md+ */}
              <a
                href="tel:+917286066661"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Call Now
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Drawer panel */}
          <div className="absolute right-0 top-0 bottom-0 w-[280px] sm:w-[320px] bg-white dark:bg-gray-950 shadow-2xl flex flex-col border-l border-gray-200 dark:border-gray-800">

            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
              <img
                src={logoImg}
                alt="Maharshi Advanced English"
                className="h-10 w-auto object-contain"
                style={{
                  maxWidth: "160px",
                  mixBlendMode: dark ? "normal" : "multiply",
                  filter: dark ? "invert(1) brightness(1.1)" : "none",
                }}
              />
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto py-4 px-3">
              {navLinks.map((link) => {
                const active =
                  location === link.href ||
                  (link.href !== "/" && location.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center px-4 py-3.5 rounded-xl text-sm font-medium mb-1 transition-all ${
                      active
                        ? "bg-primary/10 dark:bg-primary/15 text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA buttons */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-800 space-y-2.5">
              {/* Dark mode toggle row */}
              <button
                onClick={toggle}
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span>{dark ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
                {dark ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              {/* Call */}
              <a
                href="tel:+917286066661"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white font-semibold rounded-xl text-sm hover:bg-primary/90 transition-colors"
              >
                <Phone size={15} /> Call +91 7286 066 661
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917286066661?text=Hi! I want to know more about your English courses."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity"
              >
                <FaWhatsapp size={15} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
