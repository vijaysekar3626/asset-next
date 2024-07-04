import Image from "next/image";
import React, { useState } from "react";
import sidebarimg from "../../public/asset/image/logo.png";
import Link from "next/link";
import { sidebar } from "@/context/datajson";
import { usePathname } from "next/navigation";

interface SidebarProps {
  sidebarOpen: boolean;
  isMobile:boolean;
  handleSidebarToggle : ()=> void
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen,isMobile,handleSidebarToggle }) => {
  
  const [active,setactive] = useState(sidebarOpen)
  const pathname = usePathname();
  var activeTab = pathname.split('/')[1]
  
  const handleSidebar = ()=>{
    handleSidebarToggle();
  } 

  return (
    
    <aside className={`${(isMobile && !sidebarOpen) ? "absolute z-10 h-full rounded-none flex before:bg-[rgba(0,0,0,0.2)] w-64" :'hidden'} flex-shrink-0 md:flex flex-col border-r transition-all duration-300 rounded-2xl overflow-hidden bg-white ${!sidebarOpen ? 'w-16' : 'w-64'}`}>
      <div className="md:hidden absolute top-3 right-0" onClick={handleSidebar}>&#9664;</div>
      <div className="h-28 rounded-t-2xl mx-auto py-8 w-[150px]">
        <Image src={sidebarimg}  alt="vijay" />
      </div>
      <nav className="flex-1 flex flex-col w-[95%] m-auto overflow-y-auto nav-item">
        {sidebar.map((item: any, index: any) => {
          return (
            <div key={index}>
              <Link
                href={item.link}
                className=" flex gap-2 p-3 hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-[10px] outline-none hover:text-white"
                key={index}
              >
                <Image
                  src={item.icon}
                  width={`${!sidebarOpen ? 30 : 25}`}
                  height={`${!sidebarOpen ? 30 : 25}`}
                  alt=""
                />
                { (sidebarOpen || isMobile) && (
                  <span className="h-full font-poppins capitaliz">
                    {item.title}
                  </span>
                )}
              </Link>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
