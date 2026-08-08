import { useState, useEffect } from 'react';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { SITE_CONFIG } from '../data/siteConfig';

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(calcTime(targetDate));
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTime(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return timeLeft;
}

function calcTime(target) {
  const diff = Math.max(0, new Date(target) - new Date());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] tabular-nums text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs md:text-sm uppercase tracking-wider mt-1 text-[var(--color-cyber-cyan)] font-bold">{label}</span>
    </div>
  );
}

export default function Hero() {
  const countdown = useCountdown(SITE_CONFIG.conferenceStartDate);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-transparent"
    >
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-28 text-center mt-10">
        {/* Conference title */}
        <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 drop-shadow-lg text-white">
          TECHNO SOCIETAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyber-cyan)] to-[var(--color-cyber-purple)] drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]">2026</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-medium mb-4 drop-shadow-md max-w-3xl mx-auto text-white/90">
          {SITE_CONFIG.conferenceFullName}
        </p>

        <p className="text-xl md:text-2xl italic mb-10 drop-shadow-md text-[var(--color-cyber-magenta)] font-bold">
          <span className="font-semibold">{SITE_CONFIG.dates}</span>
        </p>

        {/* Countdown */}
        <div className="inline-flex gap-4 sm:gap-6 md:gap-8 glass-panel rounded-2xl px-6 py-5 mb-10">
          <CountdownUnit value={countdown.days} label="Days" />
          <span className="text-3xl md:text-5xl font-light text-[var(--color-cyber-cyan)] self-start drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">:</span>
          <CountdownUnit value={countdown.hours} label="Hours" />
          <span className="text-3xl md:text-5xl font-light text-[var(--color-cyber-cyan)] self-start drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">:</span>
          <CountdownUnit value={countdown.minutes} label="Min" />
          <span className="text-3xl md:text-5xl font-light text-[var(--color-cyber-cyan)] self-start drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">:</span>
          <CountdownUnit value={countdown.seconds} label="Sec" />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={SITE_CONFIG.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-cyber-magenta)] hover:bg-[var(--color-cyber-purple)] text-white font-bold rounded-xl text-lg transition-all hover:-translate-y-1 shadow-[0_0_15px_rgba(255,0,234,0.5)] hover:shadow-[0_0_25px_rgba(112,0,255,0.8)]"
          >
            <HiOutlineUserAdd className="w-5 h-5" />
            Register Now
          </a>
          <a
            href={SITE_CONFIG.submitPaperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 glass-panel text-white font-bold rounded-xl text-lg transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:border-[var(--color-cyber-cyan)]"
          >
            <HiOutlineClipboardDocumentList className="w-5 h-5" />
            Submit Paper
          </a>
        </div>

        {/* Organized by */}
        <div className="space-y-3 mb-6">
          <p className="text-base md:text-lg text-[var(--color-cyber-cyan)] font-semibold drop-shadow-md">
            Organized by,
          </p>
          <p className="text-lg md:text-xl font-bold text-white drop-shadow-md">
            {SITE_CONFIG.collegeName}
          </p>
          <p className="text-base text-white/80">(An Autonomous Institute)</p>
          <p className="text-xs md:text-sm text-white/60 max-w-3xl mx-auto leading-relaxed">
            Approved by A.I.C.T.E., New Delhi and affiliated to {SITE_CONFIG.university}.
            <br />
            NIRF-2023 ranked in Innovation Category (151-300), NBA Accredited all Eligible UG Programmes,
            NAAC A+ with 3.46 CGPA out of 4.00,
            <br />
            An ISO 9001-2015 Certified Institute, Accredited by the Institution of Engineers, Kolkata and TCS, Pune.
          </p>
        </div>

        {/* Collaboration */}
        <div className="space-y-1 mb-6 mt-4">
          <p className="text-sm md:text-base text-white font-bold drop-shadow-md">
            In collaboration with
          </p>
          <p className="text-lg md:text-xl font-bold text-yellow-400 drop-shadow-md">
            {/* {SITE_CONFIG.collaboration.name}, */}
            {/* <br /> */}
            {SITE_CONFIG.collaboration.institute}
          </p>
          <p className="text-[var(--color-cyber-cyan)] text-sm">{SITE_CONFIG.collaboration.note}</p>
        </div>

        {/* Accreditation logo row */}
        <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap relative z-10">
          <img src="/sveri-logo.jpg" alt="SVERI" className="h-16 md:h-20 w-auto rounded-xl bg-white/90 p-1 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          <img src="/autonomous-logo.jpg" alt="Autonomous" className="h-16 md:h-20 w-auto rounded-xl bg-white/90 p-1 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          {/* <img src="/nba-logo.png" alt="NBA Accredited" className="h-16 md:h-20 w-auto rounded-xl bg-white/90 p-1 shadow-[0_0_15px_rgba(255,255,255,0.2)]" /> */}
          <img src="/naac-logo.png" alt="NAAC A+" className="h-16 md:h-20 w-auto rounded-xl bg-white/90 p-1 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-cyber-dark)] to-transparent pointer-events-none" />
    </section>
  );
}
