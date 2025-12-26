'use client';

import React from 'react';
import { FaRobot, FaCode, FaServer, FaBrain, FaDatabase, FaCloud } from 'react-icons/fa';

const experiences = [
  {
    icon: <FaRobot className="text-3xl" />,
    title: 'LangGraph Multi-Agent',
    description: 'Multi-agent orchestration with supervisor patterns',
  },
  {
    icon: <FaBrain className="text-3xl" />,
    title: 'Open Source Research',
    description: 'Red Hen Lab & IIT Hyderabad contributions',
  },
  {
    icon: <FaServer className="text-3xl" />,
    title: 'Production Systems',
    description: 'FastAPI microservices with 71% test coverage',
  },
  {
    icon: <FaDatabase className="text-3xl" />,
    title: 'Multi-Tenant Architecture',
    description: 'PostgreSQL RLS, Qdrant namespace isolation',
  },
  {
    icon: <FaCloud className="text-3xl" />,
    title: 'Cloud Infrastructure',
    description: 'GCP Pub/Sub, Kubernetes, Docker, Terraform',
  },
  {
    icon: <FaCode className="text-3xl" />,
    title: 'RAG Pipelines',
    description: 'ChromaDB, FAISS, Qdrant with Gemini',
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
                <span className="text-gruvbox-fg4 font-mono text-sm">Oct 2024 - Dec 2025</span>
              </div>
              <ul className="space-y-2 text-sm text-gruvbox-fg2 list-disc list-inside">
                <li>Architected a distributed microservices platform (4 FastAPI services) handling 100+ concurrent stateful conversations using Docker and GCP Pub/Sub</li>
                <li>Engineered a zero-downtime configuration hot-reload system using Redis Pub/Sub and in-memory caching, reducing deployment friction and enabling sub-second config propagation across all instances</li>
                <li>Designed a multi-tenant database architecture using PostgreSQL Row-Level Security (RLS) and Qdrant vector namespaces, ensuring strict data isolation for enterprise clients</li>
                <li>Implemented resilience patterns including connection pooling (AsyncPG), circuit breakers, and exponential backoff retry logic, achieving 99.9% system availability</li>
                <li>Built comprehensive CI/CD pipelines with GitHub Actions (71% test coverage), automating Docker builds and deployments to Google Cloud Run</li>
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
                <li>Spearheaded command-line workflow automation tool using Bash, Python, and JavaScript, eliminating 85-95% of manual tasks and boosting engineering team productivity</li>
                <li>Deployed Raspberry Pi-based web server using Nginx and Ngrok for secure remote SSH tunneling, significantly improving system accessibility and reliability</li>
                <li>Designed automated disk imaging utility in Bash for USB drive flashing with custom configurations, increasing deployment speed and reducing error rates</li>
                <li>Pioneered real-time video segmentation and motion tracking proof-of-concept using Python and MediaPipe, enabling advanced analytics and visualizations</li>
                <li>Fine-tuned GPT-3.5-turbo with JSONL datasets and OpenAI APIs, elevating platform's conversational capabilities for specialized NLP tasks</li>
                <li>Implemented robust CI/CD pipelines using Git and Terraform for automated model deployments, reducing downtime and accelerating updates</li>
              </ul>
            </div>
          </div>

          {/* Volunteer Experience */}
          <div className="mt-12">
            <div className="font-mono text-sm text-gruvbox-green mb-6">
              <span className="text-gruvbox-fg4">$</span> cat volunteer-experience.log
            </div>

            <div className="space-y-4">
              {/* Red Hen Lab */}
              <div className="gruvbox-card border-l-4 border-gruvbox-purple">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gruvbox-fg0">Red Hen Lab</h3>
                    <p className="text-gruvbox-purple font-mono">Volunteer Researcher/Contributor</p>
                  </div>
                  <span className="text-gruvbox-fg4 font-mono text-sm">Feb 2025 - Present</span>
                </div>
                <ul className="space-y-2 text-sm text-gruvbox-fg2 list-disc list-inside">
                  <li>Co-authored research paper "Frame Blending Is Essential For Advancing Creative Generative AI" with Prof. Mark Turner for cognitive science research</li>
                  <li>Developed TalentScout proof-of-concept multi-agent system using LangGraph supervisor pattern with 5 specialized agents and RAG for intelligent candidate-opportunity matching</li>
                  <li>Implemented architectural improvements to Frame Blender framework, enhancing multi-modal data processing performance for distributed research team</li>
                </ul>
              </div>

              {/* IIT Hyderabad */}
              <div className="gruvbox-card border-l-4 border-gruvbox-blue">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gruvbox-fg0">IIT Hyderabad</h3>
                    <p className="text-gruvbox-blue font-mono">Volunteer Researcher/Contributor</p>
                  </div>
                  <span className="text-gruvbox-fg4 font-mono text-sm">Jan 2025 - Aug 2025</span>
                </div>
                <ul className="space-y-2 text-sm text-gruvbox-fg2 list-disc list-inside">
                  <li>Prototyping warzone-focused object detection pipeline with Detectron2 and ConvNeXt backbone for camouflage, partial occlusion, and environmental challenges</li>
                  <li>Experimenting with advanced data augmentation (dust, smoke, low-light) to improve model generalization in early-stage R&D with limited dataset</li>
                  <li>Investigating methods for scaling to thousands of images and optimizing real-time inference performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
