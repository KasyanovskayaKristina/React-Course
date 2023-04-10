import React from 'react';
import Cards from './CardsComponent';
import { render } from '@testing-library/react';
describe('Cards component', () => {
  it('should render card info correctly', () => {
    const { getByText } = render(
      <Cards
        id={0}
        gender={''}
        status={''}
        created={''}
        episode={''}
        name={'Rick Sanchez'}
        image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
        species={'Human'}
      />
    );
    expect(getByText('Rick Sanchez')).toBeInTheDocument();
    expect(getByText('Human')).toBeInTheDocument();
  });
});
