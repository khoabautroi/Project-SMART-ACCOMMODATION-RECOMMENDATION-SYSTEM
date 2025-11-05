
import React from 'react';
import Section from './Section';
import { ICONS } from '../constants';

const CodeBlock: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
    <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-700">
      <h4 className="font-mono text-sm text-brand-secondary">{title}</h4>
    </div>
    <pre className="p-4 text-xs sm:text-sm overflow-x-auto"><code className="text-slate-300">{children}</code></pre>
  </div>
);

const ArchitectureSection: React.FC = () => {
  const frontendArchitecture = `
React 18 + TypeScript
├── State Management: Redux Toolkit
├── Styling: Tailwind CSS
├── Routing: React Router DOM
├── Forms: React Hook Form
├── Maps: React Leaflet
├── Charts: Recharts
└── Build Tool: Vite
`.trim();

  const dataFlow = `
TV2 (Data Collection) 
    → TV3 (Data Cleaning) 
    → TV5 (Model Training) 
    → TV4 (Model Evaluation)
    → Frontend (UI Display)
    → TV1 (Documentation)
`.trim();

  return (
    <Section
      id="architecture"
      title="System Architecture"
      subtitle="A modern, scalable architecture designed for performance and maintainability."
      icon={ICONS.code}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CodeBlock title="Frontend Architecture">{frontendArchitecture}</CodeBlock>
        <CodeBlock title="Data Flow & Integration">{dataFlow}</CodeBlock>
      </div>
    </Section>
  );
};

export default ArchitectureSection;
