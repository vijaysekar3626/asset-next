import Image from "next/image";
import React, { useState } from "react";
import sidebarimg from "@/app/favicon.ico";
import Link from "next/link";
import { sidebar } from "@/context/datajson";
import { usePathname } from "next/navigation";

interface SidebarProps {
  sidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen }) => {
  const [active,setactive] = useState()
  const pathname = usePathname();
  var activeTab = pathname.split('/')[1]
  console.log('activeTab: ', activeTab);
  

  return (
    <aside className={`flex-shrink-0 flex flex-col border-r transition-all duration-300 rounded-2xl overflow-hidden bg-white ${!sidebarOpen ? 'w-20' : 'w-64'}`}>
      <div className="h-28 rounded-t-2xl mx-auto py-8">
        <Image src={sidebarimg} height={50} width={50} alt="vijay" />
      </div>
      <nav className="flex-1 flex flex-col w-[95%] m-auto overflow-y-auto">
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
                  width={`${!sidebarOpen ? 50 : 25}`}
                  height={`${!sidebarOpen ? 50 : 25}`}
                  alt=""
                />
                {sidebarOpen && (
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
