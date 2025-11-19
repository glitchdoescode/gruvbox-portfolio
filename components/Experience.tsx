'use client';

import React from 'react';
import { FaRobot, FaCode, FaServer, FaBrain, FaDatabase, FaCloud } from 'react-icons/fa';

const experiences = [
  {
    icon: <FaRobot className="text-3xl" />,
    title: 'LangGraph Multi-Agent',
    description: '676+ commits building serverless workflow automation',
  },
  {
    icon: <FaBrain className="text-3xl" />,
    title: 'AI Research',
    description: 'NeurIPS 2025 paper on cognitive AI systems',
  },
  {
    icon: <FaServer className="text-3xl" />,
    title: 'Production Systems',
    description: 'FastAPI microservices with 71% test coverage',
  },
  {
    icon: <FaDatabase className="text-3xl" />,
    title: 'Multi-Tenant Architecture',
    description: 'PostgreSQL RLS, Qdrant, Redis hot-reload',
  },
  {
    icon: <FaCloud className="text-3xl" />,
    title: 'Cloud Infrastructure',
    description: 'GCP, Kubernetes, Docker, Terraform',
  },
  {
    icon: <FaCode className="text-3xl" />,
    title: 'RAG Pipelines',
    description: '1M+ tokens/month with ChromaDB & Gemini',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="section-title">My Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="gruvbox-card group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-lg border-2 border-gruvbox-orange flex items-center justify-center text-gruvbox-orange group-hover:bg-gruvbox-orange group-hover:text-gruvbox-bg0 transition-all duration-300">
                  {exp.icon}
                </div>

                <h3 className="text-lg font-bold text-gruvbox-fg0 font-mono">
                  {exp.title}
                </h3>

                <p className="text-sm text-gruvbox-fg3">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Work Experience Timeline */}
        <div className="mt-16 space-y-6">
          <div className="font-mono text-sm text-gruvbox-orange mb-6">
            <span className="text-gruvbox-fg4">$</span> git log --all --decorate --oneline --graph
          </div>

          <div className="space-y-4">
            {/* FIKA */}
            <div className="gruvbox-card border-l-4 border-gruvbox-orange">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gruvbox-fg0">FIKA AI Research Lab</h3>
                  <p className="text-gruvbox-orange font-mono">Founding Engineer</p>
                </div>
                <span className="text-gruvbox-fg4 font-mono text-sm">Oct 2024 - Present</span>
              </div>
              <ul className="space-y-2 text-sm text-gruvbox-fg2 list-disc list-inside">
                <li>Contributed 676+ commits architecting serverless platform with LangGraph</li>
                <li>Multi-tenant architecture with PostgreSQL RLS, Qdrant, Redis hot-reload</li>
                <li>AI conversational agents with Gemini + 71% test coverage</li>
              </ul>
            </div>

            {/* Shunya.ek */}
            <div className="gruvbox-card border-l-4 border-gruvbox-aqua">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gruvbox-fg0">Shunya.ek</h3>
                  <p className="text-gruvbox-aqua font-mono">SDE Intern</p>
                </div>
                <span className="text-gruvbox-fg4 font-mono text-sm">May 2024 - Sept 2024</span>
              </div>
              <ul className="space-y-2 text-sm text-gruvbox-fg2 list-disc list-inside">
                <li>Workflow automation eliminating 85-95% of manual tasks</li>
                <li>Real-time video segmentation with MediaPipe</li>
                <li>Fine-tuned GPT-3.5-turbo for specialized NLP tasks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
