import React from 'react';
import { Home, MoreHorizontal, ChevronRight } from 'lucide-react';
import { appFeatures } from '../data/appFeatures';

const SidebarAppFeatures = ({ activeItem, setActiveItem }) => {
  return (
    <div className="sidebar-section">
      {/* Dynamic App Features */}
      {appFeatures.map((feature, idx) => (
        <button
          key={idx}
          onClick={() => setActiveItem(feature.label.toLowerCase())}
          className={`sidebar-item ${
            activeItem === feature.label.toLowerCase() ? 'active' : ''
          }`}
        >
          <feature.icon size={16} className="item-icon" />
          <span className="item-label">{feature.label}</span>
        </button>
      ))}

      {/* Home Button */}
      <button
        onClick={() => setActiveItem('home')}
        className={`sidebar-item ${activeItem === 'home' ? 'active' : ''}`}
      >
        <Home size={16} className="item-icon" />
        <span className="item-label">Home</span>
      </button>

      {/* More Button with Chevron */}
      <button
        onClick={() => setActiveItem('more')}
        className={`sidebar-item ${activeItem === 'more' ? 'active' : ''}`}
      >
        <MoreHorizontal size={16} className="item-icon" />
        <span className="item-label">More</span>
        <ChevronRight size={16} className="chevron-icon" />
      </button>
    </div>
  );
};

export default SidebarAppFeatures;