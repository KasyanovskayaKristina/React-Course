import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import FormPage from './FormPage';

describe('FormPage', async () => {
  it('should have headline', () => {
    render(<FormPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/LogIn/i)).toBeInTheDocument();
  });
  it('select', async () => {
    render(<FormPage />, { wrapper: BrowserRouter });
    const input = screen.getByRole('combobox') as HTMLSelectElement;
    const option = screen.getByRole('option', { name: 'Turkey' });
    const value = 'Turkey';

    await userEvent.selectOptions(input, option);
    expect(input).toHaveValue(value);
  });
});
