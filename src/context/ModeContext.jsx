
import React, { createContext, useContext } from 'react';

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
    return (
        <ModeContext.Provider value={{ mode: 'star' }}>
            {children}
        </ModeContext.Provider>
    );
};

export const useMode = () => {
    const context = useContext(ModeContext);
    if (!context) {
        throw new Error('useMode must be used within a ModeProvider');
    }
    return context;
};
