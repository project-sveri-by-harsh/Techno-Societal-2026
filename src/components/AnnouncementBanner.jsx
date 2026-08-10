import { useState, useEffect } from 'react';
import { FiX, FiInfo } from 'react-icons/fi';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the banner
    const dismissed = localStorage.getItem('bannerDismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('bannerDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-cyber-blue dark:bg-cyber-dark px-6 py-2.5 sm:px-3.5 sm:before:flex-1 border-b border-cyber-cyan/30">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-white flex items-center gap-2">
          <FiInfo className="text-cyber-cyan" />
          <strong className="font-semibold text-cyber-cyan">Announcement</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Welcome to Techno-Societal 2026! Call for Papers is now open.
        </p>
        <a
          href="#registration"
          onClick={() => { document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="flex-none rounded-full bg-cyber-cyan/20 px-3.5 py-1 text-sm font-semibold text-cyber-cyan shadow-sm hover:bg-cyber-cyan/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-cyan transition-colors"
        >
          Register now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          onClick={handleDismiss}
          className="-m-3 p-3 focus-visible:outline-offset-[-4px] text-gray-400 hover:text-white transition-colors"
        >
          <span className="sr-only">Dismiss</span>
          <FiX className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
