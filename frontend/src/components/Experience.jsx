import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience({ experience = [] }) {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="pt-6 px-4 sm:px-8 max-w-6xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-base font-bold text-blue-600 flex items-center gap-1.5">
          <span>//</span>
          <span className="text-slate-900">experience</span>
        </h2>
      </div>

      {/* Vertical Single-Column Experience Stack */}
      <div className="flex flex-col gap-6">
        {experience.map((item, idx) => (
          <div key={idx} className="portfolio-card space-y-4 p-6 sm:p-8">
            {/* Top Row: Role, Company, Period & Location */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  <Briefcase size={16} />
                  <span>{item.company}</span>
                  {item.location && (
                    <span className="text-slate-400 font-normal flex items-center gap-1 text-xs">
                      • <MapPin size={12} /> {item.location}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-slate-600 text-xs font-medium bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full self-start">
                <Calendar size={14} />
                <span>{item.period}</span>
              </div>
            </div>

            {/* Overview / Bullet Point Highlights */}
            {item.highlights && item.highlights.length > 0 ? (
              <ul className="space-y-2 text-slate-600 text-xs sm:text-sm leading-relaxed list-disc list-inside">
                {item.highlights.map((bullet, i) => (
                  <li key={i} className="marker:text-blue-600">
                    <span className="text-slate-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : item.description ? (
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
