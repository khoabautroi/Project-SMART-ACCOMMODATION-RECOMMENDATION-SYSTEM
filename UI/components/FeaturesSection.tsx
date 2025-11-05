import React from 'react';
import { PROPERTIES, ANALYTICS_METRICS, REVENUE_DATA, MODEL_PERFORMANCE_DATA, ICONS } from '../constants';
import { Property, Metric, RevenueData, ModelPerformanceData } from '../types';
import Section from './Section';

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
  <div className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 group transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/10 hover:border-brand-secondary/50">
    <img src={property.imageUrl} alt={property.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-white text-lg truncate">{property.name}</h3>
      <p className="text-sm text-slate-400">{property.location}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-semibold text-brand-light">${property.price}<span className="text-sm font-normal text-slate-400">/night</span></p>
        <div className="flex items-center space-x-1 text-yellow-400">
          <span className="text-sm font-bold">{property.rating}</span>
          <div className="w-4 h-4">{ICONS.star}</div>
        </div>
      </div>
    </div>
  </div>
);

const AnalyticsCard: React.FC<{ metric: Metric }> = ({ metric }) => {
    const isIncrease = metric.changeType === 'increase';
    return (
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h4 className="text-sm text-slate-400 font-medium">{metric.name}</h4>
            <p className="text-3xl font-bold text-white mt-1">{metric.value}</p>
            <p className={`text-sm font-medium mt-1 ${isIncrease ? 'text-green-400' : 'text-red-400'}`}>
                {metric.change} {isIncrease ? '↑' : '↓'}
            </p>
        </div>
    );
};


const FeaturesSection: React.FC = () => {
  // Access Recharts from window inside the component to ensure it's loaded
  const Recharts = (window as any).Recharts;

  // Destructure only if Recharts is available
  const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } = Recharts || {};

  return (
    <Section
      id="features"
      title="Core Module Showcase"
      subtitle="Demonstrating the key UI components ready for backend integration."
      icon={ICONS.target}
    >
      <div className="space-y-16">
        
        {/* Smart Search & Discovery */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 text-center">🔍 Smart Search & Discovery</h3>
          <div className="max-w-3xl mx-auto bg-slate-800/50 rounded-full p-2 flex items-center border border-slate-700 shadow-lg">
            <div className="pl-4 pr-2 text-slate-500">{ICONS.search}</div>
            <input type="text" placeholder="Search by city, address, or landmark..." className="w-full bg-transparent p-2 text-white placeholder-slate-400 focus:outline-none" />
            <button className="px-6 py-2.5 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-primary/90 transition-colors whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        {/* Personalized Recommendations */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🎯 Personalized Recommendations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPERTIES.slice(0, 3).map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        </div>
        
        {/* Similar Properties */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🏠 Similar Properties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPERTIES.slice(3, 6).map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        </div>
        
        {/* Dashboard & Analytics */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">📊 Dashboard & Analytics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {ANALYTICS_METRICS.map(metric => <AnalyticsCard key={metric.name} metric={metric} />)}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {Recharts ? (
                <>
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-white mb-4">Revenue Analytics</h4>
                      <ResponsiveContainer width="100%" height={300}>
                          <LineChart data={REVENUE_DATA}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                              <XAxis dataKey="month" stroke="#94a3b8" />
                              <YAxis stroke="#94a3b8" />
                              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                              <Legend />
                              <Line type="monotone" dataKey="revenue" stroke="#00A9FF" strokeWidth={2} activeDot={{ r: 8 }} />
                          </LineChart>
                      </ResponsiveContainer>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-white mb-4">Model Performance</h4>
                      <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={MODEL_PERFORMANCE_DATA}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                              <XAxis dataKey="metric" stroke="#94a3b8" />
                              <YAxis stroke="#94a3b8" />
                              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                              <Legend />
                              <Bar dataKey="score" fill="#89CFF3" />
                          </BarChart>
                      </ResponsiveContainer>
                  </div>
                </>
              ) : (
                <div className="lg:col-span-2 text-center text-slate-400 p-8 bg-slate-800/50 rounded-lg border border-slate-700">
                    Loading charts...
                </div>
              )}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default FeaturesSection;