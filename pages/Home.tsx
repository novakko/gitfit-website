
import React from 'react';
import { ShieldCheck, Smartphone, Zap, Database, Lock, Globe } from 'lucide-react';
import AppMockup from '../components/AppMockup';

const Home: React.FC = () => {
  const features = [
    {
      title: "Workout Logging",
      desc: "Log sets, reps, and weights with a clean, fast interface. Create templates and track historical data effortlessly.",
      icon: <Zap className="text-orange-600" />,
      color: "bg-orange-50"
    },
    {
      title: "Nutrition & Macros",
      desc: "Track daily intake with barcode scanning powered by OpenFoodFacts. Tailored for UK/EU food databases.",
      icon: <Database className="text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      title: "HealthKit Integration",
      desc: "Sync weight, steps, sleep, and heart rate directly from Apple Health. No manual re-entry needed.",
      icon: <Smartphone className="text-green-600" />,
      color: "bg-green-50"
    },
    {
      title: "Privacy First",
      desc: "Your data stays on your device. We don't sell data or use ad trackers. Optional cloud sync is secure.",
      icon: <ShieldCheck className="text-purple-600" />,
      color: "bg-purple-50"
    },
    {
      title: "Offline-First",
      desc: "Works perfectly without an internet connection. Your logs are always available, even in the deepest gym basements.",
      icon: <Globe className="text-amber-600" />,
      color: "bg-amber-50"
    },
    {
      title: "Biometric Security",
      desc: "Keep your progress private with FaceID and TouchID unlock. Your journey is for your eyes only.",
      icon: <Lock className="text-rose-600" />,
      color: "bg-rose-50"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
                <span className="mr-2">✨</span> Now available on iOS
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-neutral-900 leading-[1.1] mb-8">
                Your Gains. <br />
                <span className="text-orange-600 underline decoration-orange-200">Your Privacy.</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed max-w-xl">
                The minimalist strength and nutrition tracker designed for the privacy-conscious athlete. No trackers, no ads, just pure performance.
              </p>
              <div className="flex flex-col sm:row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="#" className="w-full sm:w-auto flex items-center justify-center bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
                  <span className="mr-3"></span> Download on App Store
                </a>
                <a href="#features" className="text-neutral-600 font-semibold hover:text-orange-600 transition-colors">
                  See how it works &rarr;
                </a>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
              <AppMockup 
                imageUrl="/screenshots/dashboard.png" 
                alt="GitFit Dashboard" 
                className="z-10 rotate-3"
              />
              <AppMockup 
                imageUrl="/screenshots/nutrition.png" 
                alt="Nutrition View" 
                className="hidden md:block absolute -left-12 bottom-12 -rotate-6 h-[500px] w-[250px] z-0 opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight">Everything you need, nothing you don't.</h2>
            <p className="text-neutral-500 text-lg">GitFit strips away the bloat of traditional fitness apps to focus on what actually moves the needle: consistency and data clarity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className={`p-8 rounded-3xl border border-neutral-100 transition-all hover:shadow-xl hover:-translate-y-1 ${f.color}`}>
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{f.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900">Beautifully Simple.</h2>
        </div>
        <div className="flex overflow-x-auto pb-12 space-x-8 px-8 no-scrollbar scroll-smooth justify-center">
          <AppMockup imageUrl="/screenshots/dashboard.png" alt="Dashboard" className="flex-shrink-0 scale-90" />
          <AppMockup imageUrl="/screenshots/progress-habits.png" alt="Progress - Daily Habits" className="flex-shrink-0 scale-100" />
          <AppMockup imageUrl="/screenshots/nutrition.png" alt="Nutrition Tracking" className="flex-shrink-0 scale-90" />
          <AppMockup imageUrl="/screenshots/progress-data.png" alt="Progress - Data" className="flex-shrink-0 scale-90" />
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 rounded-[3rem] p-12 md:p-20 text-center text-white">
            <ShieldCheck className="mx-auto w-16 h-16 text-orange-500 mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">"We believe your fitness journey is private. That's why GitFit works offline and puts you in control of your cloud sync."</h2>
            <div className="flex justify-center items-center space-x-3 text-neutral-400">
              <span className="font-bold text-white">The GitFit Team</span>
              <span>•</span>
              <span>London, UK</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
