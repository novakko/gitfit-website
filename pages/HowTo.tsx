import React from 'react';
import {
  UserRound,
  HeartPulse,
  Dumbbell,
  CalendarCheck,
  WifiOff,
  Lock,
  FileJson,
} from 'lucide-react';
import PhoneFrame from '../components/PhoneFrame';
import CTAButton from '../components/CTAButton';
import SectionHeading from '../components/SectionHeading';
import { SITE } from '../config';

const steps = [
  {
    icon: <UserRound className="w-8 h-8 text-neon-lavender" />,
    title: '1. Create your profile',
    desc: 'On first launch GitFit walks you through a short onboarding: pick your nickname, choose your units and measurements, and set the theme. No account needed — everything stays on your device.',
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-neon-lime" />,
    title: '2. Connect Apple Health (optional)',
    desc: 'Grant permission and GitFit reads your steps, weight, sleep and energy from Apple Health. Automatic syncing runs in two battery-friendly windows — morning (05:00–10:59) and evening (19:00–23:59) — or sync manually anytime.',
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-neon-magenta" />,
    title: '3. Train',
    desc: 'Open the Workouts tab: start one of your saved workouts, follow a plan from Plans & Programs, or browse 400 exercises. During a session you get supersets, rest timers and automatic PB detection — leave and resume anytime.',
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-neon-cyan" />,
    title: '4. Track daily',
    desc: 'Log weight, sleep, steps, HRV and mood in the daily Check-In, scan or search your meals under Nutrition, and watch trend charts with goal lines build themselves in Progress.',
  },
];

const tips = [
  {
    icon: <WifiOff className="w-6 h-6 text-neon-magenta" />,
    title: 'Works fully offline',
    desc: 'Gym basement, airplane, hiking trail — GitFit is offline-first. Everything is stored on your device and syncs later if you use cloud backup.',
    ring: 'border-neon-magenta/30',
  },
  {
    icon: <Lock className="w-6 h-6 text-neon-cyan" />,
    title: 'Lock it with Face ID',
    desc: 'Enable biometric app lock and your training data stays yours even if someone else holds your phone.',
    ring: 'border-neon-cyan/30',
  },
  {
    icon: <FileJson className="w-6 h-6 text-neon-lime" />,
    title: 'Own your data',
    desc: 'Export everything as JSON whenever you like — no lock-in, no email-us-and-wait. Your data, your rules.',
    ring: 'border-neon-lime/30',
  },
];

const HowTo: React.FC = () => (
  <div className="min-h-screen pt-24 pb-32 relative overflow-hidden">
    <div className="glow-blob w-[420px] h-[420px] bg-neon-purple -top-40 -left-40"></div>
    <div className="glow-blob w-[360px] h-[360px] bg-neon-cyan top-1/2 -right-40"></div>

    <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">How to GitFit</h1>
        <p className="text-lg text-neon-muted max-w-2xl mx-auto">
          Your gym. Your rules. Your data. Here's how to go from download to first PR in four steps.
        </p>
      </header>

      <div className="grid lg:grid-cols-[1fr_auto] gap-14 items-start">
        <div className="space-y-6">
          {steps.map((s) => (
            <div key={s.title} className="neon-card shadow-glow-card p-7 flex gap-5">
              <div className="shrink-0">{s.icon}</div>
              <div>
                <h2 className="text-xl font-bold mb-2">{s.title}</h2>
                <p className="text-neon-muted leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:sticky lg:top-24 mx-auto">
          <PhoneFrame src="/screenshots/store/workout-detail.jpg" alt="Workout session with sets, reps and PBs" className="w-[260px]" />
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Pro tips" title="Small things that make it sing" />
        <div className="grid md:grid-cols-3 gap-5">
          {tips.map((t) => (
            <div key={t.title} className={`neon-card shadow-glow-card p-6 border ${t.ring}`}>
              <div className="mb-4">{t.icon}</div>
              <h3 className="font-bold text-lg mb-2">{t.title}</h3>
              <p className="text-neon-muted text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <CTAButton href={SITE.appStoreUrl}>
          Get GitFit — Free on the App Store
        </CTAButton>
      </div>
    </div>
  </div>
);

export default HowTo;
