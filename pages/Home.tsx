import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Dumbbell,
  TrendingUp,
  CheckCircle,
  UtensilsCrossed,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Apple,
  ChevronRight,
} from 'lucide-react';
import PhoneFrame from '../components/PhoneFrame';
import CTAButton from '../components/CTAButton';
import SectionHeading from '../components/SectionHeading';
import { SITE } from '../config';

const pillars = [
  {
    icon: <LayoutDashboard className="w-7 h-7" />,
    title: 'Dashboard',
    accent: 'text-neon-lavender',
    ring: 'border-neon-lavender/30',
    desc: "Quick actions, Today's Snapshot and health widgets — weight trends, steps, sleep and macros, arranged your way.",
  },
  {
    icon: <Dumbbell className="w-7 h-7" />,
    title: 'Workouts',
    accent: 'text-neon-magenta',
    ring: 'border-neon-magenta/30',
    desc: 'Log sets, reps and PBs. Supersets, rest timers, resume — training that keeps up with you.',
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'Progress',
    accent: 'text-neon-purple',
    ring: 'border-neon-purple/30',
    desc: 'Trend charts with goal lines, daily habits and progress photos. See the overload climb week by week.',
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    title: 'Check-In',
    accent: 'text-neon-lime',
    ring: 'border-neon-lime/30',
    desc: 'Weight, sleep, steps, HRV, mood, energy — your daily story in under a minute.',
  },
  {
    icon: <UtensilsCrossed className="w-7 h-7" />,
    title: 'Nutrition',
    accent: 'text-neon-orange',
    ring: 'border-neon-orange/30',
    desc: 'Macro rings, meal planning, barcode scanning and AI-Vision food recognition — no spreadsheet required.',
  },
];

const programs = [
  { img: '/images/programs/the_iron_standard.jpg', name: 'The Iron Standard', tag: 'Gym · Intermediate' },
  { img: '/images/programs/the_booty_blueprint.jpg', name: 'The Booty Blueprint', tag: 'Glutes · Hypertrophy' },
  { img: '/images/programs/full_body_moves.jpg', name: 'Full Body Moves', tag: 'Home · Beginner' },
];

const badges = [
  { img: '/images/badges/volume_hunter.png', name: 'Volume Hunter' },
  { img: '/images/badges/iron_habit.png', name: 'Iron Habit' },
  { img: '/images/badges/minutes_master.png', name: 'Minutes Master' },
  { img: '/images/badges/plank_bank.png', name: 'Plank Bank' },
];

const gallery = [
  { img: '/screenshots/store/dashboard.jpg', name: 'Dashboard' },
  { img: '/screenshots/store/workouts.jpg', name: 'Workouts' },
  { img: '/screenshots/store/workout-detail.jpg', name: 'Workout Session' },
  { img: '/screenshots/store/progress.jpg', name: 'Progress' },
  { img: '/screenshots/store/checkin.jpg', name: 'Daily Check-In' },
  { img: '/screenshots/store/nutrition.jpg', name: 'Nutrition' },
  { img: '/screenshots/store/challenges.jpg', name: 'Challenges' },
  { img: '/screenshots/store/program.jpg', name: 'Programs' },
];

const releaseNotes = [
  'Edit any exercise — change the title, description, or photo from the Exercises list.',
  'Workouts tabs are easier to use — My Workouts, Plans & Programs, and Exercises are proper buttons that follow your theme.',
  'Exercise info opens on Details first — every exercise sheet starts on the photo and description.',
  'Programs stay on the program — days you follow as part of a plan no longer clutter My Workouts.',
  'Your data survives the update — workouts, PBs, check-ins, meals, and progress stay put.',
];

