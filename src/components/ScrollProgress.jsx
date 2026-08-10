import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(Number(scroll));
      setIsVisible(totalScroll > 500); // Show button after scrolling down 500px
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 md:h-1.5 z-[100] pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-[var(--color-cyber-cyan)] dark:to-[var(--color-cyber-purple)] shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:shadow-[0_0_15px_var(--color-cyber-cyan)]"
          style={{ width: `${scrollProgress * 100}%`, transition: 'width 0.1s ease-out' }}
        />
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[90] p-3 md:p-4 rounded-full bg-slate-900 dark:bg-white/10 text-white dark:text-[var(--color-cyber-cyan)] dark:border dark:border-[var(--color-cyber-cyan)]/30 shadow-lg dark:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:bg-slate-800 dark:hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300 flex items-center justify-center group ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <HiArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce" />
      </button>
    </>
  );
}
