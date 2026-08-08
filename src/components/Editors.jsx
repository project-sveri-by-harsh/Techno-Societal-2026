import { EDITORS } from '../data/editorsData';
import { HiOutlineMail } from 'react-icons/hi';

export default function Editors() {
  return (
    <section id="editors" className="relative py-20 px-4 md:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center text-white mb-3 uppercase tracking-wider drop-shadow-md">
          Editors
        </h2>
        <div className="w-12 h-1 bg-[var(--color-cyber-cyan)] mx-auto mb-16 shadow-[0_0_10px_var(--color-cyber-cyan)]" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EDITORS.map((editor, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,0,234,0.15)] hover:border-[var(--color-cyber-magenta)] group"
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-cyber-cyan)] transition-colors drop-shadow-sm">
                {editor.name}
              </h3>
              <a 
                href={`mailto:${editor.email}`} 
                className="inline-flex items-center gap-2 text-white/70 hover:text-[var(--color-cyber-magenta)] text-sm transition-colors"
              >
                <HiOutlineMail className="w-4 h-4" />
                {editor.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
