import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutTechStack from './components/AboutTechStack';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Positions from './components/Positions';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Pre-bundled initial data so Vercel renders all sections instantly
import initialData from '../../backend/data/initialData.json';

export default function App() {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await axios.get('/api/portfolio');
        if (res.data && res.data.data && Object.keys(res.data.data).length > 0) {
          setData(res.data.data);
        }
      } catch (err) {
        console.warn('Using bundled portfolio data fallback for static/Vercel deployment:', err);
      }
    };

    fetchPortfolio();
  }, []);

  const { profile, education, experience, projects, positions, skills, achievements, certifications } = data || initialData;

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
