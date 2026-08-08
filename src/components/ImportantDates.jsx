import { IMPORTANT_DATES } from '../data/timelineData';
import { HiOutlineCalendarDays } from 'react-icons/hi2';

export default function ImportantDates() {
  return (
    <section id="timeline" className="relative py-20 px-4 md:px-8 bg-transparent">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center text-white mb-3 uppercase tracking-wider drop-shadow-md">
          Important Dates
        </h2>
        <div className="w-12 h-1 bg-[var(--color-cyber-cyan)] mx-auto mb-16 shadow-[0_0_10px_var(--color-cyber-cyan)]" />

        <div className="relative border-l-4 border-white/20 ml-4 md:mx-auto md:w-3/4">
          {IMPORTANT_DATES.map((item, index) => (
            <div key={index} className="mb-10 ml-8 relative group">
              <span className="absolute -left-[42px] bg-[var(--color-cyber-dark)] border-4 border-[var(--color-cyber-cyan)] rounded-full w-5 h-5 mt-1.5 transition-colors group-hover:border-[var(--color-cyber-magenta)] group-hover:shadow-[0_0_10px_var(--color-cyber-magenta)]" />
              <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,240,255,0.1)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0 pointer-events-none" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 drop-shadow-sm group-hover:text-[var(--color-cyber-cyan)] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[var(--color-cyber-magenta)] font-semibold drop-shadow-md">
                      <HiOutlineCalendarDays className="w-5 h-5" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[var(--color-cyber-cyan)]/20 text-[var(--color-cyber-cyan)] border border-[var(--color-cyber-cyan)]/30 text-xs font-bold rounded-full self-start sm:self-center uppercase tracking-wider shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
