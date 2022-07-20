import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {FaFacebookSquare,FaGithub,FaGoogle} from 'react-icons/fa';
import { auth } from '../../auth/firebase-config'
import { CheckBox, CheckBoxContainer, CheckBoxDiv, Icons, LoginButton, LoginContainer, LoginD, LoginDiv, LoginInput, LoginInputContainer, LoginInputDiv, LogSelectCon, LogSelectDiv, PlaceHolder, RegisterContainer } from './Login.style'

const Login = () => {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
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
          <h3>Login</h3>
          <p>with</p>
          <Icons>
          <FaFacebookSquare/>
          <FaGithub/>
          <FaGoogle/>
          </Icons>
        </LogSelectDiv>
        <LoginInputDiv>
          <LoginInputContainer>

        <LoginInput type="email" id="email"
          
          onChange={event => {
            setLoginEmail(event.target.value)
          }}
          /><PlaceHolder>Email</PlaceHolder>
          </LoginInputContainer>
          <LoginInputContainer>

        <LoginInput type='pasword' className="form-control"
         
          onChange={event => {
            setLoginPassword(event.target.value)
          }}
          /><PlaceHolder>Password</PlaceHolder>
          </LoginInputContainer>
          <CheckBoxDiv>
          <CheckBoxContainer>
          <CheckBox id="remember" type='checkbox'/><label htmlFor="remember"></label>

          </CheckBoxContainer>
          <label htmlFor="remember">Remember me</label>
          </CheckBoxDiv>
        <LoginButton  onClick={login}>Login</LoginButton>
          </LoginInputDiv>
      </LogSelectCon>
      </LoginDiv>
      {/* <h4>User Logged In:</h4>
      {user?.email}
    <button onClick={logout}>Sign Out</button> */}
    </LoginContainer>
  )
}

export default Login
