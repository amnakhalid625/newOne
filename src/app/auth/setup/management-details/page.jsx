
import CreateAccountSix from '@/src/components/auth/CreateAccountSix';
import { SignupProtectedRoute } from '@/src/components/auth/SignupProtectedRoute';

export const metadata = {
    title: 'Focus Details | monday.com',
};

export default function ManagementDetailsPage() {
    return (
        <SignupProtectedRoute>
            <CreateAccountSix />
        </SignupProtectedRoute>
    );
}
