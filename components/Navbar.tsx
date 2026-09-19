import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';
import { SITE } from '../config';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors ${isActive ? 'text-neon-cyan' : 'text-neon-muted hover:text-white'}`;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 glass-dark border-b border-neon-line/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="GitFit home">
          <span className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-white" />
          </span>
          <span className="text-lg font-bold text-white">GitFit</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/how-to" className={navLinkClass}>How To</NavLink>
          <NavLink to="/faq" className={navLinkClass}>FAQ</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <a
            href={SITE.appStoreUrl}
            target="_blank"
            rel="noopener"
            className="bg-cta-gradient shadow-glow-cta text-white text-sm font-semibold rounded-full px-5 py-2 transition-transform duration-200 hover:scale-[1.03]"
          >
            Get GitFit
          </a>
        </div>

        <button
          className="md:hidden text-neon-muted hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-dark border-b border-neon-line/60 px-4 pt-2 pb-4 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded-neon text-neon-muted hover:text-white hover:bg-neon-surface/70" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/how-to" className="block px-3 py-2 rounded-neon text-neon-muted hover:text-white hover:bg-neon-surface/70" onClick={() => setOpen(false)}>How To</Link>
          <Link to="/faq" className="block px-3 py-2 rounded-neon text-neon-muted hover:text-white hover:bg-neon-surface/70" onClick={() => setOpen(false)}>FAQ</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-neon text-neon-muted hover:text-white hover:bg-neon-surface/70" onClick={() => setOpen(false)}>Contact</Link>
          <a
            href={SITE.appStoreUrl}
            target="_blank"
            rel="noopener"
            className="block mt-2 text-center bg-cta-gradient shadow-glow-cta text-white font-semibold rounded-full px-5 py-2.5"
            onClick={() => setOpen(false)}
          >
            Get GitFit — Free
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
