import React from 'react';
import { ExternalLink, Github, Activity, Briefcase, CreditCard, Bot } from 'lucide-react';

const projectIcons = [Activity, Briefcase, CreditCard, Bot];

export default function Projects({ projects = [] }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="pt-6 px-4 sm:px-8 max-w-6xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-base font-bold text-blue-600 flex items-center gap-1.5">
          <span>//</span>
          <span className="text-slate-900">featured projects</span>
        </h2>
      </div>

      {/* Single Column Vertical Stack */}
      <div className="flex flex-col gap-6">
        {projects.map((project, idx) => {
          const IconComp = projectIcons[idx % projectIcons.length] || Activity;

          return (
            <div key={idx} className="portfolio-card flex flex-col justify-between space-y-5 p-6 sm:p-8">
              <div className="space-y-3">
                {/* Category & Action Icons Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold">
                      <IconComp size={16} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-md">
                      {project.category || 'Web Application'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        title="View Source Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                {/* Overview Description */}
                {project.description && (
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                )}

                {/* Full Highlight Bullets from Resume */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="space-y-2 text-slate-600 text-xs sm:text-sm leading-relaxed list-disc list-inside pt-1">
                    {project.highlights.map((bullet, i) => (
                      <li key={i} className="marker:text-blue-600">
                        <span className="text-slate-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Tech Stack Chips & Live Demo CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {project.techStack && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-200 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1 shrink-0"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                ) : project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1 shrink-0"
                  >
                    <span>View Repository</span>
                    <ExternalLink size={14} />
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
