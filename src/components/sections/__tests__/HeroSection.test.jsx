import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../../test-utils';
import HeroSection from '../HeroSection';

// Mock HarmonicVisualization (canvas not available in JSDOM)
vi.mock('../../accent/HarmonicVisualization', () => ({
    default: () => <canvas data-testid="harmonic-viz" />,
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
            p: ({ children, ...props }) => <p {...props}>{children}</p>,
            button: ({ children, onClick, ...props }) => <button onClick={onClick} {...props}>{children}</button>,
        }
    };
});

vi.mock('../../accent/BioluminescentGlow', () => ({
    default: ({ children }) => <div data-testid="bio-glow">{children}</div>,
}));

describe('HeroSection', () => {
    it('renders Beacon brand name', () => {
        render(<HeroSection />);
        expect(screen.getByText('Beacon')).toBeInTheDocument();
    });

    it('renders Harmonic supertitle', () => {
        render(<HeroSection />);
        expect(screen.getByText('Harmonic')).toBeInTheDocument();
    });

    it('renders subheading text', () => {
        render(<HeroSection />);
        const subheading = screen.getByText(/interference pattern/i);
        expect(subheading).toBeInTheDocument();
    });

    it('renders harmonic visualization', () => {
        render(<HeroSection />);
        expect(screen.getByTestId('harmonic-viz')).toBeInTheDocument();
    });
});
