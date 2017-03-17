import React, { Component } from 'react';
import Logo from '../components/logo'

import '../assets/styles/App.css';

//////////////////////
import low from 'lowdb';
const db = low('db.json');

db.defaults({ posts: ["df"] })
  .write()

const result = db.get("posts")
  .push({ name: process.argv[2] })
  .write()

console.log(result[0])

//////////////////////

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo className="logo" />
          <h2>Klutura</h2>
        </div>
        <form className="App-intro" action="/plop">
          Connection coming...
        </form>
      </div>
    );
  }
}

export default App;
