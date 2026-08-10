import { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { HiArrowDownTray } from 'react-icons/hi2';
import { FiSun, FiMoon } from 'react-icons/fi';
import { NAV_LINKS } from '../data/navigation';
import { SITE_CONFIG } from '../data/siteConfig';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? 'glass-panel !border-t-0 !border-x-0 !rounded-none' : 'navbar-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-16 md:h-18">
        {/* Logo + Brand */}
        <a
          href="#home"
          onClick={e => handleNavClick(e, '#home')}
          className="shrink-0 flex items-center gap-3"
        >
          <img
            src="/logo.jpg"
            alt="Techno-Societal 2026"
            className="h-12 md:h-14 w-auto rounded-lg border-2 border-[var(--color-cyber-cyan)]/50 bg-white p-0.5 shadow-[0_0_10px_rgba(0,240,255,0.3)]"
          />
          <span className="font-[family-name:var(--font-display)] font-bold text-slate-900 dark:text-white text-base md:text-lg tracking-tight hidden sm:flex flex-col items-start leading-none">
            <span>TECHNO-SOCIETAL</span>
            <span className="text-blue-600 dark:text-[var(--color-cyber-cyan)] drop-shadow-md text-xs md:text-sm mt-0.5">2026</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-[11px] xl:text-xs font-medium">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="px-1.5 xl:px-2 py-1.5 rounded-md transition-colors whitespace-nowrap text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-1 xl:ml-3 flex items-center gap-1.5">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
            <a
              href={SITE_CONFIG.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-cyber-magenta)] hover:bg-[var(--color-cyber-purple)] text-white font-semibold rounded-lg text-xs xl:text-sm transition-all shadow-[0_0_15px_rgba(255,0,234,0.4)] hover:shadow-[0_0_20px_rgba(112,0,255,0.6)] hover:-translate-y-0.5"
            >
              <HiArrowDownTray className="w-4 h-4" />
              Brochure
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-[var(--color-cyber-cyan)] transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-slate-900 dark:text-white p-2 hover:text-blue-600 dark:hover:text-[var(--color-cyber-cyan)] transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <HiX className="w-6 h-6" /> : <HiOutlineMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
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
                className="block px-4 py-2.5 rounded-lg transition-colors text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5"
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
