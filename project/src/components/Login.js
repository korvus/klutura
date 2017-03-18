import React, { Component } from 'react';

import hello from 'hellojs'


//icons
import twitter from "./../assets/pics/twitter.svg"
import facebook from "./../assets/pics/facebook.svg"
import google from "./../assets/pics/google.svg"
import insta from "./../assets/pics/insta.svg"
import linkedin from "./../assets/pics/linkedIn.svg"

class Login extends Component {
  constructor() {
    super();

    this.state = {

    };

  }

  componentDidMount(){
      hello.init({
          linkedin: '770iavt02pbb0b'
      });

  }

  //https://github.com/MrSwitch/hello.js/issues/417
  login(socialnet) {

    let self = this;
    hello(socialnet).login(
        {
            scope: 'repo,user'
        }
    ).then(function() {
        return hello(socialnet).api('me');
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
              <li onClick={this.login.bind("linkedin")}>
                <img alt="facebook" width="20" height="20" src={facebook} />
              </li>
              <li>
                <img alt="Twitter" width="20" height="20" src={twitter} />
              </li>
              <li>
                <img alt="google" width="20" height="20" src={google} />
              </li>
              <li>
                <img alt="insta" width="20" height="20" src={insta} />
              </li>
              <li>
                <img onClick={this.login.bind("linkedin")} alt="LinkedIn" width="20" height="20" src={linkedin} />
              </li>
          </ul>

        </form>
    )
  }


}

export default Login