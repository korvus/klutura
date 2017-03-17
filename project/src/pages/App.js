import React, { Component } from 'react';
import ConnectModal from '../components/ConnectModal';
import Logo from '../components/logo'

import '../assets/styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
  }

  openModal(e) {
    this.setState({modalIsOpen: true});
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo className="logo" />
          <h2>Klutura</h2>
        </div>
        <form className="App-intro" action="/connection">
          <button className="bt" onClick={this.openModal}>Connect</button>
          <ConnectModal modalIsOpen={this.state.modalIsOpen}  />
        </form>
      </div>
    );
  }
}

export default App;
