
import React from 'react';
import { TEAM_MEMBERS, ICONS } from '../constants';
import Section from './Section';

const TeamMemberCard: React.FC<{ member: (typeof TEAM_MEMBERS)[0] }> = ({ member }) => (
  <div className={`bg-slate-800/50 rounded-lg p-6 border border-slate-700 transition-all duration-300 hover:border-brand-primary hover:shadow-2xl hover:shadow-brand-primary/20 ${member.id === 'TV6' ? 'border-brand-primary ring-2 ring-brand-primary/50' : ''}`}>
    <div className="flex items-center mb-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 text-white ${member.id === 'TV6' ? 'bg-brand-primary' : 'bg-slate-700'}`}>
        <span className="font-bold text-lg">{member.id}</span>
      </div>
      <div>
        <h3 className="font-bold text-lg text-white">{member.role}</h3>
        <p className="text-sm text-brand-secondary">{member.name}</p>
      </div>
    </div>
    <div>
      <p className="text-sm text-slate-300 mb-2"><strong className="font-semibold text-slate-100">Công việc chính:</strong> {member.tasks}</p>
      <p className="text-sm text-slate-300"><strong className="font-semibold text-slate-100">Điểm tích hợp:</strong> {member.integrationPoint}</p>
    </div>
  </div>
);

const TeamSection: React.FC = () => {
  return (
    <Section
      id="team"
      title="Team & Roles"
      subtitle="A collaborative effort by a dedicated team of specialists."
      icon={ICONS.users}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {TEAM_MEMBERS.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </Section>
  );
};

export default TeamSection;
