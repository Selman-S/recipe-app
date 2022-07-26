import React, { useState } from 'react'

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GithubAuthProvider,
  facebookAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  getAuth,
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
} from './Login.style'

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

  const signInFacebook = () => {
    const authe = getAuth()
    console.log('asd')
    const provider = new FacebookAuthProvider()
    signInWithPopup(authe, provider)
      .then(result => {
        // The signed-in user info.
        const user = result.user
        console.log(user)
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result)
        console.log(credential)
        const accessToken = credential.accessToken

        // ...
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error)
        console.log(credential)
        console.log(error)

        // ...
      })
  }

  const signInGithub = () => {}
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
              <FaFacebookSquare onClick={signInFacebook} />
              <FaGithub onClick={signInGithub} />
              <FaGoogle />
            </Icons>
          </LogSelectDiv>
          <LoginInputDiv>
            <LoginInputContainer>
              <LoginInput
                className="input-placeholder"
                type="email"
                id="email"
                placeholder="Email ..."
                onChange={event => {
                  setLoginEmail(event.target.value)
                }}
              />
            </LoginInputContainer>
            <LoginInputContainer>
              <LoginInput
                type="pasword"
                className="form-control"
                placeholder="Password ..."
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
            <LoginButton onClick={login}>Login</LoginButton>
          </LoginInputDiv>
          <SignUpContainer>
            <Label>Don't have an account?</Label>
            <SignUp to="/register">Sign up</SignUp>
          </SignUpContainer>
        </LogSelectCon>
      </LoginDiv>
      {/* <h4>User Logged In:</h4>
      {user?.email}
    <button onClick={logout}>Sign Out</button> */}
    </LoginContainer>
  )
}

export default Login
