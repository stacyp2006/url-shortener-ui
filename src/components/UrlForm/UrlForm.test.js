import React from 'react';
import UrlForm from './UrlForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('UrlForm', () => {
  const mockAddNewUrl = jest.fn()

  render(
    <UrlForm addNewUrl={mockAddNewUrl}/>
  )

  it('should render a form', () => {
    expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('URL to Shorten...')).toBeInTheDocument();
    expect(screen.getByText('Shorten Please!')).toBeInTheDocument();
  })

  it('should update the value of the title on user input', () => {
    render(
      <UrlForm addNewUrl={mockAddNewUrl}/>
    )
    userEvent.type(screen.getByPlaceholderText('Title...'), 'Awesome photo');
    expect(screen.getByPlaceholderText('Title...').value).toBe('Awesome photo');
    userEvent.type(screen.getByPlaceholderText('URL to Shorten...'), 'myURL');
    expect(screen.getByPlaceholderText('URL to Shorten...').value).toBe('myURL');

  })
})
