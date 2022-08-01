import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './hello-world';

describe('testing Hello World', () => {
  it('Test is render correctly', () => {
    render(<HelloWorld name="nando" />);
    screen.findByText('Hello nando');
  });
});
