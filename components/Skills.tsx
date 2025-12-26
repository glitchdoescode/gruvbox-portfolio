'use client';

import React from 'react';
import { SiPython, SiJavascript, SiDocker, SiKubernetes, SiPostgresql, SiRedis, SiFastapi, SiGooglecloud } from 'react-icons/si';

const skillCategories = [
  {
    category: 'Backend Architecture',
    color: 'orange',
    skills: [
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'AsyncIO', icon: <SiPython /> },
      { name: 'Redis Pub/Sub', icon: <SiRedis /> },
      { name: 'Celery', icon: <SiPython /> },
      { name: 'Message Queues', icon: <SiGooglecloud /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ],
  },
  {
    category: 'Infrastructure',
    color: 'green',
    skills: [
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'Terraform', icon: <SiGooglecloud /> },
      { name: 'GCP / Azure', icon: <SiGooglecloud /> },
      { name: 'CI/CD', icon: <SiGooglecloud /> },
      { name: 'Nginx', icon: <SiJavascript /> },
    ],
  },
  {
    category: 'AI Infrastructure',
    color: 'aqua',
    skills: [
      { name: 'LangGraph', icon: <SiPython /> },
      { name: 'Vector DBs', icon: <SiPython /> },
      { name: 'RAG Pipelines', icon: <SiPython /> },
      { name: 'Model Serving', icon: <SiPython /> },
    ],
  },
  {
    category: 'Languages & Tools',
    color: 'blue',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'Bash', icon: <SiJavascript /> },
      { name: 'SQL', icon: <SiPostgresql /> },
      { name: 'Git', icon: <SiJavascript /> },
      { name: 'Grafana', icon: <SiJavascript /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="gruvbox-card">
              <div className="font-mono text-sm mb-6">
                <span className="text-gruvbox-fg4">$</span>{' '}
                <span className={`text-gruvbox-${category.color}`}>cat skills/{category.category.toLowerCase().replace(' ', '-')}.txt</span>
              </div>

              <h3 className={`text-2xl font-bold text-gruvbox-${category.color} font-mono mb-6`}>
                {category.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center gap-3 p-3 rounded border-2 border-gruvbox-bg3 hover:border-gruvbox-orange transition-all duration-300 group"
                  >
                    <div className={`text-2xl text-gruvbox-${category.color} group-hover:text-gruvbox-orange transition-colors`}>
                      {skill.icon}
                    </div>
                    <span className="text-gruvbox-fg2 font-mono text-sm group-hover:text-gruvbox-fg0 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills List */}
        <div className="mt-12 gruvbox-card">
          <div className="font-mono text-sm text-gruvbox-orange mb-4">
            <span className="text-gruvbox-fg4">$</span> ls -la tools/
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm font-mono text-gruvbox-fg3">
            {[
              'Git', 'Linux', 'C/C++', 'JavaScript', 'ChromaDB', 'Qdrant', 'FAISS',
              'Grafana', 'Prometheus', 'Loki', 'gRPC', 'MCP Protocol',
              'Alembic', 'Pydantic', 'Supabase', 'Nginx', 'Bash',
              'OpenCV', 'Streamlit', 'Model Fine-tuning', 'Prompt Engineering', 'GitHub Actions',
            ].map((tool, idx) => (
              <div key={idx} className="flex items-center gap-2 hover:text-gruvbox-orange transition-colors cursor-default">
                <span className="text-gruvbox-orange">•</span>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
