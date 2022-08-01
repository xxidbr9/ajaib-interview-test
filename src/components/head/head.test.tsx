import React from 'react';
import { render, screen } from '@testing-library/react';
import Head from './head';

describe('Head', () => {
  it('renders correctly', () => {
    render(<Head />);
    screen.getByText('Head');
  });
});
