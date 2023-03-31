import { render, screen } from '@testing-library/react';
import Button from '../Button/ButtonComponent';
import { describe } from 'vitest';
import { Cards } from './CardsComponent';

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
