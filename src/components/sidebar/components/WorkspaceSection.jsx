import React, { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MoreVertical, Search, Plus, ChevronDown, ChevronRight, Home } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { getWorkspaceItems } from '../data/workspaceItems';
import WorkspaceMenu from './WorkspaceMenu';
import AddNewMenu from './AddNewMenu';
import WorkspaceDropdown from './WorkspaceDropdown';

const WorkspaceSection = ({ activeItem, setActiveItem, boards = [], onBoardClick }) => {
  const router = useRouter();


  const pathname = usePathname();
  const { userCategory } = useAuth();

  const workspaceMenuButtonRef = useRef(null);
  const addMenuButtonRef = useRef(null);
  const workspaceCardRef = useRef(null);

  const [showWorkspaceMenu, setShowWorkspaceMenu] = useState(false);
  const [showEditSubmenu, setShowEditSubmenu] = useState(false);
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [showBoardSubmenu, setShowBoardSubmenu] = useState(false);
  const [showDocSubmenu, setShowDocSubmenu] = useState(false);
  const [showFormSubmenu, setShowFormSubmenu] = useState(false);
  const [showWorkspaceDropdown, setShowWorkspaceDropdown] = useState(false);

  const [currentWorkspace, setCurrentWorkspace] = useState(null);

  // ✅ Fix: SSR-safe category retrieval
  const [category, setCategory] = useState(userCategory);

  useEffect(() => {
    if (userCategory) {
      setCategory(userCategory);
    } else if (typeof window !== 'undefined') {
      try {
        const stored = sessionStorage.getItem('userCategory');
        if (stored) setCategory(stored);
      } catch (e) {
        console.error('Error accessing sessionStorage:', e);
      }
    }
  }, [userCategory]);

  const staticWorkspaceItems = getWorkspaceItems(category);

  // TEMPLATE ID TO WORKSPACE MAPPING
  const templateToWorkspace = {
    'grants-pipeline': 'grants-management',
    'getting-started': 'grants-management',
    'grant-providers': 'grants-management',
    'grants-dashboard': 'grants-management',
    'donors': 'donor-management',
    'donors-dashboard': 'donor-management',
    'project-management': 'project-management',
    'volunteer-registration': 'volunteer'
  };

  // 🆕 UPDATED: SUB-ITEM TO ROUTE MAPPING (Template, Dashboard, or Docs)
  const subItemRouting = {
    // ✅ GRANTS MANAGEMENT
    'Grants Pipeline': { type: 'template', route: 'grants-pipeline' },
    'Getting Started': { type: 'docs', route: null },
    'Grant Providers': { type: 'disabled', route: null },
    'Grants Dashboard': { type: 'dashboard', route: '/dashboards/overview' }, // ✅ Changed

    // ✅ DONOR MANAGEMENT
    'Donors': { type: 'template', route: 'donors' },
    'Donations': { type: 'disabled', route: null }, // ✅ Added to match workspaceItems
    'Donor Donations': { type: 'disabled', route: null },
    'Donor Activities': { type: 'disabled', route: null },
    'Donors Dashboard': { type: 'dashboard', route: '/dashboards/donor-dashboard' }, // ✅ Changed

    // ✅ PROJECT MANAGEMENT
    'Project Management': { type: 'template', route: 'project-management' },
    'Learning Center': { type: 'docs', route: null },

    // ✅ VOLUNTEER
    'Volunteer registration management': { type: 'template', route: 'volunteer-registration' },
    'Volunteer Learning Center': { type: 'docs', route: null }
  };

  // WORKSPACE TO GETTING STARTED DOCUMENTATION MAPPING
  const workspaceToGettingStarted = {
    'grants-management': '/docs/grants-getting-started',
    'donor-management': '/docs/donor-getting-started',
    'fundraising': '/docs/fundraising-getting-started',
    'project-management': '/docs/project-management-learning-center',
    'volunteer': '/docs/volunteer-getting-started'
  };

  // SET WORKSPACE BASED ON CURRENT ROUTE + DEFAULT TO GRANTS MANAGEMENT
  useEffect(() => {
    if ((category === 'ngo' || category === 'nonprofit') && staticWorkspaceItems.length > 0) {
      const pathParts = pathname.split('/');

      // CHECK IF ON WORKSPACE PAGE
      if (pathParts[1] === 'workspaces' && pathParts[3]) {
        const workspaceId = pathParts[3];
        const workspace = staticWorkspaceItems.find(item => item.id === workspaceId);
        if (workspace) {
          setCurrentWorkspace(workspace);
          console.log('✅ Set workspace from /workspaces route:', workspace.label);
          return;
        }
      }

      // CHECK IF ON TEMPLATE BOARD
      if (pathParts[1] === 'boards' && pathParts[2] === 'template' && pathParts[3]) {
        const templateId = pathParts[3];
        const workspaceId = templateToWorkspace[templateId];

        if (workspaceId) {
          const workspace = staticWorkspaceItems.find(item => item.id === workspaceId);
          if (workspace) {
            setCurrentWorkspace(workspace);
            console.log('✅ Set workspace from template route:', workspace.label);
            return;
          }
        }
      }

      // 🆕 CHECK IF ON DASHBOARD PAGE
      if (pathParts[1] === 'dashboards' && pathParts[2]) {
        const dashboardToWorkspace = {
          'overview': 'grants-management',
          'donor-dashboard': 'donor-management'
        };
        const workspaceId = dashboardToWorkspace[pathParts[2]];
        if (workspaceId) {
          const workspace = staticWorkspaceItems.find(item => item.id === workspaceId);
          if (workspace) {
            setCurrentWorkspace(workspace);
            console.log('✅ Set workspace from dashboard route:', workspace.label);
            return;
          }
        }
      }

      // CHECK IF ON DOCS PAGE
      if (pathParts[1] === 'docs' && pathParts[2]) {
        const docName = pathParts[2];
        for (const [workspaceId, docPath] of Object.entries(workspaceToGettingStarted)) {
          if (docPath === `/docs/${docName}`) {
            const workspace = staticWorkspaceItems.find(item => item.id === workspaceId);
            if (workspace) {
              setCurrentWorkspace(workspace);
              console.log('✅ Set workspace from docs route:', workspace.label);
              return;
            }
          }
        }
      }

      // DEFAULT: Set to Grants Management
      if (pathParts[1] !== 'workspaces' && pathParts[1] !== 'boards' && pathParts[1] !== 'docs' && pathParts[1] !== 'dashboards') {
        const grantsWorkspace = staticWorkspaceItems.find(item => item.id === 'grants-management');
        if (grantsWorkspace && !currentWorkspace) {
          setCurrentWorkspace(grantsWorkspace);
          console.log('✅ Default workspace set to Grants Management');
        }
      }
    }
  }, [category, staticWorkspaceItems, pathname, currentWorkspace]);

  const handleBoardClick = (boardId, boardName) => {
    setActiveItem(boardName);
    if (onBoardClick) {
      onBoardClick(boardId);
    } else {
      router.push(`/boards/${boardId}`);
    }
  };

  const handleWorkspaceChange = (item) => {
    setCurrentWorkspace(item);
    router.push(`/workspaces/${item.id}`);
    console.log('🔄 Workspace changed to:', item.label);
  };

  // 🆕 UPDATED: Handle sub-item clicks with proper routing logic
  const handleSubItemClick = (subItemLabel) => {
    setActiveItem(subItemLabel);

    const routing = subItemRouting[subItemLabel];

    if (!routing) {
      console.log('⚠️ No routing configured for:', subItemLabel);
      return;
    }

    // 🔒 DISABLED ITEMS - Show coming soon message
    if (routing.type === 'disabled') {
      console.log('🔒 Feature coming soon:', subItemLabel);
      alert(`"${subItemLabel}" feature is coming soon! `);
      return;
    }

    // ✅ DOCUMENTATION PAGES
    if (routing.type === 'docs') {
      if (currentWorkspace && workspaceToGettingStarted[currentWorkspace.id]) {
        const docPath = workspaceToGettingStarted[currentWorkspace.id];
        console.log('✅ Opening docs:', docPath);
        router.push(docPath);
        return;
      }
    }

    // ✅ DASHBOARD PAGES
    if (routing.type === 'dashboard') {
      console.log('✅ Opening dashboard:', routing.route);
      router.push(routing.route);
      return;
    }

    // ✅ TEMPLATE BOARDS
    if (routing.type === 'template') {
      console.log('✅ Opening template:', routing.route);
      router.push(`/boards/template/${routing.route}`);
      return;
    }
  };

  const getWorkspaceName = () => {
    if (currentWorkspace) {
      return currentWorkspace.label;
    }
    return category === 'ngo' || category === 'nonprofit' ? 'Non-Profit Workspace' : 'MainWorkSpace';
  };

  const getWorkspaceColor = (workspaceLabel) => {
    const colorMap = {
      'Grants Management': '#067B4B',
      'Donor Management': '#FB275D',
      'monday Fundraising': '#9CD326',
      'Volunteer Registration Management': '#FFCB00',
      'Project Management': '#0073EA'
    };
    return colorMap[workspaceLabel] || '#007f9b';
  };

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

  const getWorkspaceIcon = () => {
    if (currentWorkspace) {
      return getWorkspaceInitial(currentWorkspace.label);
    }
    return category === 'ngo' || category === 'nonprofit' ? '❤️' : 'M';
  };

  const getWorkspaceAvatarColor = () => {
    if (currentWorkspace) {
      return getWorkspaceColor(currentWorkspace.label);
    }
    return category === 'ngo' || category === 'nonprofit' ? '#FB275D' : '#007f9b';
  };

  // 🆕 Helper function to check if item is disabled
  const isItemDisabled = (subItemLabel) => {
    const routing = subItemRouting[subItemLabel];
    return routing && routing.type === 'disabled';
  };

  return (
    <div className="workspace-section">

      {/* HEADER */}
      <div className="workspace-header">
        <span className="section-title">Workspaces</span>

        <div className="header-actions">
          <button
            ref={workspaceMenuButtonRef}
            className="icon-btn"
            onClick={() => setShowWorkspaceMenu(!showWorkspaceMenu)}
            aria-label="Workspace menu"
          >
            <MoreVertical size={16} />
          </button>

          <button
            className="icon-btn"
            aria-label="Search"
          >
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* WORKSPACE 3-DOTS MENU */}
      <WorkspaceMenu
        show={showWorkspaceMenu}
        onClose={() => {
          setShowWorkspaceMenu(false);
          setShowEditSubmenu(false);
        }}
        buttonRef={workspaceMenuButtonRef}
        showEditSubmenu={showEditSubmenu}
        setShowEditSubmenu={setShowEditSubmenu}
      />

      {/* CURRENT WORKSPACE DROPDOWN */}
      <div className="workspace-selector-row">
        <button
          ref={workspaceCardRef}
          className="workspace-card"
          onClick={() => setShowWorkspaceDropdown(!showWorkspaceDropdown)}
        >
          <div
            className="workspace-avatar"
            style={{ background: getWorkspaceAvatarColor() }}
          >
            <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '12px' }}>
              {getWorkspaceIcon()}
            </span>
            <div className="workspace-badge">
              <Home size={8} />
            </div>
          </div>
          <span className="workspace-name">
            {getWorkspaceName()}
          </span>
          <ChevronDown size={18} className="workspace-chevron" />
        </button>

        <button
          ref={addMenuButtonRef}
          className="add-btn"
          onClick={() => setShowAddMenu(!showAddMenu)}
          aria-label="Add new item"
        >
          <Plus size={20} />
        </button>
      </div>

      {/* WORKSPACE DROPDOWN MENU */}
      <WorkspaceDropdown
        show={showWorkspaceDropdown}
        onClose={() => setShowWorkspaceDropdown(false)}
        buttonRef={workspaceCardRef}
        workspaceItems={staticWorkspaceItems.filter(item => item.subItems && item.subItems.length > 0)}
        currentWorkspace={currentWorkspace}
        onWorkspaceSelect={handleWorkspaceChange}
      />

      {/* ADD NEW MENU */}
      <AddNewMenu
        show={showAddMenu}
        onClose={() => {
          setShowAddMenu(false);
          setShowBoardSubmenu(false);
          setShowDocSubmenu(false);
          setShowFormSubmenu(false);
        }}
        buttonRef={addMenuButtonRef}
        showBoardSubmenu={showBoardSubmenu}
        setShowBoardSubmenu={setShowBoardSubmenu}
        showDocSubmenu={showDocSubmenu}
        setShowDocSubmenu={setShowDocSubmenu}
        showFormSubmenu={showFormSubmenu}
        setShowFormSubmenu={setShowFormSubmenu}
      />

      {/* WORKSPACE ITEMS */}
      <div className="workspace-items">

        {/* ✅ CURRENT WORKSPACE SUB-ITEMS */}
        {currentWorkspace && currentWorkspace.subItems && currentWorkspace.subItems.length > 0 && (
          <>
            {currentWorkspace.subItems.map((subItem, index) => {
              const subItemLabel = typeof subItem === 'object' ? subItem.label : subItem;
              const SubItemIcon = typeof subItem === 'object' && subItem.icon ? subItem.icon : null;
              const disabled = isItemDisabled(subItemLabel);

              return (
                <button
                  key={index}
                  onClick={() => handleSubItemClick(subItemLabel)}
                  className={`workspace-item ${activeItem === subItemLabel ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
                  style={disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                  title={disabled ? 'Coming soon!' : ''}
                >
                  {SubItemIcon ? (
                    <SubItemIcon size={16} className="item-icon" style={{ color: '#676879' }} />
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="item-icon"
                      style={{ color: '#676879' }}
                    >
                      <path d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z" fillRule="evenodd" clipRule="evenodd" />
                    </svg>
                  )}
                  <span>{subItemLabel}</span>
                  {disabled && <span style={{ marginLeft: 'auto', fontSize: '10px' }}>🚧</span>}
                </button>
              );
            })}
          </>
        )}

        {/* DIVIDER */}
        {boards.length > 0 && (
          <div style={{
            height: '1px',
            backgroundColor: '#e6e9ef',
            margin: '8px 12px'
          }} />
        )}

        {/* DYNAMIC BOARDS FROM BACKEND */}
        {boards.length === 0 ? (
          <div
            className="workspace-item"
            style={{
              opacity: 0.5,
              cursor: 'default',
              fontSize: '13px',
              color: '#9699a6',
              fontStyle: 'italic',
              justifyContent: 'center'
            }}
          >
            <span>No custom boards yet</span>
          </div>
        ) : (
          boards.map((board) => (
            <button
              key={board._id}
              onClick={() => handleBoardClick(board._id, board.name)}
              className={`workspace-item ${activeItem === board.name ? 'active' : ''
                }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="item-icon"
              >
                <path d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z" />
              </svg>
              <span>{board.name}</span>
            </button>
          ))
        )}
      </div>

    </div>
  );
};

export default WorkspaceSection;