import { motion } from 'framer-motion';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';
import { SPEAKERS_DATA } from '../data/speakersData';

function SpeakerCard({ speaker, index }) {
  const gradients = [
    'from-[var(--color-cyber-cyan)]/20 to-[var(--color-cyber-purple)]/20',
    'from-[var(--color-cyber-magenta)]/20 to-[var(--color-cyber-cyan)]/20',
    'from-[var(--color-cyber-purple)]/20 to-[var(--color-cyber-magenta)]/20',
    'from-yellow-500/20 to-[var(--color-cyber-cyan)]/20',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-panel rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)]"
    >
      {/* Avatar / Image area */}
      <div className={`relative h-48 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center overflow-hidden`}>
        {speaker.image ? (
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
              <HiOutlineGlobeAlt className="w-10 h-10 text-white/40" />
            </div>
            <span className="text-xs text-white/40 font-medium uppercase tracking-wider">Coming Soon</span>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cyber-dark)] to-transparent opacity-60" />
      </div>

      {/* Info */}
      <div className="p-5 relative">
        <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[var(--color-cyber-cyan)]/15 text-[var(--color-cyber-cyan)] border border-[var(--color-cyber-cyan)]/20 mb-3">
          {speaker.title}
        </span>
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[var(--color-cyber-cyan)] transition-colors">
          {speaker.name}
        </h3>
        <p className="text-sm text-white/50 mb-2">{speaker.affiliation}</p>
        <p className="text-xs text-[var(--color-cyber-magenta)] font-medium italic">"{speaker.topic}"</p>
      </div>
    </motion.div>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="relative py-20 px-4 md:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center text-white mb-3 uppercase tracking-wider drop-shadow-md"
        >
          Keynote Speakers
        </motion.h2>
        <div className="w-12 h-1 bg-[var(--color-cyber-magenta)] mx-auto mb-4 shadow-[0_0_10px_var(--color-cyber-magenta)]" />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/50 mb-14 text-sm"
        >
          Distinguished speakers from academia and industry
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPEAKERS_DATA.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
