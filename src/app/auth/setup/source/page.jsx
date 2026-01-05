import CreateAccountSeven from '../../../../components/auth/CreateAccountSeven';
import { SignupProtectedRoute } from '../../../../components/auth/SignupProtectedRoute';

export default function CreateAccountSevenPage() {
    return (
        <SignupProtectedRoute>
            <CreateAccountSeven />
        </SignupProtectedRoute>
    );
}
