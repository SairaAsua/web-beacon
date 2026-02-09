import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '../../../test-utils';
import HeroSection from '../HeroSection';

// Mock interactions with other components
vi.mock('../../accent/MentalStatesAnimation', () => ({
    default: ({ onComplete }) => (
        <div data-testid="mental-states-animation">
            Mental States Animation
            <button onClick={onComplete} data-testid="complete-animation">Complete</button>
        </div>
    ),
}));

vi.mock('../../accent/BioluminescentGlow', () => ({
    default: ({ children }) => <div data-testid="bio-glow">{children}</div>,
}));

vi.mock('../../ui/use-toast', () => ({
    useToast: () => ({
        toast: vi.fn(),
    }),
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        AnimatePresence: ({ children }) => <>{children}</>,
        motion: {
            div: ({ children, ...props }) => <div {...props}>{children}</div>,
            h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
            h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
            button: ({ children, onClick, ...props }) => <button onClick={onClick} {...props}>{children}</button>,
        }
    };
});

describe('HeroSection', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.clearAllMocks();
    });

    it('renders initial "words" phase', () => {
        render(<HeroSection />);
        expect(screen.getByTestId('mental-states-animation')).toBeInTheDocument();
        expect(screen.getByText(/skip intro/i)).toBeInTheDocument();
    });

    it('transitions to "remember" phase when animation completes', () => {
        render(<HeroSection />);

        // Complete the animation
        fireEvent.click(screen.getByTestId('complete-animation'));

        // Should now show "remember" text (mocked translation is 'remember')
        expect(screen.getByText('remember')).toBeInTheDocument();
        // Animation component should be gone
        expect(screen.queryByTestId('mental-states-animation')).not.toBeInTheDocument();
    });

    it('transitions to "beacon" phase after "remember" phase timeout', () => {
        render(<HeroSection />);

        // Go to remember phase
        fireEvent.click(screen.getByTestId('complete-animation'));
        expect(screen.getByText('remember')).toBeInTheDocument();

        // Advance timer by 2 seconds
        act(() => {
            vi.advanceTimersByTime(2000);
        });

        // Should now see "Beacon" and "Harmonic"
        expect(screen.getByText('Beacon')).toBeInTheDocument();
        expect(screen.getByText('Harmonic')).toBeInTheDocument();
    });

    it('skips directly to "beacon" phase when Skip Intro is clicked', () => {
        render(<HeroSection />);

        const skipBtn = screen.getByText(/skip intro/i);
        fireEvent.click(skipBtn);

        expect(screen.getByText('Beacon')).toBeInTheDocument();
        expect(screen.queryByTestId('mental-states-animation')).not.toBeInTheDocument();
    });
});
