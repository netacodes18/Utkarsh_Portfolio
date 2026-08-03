import React from 'react';
import { Award } from 'lucide-react';

export default function Positions({ positions = [] }) {
  if (!positions || positions.length === 0) return null;

  return (
    <section id="positions" className="pt-6 px-4 sm:px-8 max-w-6xl mx-auto space-y-4">
      {/* Header */}
      <h2 className="font-mono text-base font-bold text-blue-600 flex items-center gap-1.5">
        <span>//</span>
        <span className="text-slate-900">positions of responsibility</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {positions.map((pos, idx) => (
          <div key={idx} className="portfolio-card space-y-2.5 p-5">
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              {pos.role}
            </h3>

            {pos.organization && (
              <p className="text-blue-600 font-semibold text-xs flex items-center gap-1.5">
                <Award size={14} />
                <span>{pos.organization}</span>
                {pos.period && <span className="text-slate-400 font-normal">• {pos.period}</span>}
              </p>
            )}

            {pos.description && (
              <p className="text-slate-600 text-xs leading-relaxed pt-1">
                {pos.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
