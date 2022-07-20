import React from 'react'
import {Nav,LogoContainer,Logo, MiddleNav, MenuLink} from './Navbar.style'
import logoPng from '../../assets/logo2.jpg'
import Icons from './socialIcons/Icons';
import Login from '../../pages/login/Login'


const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <Icons/>
        <MiddleNav>
          <MenuLink to='/' >HOME</MenuLink>
          <MenuLink to='/categories' >CATEGORIES</MenuLink>
          <MenuLink to='/recipes' >RECIPES</MenuLink>
          <MenuLink to='/'>
        <Logo  src={logoPng} />

          </MenuLink>
        <MenuLink to='/recipes' >RECIPES</MenuLink>
          <MenuLink to='/contact' >CONTACT</MenuLink>
          <MenuLink to='/about' >ABOUT</MenuLink>
        </MiddleNav>
       <MenuLink to='/login' >Login</MenuLink>

    

      </LogoContainer>
    </Nav>
  )
}

export default Navbar
