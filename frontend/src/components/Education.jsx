import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education({ education = [] }) {
  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="pt-6 px-4 sm:px-8 max-w-6xl mx-auto space-y-4">
      {/* Header */}
      <h2 className="font-mono text-base font-bold text-blue-600 flex items-center gap-1.5">
        <span>//</span>
        <span className="text-slate-900">education</span>
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {education.map((item, idx) => (
          <div key={idx} className="portfolio-card flex flex-col md:flex-row md:items-start justify-between gap-4 p-5 sm:p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                <GraduationCap size={18} />
                <span>{item.institution}</span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900">
                {item.degree}
              </h3>

              {item.grade && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-xs font-semibold text-blue-600 border border-blue-200/80">
                  <Award size={14} className="text-blue-600" />
                  <span>{item.grade}</span>
                </div>
              )}

              {item.description && (
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                  {item.description}
                </p>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-slate-600 text-xs font-medium whitespace-nowrap bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full self-start">
              <Calendar size={14} />
              <span>{item.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
