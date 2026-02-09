import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { ModeProvider, useMode } from '../ModeContext';

// Test component to consume the context
const TestComponent = () => {
    const { mode, setMode, toggleMode } = useMode();
    return (
        <div>
            <div data-testid="mode-value">{mode}</div>
            <button onClick={() => setMode('sun')} data-testid="set-sun">Set Sun</button>
            <button onClick={toggleMode} data-testid="toggle-mode">Toggle Mode</button>
        </div>
    );
};

describe('ModeContext', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('provides default mode "moon"', () => {
        render(
            <ModeProvider>
                <TestComponent />
            </ModeProvider>
        );
        expect(screen.getByTestId('mode-value')).toHaveTextContent('moon');
    });

    it('updates mode when setMode is called', () => {
        render(
            <ModeProvider>
                <TestComponent />
            </ModeProvider>
        );

        fireEvent.click(screen.getByTestId('set-sun'));
        expect(screen.getByTestId('mode-value')).toHaveTextContent('sun');
        expect(localStorage.getItem('beacon-mode')).toBe('sun');
    });

    it('toggles mode through moon -> sun -> star -> moon', () => {
        render(
            <ModeProvider>
                <TestComponent />
            </ModeProvider>
        );

        // Initial: moon
        expect(screen.getByTestId('mode-value')).toHaveTextContent('moon');

        // Toggle -> sun
        fireEvent.click(screen.getByTestId('toggle-mode'));
        expect(screen.getByTestId('mode-value')).toHaveTextContent('sun');

        // Toggle -> star
        fireEvent.click(screen.getByTestId('toggle-mode'));
        expect(screen.getByTestId('mode-value')).toHaveTextContent('star');

        // Toggle -> moon
        fireEvent.click(screen.getByTestId('toggle-mode'));
        expect(screen.getByTestId('mode-value')).toHaveTextContent('moon');
    });

    it('initializes from localStorage if present', () => {
        localStorage.setItem('beacon-mode', 'star');
        render(
            <ModeProvider>
                <TestComponent />
            </ModeProvider>
        );
        expect(screen.getByTestId('mode-value')).toHaveTextContent('star');
    });
});
