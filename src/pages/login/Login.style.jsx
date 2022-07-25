import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const RegisterContainer = styled.div``

export const LoginContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  height: calc(100vh - 96px);
  background-image: url(https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  padding-top: 10vh;
`

export const LoginDiv = styled.div`
  width: 350px;
  border-radius: 12px;
  height: 500px;
  background-color: #ffffff;
  position: relative;
`

export const LogSelectDiv = styled.div`
  background-color: #217ae9;
  color: #ffffff;
  height: 150px;
  border-radius: 12px;
  padding: 1rem;
  & p {
    margin-top: 12px;
    font-size: 16px;
  }
`
export const LogSelectCon = styled.div`
  width: 88%;
  top: -30px;
  left: 6%;
  position: absolute;
`
export const Icons = styled.div`
  margin-top: 1rem;
  & * {
    cursor: pointer;
    &:hover {
      color: #dee5ee;
      transition: all 0.2s ease;
    }
  }
  & *:nth-child(2) {
    margin: 0 10% 0 10%;
  }
`

export const LoginInputContainer = styled.div`
  position: relative;
`
export const LoginInput = styled.input`
  width: 90%;
  margin-top: 1.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  ::placeholder {
    font-size: 1rem;
  }
  &:focus {
    outline: none !important;
    border: 2px solid #217ae9;
  }
`
export const LoginButton = styled.button`
  width: 90%;
  margin-top: 1rem;
  height: 2.5rem;
  font-size: 24px;
  background-color: #217ae9;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:active {
    transition: all 0.5s linear;
    opacity: 0.2;
  }
`
export const CheckBoxContainer = styled.div`
  top: 10px;
  display: inline-block;
  width: 36px;
  
  height: 16px;
  background: #e7e6e6;
  position: relative;
  margin: 10px auto;
  border-radius: 50px;
  box-shadow: inset 0px 1px 1px #c4c4c4, 0px 1px 0px #a7a7a7;
 
   
  label {
    display: block;
    width: 20px;
    height: 20px;

    cursor: pointer;
    position: absolute;
    top: -2px;
    left: -16px;
    z-index: 1;
    background: #ffffff;
    background: linear-gradient(top, #fcfff4 0%, #dfe5d7 0%, #b3bead 100%);
    border-radius: 70px;
    transition: all 0.3s ease;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
  input[type='checkbox'] {
    visibility: hidden;
    &:checked + label {
      left: 2px;
      background-color: ${({ theme }) => theme.colors.mainColor};
    }
  }
`
export const Label = styled.label`
font-size: 1.2rem;
color:#777;
`
export const CheckBoxDiv = styled.div`
  //
  text-align: left;
  margin: 0.4rem 1rem;

  & label {
    margin-left: 1rem;
    user-select: none;
  }
`
export const CheckBox = styled.input`
  //
  background: #333;
`

export const LoginInputDiv = styled.div`
  margin-top: 3rem;
`

export const SignUpContainer= styled.div`
margin-top: 1.5rem;

`
export const SignUp = styled(Link)`
color:${({ theme }) => theme.colors.mainColor};
margin-left: 10px;
font-weight:600;
`