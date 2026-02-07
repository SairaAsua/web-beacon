
import React, { createContext, useContext, useState, useEffect } from 'react';

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
    const [mode, setModeState] = useState('moon'); // 'moon' | 'sun' | 'star'

    useEffect(() => {
        const savedMode = localStorage.getItem('beacon-mode');
        if (savedMode && ['moon', 'sun', 'star'].includes(savedMode)) {
            setModeState(savedMode);
        }
    }, []);

    const setMode = (newMode) => {
        setModeState(newMode);
        localStorage.setItem('beacon-mode', newMode);
    };

    const toggleMode = () => {
        const modes = ['moon', 'sun', 'star'];
        const currentIndex = modes.indexOf(mode);
        const nextIndex = (currentIndex + 1) % modes.length;
        setMode(modes[nextIndex]);
    };

    return (
        <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
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
