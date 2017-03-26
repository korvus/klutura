import React, { Component } from 'react';
import ConnectModal from '../components/ConnectModal';
import Logo from '../components/logo'

import hello from 'hellojs'

import '../assets/styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    hello.init({
        facebook: '1181813181868792',
        instagram: 'f501cd3b369b4e4ea9c606d52c2534cc',
        google: '1002056275138-02jqpiqacnas2rhebmitm249kqhfksdq.apps.googleusercontent.com',
        linkedin: '770iavt02pbb0b',
        twitter:  'j9ACbprzQXd6AEMvOUFGlEHov'
    }, {
        oauth_proxy: 'https://auth-server.herokuapp.com/proxy'
    });

    this.openModal = this.openModal.bind(this);
  }

  openModal(e) {
    this.setState({modalIsOpen: true});
    e.preventDefault();
  }

  online(session) {
    var currentTime = (new Date()).getTime() / 1000;
    return session && session.access_token && session.expires > currentTime;
  };

  check() {
    var fb = hello('facebook').getAuthResponse();
    var tw = hello('twitter').getAuthResponse();
    var gl = hello('google').getAuthResponse();

    console.log(this.online(fb) ? 'signed on fb' : 'not signed on fb');
    console.log(this.online(tw) ? "signed on twitter" : "not signed on twitter");
    console.log(this.online(gl) ? "signed on google" : "not signed on google");
    if(this.online(gl)){
      hello('google').api('me').then(function(r){
        console.log(r);
      })
    }

  }

  render() {
    return (
      <div className="App">
        <div className="App-header"  onClick={()=>this.check()} >
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
