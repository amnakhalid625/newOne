'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import GrantsManagementPage from '@/src/components/migrated/pages/workspace/GrantsManagementPage';
import DonorManagementPage from '@/src/components/migrated/pages/workspace/DonorManagementPage';
import FundraisingPage from '@/src/components/migrated/pages/workspace/FundraisingPage';
import ProjectManagementPage from '@/src/components/migrated/pages/workspace/ProjectManagementPage';
import VolunteerPage from '@/src/components/migrated/pages/workspace/VolunteerPage';

const WorkspacePage = () => {
    const params = useParams();
    const { workspaceId } = params;

    switch (workspaceId) {
        case 'grants-management':
            return <GrantsManagementPage />;
        case 'donor-management':
            return <DonorManagementPage />;
        case 'fundraising':
            return <FundraisingPage />;
        case 'project-management':
            return <ProjectManagementPage />;
        case 'volunteer':
            return <VolunteerPage />;
        default:
            return (
                <div className="flex flex-col items-center justify-center h-full p-10 text-center">
                    <h1 className="text-2xl font-bold mb-4">Workspace not found</h1>
                    <p className="text-gray-600 mb-4">The workspace "{workspaceId}" does not exist or has not been created yet.</p>
                    <p className="text-sm text-gray-500">Please select a valid workspace from the sidebar.</p>
                </div>
            );
    }
}

export default WorkspacePage;
