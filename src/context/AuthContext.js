'use client';

import { createContext, useState, useContext, useEffect } from 'react';
import { auth, onAuthStateChanged } from '../utils/firebase';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [emailForSignup, setEmailForSignup] = useState(null);
    const [userCategory, setUserCategory] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let unsubscribe;

        // Check if running in browser before accessing sessionStorage
        if (typeof window !== 'undefined') {
            const storedUser = sessionStorage.getItem('mondayUser');
            const storedEmail = sessionStorage.getItem('mondaySignupEmail');
            const storedCategory = sessionStorage.getItem('userCategory');
            const storedRole = sessionStorage.getItem('userRole');

            if (storedUser) {
                try {
                    const parsedUser = JSON.parse(storedUser);
                    setUser(parsedUser);
                } catch (e) {
                    console.error('Error parsing stored user:', e);
                    sessionStorage.removeItem('mondayUser');
                }
            }

            if (storedEmail) setEmailForSignup(storedEmail);
            if (storedCategory) setUserCategory(storedCategory);
            if (storedRole) setUserRole(storedRole);
        }

        unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            // Logic handled here
            if (firebaseUser) {
                // If we had a stored user, we might want to verify consistency,
                // but typically we trust onAuthStateChanged for the current live session.
                // However, to match MERN code logic of updating state:
                const userData = {
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    displayName: firebaseUser.displayName,
                    photoURL: firebaseUser.photoURL
                };
                setUser(userData);
                if (typeof window !== 'undefined') {
                    sessionStorage.setItem('mondayUser', JSON.stringify(userData));
                }
            }
            // NOTE: The MERN code had a condition `if (firebaseUser && !storedUser)`.
            // But standard reliable auth would just set user. We will stick to close to MERN 
            // but ensure safety.

            setLoading(false);
        });

        const timeout = setTimeout(() => setLoading(false), 500);

        return () => {
            if (unsubscribe) unsubscribe();
            clearTimeout(timeout);
        };
    }, []);

    const saveEmailForSignup = (email) => {
        setEmailForSignup(email);
        if (typeof window !== 'undefined') sessionStorage.setItem('mondaySignupEmail', email);
    };

    const saveUserCategory = (category, role) => {
        setUserCategory(category);
        setUserRole(role);
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('userCategory', category);
            sessionStorage.setItem('userRole', role);
        }
    };

    const clearEmailForSignup = () => {
        setEmailForSignup(null);
        if (typeof window !== 'undefined') sessionStorage.removeItem('mondaySignupEmail');
    };

    const login = (userData) => {
        setUser(userData);
        if (typeof window !== 'undefined') sessionStorage.setItem('mondayUser', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        setEmailForSignup(null);
        setUserCategory(null);
        setUserRole(null);
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem('mondayUser');
            sessionStorage.removeItem('mondaySignupEmail');
            sessionStorage.removeItem('userCategory');
            sessionStorage.removeItem('userRole');
        }
    };

    const value = {
        user,
        emailForSignup,
        userCategory,
        userRole,
        saveEmailForSignup,
        saveUserCategory,
        clearEmailForSignup,
        login,
        logout,
        loading
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
