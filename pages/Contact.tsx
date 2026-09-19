import React, { useState } from 'react';
import { Mail, Clock, MapPin, Send } from 'lucide-react';
import { SITE } from '../config';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[gitfit.health] ${formData.subject} — ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${SITE.supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    'w-full px-4 py-3 rounded-neon bg-neon-bg border border-neon-line focus:border-neon-purple outline-none transition-colors text-white placeholder:text-neon-muted/60';

  return (
    <div className="min-h-screen pt-24 pb-32 relative overflow-hidden">
      <div className="glow-blob w-[420px] h-[420px] bg-neon-cyan -top-40 -right-40"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <header className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Get in touch.</h1>
          <p className="text-lg text-neon-muted max-w-2xl mx-auto">
            Questions, feedback, feature ideas — or just want to show off a new PR? We'd love to hear from you.
          </p>
        </header>

        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          <div className="neon-card shadow-glow-card p-6 text-center">
            <Mail className="w-7 h-7 text-neon-cyan mx-auto mb-3" />
            <h2 className="font-bold mb-1">Email</h2>
            <a href={`mailto:${SITE.supportEmail}`} className="text-neon-muted text-sm hover:text-neon-cyan transition-colors break-all">
              {SITE.supportEmail}
            </a>
          </div>
          <div className="neon-card shadow-glow-card p-6 text-center">
            <Clock className="w-7 h-7 text-neon-lime mx-auto mb-3" />
            <h2 className="font-bold mb-1">Response Time</h2>
            <p className="text-neon-muted text-sm">Usually under 24 hours</p>
          </div>
          <div className="neon-card shadow-glow-card p-6 text-center">
            <MapPin className="w-7 h-7 text-neon-magenta mx-auto mb-3" />
            <h2 className="font-bold mb-1">Independent</h2>
            <p className="text-neon-muted text-sm">Built in the UK</p>
          </div>
        </div>

        <div className="neon-card shadow-glow-card p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-neon-muted mb-1.5">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-neon-muted mb-1.5">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-sm font-medium text-neon-muted mb-1.5">Subject</label>
              <select
                id="contact-subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={inputClass}
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Feedback &amp; Ideas</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-neon-muted mb-1.5">Message</label>
              <textarea
                id="contact-message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="What's on your mind?"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cta-gradient shadow-glow-cta text-white font-bold px-8 py-3.5 rounded-full hover:scale-[1.02] transition-transform"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>

            <p className="text-neon-muted text-sm">
              This form opens your email app with everything pre-filled — nothing is sent through a web server,
              so your message never touches our infrastructure.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
