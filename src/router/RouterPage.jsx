import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from '../components/globalStyles/Global.styles'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/About'
import Categories from '../pages/categories/Categories'
import Contact from '../pages/contact/Contact'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Recipes from '../pages/recipes/Recipes'

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />

        <Route path="/recipes" element={<Recipes />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}

export default RouterPage
