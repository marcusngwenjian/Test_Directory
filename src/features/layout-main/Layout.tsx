import React from 'react';
import type { ReactNode } from 'react';
import Navbar from '../navigation-bar/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>
        {children}
      </div>
    </>
  );
};

export default Layout;
