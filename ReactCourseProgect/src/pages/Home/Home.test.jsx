import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
describe('HomePage', () => {
  describe('Fetch', () => {
    it('create card', async () => {
      render(<Home />, { wrapper: BrowserRouter });
      expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument();
      expect(await screen.findByText('Morty Smith')).toBeInTheDocument();
    });
  });
});
