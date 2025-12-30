
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight text-center">GitFit Privacy Policy</h1>
          <p className="text-lg text-neutral-500 text-center"><strong>Last Updated:</strong> 28 December 2025 &nbsp;|&nbsp; <strong>Effective Date:</strong> 28 December 2025</p>
        </header>

        <div className="prose prose-neutral max-w-none prose-headings:text-neutral-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-p:text-neutral-600 prose-p:leading-relaxed prose-li:text-neutral-600 prose-strong:text-neutral-800 prose-table:text-sm">
          
          <hr className="my-8 border-neutral-200" />

          <h2>Introduction</h2>
          <p>
            Welcome to GitFit ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience when using our fitness tracking application ("App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use GitFit.
          </p>
          <p>
            By downloading, installing, or using GitFit, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use the App.
          </p>

          <hr className="my-8 border-neutral-200" />

          <h2>Data Storage and Localization</h2>
          <p><strong>Local-first by design (with cloud features when you choose to use them).</strong></p>
          <p>We have designed GitFit with a "Local-First" privacy architecture.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>On-device data (offline-first):</strong> GitFit stores your workout history, nutrition logs, daily check-ins, and progress photos locally (SQLite and on-device storage) so the app continues to work offline.</li>
            <li><strong>Apple Health (HealthKit) reads:</strong> When you grant permission, GitFit reads supported HealthKit metrics (e.g., weight, steps, sleep, resting heart rate) to display insights and to populate your on-device daily check-ins.</li>
            <li><strong>Cloud account &amp; sync (Supabase):</strong> If you sign in, GitFit uses Supabase for authentication and (depending on your settings and features you use) to sync/backup selected app data to your account so it can be restored and used across devices.</li>
          </ul>

          <h2>Payment and Subscriptions</h2>
          <p>GitFit offers a free trial and a paid upgrade.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Free Trial:</strong> A time-limited trial may be available to new users.</li>
            <li><strong>Paid Access:</strong> GitFit offers a one-time in-app purchase (via Apple's App Store) to unlock premium access.</li>
            <li><strong>Payment Processing:</strong> Apple processes payments. We do not receive or store your card details.</li>
            <li><strong>Receipt Verification:</strong> To confirm a purchase and enable access, the app sends an App Store receipt payload and transaction identifiers to our backend for verification.</li>
          </ul>

          <h2>Data We Collect</h2>
          <p>We collect the following categories of data:</p>

          <h3>1. Account Information (Stored on Server)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Email Address:</strong> Required for account creation and license management.</li>
            <li><strong>User ID:</strong> A unique identifier to track your subscription status.</li>
            <li><strong>Password (if you use email/password sign-in):</strong> Managed by our authentication provider (Supabase Auth). We do not store your plaintext password.</li>
          </ul>

          <h3>2. Purchase &amp; License Information (Stored on Server)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purchase Receipt Data:</strong> Receipt payload sent by the app for verification.</li>
            <li><strong>Transaction Identifiers:</strong> Transaction ID / original transaction ID.</li>
            <li><strong>License Status:</strong> Whether your account currently has access.</li>
          </ul>

          <h3>3. Health and Fitness Data</h3>
          <p>With your explicit permission, the App reads the following data from Apple Health to display insights and populate on-device logs:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Weight</strong></li>
            <li><strong>Body Fat Percentage</strong></li>
            <li><strong>Lean Body Mass (Muscle Mass)</strong></li>
            <li><strong>Steps</strong></li>
            <li><strong>Active Energy Burned (Calories)</strong></li>
            <li><strong>Sleep Data</strong> (Asleep, Deep Sleep, Light Sleep, REM Sleep)</li>
            <li><strong>Resting Heart Rate</strong></li>
          </ul>
          <p>If you enable cloud sync/backup features, some of the resulting fitness metrics you choose to store in GitFit (for example, daily check-ins) may be synced to your account.</p>

          <h3>4. Photos and Media</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Progress Photos:</strong> Stored locally on your device.</li>
            <li><strong>Optional synced photos:</strong> If you attach photos to app data that is configured to sync/backup, GitFit may store a copy (or a link) in cloud storage associated with your account.</li>
          </ul>

          <h3>5. Nutrition &amp; Workout Data</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Food Logs, Meals, and Workouts:</strong> Stored locally for offline use. Depending on features/settings you use, meals and workouts may also be synced to your cloud account.</li>
          </ul>

          <hr className="my-8 border-neutral-200" />

          <h2>How We Use Your Data</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-neutral-200 my-4">
              <thead>
                <tr className="bg-neutral-50">
                  <th className="border border-neutral-200 px-4 py-2 text-left">Purpose</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">Data Used</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">Storage Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2"><strong>Account &amp; License</strong></td>
                  <td className="border border-neutral-200 px-4 py-2">Email, User ID, license status</td>
                  <td className="border border-neutral-200 px-4 py-2"><strong>Cloud (Supabase)</strong></td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2"><strong>Fitness Tracking</strong></td>
                  <td className="border border-neutral-200 px-4 py-2">HealthKit reads; daily check-ins; workouts</td>
                  <td className="border border-neutral-200 px-4 py-2"><strong>On-device (and optional cloud sync for selected data)</strong></td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2"><strong>Progress Photos</strong></td>
                  <td className="border border-neutral-200 px-4 py-2">Photos</td>
                  <td className="border border-neutral-200 px-4 py-2"><strong>On-device (and optional cloud sync for selected data)</strong></td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2"><strong>Nutrition Tracking</strong></td>
                  <td className="border border-neutral-200 px-4 py-2">Meals, foods, nutrition targets</td>
                  <td className="border border-neutral-200 px-4 py-2"><strong>On-device (and optional cloud sync for selected data)</strong></td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2"><strong>Purchase Verification</strong></td>
                  <td className="border border-neutral-200 px-4 py-2">Receipt payload, transaction identifiers</td>
                  <td className="border border-neutral-200 px-4 py-2"><strong>Cloud (Supabase Edge Function + database)</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p><strong>We do NOT use your data for:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Advertising or marketing purposes</li>
            <li>Selling to third parties</li>
            <li>Building user profiles for ad targeting</li>
          </ul>

          <hr className="my-8 border-neutral-200" />

          <h2>Third-Party Services</h2>
          <p>We use the following third-party services to operate GitFit:</p>

          <h3>Supabase (Backend &amp; Authentication)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Purpose:</strong> Cloud database, user authentication, data synchronization.</li>
            <li><strong>Data Shared:</strong> Account information (email, user ID), license status, and (when features/settings require) synced app data such as workouts, meals, nutrition targets, and daily logs.</li>
            <li><strong>Privacy Policy:</strong> <a href="https://supabase.com/privacy" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">https://supabase.com/privacy</a></li>
          </ul>

          <h3>OpenFoodFacts API</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Purpose:</strong> Food and nutrition database lookups via barcode scanning.</li>
            <li><strong>Data Shared:</strong> Barcode numbers only (no personal or identifying information).</li>
            <li><strong>Privacy Policy:</strong> <a href="https://world.openfoodfacts.org/privacy" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">https://world.openfoodfacts.org/privacy</a></li>
          </ul>

          <h3>Apple Sign-In (Optional)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Purpose:</strong> Secure social login using your Apple ID.</li>
            <li><strong>Data Shared:</strong> Apple-provided relay email (your real email is never shared with us).</li>
            <li><strong>Privacy Policy:</strong> <a href="https://www.apple.com/legal/privacy/" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">https://www.apple.com/legal/privacy/</a></li>
          </ul>

          <h3>Google Sign-In (Optional)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Purpose:</strong> Secure social login using your Google account.</li>
            <li><strong>Data Shared:</strong> Email address and name from your Google profile.</li>
            <li><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
          </ul>

          <h3>Apple App Store / StoreKit (Purchases)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Purpose:</strong> In-app purchase processing and purchase restoration.</li>
            <li><strong>Data Shared:</strong> Apple processes payments. GitFit receives verified transaction identifiers and may transmit receipt payloads to our backend for verification.</li>
          </ul>

          <hr className="my-8 border-neutral-200" />

          <h2>Device Permissions (What the App May Access)</h2>
          <p>GitFit requests device permissions only when needed for the feature you're using:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Health / HealthKit:</strong> Read access to supported health metrics (optional).</li>
            <li><strong>Camera:</strong> Barcode scanning and capturing photos (optional).</li>
            <li><strong>Photos / Media Library:</strong> Selecting and storing progress photos (optional).</li>
            <li><strong>Notifications:</strong> Workout timers and reminders (optional).</li>
            <li><strong>Biometrics (Face ID / Touch ID):</strong> Used only to unlock the app; we do not receive or store your biometric data.</li>
          </ul>

          <hr className="my-8 border-neutral-200" />

          <h2>Apple HealthKit Specifics</h2>
          <p><strong>This section is required for Apple App Store compliance.</strong></p>
          <p>GitFit integrates with Apple HealthKit to provide comprehensive fitness tracking. We take the privacy of your health data extremely seriously.</p>

          <h3>Our HealthKit Commitments:</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>No Advertising Use:</strong> We do NOT use HealthKit data for advertising purposes. Health data is never used to serve ads, target marketing, or build advertising profiles.</li>
            <li><strong>No Data Sales:</strong> We do NOT sell, lease, or trade your HealthKit data to any third party, including data brokers, advertisers, or analytics companies.</li>
            <li><strong>No Third-Party Disclosure for Marketing:</strong> We do NOT disclose HealthKit data to third parties for their marketing or advertising purposes.</li>
            <li><strong>User Control:</strong> You can revoke HealthKit access at any time through your device's Settings &gt; Privacy &amp; Security &gt; Health &gt; GitFit.</li>
            <li><strong>Minimal Data Collection:</strong> We only request access to the specific health data types necessary for the App's core fitness tracking functionality.</li>
            <li><strong>Data Stays on Device by Default:</strong> Health data is processed on-device. If you enable cloud sync/backup features, some of the fitness metrics you choose to store in GitFit (e.g., daily check-ins) may be synced to your account.</li>
          </ol>

          <h3>HealthKit Data We Access:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Weight measurements</li>
            <li>Body composition (body fat %, lean body mass)</li>
            <li>Step count</li>
            <li>Active energy burned</li>
            <li>Sleep analysis</li>
            <li>Resting heart rate</li>
          </ul>

          <hr className="my-8 border-neutral-200" />

          <h2>Data Retention</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-neutral-200 my-4">
              <thead>
                <tr className="bg-neutral-50">
                  <th className="border border-neutral-200 px-4 py-2 text-left">Data Type</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">Retention Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2">Account &amp; License Data</td>
                  <td className="border border-neutral-200 px-4 py-2">Until you delete your account (or as required for legal/compliance reasons)</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2">On-device Health/Fitness &amp; Nutrition Data</td>
                  <td className="border border-neutral-200 px-4 py-2">Until you delete it in the app or uninstall the app</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2">Synced Cloud Data (if enabled/used)</td>
                  <td className="border border-neutral-200 px-4 py-2">Until you delete your account and/or request deletion, subject to backup/retention windows</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2">Purchase Verification Records</td>
                  <td className="border border-neutral-200 px-4 py-2">As long as necessary to confirm entitlement and meet legal/accounting obligations</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>When you delete your account, we will delete all associated data within 30 days, except where we are required by law to retain certain information.</p>

          <hr className="my-8 border-neutral-200" />

          <h2>Data Security</h2>
          <p>We implement industry-standard security measures to protect your data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Encryption in Transit:</strong> All data transmitted between the App and our servers uses TLS/SSL encryption.</li>
            <li><strong>Encryption at Rest:</strong> Data stored in our database is encrypted.</li>
            <li><strong>Secure Authentication:</strong> We use secure password hashing and support biometric authentication (Face ID/Touch ID).</li>
            <li><strong>Keychain Storage:</strong> Sensitive credentials are stored in iOS Keychain for maximum security.</li>
            <li><strong>Certificate Pinning:</strong> GitFit uses TLS/SSL. Additional transport hardening (such as certificate pinning) may be used in some builds.</li>
          </ul>

          <hr className="my-8 border-neutral-200" />

          <h2>Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>

          <h3>For All Users:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate data.</li>
            <li><strong>Deletion:</strong> Request deletion of your account and associated data.</li>
            <li><strong>Data Export:</strong> Export your workout and nutrition data.</li>
          </ul>

          <h3>For EU/EEA Residents (GDPR):</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Right to Erasure:</strong> Request deletion of your personal data.</li>
            <li><strong>Right to Restriction:</strong> Request restriction of data processing.</li>
            <li><strong>Right to Portability:</strong> Receive your data in a portable format.</li>
            <li><strong>Right to Object:</strong> Object to certain data processing activities.</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time.</li>
          </ul>

          <h3>For California Residents (CCPA):</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Right to Know:</strong> Request disclosure of personal information collected.</li>
            <li><strong>Right to Delete:</strong> Request deletion of personal information.</li>
            <li><strong>Right to Opt-Out:</strong> We do not sell personal information, so this right does not apply.</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
          </ul>

          <p>To exercise any of these rights, please contact us at the email address below.</p>

          <hr className="my-8 border-neutral-200" />

          <h2>Children's Privacy</h2>
          <p>GitFit is not intended for use by children under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children. If we discover that a child has provided us with personal information, we will promptly delete it.</p>
          <p>If you are a parent or guardian and believe your child has provided us with personal information, please contact us.</p>

          <hr className="my-8 border-neutral-200" />

          <h2>International Data Transfers</h2>
          <p>Your data may be transferred to and processed in countries other than your country of residence. When we transfer data internationally, we ensure appropriate safeguards are in place, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Standard Contractual Clauses (for EU data transfers)</li>
            <li>Encryption of data in transit and at rest</li>
          </ul>

          <hr className="my-8 border-neutral-200" />

          <h2>Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Posting the new Privacy Policy in the App</li>
            <li>Updating the "Last Updated" date at the top of this document</li>
            <li>Sending you an email notification (for significant changes)</li>
          </ul>
          <p>We encourage you to review this Privacy Policy periodically.</p>

          <hr className="my-8 border-neutral-200" />

          <h2>Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>
          <ul className="list-none pl-0 space-y-1">
            <li><strong>Website:</strong> <a href="https://gitfit.health" className="text-orange-600 underline">https://gitfit.health</a></li>
          </ul>

          <hr className="my-8 border-neutral-200" />

          <h2>Additional Disclosures</h2>

          <h3>No Tracking</h3>
          <p>GitFit does not track you across apps or websites owned by other companies for advertising purposes. Our <code className="bg-neutral-100 px-1 rounded">NSPrivacyTracking</code> is set to <code className="bg-neutral-100 px-1 rounded">false</code>.</p>

          <h3>No Tracking Domains</h3>
          <p>We do not connect to any internet domains for tracking purposes (we do connect to internet domains for core app functionality such as login, sync, and food lookups).</p>

          <h3>In-App Purchases</h3>
          <p>GitFit offers in-app purchases processed through Apple's App Store. Apple handles all payment processing; we do not have access to your payment information.</p>

          <hr className="my-8 border-neutral-200" />

          <p className="text-sm text-neutral-400 italic text-center">This Privacy Policy was created for GitFit, a fitness tracking application. For the most current version, please check within the App or on our website.</p>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
