import React, { useState, useEffect, useRef } from 'react';
import {
  Eye,
  Layers,
  FileText,
  Grid,
  Edit,
  Settings,
  Puzzle,
  Archive,
  Copy,
  ChevronRight,
  FolderPlus,
} from 'lucide-react';
import TemplateCenterModal from '../../templates/TemplateCenterPage';

const AddNewMenu = ({
  show,
  onClose,
  buttonRef,
  showBoardSubmenu,
  setShowBoardSubmenu,
  showDocSubmenu,
  setShowDocSubmenu,
  showFormSubmenu,
  setShowFormSubmenu,
}) => {
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const menuRef = useRef(null);
  const boardButtonRef = useRef(null);
  const docButtonRef = useRef(null);
  const formButtonRef = useRef(null);

  // ✅ Position main menu below button
  useEffect(() => {
    if (show && buttonRef?.current && menuRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      menuRef.current.style.top = `${buttonRect.bottom + 4}px`;
      menuRef.current.style.left = `${buttonRect.right - 240}px`;
    }
  }, [show, buttonRef]);

  // ✅ Position Submenus with Overflow Check
  const positionSubmenu = (buttonRef, selector) => {
    if (buttonRef.current) {
      const submenu = document.querySelector(selector);
      if (submenu) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const submenuWidth = 220;
        let left = buttonRect.right + 4;

        // Flip if no space on right
        if (left + submenuWidth > window.innerWidth) {
          left = buttonRect.left - submenuWidth - 4;
        }

        submenu.style.top = `${buttonRect.top}px`;
        submenu.style.left = `${left}px`;
      }
    }
  };

  useEffect(() => {
    if (showBoardSubmenu) positionSubmenu(boardButtonRef, '.board-submenu');
  }, [showBoardSubmenu]);

  useEffect(() => {
    if (showDocSubmenu) positionSubmenu(docButtonRef, '.doc-submenu');
  }, [showDocSubmenu]);

  useEffect(() => {
    if (showFormSubmenu) positionSubmenu(formButtonRef, '.form-submenu');
  }, [showFormSubmenu]);

  // ✅ Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef?.current &&
        !buttonRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose, buttonRef]);

  if (!show) return null;

  const handleItemClick = () => {
    onClose();
  };

  return (
    <>
      <div className="add-menu-dropdown" ref={menuRef}>
        <div className="add-menu-title">Add new</div>

        <button
          className="dropdown-item"
          onClick={handleItemClick}
        >
          <Eye size={16} style={{ color: '#00d2d2' }} />
          <span>CRM boards</span>
          <ChevronRight size={16} className="submenu-arrow" />
        </button>

        {/* BOARD */}
        <button
          ref={boardButtonRef}
          className="dropdown-item submenu-trigger"
          onMouseEnter={() => setShowBoardSubmenu(true)}
          onMouseLeave={() => setShowBoardSubmenu(false)}
        >
          <Layers size={16} />
          <span>Board</span>
          <ChevronRight size={16} className="submenu-arrow" />
        </button>

        {/* DOC */}
        <button
          ref={docButtonRef}
          className="dropdown-item submenu-trigger"
          onMouseEnter={() => setShowDocSubmenu(true)}
          onMouseLeave={() => setShowDocSubmenu(false)}
        >
          <FileText size={16} />
          <span>Doc</span>
          <ChevronRight size={16} className="submenu-arrow" />
        </button>

        <button
          className="dropdown-item"
          onClick={handleItemClick}
        >
          <Grid size={16} />
          <span>Dashboard</span>
        </button>

        {/* FORM */}
        <button
          ref={formButtonRef}
          className="dropdown-item submenu-trigger"
          onMouseEnter={() => setShowFormSubmenu(true)}
          onMouseLeave={() => setShowFormSubmenu(false)}
        >
          <Edit size={16} />
          <span>Form</span>
          <ChevronRight size={16} className="submenu-arrow" />
        </button>

        <button
          className="dropdown-item"
          onClick={handleItemClick}
        >
          <Settings size={16} />
          <span>Workflow</span>
        </button>

        <button
          className="dropdown-item"
          onClick={handleItemClick}
        >
          <FolderPlus size={16} />
          <span>Folder</span>
        </button>

        <div className="dropdown-divider" />

        <button
          className="dropdown-item"
          onClick={handleItemClick}
        >
          <Puzzle size={16} />
          <span>Installed apps</span>
          <ChevronRight size={16} className="submenu-arrow" />
        </button>

        <button
          className="dropdown-item"
          onClick={handleItemClick}
        >
          <Archive size={16} />
          <span>Import data</span>
          <ChevronRight size={16} className="submenu-arrow" />
        </button>

        <button
          className="dropdown-item"
          onClick={handleItemClick}
        >
          <Copy size={16} />
          <span>Template center</span>
        </button>
      </div>

      {/* Board Submenu */}
      {showBoardSubmenu && (
        <div
          className="submenu board-submenu"
          onMouseEnter={() => setShowBoardSubmenu(true)}
          onMouseLeave={() => setShowBoardSubmenu(false)}
        >
          <button
            className="dropdown-item"
            onClick={handleItemClick}
          >
            <Layers size={16} />
            <span>New Board</span>
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setIsTemplateModalOpen(true);
              onClose();
            }}
          >
            <Copy size={16} />
            <span>Start with template</span>
          </button>
        </div>
      )}

      {/* Doc Submenu */}
      {showDocSubmenu && (
        <div
          className="submenu doc-submenu"
          onMouseEnter={() => setShowDocSubmenu(true)}
          onMouseLeave={() => setShowDocSubmenu(false)}
        >
          <button
            className="dropdown-item"
            onClick={handleItemClick}
          >
            <FileText size={16} />
            <span>New Doc</span>
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setIsTemplateModalOpen(true);
              onClose();
            }}
          >
            <Copy size={16} />
            <span>Start with template</span>
          </button>
        </div>
      )}

      {/* Form Submenu */}
      {showFormSubmenu && (
        <div
          className="submenu form-submenu"
          onMouseEnter={() => setShowFormSubmenu(true)}
          onMouseLeave={() => setShowFormSubmenu(false)}
        >
          <button
            className="dropdown-item"
            onClick={handleItemClick}
          >
            <Edit size={16} />
            <span>New Form</span>
          </button>
          <button
            className="dropdown-item"
            onClick={() => {
              setIsTemplateModalOpen(true);
              onClose();
            }}
          >
            <Copy size={16} />
            <span>Start with template</span>
          </button>
        </div>
      )}

      {/* Template Center Modal */}
      <TemplateCenterModal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
      />
    </>
  );
};

export default AddNewMenu;