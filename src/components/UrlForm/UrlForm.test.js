import React from 'react';
import UrlForm from './UrlForm';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('UrlForm', () => {
  it('should render a form', () => {
    const mockAddNewUrl = jest.fn()

    render(
      <UrlForm addNewUrl={mockAddNewUrl}/>
    )

    expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('URL to Shorten...')).toBeInTheDocument();
    expect(screen.getByText('Shorten Please!')).toBeInTheDocument();
  })
})
