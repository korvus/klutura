import React, { Component } from 'react';

import hello from 'hellojs'

class Login extends Component {
  constructor() {
    super();

    this.state = {

    };

  }

  componentDidMount(){
      hello.init({
          github : '90d108538ef1165dbfe5'
      });
  }

  //https://github.com/MrSwitch/hello.js/issues/417
  login(e) {

    e.preventDefault();
    let self = this;
    hello('github').login(
        {
            scope: 'repo,user'
        }
    ).then(function() {
        return hello('github').api('me');
    })
    .then(function(p) {
        self.setState({user: p, open: false});
        console.log(self.state);
    });


  }

  render(){
	    return(
        <form role="form">
          <ul>
              <li>
                <img alt="skype" width="20" height="20" src="src/assets/pics/skype.svg" />
                <img alt="skype" width="20" height="20" src="./../assets/pics/skype.svg" />
                <img alt="skype" width="20" height="20" src="../../assets/pics/skype.svg" />
              </li>
          </ul>
          <button type="submit" onClick={this.login.bind(this)}>Submit</button>
        </form>
    )
  }


}

export default Login