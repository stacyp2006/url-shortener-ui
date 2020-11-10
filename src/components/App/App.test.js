import React from 'react';
import App from './App';
import { getUrls, addUrl } from '../../apiCalls';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
jest.mock('../../apiCalls.js');

describe('App', () => {
  getUrls.mockResolvedValue({
    urls: [
      {
      id: 1,
      long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      short_url: "http://localhost:3001/useshorturl/1",
      title: "Awesome photo"
      },
      {
      long_url: "https://64.media.tumblr.com/0aeb35a5bd33b578e581f9aa6cfbcfeb/tumblr_nwlo44PbQN1qjobupo1_1280.png",
      title: "pokemon",
      id: 3,
      short_url: "http://localhost:3001/useshorturl/3"
      }
    ]
  })

  it('should render a title', () => {
    const title = 'URL Shortener'

    render(<App />)

    expect(screen.getByText('URL Shortener')).toBeInTheDocument()
  })

  it('should display url cards on the dom', async () => {

    render(<App />)

    const title = await waitFor(() => screen.getByText('Awesome photo'))
    expect(title).toBeInTheDocument();
    expect(screen.getByText("http://localhost:3001/useshorturl/1")).toBeInTheDocument();
    expect(screen.getByText("https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")).toBeInTheDocument();
    expect(screen.getByText("pokemon")).toBeInTheDocument();
    expect(screen.getByText("http://localhost:3001/useshorturl/3")).toBeInTheDocument();
    expect(screen.getByText("https://64.media.tumblr.com/0aeb35a5bd33b578e581f9aa6cfbcfeb/tumblr_nwlo44PbQN1qjobupo1_1280.png")).toBeInTheDocument();
  })
})
