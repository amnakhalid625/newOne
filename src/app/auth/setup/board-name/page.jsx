import CreateAccountNine from '@/src/components/auth/CreateAccountNine';
import { SignupProtectedRoute } from '@/src/components/auth/SignupProtectedRoute';

export const metadata = {
    title: 'Board Name | monday.com',
    description: 'Name your first board'
};

export default function BoardNamePage() {
    return (
        <SignupProtectedRoute>
            <CreateAccountNine />
        </SignupProtectedRoute>
    );
}
