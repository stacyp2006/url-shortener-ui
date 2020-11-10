import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  addNewUrl = (newUrl) => {
    this.setState({
      urls: [
        ...this.state.urls, newUrl
      ]
    })
  }
  componentDidMount() {
    getUrls()
    .then(data => this.setState({urls: data.urls}))
    .catch(error => console.log('url fetch error'))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addNewUrl={this.addNewUrl}/>
        </header>
        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
