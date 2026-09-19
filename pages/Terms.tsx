
import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight text-center">GitFit Terms of Service</h1>
          <p className="text-lg text-neon-muted text-center"><strong className="text-white">Last Updated:</strong> 19 September 2026 &nbsp;|&nbsp; <strong className="text-white">Effective Date:</strong> 19 September 2026</p>
        </header>

        <div className="prose prose-neutral max-w-none prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-p:text-neon-muted prose-p:leading-relaxed prose-li:text-neon-muted prose-strong:text-white prose-table:text-sm">
          
          <hr className="my-8 border-neon-line" />

          <h2>1. Agreement to Terms</h2>
          <p>
            By downloading, installing, accessing, or using GitFit ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
          </p>
          <p>
            These Terms constitute a legally binding agreement between you and GitFit ("we," "us," or "our"). We reserve the right to modify these Terms at any time. Continued use of the App after modifications constitutes acceptance of the revised Terms.
          </p>

          <hr className="my-8 border-neon-line" />

          <h2>2. Eligibility</h2>
          <p>
            GitFit is not intended for children. You must be at least <strong>13 years old</strong> to use GitFit (or <strong>16 years old</strong> if you reside in the UK/EEA). By using the App, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You meet the minimum age requirement in your country/region.</li>
            <li>You have the legal capacity to enter into a binding agreement.</li>
            <li>Your use of the App does not violate any applicable law or regulation.</li>
          </ul>
          <p>If you do not meet the minimum age requirement, you may not use GitFit.</p>

          <hr className="my-8 border-neon-line" />

          <h2>3. Description of Service</h2>
          <p>GitFit is a fitness tracking application that provides:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Workout Tracking:</strong> Create, log, and track workout sessions and exercises.</li>
            <li><strong>Nutrition Tracking:</strong> Log food intake, meals, and macronutrients. Barcode scanning functionality uses the OpenFoodFacts database.</li>
            <li><strong>Progress Monitoring:</strong> Track body measurements, weight, and other health metrics.</li>
            <li><strong>Progress Photos:</strong> Capture and store progress photos locally on your device.</li>
            <li><strong>Daily Check-ins:</strong> Record daily health data including weight, sleep, steps, and mood.</li>
            <li><strong>Apple HealthKit Integration:</strong> Read health data from Apple Health (with your permission).</li>
            <li><strong>Offline-First Storage:</strong> All data is stored locally on your device. No account is required.</li>
          </ul>
          <p>The App is designed for personal fitness tracking purposes only.</p>

          <hr className="my-8 border-neon-line" />

          <h2>4. No Account Required</h2>
          <p>GitFit does not require an account. There is no sign-up or sign-in, and the App works fully offline.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your data is stored locally on your device and is not transmitted to us.</li>
            <li>You can delete all App data at any time via the App's Settings (Privacy &amp; Data), or by uninstalling the App.</li>
          </ul>
          <p>Note: depending on your device settings, data may still exist in device-level backups (e.g., iCloud backups) until those backups are overwritten or deleted.</p>

          <hr className="my-8 border-neon-line" />

          <h2>5. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the App for any unlawful purpose.</li>
            <li>Attempt to gain unauthorized access to any portion of the App or its systems.</li>
            <li>Interfere with or disrupt the App or the gitfit.health website infrastructure.</li>
            <li>Reverse engineer, decompile, or disassemble any part of the App.</li>
            <li>Use the App to transmit malware, viruses, or other malicious code.</li>
            <li>Impersonate any person or entity.</li>
            <li>Use automated scripts to collect information from or interact with the App.</li>
            <li>Circumvent, disable, or interfere with security-related features.</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2>6. Price and Purchases</h2>
          <p>GitFit is fully free. There are no subscriptions, no in-app purchases, and no ads.</p>
          <p>If we ever introduce paid features, the terms and pricing will be disclosed clearly in the App and in these Terms before you are charged.</p>

          <hr className="my-8 border-neon-line" />

          <h2>7. Intellectual Property</h2>

          <h3>7.1 Ownership</h3>
          <p>The App, including all content, features, functionality, design, graphics, code, and trademarks, is owned by us and protected by copyright, trademark, and other intellectual property laws.</p>

          <h3>7.2 Limited License</h3>
          <p>We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes in accordance with these Terms.</p>

          <h3>7.3 Restrictions</h3>
          <p>You may not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Copy, modify, or distribute the App.</li>
            <li>Use the App's name, logo, or trademarks without written permission.</li>
            <li>Remove any copyright or proprietary notices from the App.</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2>8. User Content</h2>

          <h3>8.1 Your Data</h3>
          <p>You retain ownership of all data you input into the App, including workout logs, nutrition data, and progress photos.</p>

          <h3>8.2 No License Needed</h3>
          <p>Because your data stays on your device, you do not grant us any license to it. We never receive, store, or process your training data.</p>

          <h3>8.3 Responsibility</h3>
          <p>You are solely responsible for the content you upload or input. You represent that you have all necessary rights to such content.</p>

          <hr className="my-8 border-neon-line" />

          <h2>9. Third-Party Services</h2>
          <p>The App integrates with third-party services:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-neon-line my-4">
              <thead>
                <tr className="bg-neutral-50">
                  <th className="border border-neon-line px-4 py-2 text-left">Service</th>
                  <th className="border border-neon-line px-4 py-2 text-left">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neon-line px-4 py-2">OpenFoodFacts</td>
                  <td className="border border-neon-line px-4 py-2">Food and nutrition database lookups</td>
                </tr>
                <tr>
                  <td className="border border-neon-line px-4 py-2">Apple HealthKit</td>
                  <td className="border border-neon-line px-4 py-2">Health data integration</td>
                </tr>
                <tr>
                  <td className="border border-neon-line px-4 py-2">Apple App Store</td>
                  <td className="border border-neon-line px-4 py-2">App distribution and updates</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Your use of these services is subject to their respective terms and privacy policies. We are not responsible for third-party service availability, accuracy, or conduct.</p>

          <hr className="my-8 border-neon-line" />

          <h2>10. Health Disclaimer</h2>
          <p><strong>GitFit is not a medical device and does not provide medical advice.</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The App is intended for general fitness tracking and informational purposes only.</li>
            <li>Data displayed, including metrics from Apple HealthKit, should not be used for medical diagnosis or treatment.</li>
            <li>Always consult a qualified healthcare professional before starting any exercise or nutrition program.</li>
            <li>We do not guarantee the accuracy of calorie calculations, nutritional information, or health metrics.</li>
            <li>You use the App and act on its data at your own risk.</li>
          </ul>
          <p>If you have a medical condition, injury, or health concern, seek professional medical advice before using the App.</p>

          <hr className="my-8 border-neon-line" />

          <h2>11. Disclaimers</h2>

          <h3>11.1 "As Is" Provision</h3>
          <p className="uppercase text-sm">
            THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO: IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY OR COMPLETENESS OF CONTENT.
          </p>

          <h3>11.2 No Guarantee</h3>
          <p>We do not warrant that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The App will be uninterrupted, secure, or error-free.</li>
            <li>Defects will be corrected.</li>
            <li>The App or servers are free of viruses or harmful components.</li>
            <li>Results from using the App will meet your expectations.</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2>12. Limitation of Liability</h2>
          <p className="uppercase text-sm">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW: WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. WE SHALL NOT BE LIABLE FOR ANY LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES. OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM YOUR USE OF THE APP SHALL NOT EXCEED £50 GBP.
          </p>
          <p>This limitation applies regardless of the legal theory (contract, tort, strict liability, or otherwise) and even if we have been advised of the possibility of such damages.</p>
          <p>Nothing in these Terms limits or excludes liability that cannot be limited or excluded under applicable law (for example, liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation).</p>

          <hr className="my-8 border-neon-line" />

          <h2>13. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless GitFit, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your use of the App.</li>
            <li>Your violation of these Terms.</li>
            <li>Your violation of any third-party rights.</li>
            <li>Your user content.</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2>14. Termination</h2>

          <h3>14.1 By You</h3>
          <p>You may stop using the App at any time by deleting your data via the App's Settings (Privacy &amp; Data) and uninstalling the App.</p>

          <h3>14.2 By Us</h3>
          <p>We may suspend or terminate your access to the App at any time, with or without cause, with or without notice. Grounds for termination include, but are not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violation of these Terms.</li>
            <li>Fraudulent or illegal activity.</li>
            <li>Conduct harmful to other users or the App.</li>
          </ul>

          <h3>14.3 Effect of Termination</h3>
          <p>Upon termination:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your license to use the App ends immediately.</li>
            <li>Provisions that by their nature should survive (including Sections 7, 10, 11, 12, 13, and 16) will remain in effect.</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2>15. Changes to the App</h2>
          <p>We reserve the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modify, suspend, or discontinue the App (or any part thereof) at any time.</li>
            <li>Change features, functionality, or content without notice.</li>
            <li>Update these Terms as necessary.</li>
          </ul>
          <p>We are not liable to you or any third party for any modification, suspension, or discontinuation.</p>

          <hr className="my-8 border-neon-line" />

          <h2>16. Governing Law and Dispute Resolution</h2>

          <h3>16.1 Governing Law</h3>
          <p>These Terms are governed by and construed in accordance with the laws of Scotland.</p>

          <h3>16.2 Dispute Resolution</h3>
          <p>We encourage you to contact us first at <a href="mailto:support@gitfit.health" className="text-neon-cyan underline">support@gitfit.health</a> so we can try to resolve any issue informally.</p>
          <p>If a dispute cannot be resolved informally, the courts of Scotland will have jurisdiction, except where mandatory consumer-protection laws in your country/region give you the right to bring proceedings in your local courts.</p>

          <hr className="my-8 border-neon-line" />

          <h2>17. Apple-Specific Terms</h2>
          <p>If you access the App through the Apple App Store, you acknowledge:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>These Terms are between you and GitFit, not Apple Inc.</li>
            <li>Apple has no obligation to provide maintenance or support for the App.</li>
            <li>Apple is not responsible for addressing any claims relating to the App.</li>
            <li>In the event of any third-party intellectual property claim, GitFit, not Apple, is solely responsible.</li>
            <li>Apple and its subsidiaries are third-party beneficiaries of these Terms. Upon your acceptance, Apple has the right to enforce these Terms against you.</li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2>18. Severability</h2>
          <p>If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.</p>

          <hr className="my-8 border-neon-line" />

          <h2>19. Entire Agreement</h2>
          <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and GitFit regarding the use of the App. These Terms supersede all prior agreements, representations, and understandings.</p>

          <hr className="my-8 border-neon-line" />

          <h2>20. Waiver</h2>
          <p>Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by us.</p>

          <hr className="my-8 border-neon-line" />

          <h2>21. Assignment</h2>
          <p>You may not assign or transfer these Terms or your rights under these Terms without our prior written consent. We may assign these Terms without restriction.</p>

          <hr className="my-8 border-neon-line" />

          <h2>22. Contact Information</h2>
          <p>For questions or concerns regarding these Terms, contact us:</p>
          <p><strong>GitFit (Independent Developer)</strong></p>
          <ul className="list-none pl-0 space-y-1">
            <li><strong>Email:</strong> <a href="mailto:support@gitfit.health" className="text-neon-cyan underline">support@gitfit.health</a></li>
            <li><strong>Website:</strong> <a href="https://gitfit.health" className="text-neon-cyan underline">https://gitfit.health</a></li>
          </ul>

          <hr className="my-8 border-neon-line" />

          <h2>23. Privacy</h2>
          <p>Your use of the App is also governed by our <Link to="/privacy" className="text-neon-cyan underline">Privacy Policy</Link>. By using the App, you consent to our collection and use of data as described in the Privacy Policy.</p>

          <hr className="my-8 border-neon-line" />

          <p className="text-sm text-neon-muted italic text-center">These Terms of Service were created for GitFit. For the most current version, please check within the App or on our website.</p>

        </div>
      </div>
    </div>
  );
};

export default Terms;
