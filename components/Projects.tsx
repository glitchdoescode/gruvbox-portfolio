'use client';

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Krishna Diagnostics AI',
    description: 'AI business assistant with LangGraph 2-node pattern for multi-channel integration (WhatsApp, Instagram, Web, CRMs). Healthcare workflow management with 6 specialized workflows.',
    tech: ['LangGraph', 'FastAPI', 'PostgreSQL', 'Gemini', 'Redis'],
    github: 'https://github.com/pupiltree/krsna-d',
    demo: 'http://104.197.233.188:8000/static/demo-chat.html',
    featured: true,
  },
  {
    title: 'Workflow Automation Platform',
    description: 'Fullstack AI-powered platform with Next.js 14, FastAPI microservices, LangGraph agents for PRD Builder and Config Agent. Multi-tenant architecture with Supabase RLS.',
    tech: ['LangGraph', 'Next.js 14', 'FastAPI', 'Supabase', 'Qdrant'],
    github: 'https://github.com/glitchdoescode/workflow-automation',
    featured: true,
  },
  {
    title: 'Akinator Clone - LangGraph',
    description: 'Full-stack AI guessing game with LangGraph single agent + tools pattern. Multi-LLM support (Gemini 2.5 Flash, OpenAI GPT) and Tavily web search for character research.',
    tech: ['LangGraph', 'React', 'FastAPI', 'Gemini 2.5', 'Tavily'],
    github: 'https://github.com/glitchdoescode/akinator-game',
  },
  {
    title: 'Rakht Setu (4th Place)',
    description: 'AI-for-Good Hackathon winner. Agentic AI blood donation platform using LangGraph multi-agent architecture (5-agent supervisor pattern). Reduced matching time by 40%.',
    tech: ['LangGraph', 'Multi-Agent', 'Python', 'Healthcare AI'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="section-title">Featured Work</h2>

        <div className="font-mono text-sm text-gruvbox-orange mb-8">
          <span className="text-gruvbox-fg4">$</span> find ./projects -type f -name "*.md"
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`gruvbox-card ${project.featured ? 'md:col-span-2 border-gruvbox-orange' : ''} group`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-gruvbox-fg0 font-mono group-hover:text-gruvbox-orange transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gruvbox-fg3 hover:text-gruvbox-orange transition-colors"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gruvbox-fg3 hover:text-gruvbox-orange transition-colors"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gruvbox-fg2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-xs font-mono bg-gruvbox-bg2 text-gruvbox-orange border border-gruvbox-bg3 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-12 gruvbox-card border-gruvbox-green">
          <div className="font-mono text-sm text-gruvbox-green mb-4">
            <span className="text-gruvbox-fg4">$</span> git stats --contributions
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-gruvbox-orange font-mono">676+</p>
              <p className="text-gruvbox-fg3 font-mono text-sm mt-2">Commits @ FIKA (2025)</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gruvbox-green font-mono">1,574+</p>
              <p className="text-gruvbox-fg3 font-mono text-sm mt-2">GitHub Contributions</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gruvbox-aqua font-mono">10+</p>
              <p className="text-gruvbox-fg3 font-mono text-sm mt-2">Production Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
