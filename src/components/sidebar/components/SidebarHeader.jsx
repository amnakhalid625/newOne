import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SidebarHeader = ({ isCollapsed, setIsCollapsed, sidebarWidth }) => {
  return (
    <button
      onClick={() => setIsCollapsed(!isCollapsed)}
      className="collapse-btn"
      style={{ left: isCollapsed ? '24px' : `${sidebarWidth - 21}px` }}
    >
      {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
    </button>
  );
};

export default SidebarHeader;
