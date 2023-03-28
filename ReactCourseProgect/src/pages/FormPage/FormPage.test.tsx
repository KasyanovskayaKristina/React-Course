import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('renders correctly', () => {
    const form = render(<FormPage />, { wrapper: BrowserRouter });
    expect(form).toMatchSnapshot();
  });
});
