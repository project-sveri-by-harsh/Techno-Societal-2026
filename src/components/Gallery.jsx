import { GALLERY_IMAGES } from '../data/galleryData';

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-3 uppercase tracking-wider drop-shadow-md">
          Gallery
        </h2>
        <p className="text-center text-slate-600 dark:text-white/70 mb-6 font-medium drop-shadow-sm">
          Check our gallery from the recent Conferences
        </p>
        <div className="w-12 h-1 bg-[var(--color-cyber-cyan)] mx-auto mb-16 shadow-[0_0_10px_var(--color-cyber-cyan)]" />

        {/* Continuous Slider */}
        <div className="flex overflow-hidden -mx-4 px-4 md:mx-0 md:px-0 mt-4">
          <div className="flex gap-6 animate-slide w-max">
            {/* We duplicate the array to create a seamless infinite loop */}
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((image, index) => (
              <div 
                key={`${image.id}-${index}`} 
                className="relative flex-none w-72 md:w-80 h-96 group rounded-2xl overflow-hidden shadow-lg shadow-navy-900/10 cursor-pointer"
              >
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
