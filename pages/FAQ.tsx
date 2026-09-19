import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, X, CheckCircle, Mail } from 'lucide-react';
import { SITE } from '../config';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neon-line last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        {isOpen ? <ChevronUp className="text-neon-cyan shrink-0" /> : <ChevronDown className="text-neon-muted shrink-0" />}
      </button>
      {isOpen && (
        <div className="pb-6">
          <div className="text-neon-muted leading-relaxed text-base">{answer}</div>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const faqs: FAQItemProps[] = [
    {
      question: 'Is GitFit really free?',
      answer:
        'Yes — fully free. No subscriptions, no locked features, and no ads. Just results. Download it and use everything.',
    },
    {
      question: 'Which devices does GitFit support?',
      answer:
        'GitFit is available on iPhone, iOS 16 or later. The app is built with Flutter, and syncs health data through Apple Health.',
    },
    {
      question: 'Do I need an account?',
      answer:
        'No. There is no sign-up and no sign-in. GitFit works fully offline and all your data stays on your device — install it and start lifting.',
    },
    {
      question: 'How does Apple Health sync work?',
      answer:
        'With your permission, GitFit reads steps, weight, sleep and energy data from Apple Health. To save battery, automatic syncing runs in two windows: morning (05:00–10:59) and evening (19:00–23:59). You can always sync manually.',
    },
    {
      question: 'Does GitFit work offline?',
      answer:
        'Yes — GitFit is offline-first. Your workouts, meals, check-ins and progress live in an on-device database. You only need a connection for optional cloud sync, food-database lookups and the App Store.',
    },
    {
      question: 'Can I export my data?',
      answer:
        'Yes. You own your data. Export everything as JSON anytime from Settings — and delete it anytime, on the device or from the cloud.',
    },
    {
      question: 'How do I delete my data?',
      answer:
        'Your data lives only on your device. Delete everything via Settings → Privacy & Data, or simply uninstall the app. Depending on your device settings, data may persist in device-level backups (e.g., iCloud) until those are overwritten.',
    },
    {
      question: 'What is included in the workout library?',
      answer:
        '400 exercises with photos and instructions, 17 authored workout templates ("The Iron Standard", "The Booty Blueprint" and more), adaptive programs, and challenges — with more added through updates.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:${SITE.supportEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setShowContactForm(false);
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 2000);
    }, 500);
  };

  return (
    <div className="min-h-screen pt-24 pb-32 relative overflow-hidden">
      <div className="glow-blob w-[400px] h-[400px] bg-neon-purple -top-32 -right-32"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
        <header className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-lg text-neon-muted">Got questions? We've got answers.</p>
        </header>

        <div className="neon-card shadow-glow-card px-8 py-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-neon-muted mb-4">Still have a question?</p>
          <button
            onClick={() => setShowContactForm(true)}
            className="inline-flex items-center gap-2 bg-cta-gradient shadow-glow-cta text-white px-8 py-3 rounded-full font-bold hover:scale-[1.03] transition-transform"
          >
            <Mail className="w-5 h-5" />
            Contact Support
          </button>
        </div>
      </div>

      {/* Contact Form Modal — opens the visitor's mail client (static hosting, no backend) */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="neon-card bg-neon-surface max-w-lg w-full p-8 relative shadow-glow-active">
            <button
              onClick={() => {
                setShowContactForm(false);
                setIsSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
              }}
              className="absolute top-4 right-4 text-neon-muted hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-neon-lime mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Ready!</h3>
                <p className="text-neon-muted">
                  Your email client should open with the message. If not, email us directly at{' '}
                  <a href={`mailto:${SITE.supportEmail}`} className="text-neon-cyan underline">{SITE.supportEmail}</a>
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-2">Contact Support</h2>
                <p className="text-neon-muted mb-6">Fill out the form below — it opens your email app with everything pre-filled. Nothing is sent through a web server.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="faq-name" className="block text-sm font-medium text-neon-muted mb-1">Name</label>
                    <input
                      type="text"
                      id="faq-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-neon bg-neon-bg border border-neon-line focus:border-neon-purple outline-none transition-colors text-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="faq-email" className="block text-sm font-medium text-neon-muted mb-1">Email</label>
                    <input
                      type="email"
                      id="faq-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-neon bg-neon-bg border border-neon-line focus:border-neon-purple outline-none transition-colors text-white"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="faq-subject" className="block text-sm font-medium text-neon-muted mb-1">Subject</label>
                    <input
                      type="text"
                      id="faq-subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-neon bg-neon-bg border border-neon-line focus:border-neon-purple outline-none transition-colors text-white"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="faq-message" className="block text-sm font-medium text-neon-muted mb-1">Message</label>
                    <textarea
                      id="faq-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-neon bg-neon-bg border border-neon-line focus:border-neon-purple outline-none transition-colors text-white resize-none"
                      placeholder="Tell us more about your question or issue..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cta-gradient shadow-glow-cta disabled:opacity-60 text-white py-3 px-6 rounded-full font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    {isSubmitting ? (
                      <span>Opening mail...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                <p className="text-center text-sm text-neon-muted mt-4">
                  Or email us directly at{' '}
                  <a href={`mailto:${SITE.supportEmail}`} className="text-neon-cyan underline">{SITE.supportEmail}</a>
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <div className="text-center mt-14">
        <Link to="/how-to" className="text-neon-cyan hover:underline">New to GitFit? Read the getting-started guide →</Link>
      </div>
    </div>
  );
};

export default FAQ;
