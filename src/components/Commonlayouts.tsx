'use client'
import Header from '@/app/Header';
import Sidebar from '@/app/Sidebar';
import React, { useState } from 'react'


function CommLayout({ children }: { children: React.ReactNode}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex overflow-x-hidden h-screen">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="flex-1">
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  )
}

export default CommLayout