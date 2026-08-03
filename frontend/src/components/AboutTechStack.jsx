import React from 'react';
import { User, ArrowRight, Folder, Layout, Server, Database, Wrench, Building2, Star, Calendar } from 'lucide-react';

export default function AboutTechStack({ profile, skills }) {
  const languageList = ['C', 'C++', 'JavaScript', 'Python', 'TypeScript'];
  const frontendList = ['React', 'Next.js', 'TailwindCSS', 'HTML', 'CSS'];
  const backendList = ['Node.js', 'Express.js', 'Spring Boot', 'Firebase'];
  const databaseList = ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'];
  const toolsList = ['Git', 'Docker', 'AWS', 'Postman', 'Vercel'];

  return (
    <div id="about-tech" className="px-4 sm:px-8 max-w-6xl mx-auto pt-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Card: // about me */}
        <div className="lg:col-span-5 portfolio-card space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-mono text-base font-bold text-blue-600 flex items-center gap-1.5">
                <span>//</span>
                <span className="text-slate-900">about me</span>
              </h2>
              <User size={18} className="text-blue-600" />
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                I'm a final year ECE student at IIIT Ranchi and a full-stack developer who loves building scalable web applications and intelligent systems.
              </p>
              <p>
                I enjoy working across the stack and exploring new technologies. Currently focused on building impactful products and contributing to open source.
              </p>
            </div>

            <a
              href="#education"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
            >
              <span>More About Me</span>
              <ArrowRight size={13} />
            </a>
          </div>

          {/* Bottom Info Pills */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-600">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80">
              <Building2 size={12} className="text-slate-500" />
              <span>IIIT Ranchi (ECE)</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80">
              <Star size={12} className="text-amber-500" />
              <span>CGPA: 8.59</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80">
              <Calendar size={12} className="text-slate-500" />
              <span>2023 – 2027</span>
            </span>
          </div>
        </div>

        {/* Right Card: // tech stack */}
        <div className="lg:col-span-7 portfolio-card space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-base font-bold text-blue-600 flex items-center gap-1.5">
              <span>//</span>
              <span className="text-slate-900">tech stack</span>
            </h2>
            <a href="#skills" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1">
              <span>View All Skills</span>
              <ArrowRight size={13} />
            </a>
          </div>

          <div className="space-y-3 text-xs">
            {/* Languages */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="w-28 shrink-0 flex items-center gap-1.5 text-slate-700 font-semibold">
                <Folder size={14} className="text-slate-400" />
                <span>Languages</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {languageList.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="w-28 shrink-0 flex items-center gap-1.5 text-slate-700 font-semibold">
                <Layout size={14} className="text-slate-400" />
                <span>Frontend</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {frontendList.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="w-28 shrink-0 flex items-center gap-1.5 text-slate-700 font-semibold">
                <Server size={14} className="text-slate-400" />
                <span>Backend</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {backendList.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="w-28 shrink-0 flex items-center gap-1.5 text-slate-700 font-semibold">
                <Database size={14} className="text-slate-400" />
                <span>Databases</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {databaseList.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Cloud */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="w-28 shrink-0 flex items-center gap-1.5 text-slate-700 font-semibold">
                <Wrench size={14} className="text-slate-400" />
                <span>Tools & Cloud</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {toolsList.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
