import CreateAccountThirteen from '@/src/components/auth/CreateAccountThirteen';
import { SignupProtectedRoute } from '@/src/components/auth/SignupProtectedRoute';

export const metadata = {
    title: 'Invite Teammates | monday.com',
    description: 'Invite your team to collaborate'
};

export default function InvitePage() {
    return (
        <SignupProtectedRoute>
            <CreateAccountThirteen />
        </SignupProtectedRoute>
    );
}
