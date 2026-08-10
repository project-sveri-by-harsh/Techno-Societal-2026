import { useState } from 'react';
import { ABOUT_CONFERENCE } from '../data/aboutData';

export default function About() {
  const [activeTab, setActiveTab] = useState('background');

  return (
    <section id="about" className="relative py-20 px-4 md:px-8 bg-transparent">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-3 uppercase tracking-wider drop-shadow-md">
          About Conference
        </h2>
        <div className="w-12 h-1 bg-[var(--color-cyber-cyan)] mx-auto mb-10 shadow-[0_0_10px_var(--color-cyber-cyan)]" />

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('background')}
            className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'background' 
                ? 'bg-[var(--color-cyber-cyan)] text-[var(--color-cyber-dark)] shadow-[0_0_15px_var(--color-cyber-cyan)]' 
                : 'glass-panel text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 hover:shadow-[0_0_10px_var(--color-cyber-purple)] border-slate-300 dark:border-white/20'
            }`}
          >
            Background of Conference
          </button>
          <button
            onClick={() => setActiveTab('purpose')}
            className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'purpose' 
                ? 'bg-[var(--color-cyber-magenta)] text-white shadow-[0_0_15px_var(--color-cyber-magenta)]' 
                : 'glass-panel text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 hover:shadow-[0_0_10px_var(--color-cyber-purple)] border-slate-300 dark:border-white/20'
            }`}
          >
            Purpose
          </button>
        </div>

        {/* Content Box */}
        <div className="glass-panel rounded-2xl p-8 md:p-12 min-h-[250px] flex items-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0 pointer-events-none" />
          {/* ponytail: removed ternary boilerplate for direct lookup */}
          <p className="relative z-10 text-slate-800 dark:text-white/90 font-medium italic text-sm md:text-base leading-relaxed text-justify drop-shadow-sm">
            {ABOUT_CONFERENCE[activeTab]}
          </p>
        </div>
      </div>
    </section>
  );
}
