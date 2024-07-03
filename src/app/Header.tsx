import Image from 'next/image';
import React from 'react';
import sidebar from "../../public/asset/image/sidebar/open and close.png"

interface HeaderProps {
  toggleSidebar: () => void;
  sidebarOpen:boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar,sidebarOpen }) => {
  return (
    <header className="flex items-center p-4 text-semibold bg-white md:rounded-2xl h-[100%]">
      <button className="p-1 mr-4" onClick={toggleSidebar}>
        <Image src={sidebar} alt='' height={25} width={25} className={`${sidebarOpen ? 'rotate_180' : ''}`}/>
      </button>
      Header
    </header>
  );
};

export default Header;
