
import React from 'react';
import Header from './components/Header';
import ProjectOverview from './components/ProjectOverview';
import TeamSection from './components/TeamSection';
import ArchitectureSection from './components/ArchitectureSection';
import FeaturesSection from './components/FeaturesSection';
import TechStack from './components/TechStack';
import ProjectStatus from './components/ProjectStatus';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-300">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-16 sm:space-y-24">
          <ProjectOverview />
          <TeamSection />
          <ArchitectureSection />
          <FeaturesSection />
          <TechStack />
          <ProjectStatus />
          <Roadmap />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
