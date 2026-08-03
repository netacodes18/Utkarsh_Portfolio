import React from 'react';
import { ArrowRight, Mail, Linkedin, Phone, Github } from 'lucide-react';

export default function Contact({ profile }) {
  const email = profile?.email || 'utkarsh.2023ug2037@iiitranchi.ac.in';
  const phone = profile?.phone || '+91 8948983412';
  const linkedin = profile?.linkedin || 'https://linkedin.com/in/utkarsh-pratap';
  const github = profile?.github || 'https://github.com/netacodes18';

  return (
    <section id="contact" className="pt-6 px-4 sm:px-8 max-w-6xl mx-auto">
      <div className="portfolio-card p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Heading & Callout */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Let's build something <span className="text-blue-600">amazing</span> together.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              I'm currently open to new opportunities and exciting projects.
            </p>
            <a
              href={`mailto:${email}`}
              className="px-5 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-all shadow-sm flex items-center gap-1.5 w-fit"
            >
              <span>Let's Connect</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right Column Contact Info Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-slate-700">
            {/* Email */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <Mail size={18} className="text-slate-500 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email</span>
                <a href={`mailto:${email}`} className="font-semibold text-slate-900 hover:text-blue-600 truncate block">
                  {email}
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <Linkedin size={18} className="text-slate-500 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">LinkedIn</span>
                <a href={linkedin} target="_blank" rel="noreferrer" className="font-semibold text-slate-900 hover:text-blue-600 truncate block">
                  {linkedin.replace(/^https?:\/\/(www\.)?/, '')}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <Phone size={18} className="text-slate-500 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Phone</span>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="font-semibold text-slate-900 hover:text-blue-600 block">
                  {phone}
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <Github size={18} className="text-slate-500 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">GitHub</span>
                <a href={github} target="_blank" rel="noreferrer" className="font-semibold text-slate-900 hover:text-blue-600 truncate block">
                  {github.replace(/^https?:\/\/(www\.)?/, '')}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
