
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
      answer: "No. We believe in ownership. Premium features are unlocked via a one-time in-app purchase. Pay once, use forever."
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
          <a href="/contact" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
