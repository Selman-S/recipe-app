import React from 'react';
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from '../components/globalStyles/Global.styles';
import Navbar from '../components/navbar/Navbar';

const RouterPage = () => {
  return (
   <BrowserRouter>
      <Navbar/>
      <GlobalStyles />
   </BrowserRouter>
  )
}

export default RouterPage
