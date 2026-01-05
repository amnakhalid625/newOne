import React from 'react';
import { Home, MoreHorizontal } from 'lucide-react';
import { appFeatures } from '../data/appFeatures';

const SidebarCollapsed = ({ activeItem, setActiveItem }) => {
  return (
    <div className="sidebar-section collapsed">
      {appFeatures.map((feature, idx) => (
        <button key={idx} className="sidebar-item-collapsed">
          <feature.icon size={16} />
        </button>
      ))}

      <button
        onClick={() => setActiveItem('home')}
        className={`sidebar-item-collapsed ${activeItem === 'home' ? 'active' : ''}`}
      >
        <Home size={16} />
      </button>

      <button className="sidebar-item-collapsed">
        <MoreHorizontal size={16} />
      </button>
    </div>
  );
};

export default SidebarCollapsed;
