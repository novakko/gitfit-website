
import React, { useState } from 'react';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-8 tracking-tight">Get in touch.</h1>
            <p className="text-xl text-neutral-500 mb-12 leading-relaxed max-w-lg">
              Whether you have a feature request, found a bug, or just want to chat about your PRs, we're all ears.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 p-6 bg-neutral-50 rounded-3xl border border-neutral-100">
                <div className="bg-orange-100 p-4 rounded-2xl">
                  <Mail className="text-orange-600" size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Email Support</p>
                  <p className="text-lg font-bold text-neutral-900">support@gitfit.app</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 p-6 bg-neutral-50 rounded-3xl border border-neutral-100">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <MessageCircle className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Response Time</p>
                  <p className="text-lg font-bold text-neutral-900">Under 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-neutral-100 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <ArrowRight className="text-green-600 rotate-[-45deg]" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-neutral-500">Thanks for reaching out. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-orange-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-neutral-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-neutral-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-neutral-700 mb-2">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  >
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Feedback & Requests</option>
                    <option>Premium Billing</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-neutral-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-neutral-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-neutral-800 transition-all hover:scale-[1.02] shadow-xl"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
