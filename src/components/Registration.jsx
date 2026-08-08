import { HiOutlineArrowDownTray, HiOutlineCurrencyRupee } from 'react-icons/hi2';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { SITE_CONFIG } from '../data/siteConfig';

export default function Registration() {
  return (
    <section id="registration" className="bg-slate-50 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center text-navy-950 mb-3 uppercase tracking-wider">
          Registration
        </h2>
        <div className="w-12 h-1 bg-red-500 mx-auto mb-16" />

        <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/5 p-8 md:p-12 border border-slate-100 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 text-red-500 mb-6">
            <HiOutlineCurrencyRupee className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-bold text-navy-950 mb-4">
            Registration Fees
          </h3>

          <p className="text-navy-900/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Detailed information regarding registration fees for different categories (Students, Academia, Industry, International delegates) is available in the official fee structure document.
          </p>

          <a
            href={SITE_CONFIG.feesDocumentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold rounded-xl transition-all shadow-sm hover:-translate-y-1"
          >
            <HiOutlineArrowDownTray className="w-6 h-6" />
            View Fees Details (PDF)
          </a>


        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-navy-950 mb-4 uppercase tracking-wider">
            Acknowledgment
          </h3>
          <p className="text-navy-900/80 max-w-4xl mx-auto text-sm md:text-base leading-relaxed text-center">
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
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-950 hover:bg-navy-900 text-white font-bold rounded-xl text-lg transition-all hover:-translate-y-1 shadow-lg hover:shadow-navy-900/30"
          >
            <HiOutlineClipboardDocumentList className="w-5 h-5" />
            Submit Paper
          </a>
        </div>
      </div>
    </section>
  );
}
