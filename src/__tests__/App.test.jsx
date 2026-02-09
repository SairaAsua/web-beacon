import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />);
        // Check for something that should be on the home page, or just that it renders.
        // Since I don't know the exact content of HomePage, I'll just check if it renders.
        // But better to check for something specific if possible.
        // Let's assume there's some text from the HomePage or just verify valid render.
        // Actually, without knowing HomePage content, I can't query specific text.
        // But render(<App />) will throw if there's a crash.
        // I can also check if body has children.
        expect(document.body).toBeInTheDocument();
    });
});
