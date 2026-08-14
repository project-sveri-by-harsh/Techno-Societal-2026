export default function Acknowledgement() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-transparent min-h-[60vh] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-3 uppercase tracking-wider drop-shadow-md">
          Acknowledgment
        </h2>
        <div className="w-12 h-1 bg-[var(--color-cyber-cyan)] mx-auto mb-10 shadow-[0_0_10px_var(--color-cyber-cyan)]" />

        <div className="glass-panel rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0 pointer-events-none" />
          
          <p className="relative z-10 text-slate-800 dark:text-white/90 font-medium italic text-sm md:text-base leading-relaxed text-center drop-shadow-sm">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </div>
      </div>
    </section>
  );
}
