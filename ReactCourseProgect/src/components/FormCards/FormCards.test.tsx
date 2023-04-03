import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Image component', () => {
  it('renders an image', () => {
    render(<img src="path/to/image.jpg" alt="avatar" />);
    const image = screen.getByAltText('avatar');
    expect(image).toBeInTheDocument();
  });
});
