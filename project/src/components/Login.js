import React, { Component } from 'react';

import hello from 'hellojs'


//icons
import twitter from "./../assets/pics/twitter.svg"
import facebook from "./../assets/pics/facebook.svg"
import google from "./../assets/pics/google.svg"
import instagram from "./../assets/pics/insta.svg"
import linkedin from "./../assets/pics/linkedIn.svg"

class Login extends Component {
  constructor() {
    super();

    this.state = {
      askForLogin: true
    };

    hello.init({
        facebook: '1181813181868792',
        github: '90d108538ef1165dbfe5',
        google: '1002056275138-02jqpiqacnas2rhebmitm249kqhfksdq.apps.googleusercontent.com',
        linkedin: '770iavt02pbb0b',
        twitter:  'j9ACbprzQXd6AEMvOUFGlEHov'
    });

/*
    // Facebook
    // https://developers.facebook.com/apps/1181813181868792/settings/
    // 1181813181868792

    // Linkedin:
    // https://www.linkedin.com/developer/apps/4706473/auth
    // 770iavt02pbb0b

    // Github
    // https://github.com/settings/applications/348790
    // 90d108538ef1165dbfe5

    // Google
    // https://console.developers.google.com/apis/credentials/oauthclient/1002056275138-02jqpiqacnas2rhebmitm249kqhfksdq.apps.googleusercontent.com?project=paris-museum
    // 90d108538ef1165dbfe5

    // Twitter
    // https://apps.twitter.com/
    // 90d108538ef1165dbfe5

*/

  }



  login(loginTo) {
    console.log(loginTo);

    const objHello = hello.use(loginTo);

    objHello.api("me").then(function(r){
      this.setState({askForLogin: false});
    }.bind(this), function(e) {
      this.setState({askForLogin: true});
    }.bind(this));

    const options = { display: "popup"};
    const cb = () => {
      console.log("Login callback");
    }
    hello.login(loginTo, options, cb);
  }


  render(){
	    return(
        <form role="form">
          <ul>
              <li onClick={()=>this.login('facebook')}>
                <img alt="facebook" width="20" height="20" src={facebook} />
              </li>
              <li onClick={()=>this.login('twitter')}>
                <img alt="twitter" width="20" height="20" src={twitter} />
              </li>
              <li onClick={()=>this.login('google')}>
                <img alt="google" width="20" height="20" src={google} />
              </li>
              <li>
                <img alt="insta" width="20" height="20" src={instagram} />
              </li>
              <li>
                <img onClick={()=>this.login('linkedin')} alt="LinkedIn" width="20" height="20" src={linkedin} />
              </li>
          </ul>

        </form>
    )
  }


}

export default Login