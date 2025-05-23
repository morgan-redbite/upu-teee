import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col min-h-screen w-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;