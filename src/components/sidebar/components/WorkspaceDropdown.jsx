import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const WorkspaceDropdown = ({ 
  show, 
  onClose, 
  buttonRef, 
  workspaceItems, 
  currentWorkspace, 
  onWorkspaceSelect,
  userCategory
}) => {
  const dropdownRef = useRef(null);

  // 🆕 WORKSPACE COLORS
  const getWorkspaceColor = (workspaceLabel) => {
    const colorMap = {
      'Grants Management': '#067B4B',
      'Donor Management': '#FB275D',
      'monday Fundraising': '#FDAB3D',
      'Volunteer Registration Management': '#9cd326',
      'Project Management': '#579bfc'
    };
    return colorMap[workspaceLabel] || '#007f9b';
  };

  // 🆕 WORKSPACE INITIALS
  const getWorkspaceInitial = (workspaceLabel) => {
    const initialMap = {
      'Grants Management': 'G',
      'Donor Management': 'D',
      'monday Fundraising': 'F',
      'Volunteer Registration Management': 'V',
      'Project Management': 'P'
    };
    return initialMap[workspaceLabel] || workspaceLabel.charAt(0).toUpperCase();
  };

  // 🆕 CALCULATE POSITION
  useEffect(() => {
    if (show && buttonRef.current && dropdownRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdown = dropdownRef.current;

      dropdown.style.top = `${buttonRect.bottom + 8}px`;
      dropdown.style.left = `${buttonRect.left}px`;
      dropdown.style.minWidth = `${buttonRect.width}px`;
    }
  }, [show, buttonRef]);

  // 🆕 CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    if (!show) return;

    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [show, onClose, buttonRef]);

  if (!show) return null;

  // ✅ Show message if no workspaces available
  const hasWorkspaces = workspaceItems && workspaceItems.length > 0;

  return (
    <div ref={dropdownRef} className="workspace-dropdown">
      
      <div className="add-menu-title">My Workspaces</div>

      {hasWorkspaces ? (
        <>
          {workspaceItems.map((item, index) => {
            const isSelected = currentWorkspace && currentWorkspace.label === item.label;
            const bgColor = getWorkspaceColor(item.label);
            const initial = getWorkspaceInitial(item.label);

            return (
              <button
                key={index}
                onClick={() => {
                  onWorkspaceSelect(item);
                  onClose();
                }}
                className="dropdown-item"
              >
                <div 
                  className="workspace-avatar" 
                  style={{ 
                    width: '24px', 
                    height: '24px', 
                    fontSize: '12px',
                    fontWeight: 600,
                    background: bgColor,
                    color: '#ffffff'
                  }}
                >
                  {initial}
                </div>
                <span>{item.label}</span>
                {isSelected && (
                  <Check size={16} style={{ marginLeft: 'auto', color: '#007F9B' }} />
                )}
              </button>
            );
          })}
        </>
      ) : (
        <div style={{ 
          padding: '12px', 
          fontSize: '13px', 
          color: '#9699a6',
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          No workspaces available
        </div>
      )}

      <div className="dropdown-divider" />

      <button className="dropdown-item" style={{ color: '#1f76c2', fontWeight: 500 }}>
        <span>+ Add workspace</span>
      </button>
    </div>
  );
};

export default WorkspaceDropdown;