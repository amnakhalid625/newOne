'use client';

import { AuthProvider } from '@/src/context/AuthContext';
import { DashboardProvider } from '@/src/context/DashboardContext';

export function Providers({ children }) {
    return (
        <AuthProvider>
            <DashboardProvider>
                {children}
            </DashboardProvider>
        </AuthProvider>
    );
}
