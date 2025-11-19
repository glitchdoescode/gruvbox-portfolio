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
              AI Engineer, Multi-Agent Systems
            </p>

            <div className="space-y-2 text-gruvbox-fg2 font-mono text-sm">
              <p className="flex items-center gap-2">
                <span className="text-gruvbox-orange">&gt;</span>
                Founding Engineer @ FIKA AI
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gruvbox-orange">&gt;</span>
                676+ commits in 2025
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gruvbox-orange">&gt;</span>
                NeurIPS 2025 Researcher
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="gruvbox-button"
              >
                View Work
              </button>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full border-4 border-gruvbox-orange overflow-hidden box-glow">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-gruvbox-bg2 to-gruvbox-bg3 flex items-center justify-center">
                  <span className="text-6xl text-gruvbox-orange font-mono">DKS</span>
                </div>
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
