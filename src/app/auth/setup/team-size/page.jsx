
import CreateAccountFourth from '@/src/components/auth/CreateAccountFourth';
import { SignupProtectedRoute } from '@/src/components/auth/SignupProtectedRoute';

export const metadata = {
    title: 'Team Size | monday.com',
};

export default function TeamSizePage() {
    return (
        <SignupProtectedRoute>
            <CreateAccountFourth />
        </SignupProtectedRoute>
    );
}
