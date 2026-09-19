import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Mail, Instagram } from 'lucide-react';
import { SITE } from '../config';

const Footer: React.FC = () => (
  <footer className="border-t border-neon-line bg-neon-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2 max-w-sm">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-white" />
          </span>
          <span className="text-lg font-bold text-white">GitFit</span>
        </div>
        <p className="text-neon-muted text-sm leading-relaxed">
          Privacy-first strength training, nutrition and progress tracking.
          Your data stays on your device — export it anytime, delete it anytime.
        </p>
      </div>

      <div>
        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Product</h3>
        <ul className="space-y-2.5 text-sm">
          <li><Link to="/" className="text-neon-muted hover:text-neon-cyan transition-colors">Home</Link></li>
          <li><Link to="/how-to" className="text-neon-muted hover:text-neon-cyan transition-colors">How To</Link></li>
          <li><Link to="/faq" className="text-neon-muted hover:text-neon-cyan transition-colors">FAQ</Link></li>
          <li><Link to="/contact" className="text-neon-muted hover:text-neon-cyan transition-colors">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Legal &amp; Connect</h3>
        <ul className="space-y-2.5 text-sm">
          <li><Link to="/privacy" className="text-neon-muted hover:text-neon-cyan transition-colors">Privacy Policy</Link></li>
          <li><Link to="/terms" className="text-neon-muted hover:text-neon-cyan transition-colors">Terms of Service</Link></li>
          <li>
            <a href={`mailto:${SITE.supportEmail}`} className="text-neon-muted hover:text-neon-cyan transition-colors inline-flex items-center gap-1.5">
              <Mail className="w-4 h-4" /> {SITE.supportEmail}
            </a>
          </li>
          <li>
            <a href="https://instagram.com/gitfit.app" target="_blank" rel="noopener" className="text-neon-muted hover:text-neon-cyan transition-colors inline-flex items-center gap-1.5">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-neon-line-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neon-muted">
        <p>© {new Date().getFullYear()} {SITE.appName} · Free. Private. Powerful.</p>
        <p>Made for iPhone · iOS 16+</p>
      </div>
    </div>
  </footer>
);

export default Footer;
