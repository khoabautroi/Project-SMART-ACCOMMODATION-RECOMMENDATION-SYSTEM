
import React from 'react';

const roadmapData = [
  {
    phase: 'Short-term',
    timeline: 'Weeks 1-2',
    tasks: ['Connect to backend APIs', 'Integration testing & bug fixing', 'Performance optimization'],
  },
  {
    phase: 'Medium-term',
    timeline: 'Weeks 3-4',
    tasks: ['Advanced recommendation features', 'Real-time notifications', 'Payment system integration', 'Admin dashboard'],
  },
  {
    phase: 'Long-term',
    timeline: 'Months 2-3',
    tasks: ['Mobile app development', 'Advanced analytics', 'Multi-language support', 'Social features'],
  },
];

const RoadmapItem: React.FC<{ item: typeof roadmapData[0], isLast: boolean }> = ({ item, isLast }) => (
  <div className="relative pl-8">
    {!isLast && <div className="absolute left-3 top-3 h-full w-0.5 bg-slate-700"></div>}
    <div className="absolute left-0 top-1.5 w-6 h-6 bg-brand-primary rounded-full border-4 border-slate-900 flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
    </div>
    <div className="mb-8">
      <p className="text-sm font-semibold text-brand-secondary">{item.timeline}</p>
      <h3 className="text-xl font-bold text-white mt-1">{item.phase}</h3>
      <ul className="mt-2 list-disc list-inside text-slate-400">
        {item.tasks.map(task => <li key={task}>{task}</li>)}
      </ul>
    </div>
  </div>
);

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Development Roadmap</h2>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-slate-400">Our plan for future enhancements and features.</p>
      </div>
      <div className="max-w-2xl mx-auto">
        {roadmapData.map((item, index) => (
          <RoadmapItem key={item.phase} item={item} isLast={index === roadmapData.length - 1} />
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
