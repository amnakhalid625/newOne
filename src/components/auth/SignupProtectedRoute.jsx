'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/context/AuthContext';

export const SignupProtectedRoute = ({ children }) => {
    const { emailForSignup, user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !emailForSignup && !user) {
            router.replace('/auth/signup');
        }
    }, [loading, emailForSignup, user, router]);

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                color: '#323338'
            }}>
                Loading...
            </div>
        );
    }

    // If not authenticated (and effect hasn't run yet), return null or loading to avoid flash
    if (!emailForSignup && !user) {
        return null;
    }

    return children;
};
