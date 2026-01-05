const boardTemplates = {
    'grants-pipeline': {
        title: 'Grants Pipeline',
        addItemText: '+ Add Grant',
        columns: [
            { id: 'status', title: 'Status', type: 'status', width: 150 },
            { id: 'owner', title: 'Owner', type: 'person', width: 100 },
            { id: 'dueDate', title: 'Due Date', type: 'date', width: 120 },
            { id: 'grantAmount', title: 'Grant Amount', type: 'text', width: 120 },
            { id: 'grantProvider', title: 'Provider', type: 'text', width: 150 }
        ],
        groups: [
            {
                id: 'active',
                name: 'Active Grants',
                color: '#579bfc',
                expanded: true,
                tasks: [
                    { id: 't1', name: 'Community Foundation Grant', status: 'working', owner: 'Alice', dueDate: '2025-04-15', grantAmount: '$50,000', grantProvider: 'ComFound' },
                    { id: 't2', name: 'Federal Arts Grant', status: 'submitted', owner: 'Bob', dueDate: '2025-03-01', grantAmount: '$120,000', grantProvider: 'NEA' }
                ]
            },
            {
                id: 'submitted',
                name: 'Grants Submitted',
                color: '#00c875',
                expanded: true,
                tasks: [
                    { id: 't3', name: 'Local Youth Support', status: 'submitted', owner: 'Alice', dueDate: '2025-02-15', grantAmount: '$15,000', grantProvider: 'City Council' }
                ]
            }
        ],
        statusConfig: {
            'working': { label: 'Working on it', bg: '#fdab3d' },
            'submitted': { label: 'Submitted', bg: '#00c875' },
            'awarded': { label: 'Awarded', bg: '#00c875' },
            'stuck': { label: 'Stuck', bg: '#e2445c' }
        }
    },
    'volunteer-registration': {
        title: 'Volunteer Registration',
        addItemText: '+ Add Volunteer',
        columns: [
            { id: 'status', title: 'Status', type: 'status', width: 150 },
            { id: 'email', title: 'Email', type: 'email', width: 200 },
            { id: 'phone', title: 'Phone', type: 'text', width: 150 },
            { id: 'skills', title: 'Skills', type: 'tags', width: 200 }
        ],
        groups: [
            {
                id: 'new',
                name: 'New Volunteers',
                color: '#ffcb00',
                expanded: true,
                tasks: [
                    { id: 'v1', name: 'John Smith', status: 'new', email: 'john@example.com', phone: '555-0101', skills: 'Teaching' }
                ]
            },
            {
                id: 'active',
                name: 'Active Volunteers',
                color: '#00c875',
                expanded: true,
                tasks: [
                    { id: 'v2', name: 'Sarah Jones', status: 'active', email: 'sarah@example.com', phone: '555-0102', skills: 'Event Planning' }
                ]
            }
        ],
        statusConfig: {
            'new': { label: 'New', bg: '#ffcb00' },
            'active': { label: 'Active', bg: '#00c875' },
            'past': { label: 'Past', bg: '#333333' }
        }
    },
    'donors': {
        title: 'Donors',
        addItemText: '+ Add Donor',
        columns: [
            { id: 'status', title: 'Status', type: 'status', width: 150 },
            { id: 'email', title: 'Email', type: 'email', width: 200 },
            { id: 'phone', title: 'Phone', type: 'text', width: 150 },
            { id: 'donated', title: '$ Donated', type: 'text', width: 120 }
        ],
        groups: [
            {
                id: 'potential',
                name: 'Potential Donors',
                color: '#ffcb00',
                expanded: true,
                tasks: [
                    { id: 'd1', name: 'Tech Corp Inc.', status: 'potential', email: 'contact@techcorp.com', phone: '555-1000', donated: '$0' }
                ]
            },
            {
                id: 'active',
                name: 'Active Donors',
                color: '#00c875',
                expanded: true,
                tasks: [
                    { id: 'd2', name: 'Jane Doe', status: 'active', email: 'jane@example.com', phone: '555-1002', donated: '$5,000' }
                ]
            }
        ],
        statusConfig: {
            'potential': { label: 'Potential', bg: '#fdab3d' },
            'active': { label: 'Active', bg: '#00c875' }
        }
    },
    'project-management': {
        title: 'Project Management',
        addItemText: '+ Add Project',
        columns: [
            { id: 'status', title: 'Status', type: 'status', width: 150 },
            { id: 'owner', title: 'Owner', type: 'person', width: 120 },
            { id: 'timeline', title: 'Timeline', type: 'text', width: 180 }, // Using text for simplicity if daterange not fully supported
            { id: 'estHours', title: 'Est. Hours', type: 'text', width: 100 }
        ],
        groups: [
            {
                id: 'active',
                name: 'Active Projects',
                color: '#579bfc',
                expanded: true,
                tasks: [
                    { id: 'p1', name: 'Website Redesign', status: 'working', owner: 'Dev Team', timeline: 'Jan - Mar', estHours: '200' },
                    { id: 'p2', name: 'Q1 Marketing', status: 'stuck', owner: 'Marketing', timeline: 'Jan - Feb', estHours: '100' }
                ]
            },
            {
                id: 'finished',
                name: 'Finished Projects',
                color: '#00c875',
                expanded: true,
                tasks: [
                    { id: 'p3', name: 'Holiday Fundraiser', status: 'done', owner: 'All', timeline: 'Dec', estHours: '50' }
                ]
            }
        ],
        statusConfig: {
            'working': { label: 'Working on it', bg: '#fdab3d' },
            'done': { label: 'Done', bg: '#00c875' },
            'stuck': { label: 'Stuck', bg: '#e2445c' }
        }
    }
};

export default boardTemplates;
