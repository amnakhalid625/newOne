
import CreateAccountFourth from '@/src/components/auth/CreateAccountFourth';
import { SignupProtectedRoute } from '@/src/components/auth/SignupProtectedRoute';

export const metadata = {
    title: 'Team Profile | monday.com',
    description: 'Tell us about your team'
};

export default function CreateAccountFourthPage() {
    return (
        <SignupProtectedRoute>
            <CreateAccountFourth />
        </SignupProtectedRoute>
    );
}
