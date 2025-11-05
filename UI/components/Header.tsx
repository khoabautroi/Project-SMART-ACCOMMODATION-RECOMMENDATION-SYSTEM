
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-brand-primary p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2-7 5 7 5 7-5-7-5z"/><path d="m2 12 7 5 7-5"/><path d="m2 17 7 5 7-5"/></svg>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Smart Accommodation System
            </h1>
          </div>
          <button className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-white bg-brand-primary rounded-md hover:bg-brand-primary/90 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
