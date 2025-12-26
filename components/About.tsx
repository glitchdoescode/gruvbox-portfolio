'use client';

import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Main description */}
          <div className="gruvbox-card">
            <div className="font-mono text-sm text-gruvbox-orange mb-4">
              <span className="text-gruvbox-fg4">$</span> cat about.txt
            </div>

            <div className="space-y-4 text-gruvbox-fg2">
              <p>
                AI & Infrastructure Engineer specializing in building scaled distributed systems for <span className="text-gruvbox-orange font-mono">Production GenAI</span> applications.
                Experienced in architecting fault-tolerant <span className="text-gruvbox-orange font-mono">Backend Solutions</span> using
                <span className="text-gruvbox-orange font-mono"> FastAPI</span>, managing cloud infrastructure with
                <span className="text-gruvbox-orange font-mono"> Terraform</span>, and optimizing high-throughput AI systems.
              </p>

              <p>
                Prev. served as <span className="text-gruvbox-green font-semibold">Founding AI Engineer at FIKA AI</span>,
                where I architected a <span className="text-gruvbox-yellow font-bold">distributed microservices platform</span> leveraging
                Redis Pub/Sub for zero-downtime hot-reloads and Google Cloud Pub/Sub for event-driven workflows.
              </p>

              <p>
                Active contributor to <span className="text-gruvbox-aqua font-bold">Red Hen Lab</span> (Case Western Reserve University)
                on cognitive science research and <span className="text-gruvbox-purple font-bold">IIT Hyderabad</span> on
                computer vision for warzone object detection with Detectron2.
              </p>
            </div>
          </div>

          {/* Right: Quick Stats */}
          <div className="space-y-4">
            <div className="gruvbox-card">
              <div className="font-mono text-sm text-gruvbox-orange mb-4">
                <span className="text-gruvbox-fg4">$</span> ls -la achievements/
              </div>

              <div className="space-y-3 text-gruvbox-fg2 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-gruvbox-yellow">●</span>
                  <div>
                    <p className="text-gruvbox-fg0 font-semibold">1,619+ Contributions (2025)</p>
                    <p className="text-gruvbox-fg4 text-xs">676+ commits @ FIKA AI</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-gruvbox-aqua">●</span>
                  <div>
                    <p className="text-gruvbox-fg0 font-semibold">Red Hen Lab Contributor</p>
                    <p className="text-gruvbox-fg4 text-xs">Cognitive science & multimodal research</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-gruvbox-green">●</span>
                  <div>
                    <p className="text-gruvbox-fg0 font-semibold">4th Place AI-for-Good</p>
                    <p className="text-gruvbox-fg4 text-xs">Multi-agent healthcare platform</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-gruvbox-orange">●</span>
                  <div>
                    <p className="text-gruvbox-fg0 font-semibold">1,574+ GitHub Contributions</p>
                    <p className="text-gruvbox-fg4 text-xs">Open source & production work</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gruvbox-card">
              <div className="font-mono text-sm text-gruvbox-orange mb-4">
                <span className="text-gruvbox-fg4">$</span> echo $CONTACT
              </div>

              <div className="space-y-2 text-gruvbox-fg2 font-mono text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-gruvbox-orange">@</span>
                  <a href="mailto:dks91@case.edu" className="hover:text-gruvbox-orange transition-colors">
                    dks91@case.edu
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-gruvbox-orange">github:</span>
                  <a
                    href="https://github.com/glitchdoescode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gruvbox-orange transition-colors"
                  >
                    /glitchdoescode
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-12 gruvbox-card border-gruvbox-yellow">
          <div className="font-mono text-sm text-gruvbox-yellow mb-6">
            <span className="text-gruvbox-fg4">$</span> cat achievements.log
          </div>

          <div className="space-y-3 text-gruvbox-fg2">
            <div className="flex items-start gap-3">
              <span className="text-gruvbox-yellow">●</span>
              <p>
                <span className="text-gruvbox-fg0 font-semibold">4th Place</span> in AI-for-Good Hackathon developing Rakht Setu - an agentic AI blood donation platform using LangGraph multi-agent architecture, reducing donor-patient matching time by 40%
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-gruvbox-orange">●</span>
              <p>
                Co-authored research paper <span className="text-gruvbox-fg0 font-semibold">"Frame Blending Is Essential For Advancing Creative Generative AI"</span> with renowned cognitive scientist Prof. Mark Turner at Red Hen Lab
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-gruvbox-green">●</span>
              <p>
                Selected for <span className="text-gruvbox-fg0 font-semibold">Smart India Hackathon (SIH) 2024</span> and <span className="text-gruvbox-fg0 font-semibold">Top 10 at The Great India Hackathon - Jabalpur</span> with innovative healthcare projects
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-gruvbox-aqua">●</span>
              <p>
                Participated in <span className="text-gruvbox-fg0 font-semibold">UC Berkeley RDI's LLM Agents MOOC Hackathon</span>, developing ScheduleBot AI scheduling agent
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-gruvbox-purple">●</span>
              <p>
                Maintained <span className="text-gruvbox-fg0 font-semibold">1,619+ GitHub contributions</span> in 2025, demonstrating sustained commitment to software development and open source
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
