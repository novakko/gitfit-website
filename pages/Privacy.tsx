
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
          <p className="text-lg text-neon-muted text-center"><strong className="text-white">Last Updated:</strong> 19 September 2026 &nbsp;|&nbsp; <strong className="text-white">Effective Date:</strong> 19 September 2026</p>
        </header>

        <div className="max-w-none">
          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Introduction</h2>
          <p className={p}>
            Welcome to GitFit ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience when using our fitness tracking application ("App"). This Privacy Policy explains how we handle your information when you use GitFit.
          </p>
          <p className={p}>
            By downloading, installing, or using GitFit, you agree to the practices described in this policy. If you do not agree with our policies and practices, please do not use the App.
          </p>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Local-First by Design</h2>
          <p className={p}><strong className="text-white">Your data lives on your device. There are no GitFit accounts and no GitFit servers holding your training data.</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">On-device storage (offline-first):</strong> GitFit stores your workout history, nutrition logs, daily check-ins, and progress photos locally on your device (SQLite and on-device storage), so the app works fully offline.</li>
            <li className={li}><strong className="text-white">No account required:</strong> There is no sign-up and no sign-in. GitFit works the moment you install it.</li>
            <li className={li}><strong className="text-white">Apple Health (HealthKit) reads:</strong> When you grant permission, GitFit reads supported HealthKit metrics (e.g., weight, steps, sleep, resting heart rate) to display insights and populate your daily check-ins. This data stays on your device.</li>
          </ul>

          <h2 className={h2}>Price</h2>
          <p className={p}>GitFit is fully free. There are no subscriptions, no in-app purchases, and no ads.</p>

          <h2 className={h2}>Data We Handle</h2>
          <p className={p}>GitFit keeps everything on your device. The following categories of data exist only there, unless you export or share them yourself:</p>

          <h3 className={h3}>1. Health and Fitness Data</h3>
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

          <h3 className={h3}>2. Photos and Media</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Progress Photos:</strong> Stored locally on your device and never uploaded anywhere.</li>
          </ul>

          <h3 className={h3}>3. Nutrition &amp; Workout Data</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Food Logs, Meals, and Workouts:</strong> Stored locally for offline use.</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>How Your Data Is Used</h2>
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
                  <td className={td}><strong className="text-white">Fitness Tracking</strong></td>
                  <td className={td}>HealthKit reads; daily check-ins; workouts</td>
                  <td className={td}><strong className="text-white">On-device only</strong></td>
                </tr>
                <tr>
                  <td className={td}><strong className="text-white">Progress Photos</strong></td>
                  <td className={td}>Photos</td>
                  <td className={td}><strong className="text-white">On-device only</strong></td>
                </tr>
                <tr>
                  <td className={td}><strong className="text-white">Nutrition Tracking</strong></td>
                  <td className={td}>Meals, foods, nutrition targets</td>
                  <td className={td}><strong className="text-white">On-device only</strong></td>
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
          <p className={p}>GitFit integrates with the following third-party services:</p>

          <h3 className={h3}>OpenFoodFacts API</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Purpose:</strong> Food and nutrition database lookups via barcode scanning.</li>
            <li className={li}><strong className="text-white">Data Shared:</strong> Barcode numbers and (if you use search) food search queries. These lookups are not linked to you — no account, device identifier, or personal data is sent.</li>
            <li className={li}><strong className="text-white">Privacy Policy:</strong> <a href="https://world.openfoodfacts.org/privacy" target="_blank" rel="noopener" className="text-neon-cyan underline">https://world.openfoodfacts.org/privacy</a></li>
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
            <li className={li}><strong className="text-white">Data Stays on Device:</strong> Health data is processed on-device and never leaves your device through GitFit.</li>
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
                  <td className={td}>On-device Health/Fitness &amp; Nutrition Data</td>
                  <td className={td}>Until you delete it in the app or uninstall the app</td>
                </tr>
                <tr>
                  <td className={td}>Progress Photos</td>
                  <td className={td}>Until you delete them or uninstall the app</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={h3}>Deleting your data</h3>
          <p className={p}>You can delete your data at any time from the App's Settings (Privacy &amp; Data), which removes the local database and app-stored files such as progress photos. Uninstalling the App also removes all on-device GitFit data.</p>
          <p className={p}><strong className="text-white">Note:</strong> depending on your device settings, data may still exist in device-level backups (e.g., iCloud backups) until those backups are overwritten or deleted.</p>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Data Security</h2>
          <p className={p}>We implement industry-standard security measures to protect your data:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">On-device Storage:</strong> Your data is stored locally on your device; your device may encrypt storage depending on your device settings.</li>
            <li className={li}><strong className="text-white">Encryption in Transit:</strong> The App's limited network requests (e.g., food-database lookups) use TLS/SSL encryption.</li>
            <li className={li}><strong className="text-white">Secure Authentication:</strong> Biometric authentication (Face ID/Touch ID) can lock the App.</li>
            <li className={li}><strong className="text-white">Keychain Storage:</strong> Sensitive credentials are stored in iOS Keychain for maximum security.</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Your Rights</h2>
          <p className={p}>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>

          <h3 className={h3}>For All Users:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}><strong className="text-white">Access:</strong> All GitFit data is on your device and visible in the App.</li>
            <li className={li}><strong className="text-white">Correction:</strong> Edit any entry in the App.</li>
            <li className={li}><strong className="text-white">Deletion:</strong> Delete data in the App or uninstall it.</li>
            <li className={li}><strong className="text-white">Data Export:</strong> Export your data as JSON from the App's Settings.</li>
          </ul>

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
          <p className={p}>GitFit does not operate servers that store your data. The only outbound requests are food-database lookups to OpenFoodFacts (<a href="https://world.openfoodfacts.org/privacy" target="_blank" rel="noopener" className="text-neon-cyan underline">world.openfoodfacts.org</a>), which are not linked to you.</p>

          <hr className="my-8 border-neon-line" />

          <h2 className={h2}>Changes to This Privacy Policy</h2>
          <p className={p}>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}>Posting the new Privacy Policy in the App</li>
            <li className={li}>Updating the "Last Updated" date at the top of this document</li>
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
          <p className={p}>We do not connect to any internet domains for tracking purposes. The only internet domains the App connects to serve core functionality such as food lookups.</p>
          <p className={p}><strong className="text-white">Core service domains (non-exhaustive):</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}>OpenFoodFacts (<code className="text-neon-cyan-soft bg-neon-surface px-1.5 py-0.5 rounded">world.openfoodfacts.org</code>)</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <p className="text-neon-muted text-sm italic">
            This Privacy Policy applies to GitFit, a fitness tracking application. For the most current version, please check within the App or on our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
