import styled from 'styled-components';
import { Link} from 'react-router-dom'


export const RegisterContainer = styled.div`

 
`;


export const LoginContainer = styled.div`
text-align: center;
display: flex;
justify-content: center;
height: calc(100vh - 96px);
background-image: url(https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
background-position: center center;
background-repeat: no-repeat;
background-size: cover;

padding-top:10vh;
`;

export const LoginDiv=styled.div`
width:350px;
border-radius: 12px;
height:500px;
background-color: #ffffff;
position: relative;
`;


export const LogSelectDiv= styled.div`
background-color: #217AE9;
color: #ffffff;
height: 150px;
border-radius: 12px;
padding:1rem;
& p {
  margin-top:12px;
   font-size:16px;
}

`
export const LogSelectCon = styled.div`
width: 88%;
top: -30px;
left: 6%;
position: absolute;
border:1px solid green;
`
export const Icons = styled.div`
margin-top:1rem;

& *:nth-child(2) {
margin:0 10% 0 10%;

}
`
export const LoginInput = styled.input`
width: 90%;
margin-top: 1.5rem;
height:2.5rem;


`
export const LoginButton = styled.button`
width: 90%;
margin-top: 1.5rem;
height:2.5rem;


`

export const LoginInputDiv = styled.div`

margin-top:3rem;

`
// .form-control {
//   display: block;
//   width: 100%;
//   padding: 0.375rem 0.75rem;
//   font-size: 1rem;
//   font-weight: 400;
//   line-height: 1.5;
//   color: #212529;
//   background-color: #fff;
//   background-clip: padding-box;
//   border: 1px solid #ced4da;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;
//   border-radius: 0.375rem;
//   transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
// }