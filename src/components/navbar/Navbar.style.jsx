import styled from 'styled-components';
import {Link} from 'react-router-dom';



export const Nav = styled.nav`
border:2px solid red;
padding:1rem;



`;



export const LogoContainer = styled.div`
display: flex;

justify-content:space-between;
align-items: center;
`;

export const SocialIcons = styled.div`

`;
export const MenuLink = styled(Link)`
cursor:pointer;
text-decoration:none;

color:black;
margin:0 1rem;
font-size:1.3rem;
font-weight:400;

`;


export const MiddleNav = styled.div`

display: flex;
align-items: center;
margin:0;
padding:0;

`;



export const Logo = styled.img`
height:60px;
margin:0 2rem;
cursor:pointer;


`;

