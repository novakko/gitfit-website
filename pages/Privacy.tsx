
import React from 'react';

const th = 'border border-neon-line px-4 py-2.5 text-left font-semibold text-white';
const td = 'border border-neon-line px-4 py-2.5 align-top';
const h2 = 'text-2xl font-bold text-white mt-12 mb-4 tracking-tight';
const h3 = 'text-xl font-semibold text-white mt-8 mb-3';
const p = 'text-neon-muted leading-relaxed mb-4';
const li = 'text-neon-muted leading-relaxed';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight text-center">GitFit Privacy Policy</h1>
          <p className="text-lg text-neon-muted text-center"><strong className="text-white">Last Updated:</strong> 30 December 2025 &nbsp;|&nbsp; <strong className="text-white">Effective Date:</strong> 30 December 2025</p>
        </header>

        <div className="max-w-none">
          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Introduction</h2>
          <p className={p}>
            Welcome to GitFit ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience when using our fitness tracking application ("App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use GitFit.
          </p>
          <p className={p}>
            By downloading, installing, or using GitFit, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use the App.
          </p>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Data Storage and Localization</h2>
          <p className={p}><strong className="text-white">Local-first by design (with cloud features when you choose to use them).</strong></p>
          <p className={p}>We have designed GitFit with a "Local-First" privacy architecture.</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">On-device data (offline-first):</strong> GitFit stores your workout history, nutrition logs, daily check-ins, and progress photos locally (SQLite and on-device storage) so the app continues to work offline.</li>
            <li className={li}><strong className="text-white">Apple Health (HealthKit) reads:</strong> When you grant permission, GitFit reads supported HealthKit metrics (e.g., weight, steps, sleep, resting heart rate) to display insights and to populate your on-device daily check-ins.</li>
            <li className={li}><strong className="text-white">Cloud account &amp; sync (Supabase):</strong> If you sign in, GitFit uses Supabase for authentication and (depending on your settings and features you use) to sync/backup selected app data to your account so it can be restored and used across devices. <strong className="text-white">Some cloud features (such as cloud backup) may require a "Support Developer" purchase.</strong></li>
          </ul>

          <h2 className={h2}>Payment and Subscriptions</h2>
          <p className={p}>GitFit is free to use.</p>
          <p className={p}>We also offer an <strong className="text-white">optional one-time in-app purchase</strong> (via Apple's App Store) for users who like the app and want to support the developer.</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">No Subscriptions / No Free Trial:</strong> GitFit does not offer subscriptions or a free trial.</li>
            <li className={li}><strong className="text-white">Support Developer (One-time):</strong> A one-off purchase may be available as a "Support Developer" / "Supporter" purchase. This is optional and does not affect basic access to the App.</li>
            <li className={li}><strong className="text-white">Payment Processing:</strong> Apple processes payments. We do not receive or store your card details.</li>
            <li className={li}><strong className="text-white">Receipt Verification:</strong> To confirm a purchase, the app sends an App Store receipt payload and transaction identifiers to our backend for verification.</li>
          </ul>

          <h2 className={h2}>Data We Collect</h2>
          <p className={p}>We collect the following categories of data:</p>

          <h3 className={h3}>1. Account Information (Stored on Server)</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Email Address:</strong> Required for account creation and account management.</li>
            <li className={li}><strong className="text-white">User ID:</strong> A unique identifier to manage your account and (if you choose to purchase it) your supporter/entitlement status.</li>
            <li className={li}><strong className="text-white">Password (if you use email/password sign-in):</strong> Managed by our authentication provider (Supabase Auth). We do not store your plaintext password.</li>
          </ul>

          <h3 className={h3}>2. Purchase &amp; Supporter/Entitlement Information (Stored on Server)</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Purchase Receipt Data:</strong> Receipt payload sent by the app for verification.</li>
            <li className={li}><strong className="text-white">Transaction Identifiers:</strong> Transaction ID / original transaction ID.</li>
            <li className={li}><strong className="text-white">Cryptographic Purchase Signatures:</strong> Apple-signed transaction data (JWS format) for cryptographic verification of purchases.</li>
            <li className={li}><strong className="text-white">Supporter / Entitlement Status:</strong> Whether your account has a verified supporter purchase (or other entitlement).</li>
            <li className={li}><strong className="text-white">Refund/Revocation Status:</strong> If you receive a refund from Apple, the app automatically detects and processes this, revoking supporter access.</li>
          </ul>

          <h3 className={h3}>3. Health and Fitness Data</h3>
          <p className={p}>With your explicit permission, the App reads the following data from Apple Health to display insights and populate on-device logs:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Weight</strong></li>
            <li className={li}><strong className="text-white">Body Fat Percentage</strong></li>
            <li className={li}><strong className="text-white">Lean Body Mass (Muscle Mass)</strong></li>
            <li className={li}><strong className="text-white">Steps</strong></li>
            <li className={li}><strong className="text-white">Active Energy Burned (Calories)</strong></li>
            <li className={li}><strong className="text-white">Sleep Data</strong> (Asleep, Deep Sleep, Light Sleep, REM Sleep)</li>
            <li className={li}><strong className="text-white">Resting Heart Rate</strong></li>
          </ul>
          <p className={p}>If you enable cloud sync/backup features, some of the resulting fitness metrics you choose to store in GitFit (for example, daily check-ins) may be synced to your account.</p>

          <h3 className={h3}>4. Photos and Media</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Progress Photos:</strong> Stored locally on your device.</li>
            <li className={li}><strong className="text-white">Optional synced photos:</strong> If you attach photos to app data that is configured to sync/backup, GitFit may store a copy (or a link) in cloud storage associated with your account.</li>
          </ul>

          <h3 className={h3}>5. Nutrition &amp; Workout Data</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Food Logs, Meals, and Workouts:</strong> Stored locally for offline use. Depending on features/settings you use, meals and workouts may also be synced to your cloud account.</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>How We Use Your Data</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm my-4">
              <thead>
                <tr>
                  <th className={th}>Purpose</th>
                  <th className={th}>Data Used</th>
                  <th className={th}>Storage Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}><strong className="text-white">Account &amp; Entitlement</strong></td>
                  <td className={td}>Email, User ID, supporter/entitlement status</td>
                  <td className={td}><strong className="text-white">Cloud (Supabase)</strong></td>
                </tr>
                <tr>
                  <td className={td}><strong className="text-white">Fitness Tracking</strong></td>
                  <td className={td}>HealthKit reads; daily check-ins; workouts</td>
                  <td className={td}><strong className="text-white">On-device</strong> (and optional cloud sync for selected data)</td>
                </tr>
                <tr>
                  <td className={td}><strong className="text-white">Progress Photos</strong></td>
                  <td className={td}>Photos</td>
                  <td className={td}><strong className="text-white">On-device</strong> (and optional cloud sync for selected data)</td>
                </tr>
                <tr>
                  <td className={td}><strong className="text-white">Nutrition Tracking</strong></td>
                  <td className={td}>Meals, foods, nutrition targets</td>
                  <td className={td}><strong className="text-white">On-device</strong> (and optional cloud sync for selected data)</td>
                </tr>
                <tr>
                  <td className={td}><strong className="text-white">Purchase Verification</strong></td>
                  <td className={td}>Receipt payload, transaction identifiers</td>
                  <td className={td}><strong className="text-white">Cloud (Supabase Edge Function + database)</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={p}><strong className="text-white">We do NOT use your data for:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}>Advertising or marketing purposes</li>
            <li className={li}>Selling to third parties</li>
            <li className={li}>Building user profiles for ad targeting</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Third-Party Services</h2>
          <p className={p}>We use the following third-party services to operate GitFit:</p>

          <h3 className={h3}>Supabase (Backend &amp; Authentication)</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Purpose:</strong> Cloud database, user authentication, data synchronization.</li>
            <li className={li}><strong className="text-white">Data Shared:</strong> Account information (email, user ID), supporter/entitlement status, and (when features/settings require) synced app data such as workouts, meals, nutrition targets, and daily logs.</li>
            <li className={li}><strong className="text-white">Privacy Policy:</strong> <a href="https://supabase.com/privacy" target="_blank" rel="noopener" className="text-neon-cyan underline">https://supabase.com/privacy</a></li>
          </ul>

          <h3 className={h3}>OpenFoodFacts API</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Purpose:</strong> Food and nutrition database lookups via barcode scanning.</li>
            <li className={li}><strong className="text-white">Data Shared:</strong> Barcode numbers and (if you use search) food search queries. We do not send your account email/password to OpenFoodFacts.</li>
            <li className={li}><strong className="text-white">Privacy Policy:</strong> <a href="https://world.openfoodfacts.org/privacy" target="_blank" rel="noopener" className="text-neon-cyan underline">https://world.openfoodfacts.org/privacy</a></li>
          </ul>

          <h3 className={h3}>Apple Sign-In (Optional)</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Purpose:</strong> Secure social login using your Apple ID.</li>
            <li className={li}><strong className="text-white">Data Shared:</strong> Apple-provided relay email (your real email is never shared with us).</li>
            <li className={li}><strong className="text-white">Privacy Policy:</strong> <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener" className="text-neon-cyan underline">https://www.apple.com/legal/privacy/</a></li>
          </ul>

          <h3 className={h3}>Apple App Store / StoreKit (Purchases)</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Purpose:</strong> In-app purchase processing and purchase restoration.</li>
            <li className={li}><strong className="text-white">Data Shared:</strong> Apple processes payments. GitFit receives verified transaction identifiers and may transmit receipt payloads to our backend for verification.</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Device Permissions (What the App May Access)</h2>
          <p className={p}>GitFit requests device permissions only when needed for the feature you're using:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Health / HealthKit:</strong> Read access to supported health metrics (optional).</li>
            <li className={li}><strong className="text-white">Camera:</strong> Barcode scanning and capturing photos (optional).</li>
            <li className={li}><strong className="text-white">Photos / Media Library:</strong> Selecting and storing progress photos (optional).</li>
            <li className={li}><strong className="text-white">Notifications:</strong> Workout timers and reminders (optional).</li>
            <li className={li}><strong className="text-white">Biometrics (Face ID / Touch ID):</strong> Used only to unlock the app; we do not receive or store your biometric data.</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Apple HealthKit Specifics</h2>
          <p className={p}><strong className="text-white">This section is required for Apple App Store compliance.</strong></p>
          <p className={p}>GitFit integrates with Apple HealthKit to provide comprehensive fitness tracking. We take the privacy of your health data extremely seriously.</p>

          <h3 className={h3}>Our HealthKit Commitments:</h3>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">No Advertising Use:</strong> We do NOT use HealthKit data for advertising purposes. Health data is never used to serve ads, target marketing, or build advertising profiles.</li>
            <li className={li}><strong className="text-white">No Data Sales:</strong> We do NOT sell, lease, or trade your HealthKit data to any third party, including data brokers, advertisers, or analytics companies.</li>
            <li className={li}><strong className="text-white">No Third-Party Disclosure for Marketing:</strong> We do NOT disclose HealthKit data to third parties for their marketing or advertising purposes.</li>
            <li className={li}><strong className="text-white">User Control:</strong> You can revoke HealthKit access at any time through your device's Settings &gt; Privacy &amp; Security &gt; Health &gt; GitFit.</li>
            <li className={li}><strong className="text-white">Minimal Data Collection:</strong> We only request access to the specific health data types necessary for the App's core fitness tracking functionality.</li>
            <li className={li}><strong className="text-white">Data Stays on Device by Default:</strong> Health data is processed on-device. If you enable cloud sync/backup features, some of the fitness metrics you choose to store in GitFit (e.g., daily check-ins) may be synced to your account.</li>
          </ol>

          <h3 className={h3}>HealthKit Data We Access:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}>Weight measurements</li>
            <li className={li}>Body composition (body fat %, lean body mass)</li>
            <li className={li}>Step count</li>
            <li className={li}>Active energy burned</li>
            <li className={li}>Sleep analysis</li>
            <li className={li}>Resting heart rate</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Data Retention</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm my-4">
              <thead>
                <tr>
                  <th className={th}>Data Type</th>
                  <th className={th}>Retention Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>Account &amp; Supporter/Entitlement Data</td>
                  <td className={td}>Until you delete your account (or as required for legal/compliance reasons)</td>
                </tr>
                <tr>
                  <td className={td}>On-device Health/Fitness &amp; Nutrition Data</td>
                  <td className={td}>Until you delete it in the app or uninstall the app</td>
                </tr>
                <tr>
                  <td className={td}>Synced Cloud Data (if enabled/used)</td>
                  <td className={td}>Until you delete your account and/or request deletion, subject to backup/retention windows</td>
                </tr>
                <tr>
                  <td className={td}>Purchase Verification Records</td>
                  <td className={td}>As long as necessary to confirm entitlement and, where required, meet legal/accounting obligations</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={h3}>Account deletion timing</h3>
          <p className={p}>When you delete your account (from within the App), we initiate deletion of your server-stored account data <strong className="text-white">immediately</strong>.</p>
          <p className={p}><strong className="text-white">Important:</strong> As part of the in-app account deletion flow, GitFit also removes on-device app data stored locally (SQLite and app-stored files such as progress photos). If you need to remove on-device data without deleting your cloud account, you can delete data in the App (where available) and/or uninstall the App.</p>
          <p className={p}>In some cases, <strong className="text-white">limited information may be retained</strong> where required by law (for example, accounting, anti-fraud, or compliance obligations). Additionally, some data may persist for a limited time in encrypted backups and operational logs before being purged according to our backup/retention windows.</p>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Data Security</h2>
          <p className={p}>We implement industry-standard security measures to protect your data:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Encryption in Transit:</strong> All data transmitted between the App and our servers uses TLS/SSL encryption.</li>
            <li className={li}><strong className="text-white">Encryption at Rest (Cloud):</strong> We use reputable cloud providers (including Supabase) that support encryption at rest.</li>
            <li className={li}><strong className="text-white">On-device Storage:</strong> Your data is stored locally on your device; your device may encrypt storage depending on your device settings.</li>
            <li className={li}><strong className="text-white">Secure Authentication:</strong> We use secure password hashing and support biometric authentication (Face ID/Touch ID).</li>
            <li className={li}><strong className="text-white">Keychain Storage:</strong> Sensitive credentials are stored in iOS Keychain for maximum security.</li>
            <li className={li}><strong className="text-white">Transport Security:</strong> All data transmitted between the App and our servers uses TLS/SSL encryption.</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Your Rights</h2>
          <p className={p}>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>

          <h3 className={h3}>For All Users:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Access:</strong> Request a copy of the data we hold about you.</li>
            <li className={li}><strong className="text-white">Correction:</strong> Request correction of inaccurate data.</li>
            <li className={li}><strong className="text-white">Deletion:</strong> Request deletion of your account and associated data.</li>
            <li className={li}><strong className="text-white">Data Export:</strong> Export your workout and nutrition data.</li>
          </ul>
          <p className={p}><strong className="text-white">In-app controls:</strong> You can export your on-device data and delete your account from the App's Settings (Privacy &amp; Data).</p>
          <p className={p}><strong className="text-white">Export scope:</strong> Exports include on-device data stored in SQLite (and selected app preferences). Cloud-only purchase verification records and server-side logs are not included.</p>

          <h3 className={h3}>For EU/EEA Residents (GDPR):</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Right to Erasure:</strong> Request deletion of your personal data.</li>
            <li className={li}><strong className="text-white">Right to Restriction:</strong> Request restriction of data processing.</li>
            <li className={li}><strong className="text-white">Right to Portability:</strong> Receive your data in a portable format.</li>
            <li className={li}><strong className="text-white">Right to Object:</strong> Object to certain data processing activities.</li>
            <li className={li}><strong className="text-white">Right to Withdraw Consent:</strong> Withdraw consent at any time.</li>
          </ul>

          <h3 className={h3}>For California Residents (CCPA):</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Right to Know:</strong> Request disclosure of personal information collected.</li>
            <li className={li}><strong className="text-white">Right to Delete:</strong> Request deletion of personal information.</li>
            <li className={li}><strong className="text-white">Right to Opt-Out:</strong> We do not sell personal information, so this right does not apply.</li>
            <li className={li}><strong className="text-white">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
          </ul>
          <p className={p}>To exercise any of these rights, please contact us at <a href="mailto:support@gitfit.health" className="text-neon-cyan underline">support@gitfit.health</a>.</p>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Children's Privacy</h2>
          <p className={p}>GitFit is not intended for use by children under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children. If we discover that a child has provided us with personal information, we will promptly delete it.</p>
          <p className={p}>If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:support@gitfit.health" className="text-neon-cyan underline">support@gitfit.health</a>.</p>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>International Data Transfers</h2>
          <p className={p}>Your data may be transferred to and processed in countries other than your country of residence. When we transfer data internationally, we ensure appropriate safeguards are in place, including:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}>Standard Contractual Clauses (for EU data transfers)</li>
            <li className={li}>Encryption of data in transit and at rest</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Changes to This Privacy Policy</h2>
          <p className={p}>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}>Posting the new Privacy Policy in the App</li>
            <li className={li}>Updating the "Last Updated" date at the top of this document</li>
            <li className={li}>Sending you an email notification (for significant changes)</li>
          </ul>
          <p className={p}>We encourage you to review this Privacy Policy periodically.</p>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Contact Us</h2>
          <p className={p}>If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>
          <p className={p}><strong className="text-white">Lukasz Kowalski (Independent Developer)</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Email:</strong> <a href="mailto:support@gitfit.health" className="text-neon-cyan underline">support@gitfit.health</a></li>
            <li className={li}><strong className="text-white">Website:</strong> <a href="https://gitfit.health" className="text-neon-cyan underline">https://gitfit.health</a></li>
            <li className={li}><strong className="text-white">Mailing Address:</strong> EH320LH Scotland</li>
          </ul>
          <p className={p}>For GDPR/UK GDPR-related inquiries, please contact us at <a href="mailto:support@gitfit.health" className="text-neon-cyan underline">support@gitfit.health</a>.</p>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Additional Disclosures</h2>

          <h3 className={h3}>No Tracking</h3>
          <p className={p}>GitFit does not track you across apps or websites owned by other companies for advertising purposes. Our <code className="text-neon-cyan-soft bg-neon-surface px-1.5 py-0.5 rounded">NSPrivacyTracking</code> is set to <code className="text-neon-cyan-soft bg-neon-surface px-1.5 py-0.5 rounded">false</code>.</p>

          <h3 className={h3}>No Tracking Domains</h3>
          <p className={p}>We do not connect to any internet domains for tracking purposes (we do connect to internet domains for core app functionality such as login, sync, and food lookups).</p>
          <p className={p}><strong className="text-white">Core service domains (non-exhaustive):</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}>Supabase project domains (e.g., <code className="text-neon-cyan-soft bg-neon-surface px-1.5 py-0.5 rounded">*.supabase.co</code>)</li>
            <li className={li}>OpenFoodFacts (<code className="text-neon-cyan-soft bg-neon-surface px-1.5 py-0.5 rounded">world.openfoodfacts.org</code>)</li>
            <li className={li}>Apple receipt verification (<code className="text-neon-cyan-soft bg-neon-surface px-1.5 py-0.5 rounded">buy.itunes.apple.com</code>, <code className="text-neon-cyan-soft bg-neon-surface px-1.5 py-0.5 rounded">sandbox.itunes.apple.com</code>)</li>
          </ul>

          <h3 className={h3}>In-App Purchases</h3>
          <p className={p}>GitFit offers an optional one-time "Support Developer" / "Supporter" in-app purchase processed through Apple's App Store. Apple handles all payment processing; we do not have access to your payment information.</p>

          <hr className="my-8 border-neon-line" />

          <p className="text-neon-muted text-sm italic">
            This Privacy Policy was created for GitFit, a fitness tracking application. For the most current version, please check within the App or on our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
