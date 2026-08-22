import { SITE_CONFIG } from '../data/siteConfig';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-4 md:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-3 uppercase tracking-wider drop-shadow-md">
          Contact Us
        </h2>
        <div className="w-12 h-1 bg-[var(--color-cyber-cyan)] mx-auto mb-16 shadow-[0_0_10px_var(--color-cyber-cyan)]" />

        <div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0 pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-center relative z-10">
            
            {/* Address Column */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-blue-700 dark:text-[var(--color-cyber-cyan)] uppercase tracking-widest mb-4 drop-shadow-md">
                Address
              </h3>
              <div className="text-slate-800 dark:text-white/90 font-medium text-sm md:text-base leading-relaxed">
                <p>SVERI's College of Engineering, Pandharpur</p>
                <p>Gopalpur-Ranjani Road, P. B. No.54,</p>
                <p>Gopalpur</p>
                <p>Pandharpur-413304.</p>
              </div>
            </div>

            {/* QR Code Column */}
            <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-slate-300 dark:border-white/10 py-8 md:py-0 px-4">
              <div className="bg-white p-2 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-4 inline-block">
                {/* Note: This generates a standard QR code dynamically. 
                    To use a custom image with a logo, replace the src with e.g. "/whatsapp-qr.png" 
                    after saving your image to the public folder. */}
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${SITE_CONFIG.whatsappChannelUrl}`}
                  alt="WhatsApp Channel QR Code" 
                  className="w-32 h-32 md:w-40 md:h-40"
                />
              </div>
              <a 
                href={SITE_CONFIG.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-cyber-magenta)] font-bold hover:text-blue-600 dark:hover:text-white hover:underline transition-colors text-sm md:text-base drop-shadow-md"
              >
                Click/Scan to join WhatsApp Channel
              </a>
            </div>

            {/* Email Column */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-blue-700 dark:text-[var(--color-cyber-cyan)] uppercase tracking-widest mb-4 drop-shadow-md">
                Email
              </h3>
              <div className="flex flex-col gap-2">
                <a 
                  href="mailto:techno@sveri.ac.in" 
                  className="text-[var(--color-cyber-purple)] font-bold hover:text-blue-600 dark:hover:text-white hover:underline transition-colors text-sm md:text-base drop-shadow-md"
                >
                  techno@sveri.ac.in
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
