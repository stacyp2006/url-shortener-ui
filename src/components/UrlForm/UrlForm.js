import React, { Component } from 'react';
import { addUrl } from '../../apiCalls';

class UrlForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const urlInfo = { long_url: this.state.urlToShorten, title: this.state.title }
    await addUrl(urlInfo)
    .then(data => this.setState({
      title: data.title,
      urlToShorten: data.long_url
    }))
    .then(data => this.createUrl())
    .catch(error => this.setState({error: error.message}))
    this.clearInputs();
  }

  createUrl = () => {
    const { addNewUrl } = this.props;
    let newUrl = this.state;
    addNewUrl(newUrl);
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />
        <input
          type='url'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />
        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
