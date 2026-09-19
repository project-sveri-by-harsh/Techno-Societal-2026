import { HiOutlineArrowDownTray, HiOutlineCurrencyRupee } from 'react-icons/hi2';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { SITE_CONFIG } from '../data/siteConfig';

export default function Registration() {
  return (
    <section id="registration" className="relative py-20 px-4 md:px-8 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-3 uppercase tracking-wider">
          Registration
        </h2>
        <div className="w-12 h-1 bg-blue-600 dark:bg-[var(--color-cyber-cyan)] mx-auto mb-16 dark:shadow-[0_0_10px_var(--color-cyber-cyan)]" />

        <div className="glass-panel rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0 pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-white/5 text-blue-600 dark:text-[var(--color-cyber-cyan)] mb-6 shadow-inner">
              <HiOutlineCurrencyRupee className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-sm">
              Registration Fees
            </h3>

            <p className="text-slate-700 dark:text-white/70 mb-6 max-w-2xl mx-auto leading-relaxed">
              Detailed information regarding registration fees for different categories (Students, Academia, Industry, International delegates) is as below.
            </p>

            <div className="w-full mb-6 rounded-xl border border-slate-300 dark:border-white/10 shadow-lg overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-600/10 dark:bg-[var(--color-cyber-cyan)]/20 text-slate-900 dark:text-white">
                    <th className="p-4 border border-slate-300 dark:border-white/10 font-bold">Category</th>
                    <th className="p-4 border border-slate-300 dark:border-white/10 font-bold">UG / Diploma Student Poster / Paper</th>
                    <th className="p-4 border border-slate-300 dark:border-white/10 font-bold">PG / PhD Scholars</th>
                    <th className="p-4 border border-slate-300 dark:border-white/10 font-bold">Academicians</th>
                    <th className="p-4 border border-slate-300 dark:border-white/10 font-bold">Industry</th>
                    <th className="p-4 border border-slate-300 dark:border-white/10 font-bold">Foreigner</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-white/80">
                  <tr className="bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                    <td className="p-4 border border-slate-300 dark:border-white/10 font-semibold">Author / Attendee</td>
                    <td className="p-4 border border-slate-300 dark:border-white/10">2000/-</td>
                    <td className="p-4 border border-slate-300 dark:border-white/10">3000/-</td>
                    <td className="p-4 border border-slate-300 dark:border-white/10">4000/-</td>
                    <td className="p-4 border border-slate-300 dark:border-white/10">10000/-</td>
                    <td className="p-4 border border-slate-300 dark:border-white/10">Nil</td>
                  </tr>
                  <tr className="bg-transparent hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                    <td className="p-4 border border-slate-300 dark:border-white/10 font-semibold">Additional Registration</td>
                    <td className="p-4 border border-slate-300 dark:border-white/10">Nil</td>
                    <td className="p-4 border border-slate-300 dark:border-white/10">2000/-</td>
                    <td className="p-4 border border-slate-300 dark:border-white/10">2000/-</td>
                    <td className="p-4 border border-slate-300 dark:border-white/10">5000/-</td>
                    <td className="p-4 border border-slate-300 dark:border-white/10">Nil</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[15px] font-semibold text-[var(--color-cyber-magenta)] dark:text-[var(--color-cyber-magenta)] mb-8 drop-shadow-sm">
              * Registration is subjected to acceptance of paper.
            </p>




          </div>
        </div>


        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
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
            className="inline-flex items-center gap-2 px-8 py-3.5 glass-panel hover:bg-slate-100 dark:hover:bg-white/5 text-slate-900 dark:text-white font-bold rounded-xl text-lg transition-all hover:-translate-y-1 hover:border-blue-600 dark:hover:border-[var(--color-cyber-cyan)] dark:hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
          >
            <HiOutlineClipboardDocumentList className="w-5 h-5" />
            Submit Paper
          </a>
        </div>
      </div>
    </section>
  );
}
