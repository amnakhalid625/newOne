// src/config/boardTemplates.js
// Board Templates for Different Workspaces

export const boardTemplates = {
    // ================================
    // GRANTS PIPELINE BOARD
    // ================================
    'grants-pipeline': {
        title: 'Grants Pipeline',
        newItemText: 'New grant',
        addItemText: 'Add grant',
        editableFields: ['name', 'status', 'owner', 'dueDate', 'grantAmount', 'grantProvider'],
        statusGroupMapping: {
            'working': 'active',
            'submitted': 'submitted',
            'awarded': 'submitted'
        },
        columns: [
            { id: 'name', title: 'Grant', type: 'text', width: 280, editable: true },
            { id: 'status', title: 'Status', type: 'status', width: 150, editable: true },
            { id: 'owner', title: 'Owner', type: 'person', width: 120, editable: true },
            { id: 'dueDate', title: 'Due Date', type: 'date', width: 140, editable: true },
            { id: 'grantAmount', title: 'Grant Amount', type: 'text', width: 140, editable: true },
            { id: 'grantProvider', title: 'Grant Provider', type: 'text', width: 200, editable: true }
        ],
        groups: [
            {
                id: 'active',
                name: 'Active Grants',
                color: '#FDAB3D',
                expanded: true,
                tasks: [
                    {
                        id: '1',
                        name: 'Community Foundation Grant',
                        status: 'working',
                        owner: { name: 'Alice', initial: 'A', color: '#579bfc' },
                        dueDate: '2025-09-14',
                        grantAmount: '$35,000',
                        grantProvider: 'Community Fund'
                    },
                    {
                        id: '2',
                        name: 'Federal Arts Initiative',
                        status: 'working',
                        owner: { name: 'Bob', initial: 'B', color: '#00c875' },
                        dueDate: '2025-10-20',
                        grantAmount: '$75,000',
                        grantProvider: 'Arts Council'
                    },
                    {
                        id: 'g3',
                        name: 'STEM Education Program',
                        status: 'working',
                        owner: { name: 'David', initial: 'D', color: '#FFCB00' },
                        dueDate: '2025-11-15',
                        grantAmount: '$120,000',
                        grantProvider: 'Tech Future Org'
                    },
                    {
                        id: 'g4',
                        name: 'Green Energy Research',
                        status: 'stuck',
                        owner: { name: 'Eva', initial: 'E', color: '#FF6B6B' },
                        dueDate: '2025-08-30',
                        grantAmount: '$250,000',
                        grantProvider: 'EcoWorld Foundation'
                    },
                    {
                        id: 'g5',
                        name: 'Local Youth Sports Fund',
                        status: 'working',
                        owner: { name: 'Frank', initial: 'F', color: '#A25DDC' },
                        dueDate: '2025-12-01',
                        grantAmount: '$15,000',
                        grantProvider: 'City Sports Dept'
                    }
                ]
            },
            {
                id: 'submitted',
                name: 'Grants Submitted',
                color: '#A25DDC',
                expanded: true,
                tasks: [
                    {
                        id: '3',
                        name: 'Youth Education Support',
                        status: 'submitted',
                        owner: { name: 'Charlie', initial: 'C', color: '#FFCB00' },
                        dueDate: '2025-06-14',
                        grantAmount: '$50,000',
                        grantProvider: 'EduCorp'
                    },
                    {
                        id: 'g6',
                        name: 'Public Library Digital Access',
                        status: 'submitted',
                        owner: { name: 'Alice', initial: 'A', color: '#579bfc' },
                        dueDate: '2025-05-20',
                        grantAmount: '$45,000',
                        grantProvider: 'State Library Board'
                    },
                    {
                        id: 'g7',
                        name: 'Community Garden Project',
                        status: 'awarded',
                        owner: { name: 'Bob', initial: 'B', color: '#00c875' },
                        dueDate: '2025-04-10',
                        grantAmount: '$10,000',
                        grantProvider: 'Green Earth'
                    },
                    {
                        id: 'g8',
                        name: 'Elderly Care Outreach',
                        status: 'submitted',
                        owner: { name: 'David', initial: 'D', color: '#FFCB00' },
                        dueDate: '2025-07-01',
                        grantAmount: '$80,000',
                        grantProvider: 'Health & Human Services'
                    }
                ]
            }
        ],
        statusConfig: {
            working: { label: 'Working on it', bg: '#FDAB3D' },
            submitted: { label: 'Submitted', bg: '#A25DDC' },
            awarded: { label: 'Awarded', bg: '#00C875' },
            stuck: { label: 'Stuck', bg: '#DF2F4A' }
        }
    },

    // ================================
    // VOLUNTEER REGISTRATION BOARD
    // ================================
    'volunteer-registration': {
        title: 'Volunteer Registration',
        newItemText: 'New volunteer',
        addItemText: '+ Add volunteer',
        editableFields: ['name', 'volunteerManager', 'status', 'email', 'phone', 'address', 'linkedin', 'skills', 'hoursPerWeek', 'startDate'],
        statusGroupMapping: {
            'new': 'new',
            'active': 'active',
            'past': 'past'
        },
        columns: [
            { id: 'name', title: 'Item', type: 'text', width: 200, editable: true },
            { id: 'volunteerManager', title: 'Volunteer manager', type: 'person', width: 160, editable: true },
            { id: 'status', title: 'Status', type: 'status', width: 140, editable: true },
            { id: 'email', title: 'Email', type: 'email', width: 180, editable: true },
            { id: 'phone', title: 'Phone', type: 'phone', width: 150, editable: true },
            { id: 'address', title: 'Address', type: 'text', width: 180, editable: true },
            { id: 'linkedin', title: 'Linkedin', type: 'text', width: 150, editable: true },
            { id: 'skills', title: 'Skills', type: 'tags', width: 150, editable: true },
            { id: 'hoursPerWeek', title: 'Hours per week', type: 'text', width: 130, editable: true },
            { id: 'startDate', title: 'Volunteer start date', type: 'date', width: 160, editable: true }
        ],
        groups: [
            {
                id: 'new',
                name: 'New volunteers',
                color: '#579BFC',
                expanded: true,
                tasks: [
                    {
                        id: 'vol1',
                        name: 'Alice Cooper',
                        volunteerManager: { name: 'David Lee', initial: 'DL', color: '#00C875' },
                        status: 'new',
                        email: 'alice@example.com',
                        phone: '555-0101',
                        address: '123 Maple St',
                        linkedin: '/in/alice',
                        skills: 'Teaching',
                        hoursPerWeek: '5',
                        startDate: '2026-02-01'
                    },
                    {
                        id: 'vol2',
                        name: 'Bob Martin',
                        volunteerManager: { name: 'Erick Joier', initial: 'SC', color: '#A25DDC' },
                        status: 'new',
                        email: 'bob@example.com',
                        phone: '555-0102',
                        address: '456 Oak Ave',
                        linkedin: '/in/bob',
                        skills: 'Fundraising',
                        hoursPerWeek: '10',
                        startDate: '2026-02-15'
                    },
                    {
                        id: 'vol5',
                        name: 'Emily White',
                        volunteerManager: { name: 'David Lee', initial: 'DL', color: '#00C875' },
                        status: 'new',
                        email: 'emily.w@example.com',
                        phone: '555-0205',
                        address: '789 Birch Ln',
                        linkedin: '/in/emilyw',
                        skills: 'Graphic Design',
                        hoursPerWeek: '8',
                        startDate: '2026-03-01'
                    },
                    {
                        id: 'vol6',
                        name: 'James Wilson',
                        volunteerManager: { name: 'Erick Joier', initial: 'SC', color: '#A25DDC' },
                        status: 'new',
                        email: 'james.w@example.com',
                        phone: '555-0206',
                        address: '321 Cedar Blvd',
                        linkedin: '/in/jamesw',
                        skills: 'Event Planning',
                        hoursPerWeek: '12',
                        startDate: '2026-03-05'
                    },
                    {
                        id: 'vol7',
                        name: 'Sophia Martinez',
                        volunteerManager: { name: 'Alex Rivera', initial: 'AR', color: '#FDAB3D' },
                        status: 'new',
                        email: 'sophia.m@example.com',
                        phone: '555-0207',
                        address: '654 Elm St',
                        linkedin: '/in/sophiam',
                        skills: 'Social Media',
                        hoursPerWeek: '6',
                        startDate: '2026-03-10'
                    }
                ]
            },
            {
                id: 'active',
                name: 'Active volunteers',
                color: '#00C875',
                expanded: true,
                tasks: [
                    {
                        id: 'vol3',
                        name: 'Charlie Davis',
                        volunteerManager: { name: 'David Lee', initial: 'DL', color: '#00C875' },
                        status: 'active',
                        email: 'charlie@example.com',
                        phone: '555-0103',
                        address: '789 Pine Rd',
                        linkedin: '/in/charlie',
                        skills: 'Mentoring',
                        hoursPerWeek: '8',
                        startDate: '2025-11-20'
                    },
                    {
                        id: 'vol8',
                        name: 'William Anderson',
                        volunteerManager: { name: 'Alex Rivera', initial: 'AR', color: '#FDAB3D' },
                        status: 'active',
                        email: 'william.a@example.com',
                        phone: '555-0301',
                        address: '987 Spruce St',
                        linkedin: '/in/williama',
                        skills: 'IT Support',
                        hoursPerWeek: '15',
                        startDate: '2025-10-15'
                    },
                    {
                        id: 'vol9',
                        name: 'Ava Thomas',
                        volunteerManager: { name: 'Erick Joier', initial: 'SC', color: '#A25DDC' },
                        status: 'active',
                        email: 'ava.t@example.com',
                        phone: '555-0302',
                        address: '147 Walnut Way',
                        linkedin: '/in/avat',
                        skills: 'Writing, Editing',
                        hoursPerWeek: '10',
                        startDate: '2025-09-01'
                    },
                    {
                        id: 'vol10',
                        name: 'Mia Jackson',
                        volunteerManager: { name: 'David Lee', initial: 'DL', color: '#00C875' },
                        status: 'active',
                        email: 'mia.j@example.com',
                        phone: '555-0303',
                        address: '258 Cherry Ln',
                        linkedin: '/in/miaj',
                        skills: 'Photography',
                        hoursPerWeek: '5',
                        startDate: '2025-12-05'
                    }
                ]
            },
            {
                id: 'past',
                name: 'Past volunteers',
                color: '#CAB641',
                expanded: true,
                tasks: [
                    {
                        id: 'vol11',
                        name: 'Lucas Harris',
                        volunteerManager: { name: 'Erick Joier', initial: 'SC', color: '#A25DDC' },
                        status: 'past',
                        email: 'lucas.h@example.com',
                        phone: '555-0401',
                        address: '369 Oak St',
                        linkedin: '/in/lucash',
                        skills: 'General Help',
                        hoursPerWeek: '0',
                        startDate: '2024-05-01'
                    },
                    {
                        id: 'vol12',
                        name: 'Amelia Clark',
                        volunteerManager: { name: 'Alex Rivera', initial: 'AR', color: '#FDAB3D' },
                        status: 'past',
                        email: 'amelia.c@example.com',
                        phone: '555-0402',
                        address: '741 Maple Ave',
                        linkedin: '/in/ameliac',
                        skills: 'Event Coordination',
                        hoursPerWeek: '0',
                        startDate: '2024-06-15'
                    }
                ]
            }
        ],
        statusConfig: {
            new: { label: 'New', bg: '#579BFC' },
            active: { label: 'Active', bg: '#00C875' },
            past: { label: 'Past', bg: '#CAB641' }
        }
    },

    // ================================
    // DONORS BOARD
    // ================================
    'donors': {
        title: 'Donors',
        newItemText: 'New donor',
        addItemText: '+ Add donor',
        editableFields: ['name', 'status', 'email', 'phone', 'donated', 'donations'],
        statusGroupMapping: {
            'potential': 'potential',
            'active': 'active',
            'inactive': 'inactive'
        },
        columns: [
            { id: 'name', title: 'Donor', type: 'text', width: 250, editable: true },
            { id: 'status', title: 'Status', type: 'status', width: 140, editable: true },
            { id: 'email', title: 'Email', type: 'email', width: 200, editable: true },
            { id: 'phone', title: 'Phone', type: 'phone', width: 150, editable: true },
            { id: 'donated', title: '$ Donated', type: 'text', width: 120, editable: true },
            { id: 'donations', title: 'Donations', type: 'text', width: 200, editable: true }
        ],
        groups: [
            {
                id: 'potential',
                name: 'Potential Donors',
                color: '#FF6B6B',
                expanded: true,
                tasks: [
                    {
                        id: 'd1',
                        name: 'Michael Brown',
                        status: 'potential',
                        email: 'mbrown@example.com',
                        phone: '555-0103',
                        donated: 0,
                        donations: '-'
                    },
                    {
                        id: 'd2',
                        name: 'David Wilson',
                        status: 'potential',
                        email: 'dwilson@example.com',
                        phone: '555-0105',
                        donated: 0,
                        donations: '-'
                    },
                    {
                        id: 'd5',
                        name: 'Tech Ventures Inc.',
                        status: 'potential',
                        email: 'contact@techventures.io',
                        phone: '555-0501',
                        donated: 0,
                        donations: '-'
                    },
                    {
                        id: 'd6',
                        name: 'Global Hope Foundation',
                        status: 'potential',
                        email: 'grants@globalhope.org',
                        phone: '555-0502',
                        donated: 0,
                        donations: '-'
                    },
                    {
                        id: 'd7',
                        name: 'Robert Miller',
                        status: 'potential',
                        email: 'robert.m@example.com',
                        phone: '555-0503',
                        donated: 0,
                        donations: '-'
                    }
                ]
            },
            {
                id: 'active',
                name: 'Active Donors',
                color: '#00C875',
                expanded: true,
                tasks: [
                    {
                        id: 'd3',
                        name: 'Sarah Johnson',
                        status: 'active',
                        email: 'sarah@example.com',
                        phone: '555-0102',
                        donated: 10000,
                        donations: 'Annual Fund'
                    },
                    {
                        id: 'd4',
                        name: 'Emily Davis',
                        status: 'active',
                        email: 'emily@example.com',
                        phone: '555-0104',
                        donated: 7500,
                        donations: 'Building Campaign'
                    },
                    {
                        id: 'd8',
                        name: 'James Anderson',
                        status: 'active',
                        email: 'james.a@example.com',
                        phone: '555-0601',
                        donated: 25000,
                        donations: 'Endowment Fund'
                    },
                    {
                        id: 'd9',
                        name: 'Patricia Martinez',
                        status: 'active',
                        email: 'patricia.m@example.com',
                        phone: '555-0602',
                        donated: 5000,
                        donations: 'Scholarship'
                    },
                    {
                        id: 'd10',
                        name: 'Innovation Corp',
                        status: 'active',
                        email: 'giving@innovation.com',
                        phone: '555-0603',
                        donated: 50000,
                        donations: 'Technology Grant'
                    }
                ]
            }
        ],
        statusConfig: {
            potential: { label: 'Potential', bg: '#FF6B6B' },
            active: { label: 'Active', bg: '#00C875' },
            inactive: { label: 'Inactive', bg: '#C4C4C4' }
        }
    },

    // ================================
    // PROJECT MANAGEMENT BOARD
    // ================================
    'project-management': {
        title: 'Project Management',
        newItemText: 'New project',
        addItemText: '+ Add project',
        editableFields: ['name', 'owner', 'client', 'timeline', 'analysis', 'creation', 'review', 'estHours'],
        statusGroupMapping: {
            'done': 'finished',
            'working': 'active',
            'stuck': 'active'
        },
        columns: [
            { id: 'name', title: 'Project', type: 'text', width: 250, editable: true },
            { id: 'owner', title: 'Owner', type: 'person', width: 120, editable: true },
            { id: 'client', title: 'Client', type: 'text', width: 150, editable: true },
            { id: 'timeline', title: 'Timeline', type: 'text', width: 180, editable: true },
            { id: 'analysis', title: 'Analysis', type: 'status', width: 130, editable: true },
            { id: 'creation', title: 'Creation', type: 'status', width: 130, editable: true },
            { id: 'review', title: 'Review', type: 'status', width: 130, editable: true },
            { id: 'estHours', title: 'Est. Hours', type: 'text', width: 100, editable: true }
        ],
        groups: [
            {
                id: 'active',
                name: 'Active Projects',
                color: '#579BFC',
                expanded: true,
                tasks: [
                    {
                        id: 'p1',
                        name: 'Website Redesign',
                        owner: { name: 'Erick Joier', initial: 'SC', color: '#00C875' },
                        client: 'Tech Corp',
                        timeline: 'Jan 1 - Mar 30',
                        analysis: 'done',
                        creation: 'working',
                        review: 'stuck',
                        estHours: '120h'
                    },
                    {
                        id: 'p2',
                        name: 'Mobile App Launch',
                        owner: { name: 'Mike', initial: 'M', color: '#FF6B6B' },
                        client: 'Startup Inc',
                        timeline: 'Feb 15 - Apr 15',
                        analysis: 'done',
                        creation: 'working',
                        review: 'working',
                        estHours: '80h'
                    },
                    {
                        id: 'p4',
                        name: 'Q1 Financial Audit',
                        owner: { name: 'Emma', initial: 'E', color: '#A25DDC' },
                        client: 'Internal',
                        timeline: 'Mar 1 - Mar 31',
                        analysis: 'working',
                        creation: 'stuck',
                        review: 'stuck',
                        estHours: '60h'
                    },
                    {
                        id: 'p5',
                        name: 'Customer Portal Update',
                        owner: { name: 'David', initial: 'D', color: '#FFCB00' },
                        client: 'Service Co',
                        timeline: 'Apr 1 - Jun 30',
                        analysis: 'done',
                        creation: 'working',
                        review: 'working',
                        estHours: '200h'
                    },
                    {
                        id: 'p6',
                        name: 'Sales Training Workshop',
                        owner: { name: 'Erick Joier', initial: 'SC', color: '#00C875' },
                        client: 'Internal',
                        timeline: 'Mar 15 - Mar 17',
                        analysis: 'done',
                        creation: 'done',
                        review: 'working',
                        estHours: '30h'
                    }
                ]
            },
            {
                id: 'finished',
                name: 'Finished Projects',
                color: '#00C875',
                expanded: true,
                tasks: [
                    {
                        id: 'p3',
                        name: 'Q4 Marketing',
                        owner: { name: 'Emma', initial: 'E', color: '#A25DDC' },
                        client: 'Internal',
                        timeline: 'Oct 1 - Dec 31',
                        analysis: 'done',
                        creation: 'done',
                        review: 'done',
                        estHours: '40h'
                    },
                    {
                        id: 'p7',
                        name: 'Website Security Audit',
                        owner: { name: 'Mike', initial: 'M', color: '#FF6B6B' },
                        client: 'Tech Corp',
                        timeline: 'Jan 5 - Jan 10',
                        analysis: 'done',
                        creation: 'done',
                        review: 'done',
                        estHours: '25h'
                    },
                    {
                        id: 'p8',
                        name: 'Holiday Party Planning',
                        owner: { name: 'David', initial: 'D', color: '#FFCB00' },
                        client: 'Internal',
                        timeline: 'Nov 1 - Dec 20',
                        analysis: 'done',
                        creation: 'done',
                        review: 'done',
                        estHours: '15h'
                    }
                ]
            }
        ],
        statusConfig: {
            done: { label: 'Done', bg: '#00C875' },
            working: { label: 'Working on it', bg: '#FDAB3D' },
            stuck: { label: 'Stuck', bg: '#DF2F4A' }
        }
    },

    // ================================
    // GETTING STARTED BOARD
    // ================================
    'getting-started': {
        title: 'Getting Started',
        newItemText: 'New task',
        addItemText: '+ Add task',
        editableFields: ['name', 'owner', 'status', 'dueDate'],
        statusGroupMapping: {
            'working': 'todo',
            'stuck': 'todo',
            'done': 'completed'
        },
        columns: [
            { id: 'name', title: 'Task', type: 'text', width: 300, editable: true },
            { id: 'owner', title: 'Owner', type: 'person', width: 120, editable: true },
            { id: 'status', title: 'Status', type: 'status', width: 150, editable: true },
            { id: 'dueDate', title: 'Due Date', type: 'date', width: 120, editable: true }
        ],
        groups: [
            {
                id: 'todo',
                name: 'To-Do',
                color: '#579BFC',
                expanded: true,
                tasks: [
                    {
                        id: 't1',
                        name: 'Set up user profile',
                        owner: { name: 'You', initial: 'U', color: '#FF6B6B' },
                        status: 'working',
                        dueDate: '2026-01-10'
                    },
                    {
                        id: 't2',
                        name: 'Invite team members',
                        owner: { name: 'You', initial: 'U', color: '#FF6B6B' },
                        status: 'stuck',
                        dueDate: '2026-01-12'
                    }
                ]
            },
            {
                id: 'completed',
                name: 'Completed',
                color: '#00C875',
                expanded: true,
                tasks: [
                    {
                        id: 't4',
                        name: 'Sign up for account',
                        owner: { name: 'You', initial: 'U', color: '#FF6B6B' },
                        status: 'done',
                        dueDate: '2026-01-01'
                    }
                ]
            }
        ],
        statusConfig: {
            working: { label: 'Working on it', bg: '#FDAB3D' },
            done: { label: 'Done', bg: '#00C875' },
            stuck: { label: 'Stuck', bg: '#DF2F4A' }
        }
    },

    // ================================
    // VOLUNTEER PROJECT MANAGEMENT (Legacy/Alternate)
    // ================================
    'volunteer-project-management': {
        title: 'Volunteer Project Management',
        newItemText: 'New task',
        addItemText: 'Add task',
        columns: [
            { id: 'name', title: 'Start Campaign', type: 'text', width: 280, editable: true },
            { id: 'status', title: 'Status', type: 'status', width: 150, editable: true },
            { id: 'owner', title: 'Coordinator', type: 'person', width: 120, editable: true },
            { id: 'dueDate', title: 'Due Date', type: 'date', width: 140, editable: true }
        ],
        groups: [
            {
                id: 'active',
                name: 'Active Campaigns',
                color: '#FDAB3D',
                expanded: true,
                tasks: []
            }
        ],
        statusConfig: {
            active: { label: 'Active', bg: '#00C875' }
        }
    },

    // ================================
    // GRANT PROVIDERS BOARD
    // ================================
    'grant-providers': {
        title: 'Grant Providers',
        newItemText: 'New provider',
        addItemText: '+ Add provider',
        columns: [
            { id: 'name', title: 'Provider', type: 'text', width: 300, editable: true },
            { id: 'status', title: 'Status', type: 'status', width: 150, editable: true },
            { id: 'contact', title: 'Contact', type: 'text', width: 200, editable: true }
        ],
        groups: [
            {
                id: 'active',
                name: 'Active Providers',
                color: '#00C875',
                expanded: true,
                tasks: []
            }
        ],
        statusConfig: {
            active: { label: 'Active', bg: '#00C875' }
        }
    },

    // ================================
    // GRANTS DASHBOARD BOARD
    // ================================
    'grants-dashboard': {
        title: 'Grants Dashboard',
        newItemText: 'New metric',
        addItemText: '+ Add metric',
        columns: [
            { id: 'name', title: 'Metric', type: 'text', width: 300, editable: true },
            { id: 'value', title: 'Value', type: 'number', width: 150, editable: true },
            { id: 'status', title: 'Status', type: 'status', width: 150, editable: true }
        ],
        groups: [
            {
                id: 'overview',
                name: 'Overview',
                color: '#579BFC',
                expanded: true,
                tasks: [
                    {
                        id: 'm1',
                        name: 'Total Grants Applied',
                        value: 15,
                        status: 'good'
                    }
                ]
            }
        ],
        statusConfig: {
            good: { label: 'Good', bg: '#00C875' },
            warning: { label: 'Warning', bg: '#FDAB3D' },
            critical: { label: 'Critical', bg: '#DF2F4A' }
        }
    }
};

// Helper function to get template by ID
export const getTemplateById = (templateId) => {
    return boardTemplates[templateId] || null;
};

// Helper function to get all template IDs
export const getAllTemplateIds = () => {
    return Object.keys(boardTemplates);
};

export default boardTemplates;