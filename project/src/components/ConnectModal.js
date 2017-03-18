import React, { Component } from 'react';
import Modal from 'react-modal';

import FormLogin from './Login'

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
      open: false,
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

            <FormLogin />

        </Modal>
    )
  }


}

export default ConnectModal