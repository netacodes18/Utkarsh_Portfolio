import React from 'react';
import { Award, Star, Code, FileText } from 'lucide-react';

export default function Achievements({ achievements = [], certifications = [] }) {
  const cardData = [
    {
      icon: Award,
      title: "Rank 178",
      subtitle: "CodeChef Contest",
      desc: "Secured global rank 178 in CodeChef contest.",
      bg: "bg-blue-50 text-blue-600"
    },
    {
      icon: Star,
      title: "Zonal Bronze",
      subtitle: "Olympiad",
      desc: "Awarded bronze medal at zonal level olympiad.",
      bg: "bg-amber-50 text-amber-600"
    },
    {
      icon: Code,
      title: "GSSoC Contributor",
      subtitle: "GirlScript Summer of Code",
      desc: "Selected as Open Source Contributor in GSSoC program.",
      bg: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: FileText,
      title: "International Offers",
      subtitle: "With Scholarship",
      desc: "Received offers from top US & Australian universities.",
      bg: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section id="achievements" className="pt-6 px-4 sm:px-8 max-w-6xl mx-auto space-y-4">
      {/* Header */}
      <h2 className="font-mono text-base font-bold text-blue-600 flex items-center gap-1.5">
        <span>//</span>
        <span className="text-slate-900">achievements & recognition</span>
      </h2>

      {/* Grid of 4 White Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card, idx) => {
          const IconComp = card.icon;

          return (
            <div key={idx} className="portfolio-card flex items-start gap-3.5 p-4">
              <div className={`p-2.5 rounded-xl ${card.bg} shrink-0`}>
                <IconComp size={20} />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-slate-900 leading-snug">{card.title}</h3>
                <p className="text-[11px] font-semibold text-slate-400">{card.subtitle}</p>
                <p className="text-xs text-slate-500 pt-1 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
