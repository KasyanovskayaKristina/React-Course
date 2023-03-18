import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './components/button';
import { describe } from 'vitest';
import { Cards } from './components/cards';

describe('Cards', () => {
  it('should have text', () => {
    render(<Cards />);
    expect(screen.getAllByText(/SHIPPING AND RETURNS/i)).toBeTruthy();
  });
  it('has the correct title in the button', () => {
    const { getByText } = render(<Button />);
    expect(getByText('ADD TO BAG')).toBeTruthy();
  });
});
