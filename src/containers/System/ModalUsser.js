import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emmiter';
class ModalUser extends Component {
     constructor(props) {
          super(props)
          this.state = {
               email: '',
               password: '',
               fullName: '',
               phoneNumber: '',
               address: ''
          }

          this.listenToEmitter()

     }

     listenToEmitter() {
          emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
               this.setState({
                    email: '',
                    password: '',
                    fullName: '',
                    phoneNumber: '',
                    address: ''
               })
          })
     }

     handleOnchangeEmail = (e) => {
          this.setState({
               email: e.target.value
          })
     }

     handleOnchangePassword = (e) => {
          this.setState({
               password: e.target.value
          })
     }

     handleOnchangeFullName = (e) => {
          this.setState({
               fullName: e.target.value
          })
     }

     handleOnchangePhoneNumber = (e) => {
          this.setState({
               phoneNumber: e.target.value
          })
     }

     handleOnchangeAddress = (e) => {
          this.setState({
               address: e.target.value
          })
     }
     checkValidInput = () => {
          let isValid = true
          let arrInput = ['email', 'password', 'fullName', 'phoneNumber', 'address']
          for (let i = 0; i < arrInput.length; i++) {
               if (!this.state[arrInput[i]]) {
                    isValid = false
                    alert('Missing parameter ' + arrInput[i])
                    break
               }
          }

          return isValid
     }

     handleAddNewUser = () => {
          let isValid = this.checkValidInput()
          if (isValid === true) {
               this.props.createNewUser(this.state)
          }
     }

     componentDidMount() {
     }

     toggle = () => {
          this.props.toggleFromParrent()
     }
     render() {
          let { isOpen } = this.props
          let { email, password, fullName, phoneNumber, address } = this.state
          return (
               <Modal
                    isOpen={isOpen}
                    toggle={() => this.toggle()}
                    className='modal-user-container'
                    size='lg'
               >
                    <ModalHeader toggle={() => this.toggle()}>Create new user</ModalHeader>
                    <ModalBody>
                         <div className='modal-user-body'>
                              <div className='input-container'>
                                   <label>Email</label>
                                   <input
                                        value={email}
                                        type='text'
                                        onChange={(e) => this.handleOnchangeEmail(e)}
                                   />
                              </div>

                              <div className='input-container'>
                                   <label>Password</label>
                                   <input
                                        value={password}
                                        type='password'
                                        onChange={(e) => this.handleOnchangePassword(e)}
                                   />
                              </div>

                              <div className='input-container'>
                                   <label>Full name</label>
                                   <input
                                        value={fullName}
                                        type='text'
                                        onChange={(e) => this.handleOnchangeFullName(e)}
                                   />
                              </div>

                              <div className='input-container'>
                                   <label>Phone Number</label>
                                   <input
                                        value={phoneNumber}
                                        type='text'
                                        onChange={(e) => this.handleOnchangePhoneNumber(e)}
                                   />
                              </div>

                              <div className='input-container max-width-input'>
                                   <label>Address</label>
                                   <input
                                        value={address}
                                        type='text'
                                        onChange={(e) => this.handleOnchangeAddress(e)}
                                   />
                              </div>
                         </div>
                    </ModalBody>
                    <ModalFooter>
                         <Button color="primary " className='px-3' onClick={() => this.handleAddNewUser()} >
                              Add New
                         </Button>{' '}
                         <Button color="secondary" className='px-3' onClick={() => this.toggle()}>
                              Close
                         </Button>
                    </ModalFooter>
               </Modal>
          )
     }

}

const mapStateToProps = state => {
     return {
     };
};

const mapDispatchToProps = dispatch => {
     return {
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
