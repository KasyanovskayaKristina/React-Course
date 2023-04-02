import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect } from 'vitest';
import Header from './HeaderComponent';

describe('Header', () => {
  it('should have headline', () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Visiting:/i)).toBeInTheDocument();
  });
});
