import React from 'react';
import UrlForm from './UrlForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('UrlForm', () => {

  const mockAddNewUrl = jest.fn()
  it('should render a form', () => {
    const mockAddNewUrl = jest.fn()

    render(
      <UrlForm addNewUrl={mockAddNewUrl}/>
    )

    expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('URL to Shorten...')).toBeInTheDocument();
    expect(screen.getByText('Shorten Please!')).toBeInTheDocument();
  })

  it('should update the value of the title on user input', () => {
    const mockAddNewUrl = jest.fn()
    render(
      <UrlForm addNewUrl={mockAddNewUrl}/>
    )
    userEvent.type(screen.getByPlaceholderText('Title...'), 'Awesome photo');
    expect(screen.getByPlaceholderText('Title...').value).toBe('Awesome photo');
    userEvent.type(screen.getByPlaceholderText('URL to Shorten...'), 'myURL');
    expect(screen.getByPlaceholderText('URL to Shorten...').value).toBe('myURL');
  })

  it('should invoke a function on button click', () => {
    render(
      <UrlForm addNewUrl={mockAddNewUrl}/>
    )

    userEvent.type(screen.getByPlaceholderText('Title...'), "test");
    userEvent.type(screen.getByPlaceholderText('URL to Shorten...'), "verylongurl.com");
    expect(screen.getByPlaceholderText('URL to Shorten...')).toHaveValue("verylongurl.com");
    expect(screen.getByPlaceholderText('Title...')).toHaveValue("test");
    userEvent.click(screen.getByText('Shorten Please!'))
    expect(mockAddNewUrl).toHaveBeenCalledTimes(1)

  })
})
