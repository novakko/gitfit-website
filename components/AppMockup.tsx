
import React from 'react';

interface AppMockupProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const AppMockup: React.FC<AppMockupProps> = ({ imageUrl, alt, className = "" }) => {
  return (
    <div className={`relative mx-auto border-neutral-900 bg-neutral-900 border-[8px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden ${className}`}>
      <div className="h-[32px] w-[3px] bg-neutral-900 absolute -left-[11px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-neutral-900 absolute -left-[11px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-neutral-900 absolute -left-[11px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-neutral-900 absolute -right-[11px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover"
        />
        {/* iOS Dynamic Island Mock */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-b-2xl z-10"></div>
      </div>
    </div>
  );
};

export default AppMockup;
