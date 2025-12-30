
import React from 'react';
import { Heart, TrendingUp, Award, CheckCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-32 relative overflow-hidden">
      {/* Background gradient similar to the app */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-teal-900 -z-10"></div>
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Support GitFit</h1>
          <p className="text-xl text-slate-300 max-w-xl mx-auto">
            GitFit is free to use. If you enjoy it, consider a one-time Supporter purchase.
          </p>
        </header>

        {/* Benefits */}
        <div className="space-y-5 mb-10">
          <div className="flex items-center space-x-4">
            <Heart className="w-6 h-6 text-teal-400 flex-shrink-0" />
            <span className="text-white text-lg">Support the independent developer</span>
          </div>
          <div className="flex items-center space-x-4">
            <TrendingUp className="w-6 h-6 text-teal-400 flex-shrink-0" />
            <span className="text-white text-lg">Help fund new features and improvements</span>
          </div>
          <div className="flex items-center space-x-4">
            <Award className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <span className="text-white text-lg">Optional Supporter perks / early access</span>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
            <span className="text-white text-lg">One-time payment (no subscription)</span>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-slate-800/50 border-2 border-teal-500 rounded-3xl p-8 mb-8">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-extrabold text-teal-400 mb-2">
              £6.99
            </div>
            <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
              One-Time Payment
            </div>
            <p className="text-slate-300 mb-2">One-time Supporter purchase</p>
            <p className="text-slate-400 text-sm italic">
              GitFit stays free. If we add AI features later, new users may need a subscription — Supporters keep full access.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="https://apps.apple.com/app/gitfit" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-3 w-full bg-teal-500 hover:bg-teal-600 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-teal-500/30"
        >
          <Heart className="w-5 h-5" />
          <span>Become a Supporter</span>
        </a>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            Purchase is handled securely through the App Store.<br />
            Open GitFit on your iPhone to complete the purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
