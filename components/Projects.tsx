'use client';

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Krishna Diagnostics AI Assistant',
    description: 'High-throughput backend handling multi-channel webhook events (Instagram/WhatsApp) with an AsyncIO message batching system (40% cost reduction). Replaced stateless DB queries with Redis-based session persistence (<5ms latency) and implemented Circuit Breaker patterns for resilience.',
    tech: ['FastAPI', 'Redis', 'AsyncPG', 'Tenacity', 'LangGraph'],
    featured: true,
  },
  {
    title: 'Rakht Setu (4th Place AI-for-Good)',
    description: 'Mission-critical backend ensuring <30-second response latency for emergency blood requests. Parallelized geo-spatial searches using asyncio.gather and optimized donor matching with Haversine distance calculations. Features 5-collection RAG system with ChromaDB.',
    tech: ['Python', 'Azure', 'Geo-Spatial', 'RAG', 'Redis'],
    github: 'https://github.com/glitchdoescode/rakht-setu',
    featured: true,
  },
  {
    title: 'Capybara.ai',
    description: 'Secure code execution sandbox for autonomous data analysis, allowing safe execution of arbitrary Python code on user-uploaded datasets. Orchestrated agent pipeline using LangGraph to breakdown complex business questions into executable SQL/Pandas operations.',
    tech: ['Python', 'Docker', 'Pandas', 'LangChain'],
    featured: false,
  },
  {
    title: 'Workflow Automation Platform',
    description: 'Distributed microservices platform (4 FastAPI services) handling 100+ concurrent stateful conversations. Features zero-downtime config hot-reload via Redis Pub/Sub, multi-tenant RLS architecture, and complete Docker Compose dev environment.',
    tech: ['FastAPI', 'Redis Pub/Sub', 'Docker', 'GKE', 'Terraform', 'PostgreSQL'],
    featured: false,
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
              <p className="text-4xl font-bold text-gruvbox-green font-mono">1,619+</p>
              <p className="text-gruvbox-fg3 font-mono text-sm mt-2">Contributions (2025)</p>
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
