import React, { useEffect, useState } from 'react';

const SidebarResizeHandle = ({ setSidebarWidth }) => {
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return;
      if (e.clientX >= 200 && e.clientX <= 600) {
        setSidebarWidth(e.clientX);
      }
    };

    const handleMouseUp = () => setIsResizing(false);

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'ew-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing, setSidebarWidth]);

  return (
    <div
      className={`absolute top-0 right-0 w-1 h-full cursor-ew-resize z-[1000] transition-colors duration-200 group
        ${isResizing ? 'bg-[#007F9B] opacity-50' : 'bg-transparent hover:bg-[#007F9B] hover:opacity-30'}`}
      onMouseDown={(e) => {
        e.preventDefault();
        setIsResizing(true);
      }}
      style={{
        touchAction: 'none'
      }}
    >
      {/* Wider hover area for easier grabbing */}
      <div className="absolute top-0 -right-1 w-3 h-full" />
    </div>
  );
};

export default SidebarResizeHandle;