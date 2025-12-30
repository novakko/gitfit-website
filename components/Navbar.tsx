
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How To', path: '/how-to' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Support Us', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 glass border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-orange-600 p-1.5 rounded-lg">
              <Dumbbell className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-neutral-800">GitFit</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  isActive(link.path) ? 'text-orange-600' : 'text-neutral-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/pricing"
              className="bg-neutral-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all shadow-sm"
            >
              Get GitFit
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 hover:text-neutral-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-neutral-100 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-neutral-600 hover:text-orange-600 hover:bg-neutral-50 rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/pricing"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-orange-600 text-white px-3 py-3 rounded-xl text-base font-medium"
          >
            Download Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
