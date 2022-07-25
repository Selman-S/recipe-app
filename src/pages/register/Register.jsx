import React, { useState } from 'react'

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { FaFacebookSquare, FaGithub, FaGoogle } from 'react-icons/fa'
import { auth } from '../../auth/firebase-config'
import {
  CheckBox,
  CheckBoxContainer,
  CheckBoxDiv,
  Icons,
  Label,
  LoginButton,
  LoginContainer,

  LoginDiv,
  LoginInput,
  LoginInputContainer,
  LoginInputDiv,
  LogSelectCon,
  LogSelectDiv,

  SignUp,
  SignUpContainer,
} from './Reagister.style'
import { Link } from 'react-router-dom'

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
  })
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }
  const logout = async () => {
    await signOut(auth)
  }

  return (
    <LoginContainer>
      {/* <RegisterContainer>
        <h3>Register User</h3>
        <input
          placeholder="Email ..."
          onChange={event => {
            setRegisterEmail(event.target.value)
          }}
        />
        <input
          placeholder="Password ..."
          onChange={event => {
            setRegisterPassword(event.target.value)
          }}
        />
        <button onClick={register}>Create User</button>
      </RegisterContainer> */}
      <LoginDiv>
        <LogSelectCon>
          <LogSelectDiv>
            <h3>Sign Up</h3>
            <p>with</p>
            <Icons>
              <FaFacebookSquare />
              <FaGithub />
              <FaGoogle />
            </Icons>
          </LogSelectDiv>
          <LoginInputDiv>
            <LoginInputContainer>
              <LoginInput
                className="input-placeholder"
                type="text"
                id="first"
                placeholder="First  Name"
                onChange={event => {
                  setFirstName(event.target.value)
                }}
              />
            </LoginInputContainer>
            <LoginInputContainer>
              <LoginInput
                className="input-placeholder"
                type="text"
                id="last"
                placeholder="Last Name"
                onChange={event => {
                  setLastName(event.target.value)
                }}
              />
            </LoginInputContainer>
            <LoginInputContainer>
              <LoginInput
                className="input-placeholder"
                type="email"
                id="email"
                placeholder="Email"
                onChange={event => {
                  setLoginEmail(event.target.value)
                }}
              />
            </LoginInputContainer>
            <LoginInputContainer>
              <LoginInput
                type="pasword"
                className="form-control"
                placeholder="Password "
                onChange={event => {
                  setLoginPassword(event.target.value)
                }}
              />
            </LoginInputContainer>
            <CheckBoxDiv>
              <CheckBoxContainer>
                <CheckBox id="remember" type="checkbox" />
                <label htmlFor="remember"></label>
              </CheckBoxContainer>
              <Label htmlFor="remember">Remember me</Label>
            </CheckBoxDiv>
            <LoginButton onClick={login}>Sign up</LoginButton>
          </LoginInputDiv>
          <SignUpContainer>
            <Label>Don't have an account?</Label>
            <SignUp to='/login'>Login</SignUp>
          </SignUpContainer>
        </LogSelectCon>
      </LoginDiv>
      {/* <h4>User Logged In:</h4>
      {user?.email}
    <button onClick={logout}>Sign Out</button> */}
    </LoginContainer>
  )
}

export default Register
