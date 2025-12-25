import React,{ type ReactNode } from 'react';

interface BannerProps {
  children: ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <section className="mb-4">
      <div className="p-4 bg-light rounded-3 shadow-sm">{children}</div>
    </section>
  );
};

export default Banner;