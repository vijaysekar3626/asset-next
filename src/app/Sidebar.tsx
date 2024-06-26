import React from 'react';

interface SidebarProps {
  sidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen }) => {
  return (
    <aside className={`flex-shrink-0 w-64 flex flex-col border-r transition-all duration-300 ${!sidebarOpen ? '-ml-64' : ''}`}>
      <div className="h-64 bg-gray-900"></div>
      <nav className="flex-1 flex flex-col bg-white">
        <a href="#" className="p-2">Nav Link 1</a>
        <a href="#" className="p-2">Nav Link 2</a>
        <a href="#" className="p-2">Nav Link 3</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
