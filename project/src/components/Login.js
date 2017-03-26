import React, { Component } from 'react';

import '../assets/styles/components/login.css';

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
        instagram: 'f501cd3b369b4e4ea9c606d52c2534cc',
        google: '1002056275138-02jqpiqacnas2rhebmitm249kqhfksdq.apps.googleusercontent.com',
        linkedin: '770iavt02pbb0b',
        twitter:  'j9ACbprzQXd6AEMvOUFGlEHov'
    }, {
        oauth_proxy: 'https://auth-server.herokuapp.com/proxy'
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
    // Utiliser un proxy dans tous les cas : https://github.com/MrSwitch/hello.js/issues/392
    // L'url a utiliser est : http://127.0.0.1:3000

    // Instagram
    // https://www.instagram.com/developer/clients/manage/?registered=Klutura
    // f501cd3b369b4e4ea9c606d52c2534cc

*/

  }

  login(network) {
    var hi = hello(network);
    hi.login().then(function(){
      console.log("fullfilled", "making api call");
      return hi.api("me");
    }).then(function(p){
      console.log("hello.api(me) was fullfilled", p);
      return p;
    }).then(function(p){
      console.log(p);
    }).then(null, function(e){
      console.error(e);
    })
  }


/*
  login(loginTo) {

    const objHello = hello.use(loginTo);

    objHello.api("me").then(function(r){
      console.log("login asked");
      this.setState({askForLogin: false});
    }.bind(this), function(e) {
      console.log(this);
      this.setState({askForLogin: true});
    }.bind(this));

    const options = { display: "popup"};
    const cb = () => {
      console.log("Login callback");
    }
    hello.login(loginTo, options, cb);
  }
*/

  render(){
	    return(
        <form role="form">
          <ul className="listLogin">
              <li className="facebook" onClick={()=>this.login('facebook')}>
                <img alt="facebook" width="20" height="20" src={facebook} />
              </li>
              <li className="twitter" onClick={()=>this.login('twitter')}>
                <img alt="twitter" width="20" height="20" src={twitter} />
              </li>
              <li className="google" onClick={()=>this.login('google')}>
                <img alt="google" width="20" height="20" src={google} />
              </li>
              <li className="insta" onClick={()=>this.login('instagram')}>
                <img alt="insta" width="20" height="20" src={instagram} />
              </li>
              <li className="linkedin" onClick={()=>this.login('linkedin')} >
                <img alt="LinkedIn" width="20" height="20" src={linkedin} />
              </li>
          </ul>
          <fieldset className="login">
            <p>
              <label>Login</label>
              <input placeholder="Votre login" className="txt" type="text" />
            </p>
            <p>
              <label>Password</label>
              <input placeholder="Votre mot de passe" className="txt" type="password" />
            </p>
            <p className="actions">
              <input className="bt" type="submit" value="Se connecter" />
               ou <a href="#">Se créer un compte</a>
            </p>
          </fieldset>
        </form>
    )
  }


}

export default Login