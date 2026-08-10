import { motion } from 'framer-motion';
import { HiOutlineDocumentArrowDown, HiOutlineBookOpen, HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { SITE_CONFIG } from '../data/siteConfig';

const RESOURCES = [
  {
    icon: HiOutlineDocumentArrowDown,
    title: 'Conference Brochure',
    description: 'Complete details about the conference including themes, dates, and registration information.',
    link: SITE_CONFIG.brochureUrl,
    color: 'var(--color-cyber-cyan)',
  },
  {
    icon: HiOutlineBookOpen,
    title: 'IEEE Paper Template',
    description: 'Standard IEEE format template for paper submissions. Available in LaTeX and Word formats.',
    link: SITE_CONFIG.submitPaperUrl,
    color: 'var(--color-cyber-magenta)',
  },
  {
    icon: HiOutlineClipboardDocumentList,
    title: 'Copyright Form',
    description: 'Download the copyright transfer form required for accepted papers.',
    link: SITE_CONFIG.submitPaperUrl,
    color: 'var(--color-cyber-purple)',
  },
];

export default function Downloads() {
  return (
    <section id="downloads" className="relative py-20 px-4 md:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center text-white mb-3 uppercase tracking-wider drop-shadow-md"
        >
          Downloads & Resources
        </motion.h2>
        <div className="w-12 h-1 bg-[var(--color-cyber-cyan)] mx-auto mb-14 shadow-[0_0_10px_var(--color-cyber-cyan)]" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESOURCES.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6 group hover:-translate-y-2 transition-all duration-300 block relative overflow-hidden"
                style={{ '--card-color': resource.color }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 50%, color-mix(in srgb, ${resource.color} 15%, transparent), transparent 70%)` }}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `color-mix(in srgb, ${resource.color} 15%, transparent)`, border: `1px solid color-mix(in srgb, ${resource.color} 30%, transparent)` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: resource.color }} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-cyber-cyan)] transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    {resource.description}
                  </p>

                  <span className="inline-flex items-center gap-1 text-sm font-semibold transition-colors" style={{ color: resource.color }}>
                    Download
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
