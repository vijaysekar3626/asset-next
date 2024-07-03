'use client'

import Header from '@/app/Header';
import Sidebar from '@/app/Sidebar';
import React, { useEffect, useState } from 'react'


function CommLayout({ children }: { children: React.ReactNode}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  console.log('sidebarOpen: ', sidebarOpen);
  const [isMobile, setIsMobile] = useState(false);
  console.log('isMobile: ', isMobile);

    useEffect(()=>{
      const handleResize = ()=>{
        setIsMobile(window.innerWidth < 768)
      }
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    },[])
    
    useEffect(() => {
      if (!sidebarOpen && isMobile) {
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
      }
    }, [sidebarOpen, isMobile]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex overflow-x-hidden h-full gap-4 md  :p-[10px]">
      <Sidebar sidebarOpen={sidebarOpen}  isMobile={isMobile} handleSidebarToggle={toggleSidebar}/>
      <div className="grid grid-rows-[65px_auto] w-full h-full items-end">
        <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <main className="p-4 bg-white h-[98%] w-[98%] md:w-full m-auto rounded-2xl overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}

export default CommLayout