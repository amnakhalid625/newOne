
import CreateAccountThird from '@/src/components/auth/CreateAccountThird';
import { SignupProtectedRoute } from '@/src/components/auth/SignupProtectedRoute';

export const metadata = {
    title: 'What brings you here? | monday.com',
    description: 'Tell us about your goals'
};

export default function CreateAccountThirdPage() {
    return (
        <SignupProtectedRoute>
            <CreateAccountThird />
        </SignupProtectedRoute>
    );
}
