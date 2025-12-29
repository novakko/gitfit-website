
import React from 'react';
import { Check, Info } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="bg-[#FCF9F7] min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">Simple, Honest Pricing.</h1>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">No recurring bills. No subscriptions. Just a one-time upgrade to unlock your full potential.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-neutral-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold text-neutral-900">£0</span>
              <span className="text-neutral-500 ml-2">/forever</span>
            </div>
            <p className="text-neutral-500 mb-8 text-sm leading-relaxed">Perfect for getting started and tracking your basic strength progress.</p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                <span className="text-neutral-700 text-sm">Workout Logging (Unlimited)</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                <span className="text-neutral-700 text-sm">HealthKit Weight Sync</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                <span className="text-neutral-700 text-sm">Nutrition Tracking</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                <span className="text-neutral-700 text-sm">Offline Storage</span>
              </li>
            </ul>
            <button className="w-full py-4 rounded-2xl border-2 border-neutral-100 font-bold text-neutral-900 hover:bg-neutral-50 transition-colors">
              Current Plan
            </button>
          </div>

          {/* Premium Tier */}
          <div className="bg-neutral-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden shadow-2xl scale-105">
            <div className="absolute top-0 right-0 bg-orange-600 px-6 py-2 rounded-bl-2xl text-xs font-bold uppercase tracking-widest">
              Premium
            </div>
            <h3 className="text-2xl font-bold mb-2">Lifetime Access</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold">One-time</span>
              <span className="text-neutral-400 ml-2 text-sm">(Check app for pricing)</span>
            </div>
            <p className="text-neutral-400 mb-8 text-sm leading-relaxed">For the dedicated athlete who wants advanced analytics and seamless syncing.</p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <Check className="text-orange-500 mr-3 w-5 h-5 flex-shrink-0" />
                <span className="text-neutral-200 text-sm font-medium">Advanced Charts & Analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="text-orange-500 mr-3 w-5 h-5 flex-shrink-0" />
                <span className="text-neutral-200 text-sm font-medium">Supabase Cloud Sync & Restore</span>
              </li>
              <li className="flex items-start">
                <Check className="text-orange-500 mr-3 w-5 h-5 flex-shrink-0" />
                <span className="text-neutral-200 text-sm font-medium">Barcode Scanning (Unlimited)</span>
              </li>
              <li className="flex items-start">
                <Check className="text-orange-500 mr-3 w-5 h-5 flex-shrink-0" />
                <span className="text-neutral-200 text-sm font-medium">Progress Photo Storage</span>
              </li>
              <li className="flex items-start">
                <Check className="text-orange-500 mr-3 w-5 h-5 flex-shrink-0" />
                <span className="text-neutral-200 text-sm font-medium">Biometric Unlock</span>
              </li>
            </ul>
            <a href="#" className="block w-full text-center bg-orange-600 py-4 rounded-2xl font-bold text-white hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-900/40">
              Upgrade in App
            </a>
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto flex items-center p-6 bg-blue-50 border border-blue-100 rounded-3xl text-blue-800">
          <Info className="mr-4 w-6 h-6 flex-shrink-0" />
          <p className="text-sm">We offer a <strong>Free Trial</strong> for new users. Try the premium features for 7 days before you commit to the one-time purchase.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