const Home: React.FC = () => (
  <div>
    {/* ---------- HERO ---------- */}
    <section className="relative overflow-hidden">
      <div className="glow-blob w-[500px] h-[500px] bg-neon-purple -top-40 -left-40"></div>
      <div className="glow-blob w-[420px] h-[420px] bg-neon-cyan top-60 -right-32"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 neon-card rounded-full px-4 py-1.5 text-sm text-neon-cyan-soft mb-6">
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            v{SITE.version} · Free on the App Store
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Your gym.
            <br />
            <span className="bg-cta-gradient bg-clip-text text-transparent">Your rules.</span>
            <br />
            Your data.
          </h1>
          <p className="text-neon-muted text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            GitFit is the offline-first strength &amp; nutrition tracker that lives entirely on
            your phone. No account required. No ads. No one looking over your shoulder.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <CTAButton href={SITE.appStoreUrl}>
              <Apple className="w-5 h-5" />
              Download on the App Store
            </CTAButton>
            <Link
              to="/how-to"
              className="inline-flex items-center gap-1.5 rounded-full px-6 py-3 font-semibold border border-neon-cyan/60 text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
            >
              See how it works
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-neon-muted flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-neon-lime" />
            Free. Private. Powerful. — iOS 16+
          </p>
        </div>

        <div className="relative hidden md:block h-[560px]">
          <PhoneFrame src="/screenshots/store/dashboard.jpg" alt="GitFit neon dashboard" className="absolute w-[270px] h-[584px] z-20 -rotate-3" />
          <PhoneFrame src="/screenshots/store/workouts.jpg" alt="GitFit workouts library" className="absolute w-[240px] h-[520px] z-10 right-24 -top-4 rotate-6 opacity-90" />
          <PhoneFrame src="/screenshots/store/challenges.jpg" alt="GitFit challenges" className="absolute w-[220px] h-[476px] z-0 right-0 top-40 rotate-12 opacity-70" />
        </div>
        <div className="md:hidden">
          <PhoneFrame src="/screenshots/store/dashboard.jpg" alt="GitFit neon dashboard" className="w-[260px] mx-auto" />
        </div>
      </div>
    </section>

    {/* ---------- PROMISE ---------- */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="The GitFit Promise"
          title="Training is hard enough. Tracking shouldn't be."
          sub="Stop paying monthly fees for sub-par spreadsheets and data-harvesting apps."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="neon-card shadow-glow-card p-8">
            <ShieldCheck className="w-10 h-10 text-neon-lime mb-5" />
            <h3 className="text-xl font-bold mb-2">Total Privacy</h3>
            <p className="text-neon-muted leading-relaxed">
              Your data is yours. It stays encrypted on your device. We don't see your lifts,
              your weight, or your photos.
            </p>
          </div>
          <div className="neon-card shadow-glow-card p-8">
            <Sparkles className="w-10 h-10 text-neon-cyan mb-5" />
            <h3 className="text-xl font-bold mb-2">Fully Free</h3>
            <p className="text-neon-muted leading-relaxed">
              No subscriptions, no locked features, and no ads. Just results.
            </p>
          </div>
          <div className="neon-card shadow-glow-card p-8">
            <HeartHandshake className="w-10 h-10 text-neon-magenta mb-5" />
            <h3 className="text-xl font-bold mb-2">Built by Lifters</h3>
            <p className="text-neon-muted leading-relaxed">
              Built by lifters, for lifters. No bloat, just progress — with 400 exercises
              included out of the box.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ---------- FIVE PILLARS ---------- */}
    <section className="py-20 bg-page-gradient/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="One app, five tabs"
          title="Everything you lift, eat and track"
          sub="Dashboard · Workouts · Progress · Check-In · Nutrition — the whole system in your pocket."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {pillars.map((p) => (
            <div key={p.title} className={`neon-card shadow-glow-card p-6 border ${p.ring} hover:-translate-y-1 transition-transform duration-200`}>
              <div className={`${p.accent} mb-4`}>{p.icon}</div>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-neon-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ---------- PLANS & PROGRAMS ---------- */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-neon-cyan uppercase tracking-widest text-sm font-semibold mb-3">Plans &amp; Programs</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
            Smart programs that adapt to you
          </h2>
          <p className="text-neon-muted text-lg leading-relaxed mb-6">
            Answer a short questionnaire and GitFit builds an adaptive plan around your goal and
            weekly frequency — or pick from curated 8-week programs like The Iron Standard,
            Glutes &amp; Lower Body Focus, or the 70-Day Cut: Strength, Speed &amp; 5k.
          </p>
          <ul className="space-y-3 text-neon-muted">
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-neon-lime shrink-0" />Questionnaire-generated, adaptive training plans</li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-neon-lime shrink-0" />Warm-up blocks and week-by-week progression built in</li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-neon-lime shrink-0" />Program days stay on the program — resume your next session from the plan</li>
          </ul>
        </div>
        <div className="relative">
          <div className="glow-blob w-[380px] h-[380px] bg-neon-magenta top-10 right-0"></div>
          <div className="relative grid grid-cols-3 gap-4 items-start">
            <PhoneFrame src="/screenshots/store/program.jpg" alt="Program detail with week-by-week progression" className="w-[150px] col-span-1 -rotate-3" />
            <div className="col-span-2 space-y-4">
              {programs.map((p) => (
                <div key={p.name} className="neon-card overflow-hidden flex items-center gap-4 shadow-glow-card">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-16 h-20 object-cover" />
                  <div className="pr-4">
                    <p className="font-semibold text-sm leading-tight mb-1">{p.name}</p>
                    <p className="text-neon-muted text-xs">{p.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ---------- CHALLENGES ---------- */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-last lg:order-first">
          <div className="glow-blob w-[380px] h-[380px] bg-neon-purple top-0 left-0"></div>
          <PhoneFrame src="/screenshots/store/challenges.jpg" alt="Active challenges and achievement badges" className="relative w-[280px] mx-auto" />
        </div>
        <div>
          <p className="text-neon-cyan uppercase tracking-widest text-sm font-semibold mb-3">Challenges &amp; Badges</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
            Challenges that keep you honest
          </h2>
          <p className="text-neon-muted text-lg leading-relaxed mb-8">
            Take on 100,000 Steps in 7 Days, 12 Workouts in 30 Days, or the 50,000 kg Volume
            Month — and earn badges for your collection. Progress bars track every rep toward
            the goal.
          </p>
          <div className="grid grid-cols-4 gap-4 max-w-sm">
            {badges.map((b) => (
              <div key={b.name} className="text-center">
                <img src={b.img} alt={`${b.name} badge`} loading="lazy" className="w-full shadow-glow-card rounded-xl" />
                <p className="text-neon-muted text-[11px] mt-1.5 leading-tight">{b.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ---------- PROGRESS ---------- */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-neon-cyan uppercase tracking-widest text-sm font-semibold mb-3">Progress</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
            Charts that show the climb
          </h2>
          <p className="text-neon-muted text-lg leading-relaxed mb-6">
            Daily Habits, Data and Photos tabs turn your check-ins into trend charts with goal
            lines — weight, sleep, calories, protein and more. Progressive overload analysis
            flags plateaus and estimates your 1RM, so you always know what to push next.
          </p>
          <CTAButton href={SITE.appStoreUrl} variant="outline">
            <Apple className="w-5 h-5" /> Get GitFit — Free
          </CTAButton>
        </div>
        <div className="relative">
          <div className="glow-blob w-[380px] h-[380px] bg-neon-cyan top-10 right-10"></div>
          <PhoneFrame src="/screenshots/store/progress.jpg" alt="Progress charts with goal lines" className="relative w-[280px] mx-auto rotate-2" />
        </div>
      </div>
    </section>

    {/* ---------- WHAT'S NEW ---------- */}
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow={`Version ${SITE.version} · ${SITE.releaseDate}`}
          title="What's new"
        />
        <div className="neon-card shadow-glow-card p-8 space-y-4">
          {releaseNotes.map((note, i) => (
            <div key={i} className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-cta-gradient shrink-0 mt-2"></span>
              <p className="text-neon-muted leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ---------- GALLERY ---------- */}
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Screenshots"
          title="Neon, on your phone"
          sub={`Real screens from GitFit ${SITE.version} — dark, focused, glowy.`}
        />
      </div>
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 pb-8 justify-start lg:justify-center">
        {gallery.map((g) => (
          <div key={g.name} className="snap-center shrink-0 text-center">
            <PhoneFrame src={g.img} alt={`GitFit ${g.name} screen`} className="w-[210px] h-[455px]" />
            <p className="text-neon-muted text-sm mt-3">{g.name}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ---------- FINAL CTA ---------- */}
    <section className="pb-24 pt-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-banner-gradient rounded-[2.5rem] shadow-glow-active px-8 py-16 text-center relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Free. Private. Powerful. Start lifting.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Download GitFit and your first workout is minutes away — no account, no ads, no
            subscription.
          </p>
          <a
            href={SITE.appStoreUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-white text-neon-bg font-bold rounded-full px-8 py-4 text-lg hover:scale-[1.03] transition-transform shadow-xl"
          >
            <Apple className="w-6 h-6" />
            Download on the App Store
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
