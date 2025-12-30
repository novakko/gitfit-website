
import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-orange-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-600 p-1.5 rounded-lg">
                <Dumbbell className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">GitFit</span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Privacy-first strength tracking for those who value their data as much as their gains. Built for the modern athlete.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/gitfit.app" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-orange-600 transition-colors"><Instagram size={20} /></a>
              <a href="mailto:support@gitfit.health" className="text-neutral-400 hover:text-orange-600 transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/#features" className="text-sm text-neutral-500 hover:text-orange-600 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-neutral-500 hover:text-orange-600 transition-colors">Pricing</Link></li>
              <li><Link to="/how-to" className="text-sm text-neutral-500 hover:text-orange-600 transition-colors">How To</Link></li>
              <li><Link to="/faq" className="text-sm text-neutral-500 hover:text-orange-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-neutral-500 hover:text-orange-600 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 mb-4">Support</h3>
            <p className="text-sm text-neutral-500 mb-4">Questions or feedback? Reach out to our UK-based team.</p>
            <Link to="/contact" className="text-sm font-medium text-orange-600 hover:text-orange-700">Contact Support &rarr;</Link>
          </div>
        </div>

        <div className="border-t border-neutral-100 pt-8 flex flex-col md:row items-center justify-between text-neutral-400 text-xs">
          <p>© {new Date().getFullYear()} GitFit App. All rights reserved. Designed for iOS.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <p>Built with Privacy in the UK</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
