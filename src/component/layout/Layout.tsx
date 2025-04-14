import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-light dark:bg-dark text-gray-900 dark:text-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;