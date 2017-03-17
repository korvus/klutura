import React, { Component } from 'react';
import Modal from 'react-modal';
import hello from 'hellojs'

//https://auth0.com/blog/adding-authentication-to-your-react-flux-app/

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ConnectModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      user: '',
      password: '',
      open: false,
      user: []
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({modalIsOpen: nextProps.modalIsOpen});
  }

  afterOpenModal() {
    console.log("modal opened");
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
  	    <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

            <h2 ref="subtitle">Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form role="form">
              <div className="form-group">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
              </div>
              <button type="submit" onClick={this.login.bind(this)}>Submit</button>
            </form>
        </Modal>
    )
  }


}

export default ConnectModal