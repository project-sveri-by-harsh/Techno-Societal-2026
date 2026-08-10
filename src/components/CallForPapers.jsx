import { useState } from 'react';
import { CONFERENCE_THEMES, SUBMISSION_GUIDELINES } from '../data/callForPapersData';
import { HiOutlineDocumentText, HiOutlineDocumentChartBar, HiOutlineDocument } from 'react-icons/hi2';

export default function CallForPapers() {
  const [activeTab, setActiveTab] = useState('themes');

  const getIcon = (type) => {
    switch (type) {
      case 'pdf': return <HiOutlineDocument className="w-5 h-5 text-red-500" />;
      case 'word': return <HiOutlineDocumentText className="w-5 h-5 text-blue-600" />;
      case 'ppt': return <HiOutlineDocumentChartBar className="w-5 h-5 text-orange-500" />;
      default: return <HiOutlineDocument className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <section id="call-for-papers" className="relative py-20 px-4 md:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center text-white mb-3 uppercase tracking-wider drop-shadow-md">
          Call for Paper
        </h2>
        <div className="w-12 h-1 bg-[var(--color-cyber-cyan)] mx-auto mb-10 shadow-[0_0_10px_var(--color-cyber-cyan)]" />

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('themes')}
            className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'themes' 
                ? 'bg-[var(--color-cyber-purple)] text-white shadow-[0_0_15px_var(--color-cyber-purple)]' 
                : 'glass-panel text-white hover:bg-white/10 hover:shadow-[0_0_10px_var(--color-cyber-cyan)] border-white/20'
            }`}
          >
            Conference Themes
          </button>
          <button
            onClick={() => setActiveTab('guidelines')}
            className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'guidelines' 
                ? 'bg-[var(--color-cyber-magenta)] text-white shadow-[0_0_15px_var(--color-cyber-magenta)]' 
                : 'glass-panel text-white hover:bg-white/10 hover:shadow-[0_0_10px_var(--color-cyber-cyan)] border-white/20'
            }`}
          >
            Paper Submission Guidelines
          </button>
        </div>

        {/* Content */}
        <div className="glass-panel rounded-2xl p-6 md:p-10 min-h-[400px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0 pointer-events-none" />
          
          <div className="relative z-10">
            {activeTab === 'themes' ? (
              <div className="divide-y divide-white/10">
                {CONFERENCE_THEMES.map((theme, index) => (
                  <div key={index} className="py-4 hover:bg-white/5 transition-colors px-4 rounded-lg -mx-4 group">
                    <p className="text-white font-bold text-sm md:text-base leading-relaxed group-hover:text-[var(--color-cyber-cyan)] transition-colors">
                      {theme.title}
                    </p>
                    <p className="text-white/70 text-xs md:text-sm mt-1 leading-relaxed">
                      {theme.topics}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* ponytail: eliminated 3x boilerplate columns by mapping a simple array */}
                {[
                  { title: 'Paper Submission Guidelines:', data: SUBMISSION_GUIDELINES.guidelines },
                  { title: 'Paper Submission Template:', data: SUBMISSION_GUIDELINES.paperTemplate },
                  { title: 'Poster Submission Template:', data: SUBMISSION_GUIDELINES.posterTemplate }
                ].map((col, cIdx) => (
                  <div key={cIdx}>
                    <h3 className="text-xl md:text-2xl font-light text-[var(--color-cyber-cyan)] mb-6 drop-shadow-md">
                      {col.title}
                    </h3>
                    <ul className="space-y-4">
                      {col.data.map((item, idx) => (
                        <li key={idx}>
                          <a href={item.link} target="_blank" rel="noopener noreferrer" download className="flex items-center gap-3 text-white font-semibold italic text-sm hover:text-[var(--color-cyber-magenta)] hover:underline transition-colors">
                            {getIcon(item.icon)}
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
