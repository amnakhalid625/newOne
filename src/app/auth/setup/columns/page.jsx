import CreateAccountTen from '@/src/components/auth/CreateAccountTen';
import { SignupProtectedRoute } from '@/src/components/auth/SignupProtectedRoute';

export const metadata = {
    title: 'Select Columns | monday.com',
    description: 'Select the relevant columns for your board'
};

export default function ColumnsPage() {
    return (
        <SignupProtectedRoute>
            <CreateAccountTen />
        </SignupProtectedRoute>
    );
}
