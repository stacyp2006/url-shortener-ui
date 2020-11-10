import React from 'react';
import UrlForm from './UrlForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { addUrl } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');


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
    addUrl.mockResolvedValueOnce({
      id: 14,
      long_url: "https://64.media.tumblr.com/96ddaa969d55d03d414b7bb70fd545f3/tumblr_n0w788ke6O1qjbj98o1_r1_500.png",
      short_url: "http://localhost:3001/useshorturl/14",
      title: "test"
    })

    const mockNewUrl = {
      long_url: "https://64.media.tumblr.com/96ddaa969d55d03d414b7bb70fd545f3/tumblr_n0w788ke6O1qjbj98o1_r1_500.png",
      title: "test"
    }

    render(
      <UrlForm addNewUrl={mockAddNewUrl}/>
    )

    const addTo = screen.getByText('Shorten Please!')
    userEvent.click(addTo)
    // expect(mockAddNewUrl).toHaveBeenCalledWith(mockNewUrl)
    expect(mockAddNewUrl).toHaveBeenCalled()

  })
})
