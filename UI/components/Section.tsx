
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, icon, children }) => {
  return (
    <section id={id} className="animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-slate-800 p-3 rounded-full mb-4 border border-slate-700">
          {icon}
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">{subtitle}</p>
      </div>
      {children}
    </section>
  );
};

export default Section;
