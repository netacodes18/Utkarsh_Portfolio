import React from 'react';

export default function Footer({ profileName = "Utkarsh Pratap" }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-8 max-w-6xl mx-auto text-xs text-slate-500 border-t border-slate-200/80 mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p>
          © {currentYear} {profileName}. All rights reserved.
        </p>
        <p className="font-semibold text-slate-700">
          Designed & Developed by {profileName} <span className="font-mono text-blue-600">&lt;/&gt;</span>
        </p>
      </div>
    </footer>
  );
}
