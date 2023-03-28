import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect } from 'vitest';
import { AboutUs } from './AboutUs';

describe('AboutUs', () => {
  it('should have headline', () => {
    render(<AboutUs />, { wrapper: BrowserRouter });
    expect(screen.getByText(/About Us Page/i)).toBeInTheDocument();
  });
});
