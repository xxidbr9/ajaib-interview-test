import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '.';

describe('testing Hello World', () => {
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

  it('Test is render correctly', () => {
    render(<HomePage />);
    screen.findByText('Example With Search and Filter');
  });
});
