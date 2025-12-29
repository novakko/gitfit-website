
import React from 'react';
import { Shield, Lock, CloudOff, RefreshCw } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight text-center">Privacy Policy</h1>
          <p className="text-xl text-neutral-500 text-center">Last updated: May 2024. Your data belongs to you.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
            <Lock className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">No Ad Tracking</h3>
            <p className="text-neutral-600 text-sm">We don't include third-party advertising SDKs or trackers. We don't sell your personal information to anyone.</p>
          </div>
          <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
            <CloudOff className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Offline by Default</h3>
            <p className="text-neutral-600 text-sm">Your fitness data is stored in a local SQLite database on your device. It stays there unless you choose to sync.</p>
          </div>
          <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
            <Shield className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">HealthKit Control</h3>
            <p className="text-neutral-600 text-sm">Apple Health data is read on-device. We never upload your raw HealthKit data to our servers unless specifically requested for sync.</p>
          </div>
          <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
            <RefreshCw className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Optional Cloud Sync</h3>
            <p className="text-neutral-600 text-sm">If you sign in, we use Supabase to sync data across your devices. This data is encrypted and managed by your account.</p>
          </div>
        </div>

        <div className="prose prose-neutral max-w-none">
          <h2 className="text-2xl font-bold mt-12 mb-4">1. Information We Collect</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            GitFit is designed to collect as little data as possible. 
            <strong> Personal Information:</strong> If you create an account, we store your email address and authentication identifiers. 
            <strong> Health Data:</strong> We access Apple HealthKit to import metrics like weight, steps, and sleep. This is processed on-device.
            <strong> Payment Data:</strong> All purchases are handled by Apple. We receive a transaction ID and receipt to verify your premium status.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">2. UK and EU Users (GDPR)</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            We are committed to GDPR compliance. You have the right to access, rectify, or delete your data at any time. Because we use on-device storage, deleting the app will remove all local data. If you use cloud sync, you can initiate a data deletion request from within the app settings.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">3. Data Security</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            We use industry-standard encryption for data in transit and at rest for our optional cloud features. Biometric authentication (FaceID/TouchID) data never leaves the Apple Secure Enclave.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">4. Third-Party Services</h2>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li><strong>Supabase:</strong> Cloud database for account-based sync.</li>
            <li><strong>OpenFoodFacts:</strong> Open-source nutrition database (anonymous API calls).</li>
            <li><strong>Apple:</strong> App Store payments and HealthKit integration.</li>
          </ul>

          <div className="mt-20 p-8 rounded-3xl border-2 border-dashed border-neutral-200 text-center">
            <h3 className="font-bold mb-2">Questions?</h3>
            <p className="text-neutral-500 mb-4 text-sm">Our full legal policy and terms of service are available below.</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-orange-600 underline">Full Terms</a>
              <a href="#" className="text-orange-600 underline">Full Privacy PDF</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
