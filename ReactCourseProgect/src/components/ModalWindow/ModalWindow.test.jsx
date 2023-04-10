import React from 'react';
import { render } from '@testing-library/react';
import ModalWindow from './ModalWindow';

describe('ModalWindow', () => {
  test('renders without crashing and has correct class', () => {
    const { container } = render(<ModalWindow id={1} active={true} SetActive={() => {}} />);
    const modalWindow = container.firstChild;
    expect(modalWindow).toBeInTheDocument();
    expect(modalWindow).toHaveClass('modal__window active');
  });
});
