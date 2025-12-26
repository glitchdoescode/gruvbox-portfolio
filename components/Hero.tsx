'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="terminal-border bg-gruvbox-bg max-w-4xl w-full p-8 md:p-12 relative">
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-8 pb-4 border-b border-gruvbox-bg3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-gruvbox-red"></div>
            <div className="w-3 h-3 rounded-full bg-gruvbox-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-gruvbox-green"></div>
          </div>
          <span className="text-gruvbox-fg4 font-mono text-sm ml-4">~/deepak-kumar-soni</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="font-mono text-sm text-gruvbox-orange mb-2">
              <span className="text-gruvbox-fg4">$</span> whoami
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gruvbox-fg0 leading-tight">
              DEEPAK KUMAR SONI
            </h1>

            <p className="text-xl md:text-2xl text-gruvbox-orange font-mono uppercase tracking-wide">
              Backend & AI Engineer
            </p>

            <div className="space-y-2 text-gruvbox-fg2 font-mono text-sm">
              <p className="flex items-center gap-2">
                <span className="text-gruvbox-orange">&gt;</span>
                Founding Backend & AI Engineer @ FIKA AI
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gruvbox-orange">&gt;</span>
                1,619+ contributions in 2025
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gruvbox-orange">&gt;</span>
                Contributor @ Red Hen Lab
              </p>
            </div>

            <div className="pt-4 flex gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="gruvbox-button"
              >
                View Work
              </button>
              <a
                href="https://drive.google.com/file/d/1YlLVS3k1IZAflh-L6iE41vR-d5C8UdVi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="gruvbox-button"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full border-4 border-gruvbox-orange overflow-hidden box-glow">
                <img
                  src="/deepak.png"
                  alt="Deepak Kumar Soni"
                  className="w-full h-full object-cover scale-[2.2] object-[center_20%]"
                />
              </div>

              {/* Terminal cursor effect */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-4 border-gruvbox-orange rounded-full flex items-center justify-center bg-gruvbox-bg0">
                <span className="text-gruvbox-orange font-mono text-2xl animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gruvbox-fg4 font-mono text-xs">scroll</span>
            <div className="w-6 h-10 border-2 border-gruvbox-orange rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-gruvbox-orange rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
