import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle, signInWithEmailAndPassword, auth } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
      event.preventDefault()

      const { email, password } = this.state

      try {
        await auth.signInWithEmailAndPassword(email, password)
        this.setState({email: '', password: ''})
      } catch (error) {
        console.log(error)
      }
      
  }

  handleChange = event => {
      const {value, name} = event.target

      this.setState({ [name]: value})
  }

  render () {
    return (
      <div className='sign-in'>
        <h2 className='title'>
          I already have an account
        </h2>
        <span>Sign up with your email and password</span>
        <form className='sign-in-form' onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' label='email' value={this.state.email} handleChange={this.handleChange} required/>
          <FormInput name='password' type='password' label='password' value={this.state.password} handleChange={this.handleChange} required/>
          <div className='buttons'>
            <CustomButton type='submit'>Sign in
            </CustomButton>
            <CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google
            </CustomButton>
          </div>
          
        </form>
      </div>
    )
  }
}
export default SignIn
