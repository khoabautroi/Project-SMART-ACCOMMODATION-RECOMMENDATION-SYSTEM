
import React from 'react';
import { ICONS } from '../constants';

const ProjectOverview: React.FC = () => {
  return (
    <section id="overview" className="text-center animate-fade-in-up opacity-0">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-primary tracking-tight">
        Smart Accommodation Recommendation System
      </h1>
      <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-400">
        Building an intelligent accommodation recommendation system using AI/ML to personalize the user's search and booking experience.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-3 font-semibold text-white bg-brand-primary rounded-lg shadow-lg hover:bg-brand-primary/90 transition-all transform hover:scale-105">
          View Demo
        </button>
        <button className="px-6 py-3 font-semibold text-white bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-700/50 transition-colors">
          Documentation
        </button>
      </div>
    </section>
  );
};

export default ProjectOverview;
