import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import logoImg from "../assets/logo.png";

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
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" data-testid="nav-logo">
              <img
                src={logoImg}
                alt="Maharshi Advanced English"
                className={`h-9 w-auto object-contain transition-all ${dark ? "brightness-0 invert" : ""}`}
              />
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-foreground leading-tight">Maharshi</div>
                <div className="text-xs text-muted-foreground leading-tight">Advanced English</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
              {navLinks.map((link) => {
                const active = location === link.href || (link.href !== "/" && location.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                      active
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Theme + Mobile Toggle */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <button
                onClick={toggle}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                data-testid="theme-toggle"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="tel:+917286066661"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                data-testid="nav-cta-call"
              >
                Call Now
              </a>
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                aria-label="Open menu"
                data-testid="nav-mobile-toggle"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" data-testid="nav-mobile-menu">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-background shadow-2xl flex flex-col border-l border-border">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="flex items-center gap-3">
                <img
                  src={logoImg}
                  alt="MAE"
                  className={`h-8 w-auto ${dark ? "brightness-0 invert" : ""}`}
                />
                <span className="text-sm font-semibold text-foreground">Maharshi English</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                aria-label="Close menu"
                data-testid="nav-mobile-close"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 py-6 px-4 space-y-1">
              {navLinks.map((link) => {
                const active = location === link.href || (link.href !== "/" && location.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                    data-testid={`nav-mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="p-6 border-t border-border space-y-3">
              {/* Dark mode toggle in mobile menu */}
              <button
                onClick={toggle}
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl border border-border text-sm text-foreground hover:bg-muted transition-colors"
                data-testid="theme-toggle-mobile"
              >
                <span>{dark ? "Light Mode" : "Dark Mode"}</span>
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <a
                href="tel:+917286066661"
                className="flex items-center justify-center w-full py-3 bg-primary text-white font-medium rounded-xl text-sm hover:bg-primary/90 transition-colors"
                data-testid="nav-mobile-call"
              >
                Call +91 7286 066 661
              </a>
              <a
                href="https://wa.me/917286066661"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 border border-border text-foreground font-medium rounded-xl text-sm hover:bg-muted transition-colors"
                data-testid="nav-mobile-whatsapp"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
