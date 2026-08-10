import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { NAV_LINKS } from '../data/navigation';
import { SITE_CONFIG } from '../data/siteConfig';

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const socialIcons = [
    { Icon: FaFacebookF, url: SITE_CONFIG.socialLinks.facebook, label: 'Facebook' },
    { Icon: FaTwitter, url: SITE_CONFIG.socialLinks.twitter, label: 'Twitter' },
    { Icon: FaLinkedinIn, url: SITE_CONFIG.socialLinks.linkedin, label: 'LinkedIn' },
    { Icon: FaYoutube, url: SITE_CONFIG.socialLinks.youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-white/70">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand block */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900 dark:text-white mb-3">
              TECHNO-SOCIETAL <span className="text-blue-700 dark:text-gold-400">2026</span>
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              {SITE_CONFIG.conferenceFullName}
            </p>
            <p className="text-sm">{SITE_CONFIG.collegeFullName}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => handleClick(e, link.href)}
                    className="hover:text-blue-700 dark:hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + meta */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3 mb-6">
              {socialIcons.map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-gold-500 hover:text-white dark:hover:text-navy-950 text-slate-600 dark:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs mb-1">Updated and managed by Mr.Harshwardhan R Gidde & Ms.Vaishnavi S Yadav.</p>
            <p className="text-xs">Last updated: {typeof __BUILD_DATE__ !== 'undefined' ? __BUILD_DATE__ : SITE_CONFIG.lastUpdated}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-300 dark:border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2026 {SITE_CONFIG.collegeName}. All rights reserved.</p>
          <p>{SITE_CONFIG.conferenceName}</p>
        </div>
      </div>
    </footer>
  );
}
