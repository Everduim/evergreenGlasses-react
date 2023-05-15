import { useState } from 'react'

import './App.css'
import Footer from './core/footer/Footer'
import Nav from './core/nav/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Products from "./pages/Products"
import ProductFullInfo from './pages/ProductFullInfo'
import Register from "./pages/Register"
import Login from './pages/Login'
import Contact from './pages/Contact'
import { JwtContext } from './contex/jwtContext'
import { RequireAuth } from './components/RequireAuth'

function App() {
  
  const [jwt,setJwt] = useState(null);

  return (
    <>
    <JwtContext.Provider value={{jwt,setJwt}}>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path='/products' element={<RequireAuth><Products/></RequireAuth>}/>
        <Route path='/products/:id' element={<ProductFullInfo/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
       
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
      </JwtContext.Provider>
    </>
  )
}

export default App
