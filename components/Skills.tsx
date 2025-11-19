'use client';

import React from 'react';
import { SiPython, SiJavascript, SiReact, SiNextdotjs, SiDocker, SiKubernetes, SiPostgresql, SiRedis, SiFastapi, SiTensorflow, SiPytorch, SiGooglecloud, SiCplusplus } from 'react-icons/si';

const skillCategories = [
  {
    category: 'AI & ML',
    color: 'orange',
    skills: [
      { name: 'Multi-Agent Systems', icon: <SiPython /> },
      { name: 'LangGraph', icon: <SiPython /> },
      { name: 'LangChain', icon: <SiPython /> },
      { name: 'RAG', icon: <SiPython /> },
      { name: 'LLMs', icon: <SiPython /> },
      { name: 'NLP', icon: <SiPython /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'PyTorch', icon: <SiPytorch /> },
    ],
  },
  {
    category: 'Backend',
    color: 'green',
    skills: [
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'Flask', icon: <SiPython /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Node.js', icon: <SiJavascript /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Redis', icon: <SiRedis /> },
    ],
  },
  {
    category: 'Frontend',
    color: 'aqua',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'TypeScript', icon: <SiJavascript /> },
      { name: 'Tailwind', icon: <SiReact /> },
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: 'blue',
    skills: [
      { name: 'GCP', icon: <SiGooglecloud /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'CI/CD', icon: <SiGooglecloud /> },
      { name: 'Terraform', icon: <SiGooglecloud /> },
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
