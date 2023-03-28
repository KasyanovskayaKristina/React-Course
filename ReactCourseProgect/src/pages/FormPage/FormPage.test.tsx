import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('should have headline', () => {
    render(<FormPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
