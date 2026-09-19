import React from 'react';

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ src, alt, className = '' }) => (
  <div
    className={`relative overflow-hidden border-[10px] border-[#050510] bg-black rounded-[44px] shadow-glow-card ${className}`}
  >
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#050510] rounded-full z-10"></div>
    <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover rounded-[34px]" />
  </div>
);

export default PhoneFrame;
