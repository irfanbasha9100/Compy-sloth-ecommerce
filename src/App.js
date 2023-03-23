import React from 'react'
import { BrowserRouter as Router, Switch, Route,Routes } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import styled from 'styled-components'

// const Button = styled.button`
// background:green;
// color:white
// `
// const Container = styled.div`
// background:red;
// color:white:

// `

import {Home,Cart,Checkout,Private,Products,SingleProduct,About,Error} from './pages'

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct/>}/>
        <Route path = '/checkout' element={<Checkout/>}></Route> 
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer/>
    </Router>

  )
  
}

export default App
