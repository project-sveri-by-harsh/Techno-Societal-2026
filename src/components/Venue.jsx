export default function Venue() {
  return (
    <section 
      id="venue" 
      className="relative py-20 px-4 md:px-8 bg-cover bg-center bg-fixed bg-no-repeat bg-[image:linear-gradient(rgba(248,250,252,0.85),rgba(248,250,252,0.95)),url('https://coe.sveri.ac.in/wp-content/themes/SVERICoE/images/s1.jpg')] dark:bg-[image:linear-gradient(rgba(10,10,20,0.9),rgba(10,10,20,0.95)),url('https://coe.sveri.ac.in/wp-content/themes/SVERICoE/images/s1.jpg')]"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-3 uppercase tracking-wider drop-shadow-md">
          Venue
        </h2>
        <div className="w-12 h-1 bg-[var(--color-cyber-purple)] mx-auto mb-16 shadow-[0_0_10px_var(--color-cyber-purple)]" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column - Information */}
          <div className="text-slate-900 dark:text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-6 drop-shadow-md text-blue-700 dark:text-[var(--color-cyber-cyan)]">
              SVERI's College of Engineering, Pandharpur
            </h3>
            
            <div className="space-y-2 mb-10 text-slate-700 dark:text-white/90 text-sm md:text-base font-medium leading-relaxed drop-shadow-sm">
              <p>P.B. No. 54, Gopalpur- Ranjani Road, Gopalpur</p>
              <p>Tal. Pandharpur - 413 304,</p>
              <p>Dist.-Solapur, Maharashtra, India</p>
            </div>

            <h4 className="text-lg md:text-xl font-bold mb-4 drop-shadow-md text-purple-700 dark:text-[var(--color-cyber-magenta)]">
              Transportation
            </h4>
            
            <ul className="glass-panel rounded-xl divide-y divide-slate-300 dark:divide-white/10">
              <li className="p-4 font-semibold text-slate-900 dark:text-white">
                <span className="text-blue-700 dark:text-[var(--color-cyber-cyan)] mr-2">Via Bus:</span> 
                Nearby bus stand - Pandharpur
              </li>
              <li className="p-4 font-semibold text-slate-900 dark:text-white">
                <span className="text-blue-700 dark:text-[var(--color-cyber-cyan)] mr-2">Via Train:</span> 
                Nearby railway stations - Pandharpur, Solapur, Pune
              </li>
              <li className="p-4 font-semibold text-slate-900 dark:text-white">
                <span className="text-blue-700 dark:text-[var(--color-cyber-cyan)] mr-2">Via Flight:</span> 
                Nearby airports - Pune, Mumbai
              </li>
            </ul>
          </div>

          {/* Right Column - Google Maps Embed */}
          <div className="glass-panel p-3 rounded-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.883939917507!2d75.36706257439447!3d17.655655095023018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc422ebec5b1a15%3A0x5f1b772f119d4472!2z8J2XpvCdl7XwnZe_8J2XtiDwnZep8J2XtvCdmIHwnZe18J2XrvCdl7kg8J2XmPCdl7HwnZiC8J2XsPCdl67wnZiB8J2XtvCdl7zwnZe7ICYg8J2XpfCdl7LwnZiA8J2XsvCdl67wnZe_8J2XsPCdl7Ug8J2XnPCdl7vwnZiA8J2YgfCdl7bwnZiB8J2YgvCdmIHwnZey!5e0!3m2!1sen!2sin!4v1714742573860!5m2!1sen!2sin" 
              className="w-full h-[350px] md:h-[450px] rounded-xl border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SVERI College Location Map"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
