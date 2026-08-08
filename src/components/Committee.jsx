import { useState } from 'react';
import { ORGANIZING_COMMITTEE } from '../data/committeeData';

function RoleGroup({ title, people, accent = false }) {
  return (
    <div className="mb-8">
      <h3 className={`text-sm uppercase tracking-widest font-bold mb-4 drop-shadow-sm ${accent ? 'text-[var(--color-cyber-magenta)]' : 'text-[var(--color-cyber-cyan)]'}`}>
        {title}
      </h3>
      <ul className="space-y-3">
        {people.map((p, i) => (
          <li key={i}>
            <p className="text-white font-semibold text-base drop-shadow-md">{p.name}</p>
            {p.designation && <p className="text-white/60 text-sm">{p.designation}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default function Committee() {
  const { chiefPatrons, convener, coConveners, coordinator, coCoordinator, principalsSisterInstitute, campusInCharge, members } =
    ORGANIZING_COMMITTEE;

  return (
    <section id="committee" className="relative text-white py-20 bg-transparent">
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Organizing Committee */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center mb-3 drop-shadow-md">
          Organizing Committee
        </h2>
        <div className="w-16 h-1 bg-[var(--color-cyber-purple)] mx-auto rounded-full mb-12 shadow-[0_0_10px_var(--color-cyber-purple)]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 mb-16">
          <div>
            <RoleGroup title="Chief Patron" people={chiefPatrons} accent />
            <RoleGroup title="Convener" people={convener} />
            <RoleGroup title="Co-Convener" people={coConveners} />
            <RoleGroup title="Coordinator" people={coordinator} />
            <RoleGroup title="Co-Coordinator" people={coCoordinator} />
            <RoleGroup title="Principals of Sister Institute" people={principalsSisterInstitute} />
            <RoleGroup title="Campus In-Charge" people={campusInCharge} />
          </div>
          <div>
            <RoleGroup title="Members" people={members} accent />
          </div>
        </div>


      </div>
    </section>
  );
}
