import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe } from 'vitest';
import { NotFound } from './pages/NotFoundPage';

describe('NotFound', () => {
  it('should have headline', () => {
    render(<NotFound />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Error 404 not found Page/i)).toBeInTheDocument();
  });
});
