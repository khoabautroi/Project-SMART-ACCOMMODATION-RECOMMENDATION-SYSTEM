
import React from 'react';
import { ICONS } from '../constants';

const completedFeatures = [
    "Responsive website with modern UI/UX",
    "Full authentication system UI",
    "Smart search with filters and autocomplete",
    "Property listing and detail pages",
    "Recommendation display integration",
    "Basic booking flow",
    "Review and rating system",
    "Dashboard layouts",
];

const pendingIntegration = [
    "Real recommendation APIs from TV5",
    "Actual property data from TV2, TV3",
    "Model metrics from TV4",
    "Payment processing",
    "Real-time messaging",
];

const StatusList: React.FC<{ title: string, items: string[], icon: React.ReactNode }> = ({ title, items, icon }) => (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
        </h3>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <span className="text-brand-primary mr-2 mt-1">{ICONS.check}</span>
                    <span className="text-slate-300">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);


const ProjectStatus: React.FC = () => {
  return (
    <section id="status" className="animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Project Status</h2>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-slate-400">Frontend is complete and ready for backend integration.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <StatusList 
            title="Features Completed" 
            items={completedFeatures}
            icon={<span className="text-green-400">✅</span>}
          />
          <StatusList 
            title="Pending Backend Integration" 
            items={pendingIntegration}
            icon={<span className="text-yellow-400">🔄</span>}
          />
      </div>
    </section>
  );
};

export default ProjectStatus;
