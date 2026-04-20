'use client'
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isDesktop, setIsDesktop] = useState(false);

  const navLinks = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 640);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    const handleScrollY = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    const handleScroll = () => {
      let current = "home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 100) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 90%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <button
          onClick={() => handleScrollNavigate("home")}
          className="font-bold tracking-tight text-lg hover:text-secondary transition-colors"
          style={{ color: "var(--fg)" }}
        >
          AV<span className="text-secondary">.</span>
        </button>

        {/* Desktop links */}
        {isDesktop && (
          <ul className="flex gap-8 items-center list-none m-0 p-0">
            {navLinks.map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => handleScrollNavigate(link.target)}
                  className="text-sm font-medium transition-colors hover:text-secondary"
                  style={{ color: activeSection === link.target ? "#D4A853" : "var(--fg-muted)" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
            
            <li>
              <a
                href="/documents/Akinola_Victor_CV.pdf"
                className="text-sm font-semibold border border-secondary text-secondary px-4 py-1.5 rounded-lg hover:bg-secondary hover:text-dark-primary transition-colors"
              >
                Resume
              </a>
            </li>

            <li><ThemeToggle /></li>
          </ul>
        )}

        {/* Mobile right side */}
        {!isDesktop && (
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="flex flex-col justify-between w-6 h-4 bg-transparent border-none cursor-pointer p-0"
            >
              <span className={`block h-0.5 w-full rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                style={{ backgroundColor: "var(--fg)" }} />
              <span className={`block h-0.5 w-full rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                style={{ backgroundColor: "var(--fg)" }} />
              <span className={`block h-0.5 w-full rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                style={{ backgroundColor: "var(--fg)" }} />
            </button>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {!isDesktop && (
        <div
          className={`fixed top-0 right-0 h-screen w-4/5 flex flex-col pt-20 px-8 gap-6 transition-transform duration-300 z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: "var(--bg)", borderLeft: "1px solid var(--border)" }}
        >
          <p className="text-secondary text-xs font-mono tracking-widest uppercase mb-2">Navigation</p>
          <ul className="flex flex-col gap-5 list-none m-0 p-0">
            {navLinks.map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => handleScrollNavigate(link.target)}
                  className="text-2xl font-semibold transition-colors hover:text-secondary"
                  style={{ color: activeSection === link.target ? "#D4A853" : "var(--fg-muted)" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="/documents/Akinola_Victor_CV.pdf"
            className="mt-4 text-sm font-semibold border border-secondary text-secondary px-4 py-2 rounded-lg text-center hover:bg-secondary hover:text-dark-primary transition-colors w-fit"
          >
            Download Resume
          </a>
        </div>
      )}

      {/* Overlay */}
      {!isDesktop && isMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-30" onClick={() => setIsMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;