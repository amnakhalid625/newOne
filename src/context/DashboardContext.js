'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const DashboardContext = createContext();

export const useDashboardContext = () => {
    return useContext(DashboardContext);
};

export const DashboardProvider = ({ children }) => {
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(false);

    // TODO: Fetch boards from API
    useEffect(() => {
        // Mock data or fetch
        // setBoards([...]);
    }, []);

    const value = {
        boards,
        loading
    };

    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    );
};

export default DashboardContext;
