import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainMenu from './MainMenu';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 924px)');
    setSidebarOpen(mq.matches);
    const handleResize = (e) => setSidebarOpen(e.matches);
    mq.addEventListener('change', handleResize);
    return () => mq.removeEventListener('change', handleResize);
  }, []);

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex h-auto bg-gray-50 overflow-hidden">
        {sidebarOpen && <Sidebar />}
        <MainMenu />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
