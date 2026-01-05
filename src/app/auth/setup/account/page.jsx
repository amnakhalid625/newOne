
import CreateAccountSecond from '@/src/components/auth/CreateAccountSecond';
import { SignupProtectedRoute } from '@/src/components/auth/SignupProtectedRoute';

export const metadata = {
    title: 'Create Account | monday.com',
    description: 'Set up your monday.com account'
};

export default function CreateAccountSecondPage() {
    return (
        <SignupProtectedRoute>
            <CreateAccountSecond />
        </SignupProtectedRoute>
    );
}
