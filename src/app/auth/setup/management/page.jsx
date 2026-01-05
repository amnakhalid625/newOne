
import CreateAccountFive from '@/src/components/auth/CreateAccountFive';
import { SignupProtectedRoute } from '@/src/components/auth/SignupProtectedRoute';

export const metadata = {
    title: 'What would you like to manage? | monday.com',
};

export default function ManagementPage() {
    return (
        <SignupProtectedRoute>
            <CreateAccountFive />
        </SignupProtectedRoute>
    );
}
