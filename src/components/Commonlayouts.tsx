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
    <div className="flex overflow-x-hidden h-full gap-4">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="grid grid-rows-[65px_auto] w-full h-full items-end">
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-4 bg-white h-[98%] rounded-2xl overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}

export default CommLayout