
import CreateAccountEight from '@/src/components/auth/CreateAccountEight';
import { SignupProtectedRoute } from '@/src/components/auth/SignupProtectedRoute';

export const metadata = {
    title: 'Invite Team | monday.com',
    description: 'Invite your team members'
};

export default function TeamMembersPage() {
    return (
        <SignupProtectedRoute>
            <CreateAccountEight />
        </SignupProtectedRoute>
    );
}
