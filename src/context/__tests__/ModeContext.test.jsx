import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ModeProvider, useMode } from '../ModeContext';

const TestComponent = () => {
    const { mode } = useMode();
    return (
        <div>
            <div data-testid="mode-value">{mode}</div>
        </div>
    );
};

describe('ModeContext', () => {
    it('always provides mode "star"', () => {
        render(
            <ModeProvider>
                <TestComponent />
            </ModeProvider>
        );
        expect(screen.getByTestId('mode-value')).toHaveTextContent('star');
    });

    it('throws error when useMode is used outside provider', () => {
        const consoleError = console.error;
        console.error = () => { };
        expect(() => {
            const BadComponent = () => {
                useMode();
                return null;
            };
            render(<BadComponent />);
        }).toThrow('useMode must be used within a ModeProvider');
        console.error = consoleError;
    });
});
