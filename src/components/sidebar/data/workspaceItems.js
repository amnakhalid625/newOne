import { 
  Layers, 
  FileText, 
  Package, 
  Calendar,
  BarChart3,
  BookOpen,
  Building2,
  GitBranch,
  Activity,
  PieChart,
  UserPlus,
  Briefcase,
  Phone,
  DollarSign
} from 'lucide-react';

// 🆕 NON-PROFIT SPECIFIC OPTIONS WITH SUB-ITEMS AND THEIR ICONS
export const nonprofitWorkspaceItems = [
  { 
    id: 'grants-management',
    label: 'Grants Management',
    workspaceNumber: '2565135',
    icon: null,
    subItems: [
      { label: 'Grants Pipeline', icon: GitBranch },
      { label: 'Getting Started', icon: BookOpen },
      { label: 'Grant Providers', icon: Building2 },
      { label: 'Grants Dashboard', icon: BarChart3 }
    ]
  },
  { 
    id: 'donor-management',
    label: 'Donor Management',
    workspaceNumber: '2580941',
    icon: null,
    subItems: [
      { label: 'Donors', icon: UserPlus },
      { label: 'Donations', icon: DollarSign },
      { label: 'Donor Activities', icon: Activity },
      { label: 'Donors Dashboard', icon: PieChart },
      { label: 'Getting Started', icon: BookOpen }
    ]
  },
  { 
    id: 'fundraising',
    label: 'monday Fundraising',
    workspaceNumber: '2580945',
    icon: null,
    subItems: [
      { label: 'Donors', icon: UserPlus },
       { label: 'Getting Started', icon: BookOpen }

    ]
  },
  { 
    id: 'project-management',
    label: 'Project Management',
    workspaceNumber: '2580926',
    icon: null,
    subItems: [
      { label: 'Project Management', icon: Briefcase },
      { label: 'Learning Center', icon: BookOpen }
    ]
  },
  { 
    id: 'volunteer',
    label: 'Volunteer Registration Management',
    workspaceNumber: '2580952',
    icon: null,
    subItems: [
      { label: 'Volunteer registration management', icon: UserPlus },
      { label: 'Volunteer Learning Center', icon: BookOpen }
    ]
  },
];

// 🆕 DEFAULT OPTIONS (for work/business users) - Now includes all workspaces for dropdown
export const defaultWorkspaceItems = nonprofitWorkspaceItems;

// 🆕 MAIN FUNCTION - Returns items based on category
export const getWorkspaceItems = (category) => {
  console.log('🔍 getWorkspaceItems called with category:', category);
  
  if (category === 'ngo' || category === 'nonprofit') {
    console.log('✅ Returning NON-PROFIT items');
    return nonprofitWorkspaceItems;
  }
  
  console.log('✅ Returning DEFAULT items (all workspaces available in dropdown)');
  return defaultWorkspaceItems;
};

// 🆕 DEFAULT EXPORT (for backwards compatibility)
export default defaultWorkspaceItems;