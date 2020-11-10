import React from 'react';
import App from './App';
// import { getUrls, addUrl } from '../../apiCalls';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
// jest.mock('../../apiCalls.js');

describe('App', () => {
  it('should render a title', () => {
    const title = 'URL Shortener'

    render(<App />)

    expect(screen.getByText('URL Shortener')).toBeInTheDocument()
  })
})
