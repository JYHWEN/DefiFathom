// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DefiFathom title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DefiFathom/i);
    expect(titleElement).toBeInTheDocument();
});
