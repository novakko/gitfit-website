
import React from 'react';
import { CheckCircle2, ListFilter, Camera, BarChart3, Database } from 'lucide-react';

const HowTo: React.FC = () => {
  const steps = [
    {
      title: "1. Connect Apple Health",
      desc: "On first launch, grant permission to read metrics like Weight and Steps. GitFit will automatically keep your dashboard updated with your latest HealthKit data.",
      icon: <CheckCircle2 className="text-green-500" />
    },
    {
      title: "2. Set Up Your Workout Routine",
      desc: "Go to the 'Workouts' tab to create your own templates or start an empty session. Log exercises, sets, and reps in real-time.",
      icon: <ListFilter className="text-orange-500" />
    },
    {
      title: "3. Track Your Nutrition",
      desc: "Use the built-in barcode scanner to log your meals. Search for UK-specific items or add your own custom foods to your library.",
      icon: <Database className="text-blue-500" />
    },
    {
      title: "4. Visualize Your Progress",
      desc: "Visit the 'Progress' tab to see trend charts for weight, calories, and training volume. Compare progress photos side-by-side.",
      icon: <BarChart3 className="text-purple-500" />
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">How to GitFit</h1>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">Get started with the world's most focused fitness tracker in just a few steps.</p>
        </header>

        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100 shadow-sm transition-all hover:bg-white hover:shadow-lg">
              <div className="flex-shrink-0 mr-6 bg-white p-3 rounded-2xl shadow-sm">
                {step.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-24 pt-24 border-t border-neutral-100">
          <h2 className="text-3xl font-bold mb-12 text-center">Pro Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-orange-50">
              <h4 className="font-bold text-orange-900 mb-2 underline decoration-orange-200">Offline Mode</h4>
              <p className="text-orange-800 text-sm">Logging in a signal-free basement? No problem. GitFit saves everything locally and will sync when you're back online.</p>
            </div>
            <div className="p-8 rounded-3xl bg-blue-50">
              <h4 className="font-bold text-blue-900 mb-2 underline decoration-blue-200">Progress Photos</h4>
              <p className="text-blue-800 text-sm">Photos are stored on your device's gallery or private storage by default. Secure and for your eyes only.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowTo;
