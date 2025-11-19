'use client';

import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto link as fallback
    window.location.href = `mailto:dks91@case.edu?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Contact Form */}
          <div className="gruvbox-card">
            <div className="font-mono text-sm text-gruvbox-orange mb-6">
              <span className="text-gruvbox-fg4">$</span> vim message.txt
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gruvbox-fg3 font-mono text-sm mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gruvbox-bg2 border-2 border-gruvbox-bg3 rounded text-gruvbox-fg focus:border-gruvbox-orange focus:outline-none font-mono"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-gruvbox-fg3 font-mono text-sm mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gruvbox-bg2 border-2 border-gruvbox-bg3 rounded text-gruvbox-fg focus:border-gruvbox-orange focus:outline-none font-mono"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gruvbox-fg3 font-mono text-sm mb-2">
                  Message:
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 bg-gruvbox-bg2 border-2 border-gruvbox-bg3 rounded text-gruvbox-fg focus:border-gruvbox-orange focus:outline-none font-mono resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <button type="submit" className="gruvbox-button w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info & Social */}
          <div className="space-y-6">
            <div className="gruvbox-card">
              <div className="font-mono text-sm text-gruvbox-orange mb-6">
                <span className="text-gruvbox-fg4">$</span> cat contact-info.json
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-2xl text-gruvbox-orange" />
                  <div>
                    <p className="text-gruvbox-fg4 font-mono text-xs">Email</p>
                    <a
                      href="mailto:dks91@case.edu"
                      className="text-gruvbox-fg hover:text-gruvbox-orange transition-colors font-mono"
                    >
                      dks91@case.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhone className="text-2xl text-gruvbox-orange" />
                  <div>
                    <p className="text-gruvbox-fg4 font-mono text-xs">Phone</p>
                    <a
                      href="tel:+919179687775"
                      className="text-gruvbox-fg hover:text-gruvbox-orange transition-colors font-mono"
                    >
                      +91 9179687775
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaGithub className="text-2xl text-gruvbox-orange" />
                  <div>
                    <p className="text-gruvbox-fg4 font-mono text-xs">GitHub</p>
                    <a
                      href="https://github.com/glitchdoescode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gruvbox-fg hover:text-gruvbox-orange transition-colors font-mono"
                    >
                      /glitchdoescode
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="gruvbox-card">
              <div className="font-mono text-sm text-gruvbox-orange mb-4">
                <span className="text-gruvbox-fg4">$</span> echo $STATUS
              </div>

              <div className="space-y-3 text-gruvbox-fg2">
                <p className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-gruvbox-green rounded-full animate-pulse"></span>
                  <span className="font-mono text-sm">Available for opportunities</span>
                </p>
                <p className="text-sm text-gruvbox-fg3">
                  Open to roles in AI/ML Engineering, Multi-Agent Systems, and Production GenAI Applications.
                </p>
              </div>
            </div>

            <div className="gruvbox-card bg-gruvbox-bg2">
              <p className="text-center text-gruvbox-fg3 font-mono text-sm">
                © 2025 Deepak Kumar Soni
                <br />
                <span className="text-gruvbox-orange">Built with Next.js + Gruvbox Theme</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
