import React from 'react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'gradient' | 'outline';
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ href, children, variant = 'gradient', className = '' }) => {
  const external = href.startsWith('http') || href.startsWith('mailto');
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-transform duration-200 hover:scale-[1.03]';
  const styles =
    variant === 'gradient'
      ? 'bg-cta-gradient text-white shadow-glow-cta'
      : 'border border-neon-cyan/60 text-neon-cyan hover:bg-neon-cyan/10';
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {children}
    </a>
  );
};

export default CTAButton;
