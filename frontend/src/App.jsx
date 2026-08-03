import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Positions from './components/Positions';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AboutTechStack from './components/AboutTechStack';

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await axios.get('/api/portfolio');
        if (res.data && res.data.data) {
          setData(res.data.data);
        }
      } catch (err) {
        console.error('Failed to load portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] text-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="font-semibold text-sm">Loading portfolio...</span>
        </div>
      </div>
    );
  }

  const { profile, education, experience, projects, positions, skills, achievements, certifications } = data || {};

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-slate-900 bg-grid-pattern overflow-x-hidden selection:bg-blue-100 selection:text-blue-700">
      <Navbar profileName={profile?.name} />
      
      <main className="space-y-6 pb-12">
        <Hero profile={profile} skills={skills} />
        <AboutTechStack profile={profile} skills={skills} />
        <Education education={education} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Positions positions={positions} />
        <Skills skills={skills} />
        <Achievements achievements={achievements} certifications={certifications} />
        <Contact profile={profile} />
      </main>

      <Footer profileName={profile?.name} />
    </div>
  );
}
