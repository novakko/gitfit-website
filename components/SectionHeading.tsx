import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  sub?: string;
  id?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, sub, id }) => (
  <div id={id} className="max-w-2xl mx-auto text-center mb-12 scroll-mt-24">
    <p className="text-neon-cyan uppercase tracking-widest text-sm font-semibold mb-3">{eyebrow}</p>
    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{title}</h2>
    {sub && <p className="text-neon-muted text-lg">{sub}</p>}
  </div>
);

export default SectionHeading;
