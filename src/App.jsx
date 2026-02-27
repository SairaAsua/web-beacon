
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import { LanguageProvider } from './context/LanguageContext';
import { ModeProvider } from './context/ModeContext';

function App() {
    return (
        <LanguageProvider>
            <ModeProvider>
                <Router>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </Router>
            </ModeProvider>
        </LanguageProvider>
    );
}

export default App;
