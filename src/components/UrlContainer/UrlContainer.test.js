import React from 'react';
import UrlContainer from './UrlContainer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('UrlContainer', () => {
  it('should render url card when passed an array of url objects', () => {
    const mockUrls = [
      {
        id: 1,
        long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        short_url: "http://localhost:3001/useshorturl/1",
        title: "Awesome photo"
      },
      {
        long_url: "https://64.media.tumblr.com/0aeb35a5bd33b578e581f9aa6cfbcfeb/tumblr_nwlo44PbQN1qjobupo1_1280.png",
        title: "Mock",
        id: 2,
        short_url: "http://localhost:3001/useshorturl/2"
      },
    ]

  render(
    <UrlContainer urls={mockUrls}/>
  )

  expect(screen.getByText("Awesome photo")).toBeInTheDocument()
  expect(screen.getByText("https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")).toBeInTheDocument()
  expect(screen.getByText("http://localhost:3001/useshorturl/1")).toBeInTheDocument();
  expect(screen.getByText("Mock")).toBeInTheDocument()
  expect(screen.getByText("https://64.media.tumblr.com/0aeb35a5bd33b578e581f9aa6cfbcfeb/tumblr_nwlo44PbQN1qjobupo1_1280.png")).toBeInTheDocument()
  expect(screen.getByText("http://localhost:3001/useshorturl/2")).toBeInTheDocument();

  })
})
