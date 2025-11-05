
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 mt-16 sm:mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Smart Accommodation Recommendation System. All rights reserved.</p>
        <p className="mt-1">A collaborative project by Team TV1-TV6.</p>
      </div>
    </footer>
  );
};

export default Footer;
