import React from 'react';

export default function Skills({ skills = {} }) {
  const categories = Object.keys(skills);

  if (categories.length === 0) return null;

  return (
    <section id="skills" className="pt-6 px-4 sm:px-8 max-w-6xl mx-auto space-y-4">
      {/* Header */}
      <h2 className="font-mono text-base font-bold text-blue-600 flex items-center gap-1.5">
        <span>//</span>
        <span className="text-slate-900">all technical skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, idx) => {
          const itemList = Array.isArray(skills[category]) 
            ? skills[category] 
            : typeof skills[category] === 'string' 
              ? skills[category].split(', ') 
              : [];

          return (
            <div key={idx} className="portfolio-card space-y-3 p-4 sm:p-5">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                {category}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {itemList.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
