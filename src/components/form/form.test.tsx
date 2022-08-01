import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Form from './form';

describe('Test form component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  beforeEach(() => {
    render(<Form />);
  });
  it('Test is component render', () => {
    screen.getByText('Search');
  });

  it('Is reset btn clicked', () => {
    const btn = screen.getByTestId('reset-btn');
    fireEvent.click(btn);
  });
});
