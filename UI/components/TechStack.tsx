
import React from 'react';

const techStack = [
  "React 18", "TypeScript", "Vite", "Tailwind CSS", "Redux Toolkit", 
  "RTK Query", "React Hook Form", "Swiper.js", "Leaflet", "Recharts", "React Hot Toast"
];

const TechItem: React.FC<{ name: string }> = ({ name }) => (
  <div className="bg-slate-800 py-2 px-4 rounded-md text-center text-slate-300 text-sm font-medium border border-slate-700">
    {name}
  </div>
);

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Tools & Technologies</h2>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-slate-400">Powered by a modern, high-performance frontend stack.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
        {techStack.map(tech => <TechItem key={tech} name={tech} />)}
      </div>
    </section>
  );
};

export default TechStack;
