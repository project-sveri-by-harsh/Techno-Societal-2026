import { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { HiArrowDownTray } from 'react-icons/hi2';
import { NAV_LINKS } from '../data/navigation';
import { SITE_CONFIG } from '../data/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // ponytail: removed IntersectionObserver scroll spy (YAGNI/over-engineering for a simple page)

  // Solid bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);



  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? 'glass-panel !border-t-0 !border-x-0 !rounded-none !bg-[var(--color-cyber-dark)]/80' : 'navbar-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-18">
        {/* Logo + Brand */}
        <a
          href="#home"
          onClick={e => handleNavClick(e, '#home')}
          className="shrink-0 flex items-center gap-3"
        >
          <img
            src="/logo.jpg"
            alt="Techno-Societal 2026"
            className="h-12 md:h-14 w-auto rounded-lg border-2 border-[var(--color-cyber-cyan)]/50 bg-white/90 p-0.5 shadow-[0_0_10px_rgba(0,240,255,0.3)]"
          />
          <span className="font-[family-name:var(--font-display)] font-bold text-white text-lg md:text-xl tracking-tight hidden sm:flex flex-col items-center leading-none">
            <span>TECHNO-SOCIETAL</span>
            <span className="text-[var(--color-cyber-cyan)] drop-shadow-md text-sm md:text-base mt-1">2026</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-md transition-colors whitespace-nowrap text-white/80 hover:text-white hover:bg-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={SITE_CONFIG.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--color-cyber-magenta)] hover:bg-[var(--color-cyber-purple)] text-white font-semibold rounded-lg text-sm transition-all shadow-[0_0_15px_rgba(255,0,234,0.4)] hover:shadow-[0_0_20px_rgba(112,0,255,0.6)] hover:-translate-y-0.5"
            >
              <HiArrowDownTray className="w-4 h-4" />
              Brochure
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 hover:text-[var(--color-cyber-cyan)] transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <HiX className="w-6 h-6" /> : <HiOutlineMenuAlt3 className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          mobileOpen ? 'max-h-[32rem]' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-4 pb-4 gap-1">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="block px-4 py-2.5 rounded-lg transition-colors text-white/80 hover:text-white hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={SITE_CONFIG.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--color-cyber-magenta)] hover:bg-[var(--color-cyber-purple)] text-white font-semibold rounded-lg transition-all shadow-[0_0_15px_rgba(255,0,234,0.4)]"
            >
              <HiArrowDownTray className="w-4 h-4" />
              Download Brochure
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
