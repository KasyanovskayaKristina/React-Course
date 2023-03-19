/* eslint-disable @typescript-eslint/no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button/ButtonComponent';
import { describe } from 'vitest';
import { Cards } from './CardsComponent';

describe('Cards', () => {
  const mockCard = {
    id: 1,
    title: 'Test Card',
    description: 'This is a test card',
    price: 56.65,
    category: 'TOFFEE | 4437/082',
  };
  it('should have text', () => {
    render(<Cards />);
    expect(screen.getAllByText(/SHIPPING AND RETURNS/i)).toBeTruthy();
  });
  it('has the correct title in the button', () => {
    const { getByText } = render(<Button />);
    expect(getByText('ADD TO BAG')).toBeTruthy();
  });
});
