import CreateAccountEleven from '@/src/components/auth/CreateAccountEleven';
import { SignupProtectedRoute } from '@/src/components/auth/SignupProtectedRoute';

export const metadata = {
    title: 'Dashboard Widgets | monday.com',
    description: 'Select widgets for your dashboard'
};

export default function DashboardPage() {
    return (
        <SignupProtectedRoute>
            <CreateAccountEleven />
        </SignupProtectedRoute>
    );
}
