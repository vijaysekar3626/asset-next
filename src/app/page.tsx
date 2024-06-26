'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Home: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex overflow-x-hidden h-screen">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="flex-1">
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-4"></main>
      </div>
    </div>
  );
};

export default Home;
