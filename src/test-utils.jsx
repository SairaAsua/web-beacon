import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ModeProvider } from './context/ModeContext';

// Custom render function that wraps components with necessary providers
const AllTheProviders = ({ children }) => {
    return (
        <LanguageProvider>
            <ModeProvider>
                <MemoryRouter>
                    {children}
                </MemoryRouter>
            </ModeProvider>
        </LanguageProvider>
    );
};

const customRender = (ui, options) =>
    render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
