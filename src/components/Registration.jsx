import { HiOutlineArrowDownTray, HiOutlineCurrencyRupee } from 'react-icons/hi2';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { SITE_CONFIG } from '../data/siteConfig';

export default function Registration() {
  return (
    <section id="registration" className="relative py-20 px-4 md:px-8 bg-transparent min-h-[60vh] flex flex-col justify-center">
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

            <p className="text-slate-700 dark:text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Detailed information regarding registration fees for different categories (Students, Academia, Industry, International delegates) is available in the official fee structure document.
            </p>

          <a
            href={SITE_CONFIG.feesDocumentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-900 dark:text-white font-bold rounded-xl transition-all shadow-sm hover:-translate-y-1 dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            <HiOutlineArrowDownTray className="w-6 h-6" />
            View Fees Details (PDF)
          </a>


          </div>
        </div>

        <div className="mt-16 mb-8 text-center">
          <h3 className="text-xl font-bold text-blue-700 dark:text-[var(--color-cyber-cyan)] mb-4 uppercase tracking-wider drop-shadow-sm">
            Acknowledgment
          </h3>
          <p className="text-slate-600 dark:text-white/60 max-w-4xl mx-auto text-sm md:text-base leading-relaxed text-center">
            &quot;The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.&quot;
          </p>
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
