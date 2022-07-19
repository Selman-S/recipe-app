import React from 'react'
import {Nav,LogoContainer,Logo, MiddleNav} from './Navbar.style'
import logoPng from '../../assets/logo2.jpg'
import Icons from './socialIcons/Icons';
import Login from '../../pages/login/Login'

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <Icons/>
        <MiddleNav>
   
        <Logo src={logoPng} />
        </MiddleNav>
       <Login/>

    

      </LogoContainer>
    </Nav>
  )
}

export default Navbar
