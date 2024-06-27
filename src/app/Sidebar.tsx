import Image from 'next/image';
import React from 'react';
import sidebarimg from "@/app/favicon.ico";
import Link from 'next/link';

interface SidebarProps {
  sidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen }) => {
  return (
    <aside className={`flex-shrink-0 flex flex-col border-r transition-all duration-300 rounded-2xl overflow-hidden bg-white ${!sidebarOpen ? 'w-20' : 'w-64'}`}>
      <div className="h-28 rounded-t-2xl mx-auto py-8">
        <Image src={sidebarimg} height={50} width={50} alt='vijay'/>
      </div>
      <nav className="flex-1 flex flex-col ">
        <Link href="/dashboard" className="p-2 font-poppins">Dashboard</Link>
        <Link href="/asset" className="p-2 font-poppins">Asset</Link>
        <Link href="/accessories" className="p-2 font-poppins">Accessories</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
