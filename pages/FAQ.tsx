
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Send, X, CheckCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="text-lg font-semibold text-neutral-900">{question}</span>
        {isOpen ? <ChevronUp className="text-neutral-400" /> : <ChevronDown className="text-neutral-400" />}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-neutral-600 leading-relaxed text-base">{answer}</p>
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

  const faqs = [
    {
      question: "Is GitFit available on Android?",
      answer: "Currently, GitFit is exclusive to iOS to provide the deepest possible integration with HealthKit and Apple's native security features."
    },
    {
      question: "How does the HealthKit integration work?",
      answer: "GitFit reads data like weight, steps, and active calories from Apple Health and displays them in your dashboard. You can also write workout data back to Apple Health to close your rings."
    },
    {
      question: "Can I export my data?",
      answer: "Yes. You own your data. We provide a JSON export feature in the settings so you can take your logs elsewhere if you ever choose to."
    },
    {
      question: "Is there a monthly subscription?",
      answer: "No. We believe in ownership. The app is free to use. If you want to support development, there's a one-time Supporter purchase available."
    },
    {
      question: "Does the food database support UK products?",
      answer: "Yes, we prioritize OpenFoodFacts data and specific UK government nutritional databases to ensure accuracy for our UK and EU users."
    },
    {
      question: "How do I delete my account?",
      answer: "If you've created a cloud-synced account, you can find the 'Delete Account' option at the bottom of the Settings tab. This will permanently remove your data from our Supabase servers."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const mailtoLink = `mailto:support@gitfit.health?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Show success state after a brief delay
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
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-neutral-900 mb-4 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-lg text-neutral-500">Got questions? We've got answers.</p>
        </header>

        <div className="bg-neutral-50 rounded-[2.5rem] px-8 py-4 border border-neutral-100 shadow-sm">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-neutral-500 mb-4">Still have a question?</p>
          <button 
            onClick={() => setShowContactForm(true)}
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-colors"
          >
            Contact Support
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl">
            <button 
              onClick={() => {
                setShowContactForm(false);
                setIsSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
              }}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Message Ready!</h3>
                <p className="text-neutral-600">Your email client should open with the message. If not, email us directly at support@gitfit.health</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">Contact Support</h2>
                <p className="text-neutral-500 mb-6">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all resize-none"
                      placeholder="Tell us more about your question or issue..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all"
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
                
                <p className="text-center text-sm text-neutral-400 mt-4">
                  Or email us directly at <a href="mailto:support@gitfit.health" className="text-orange-600 underline">support@gitfit.health</a>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
