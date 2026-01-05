import CreateAccountTwelve from '@/src/components/auth/CreateAccountTwelve';
import { SignupProtectedRoute } from '@/src/components/auth/SignupProtectedRoute';

export const metadata = {
    title: 'Select View Layout | monday.com',
    description: 'Select the relevant view layout for your board'
};

export default function ViewLayoutPage() {
    return (
        <SignupProtectedRoute>
            <CreateAccountTwelve />
        </SignupProtectedRoute>
    );
}
