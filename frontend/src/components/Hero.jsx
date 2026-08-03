import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, GraduationCap, Zap, Trophy, Users, Copy } from 'lucide-react';

export default function Hero({ profile, skills }) {
  if (!profile) return null;

  return (
    <div id="top" className="pt-24 sm:pt-28 px-4 sm:px-8 max-w-6xl mx-auto space-y-8">
      {/* 2-Column Hero Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column Text & CTAs */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200/80 text-[11px] font-bold tracking-wider uppercase">
            FULL STACK DEVELOPER
          </div>
          
          <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Building modern web applications with <span className="text-blue-600">AI integration,</span> event-driven microservices, and scalable backends.
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
            Full stack developer specializing in Node.js, Spring Boot, React, and cloud technologies. Passionate about building scalable solutions and delivering exceptional user experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>View My Work</span>
              <ArrowRight size={14} />
            </a>
            <a
              href={profile.resume || "https://drive.google.com/file/d/1qTS-hA0sumGJvrrohVdTmy8Qd55vSBAz/view?usp=sharing"}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg bg-white text-slate-700 border border-slate-200/90 font-semibold text-xs hover:bg-slate-50 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>Download Resume</span>
              <Download size={14} />
            </a>
          </div>

          {/* Find Me On Social Links */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-semibold text-slate-400">Find me on</span>
            <div className="flex items-center gap-2">
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm"
                  title="GitHub"
                >
                  <Github size={16} />
                </a>
              )}
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm"
                  title="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              )}
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm text-xs font-bold font-mono"
                title="LeetCode / CodeChef"
              >
                &lt;/&gt;
              </a>
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm"
                  title="Email"
                >
                  <Mail size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Column Mac Code Editor Window */}
        <div className="lg:col-span-5">
          <div className="bg-[#0F172A] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-xs font-mono">
            {/* Editor Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#1E293B]/60 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <span>aboutMe.js</span>
                <Copy size={13} className="hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Editor Code Lines */}
            <div className="p-4 sm:p-5 space-y-1.5 leading-relaxed text-slate-300 overflow-x-auto">
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">1</span>
                <span><span className="text-purple-400">const</span> <span className="text-amber-300">utkarsh</span> = &#123;</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">2</span>
                <span className="pl-4"><span className="text-slate-400">role:</span> <span className="text-emerald-400">"Full Stack Developer"</span>,</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">3</span>
                <span className="pl-4"><span className="text-slate-400">passion:</span> <span className="text-emerald-400">"Building scalable solutions"</span>,</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">4</span>
                <span className="pl-4"><span className="text-slate-400">tech:</span> [<span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Node.js"</span>, <span className="text-emerald-400">"MongoDB"</span>, <span className="text-emerald-400">"Spring Boot"</span>],</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">5</span>
                <span className="pl-4"><span className="text-slate-400">learning:</span> <span className="text-emerald-400">"System Design & DevOps"</span>,</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">6</span>
                <span className="pl-4"><span className="text-slate-400">openToWork:</span> <span className="text-blue-400">true</span>,</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">7</span>
                <span className="pl-4"><span className="text-slate-400">funFact:</span> <span className="text-emerald-400">"I turn ☕ into code and ideas into product"</span></span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">8</span>
                <span>&#125;;</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">9</span>
                <span></span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">10</span>
                <span><span className="text-purple-400">function</span> <span className="text-blue-400">createImpact</span>() &#123;</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">11</span>
                <span className="pl-4"><span className="text-purple-400">while</span> (coffee &gt; <span className="text-amber-400">0</span>) &#123;</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">12</span>
                <span className="pl-8 text-blue-300">code();</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">13</span>
                <span className="pl-8 text-blue-300">learn();</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">14</span>
                <span className="pl-8 text-blue-300">build();</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">15</span>
                <span className="pl-4">&#125;</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">16</span>
                <span className="pl-4"><span className="text-purple-400">return</span> <span className="text-emerald-400">"Let's build something amazing! 🚀"</span>;</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none text-right w-4">17</span>
                <span>&#125;</span>
              </div>
            </div>

            {/* Console Prompt */}
            <div className="px-4 py-3 bg-[#090D16] border-t border-slate-800/80 text-[11px] flex flex-wrap items-center gap-1.5 text-slate-400">
              <span className="text-slate-500 font-bold">&gt;</span>
              <span>Ready to collaborate?</span>
              <span className="text-blue-400 font-semibold">Let's build something amazing together! 👋</span>
            </div>
          </div>
        </div>

      </div>

      {/* Metrics Row (5 Cards Strip) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 pt-4">
        <div className="portfolio-card flex items-center gap-3 p-4">
          <div className="p-2 rounded-xl bg-slate-100 text-slate-800 font-mono text-sm font-bold">
            &lt;/&gt;
          </div>
          <div>
            <div className="text-lg font-extrabold text-slate-900 leading-none">800+</div>
            <div className="text-[11px] font-medium text-slate-500 pt-1">DSA Problems Solved</div>
          </div>
        </div>

        <div className="portfolio-card flex items-center gap-3 p-4">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
            <GraduationCap size={18} />
          </div>
          <div>
            <div className="text-lg font-extrabold text-slate-900 leading-none">8.59</div>
            <div className="text-[11px] font-medium text-slate-500 pt-1">CGPA @ IIIT Ranchi</div>
          </div>
        </div>

        <div className="portfolio-card flex items-center gap-3 p-4">
          <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
            <Zap size={18} />
          </div>
          <div>
            <div className="text-lg font-extrabold text-slate-900 leading-none">99%</div>
            <div className="text-[11px] font-medium text-slate-500 pt-1">Latency Reduced (RabbitMQ)</div>
          </div>
        </div>

        <div className="portfolio-card flex items-center gap-3 p-4">
          <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
            <Trophy size={18} />
          </div>
          <div>
            <div className="text-lg font-extrabold text-slate-900 leading-none">1656</div>
            <div className="text-[11px] font-medium text-slate-500 pt-1">LeetCode Rating</div>
          </div>
        </div>

        <div className="portfolio-card flex items-center gap-3 p-4 col-span-2 sm:col-span-1">
          <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
            <Users size={18} />
          </div>
          <div>
            <div className="text-lg font-extrabold text-slate-900 leading-none">GSSoC</div>
            <div className="text-[11px] font-medium text-slate-500 pt-1">Open Source Contributor</div>
          </div>
        </div>
      </div>
    </div>
  );
}
