import React from 'react'
import{Routes, Route} from "react-router-dom"
import Header from './Components/Header'
import Home from './Components/Home'
import Womens from "./Components/Womens"
import Mens from "./Components/Mens"
import Cart from './Components/Cart'
import './App.css'
import Accessories from './Components/Accessories'

function App() {
 

  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/mens" element={<Mens/>} />
      <Route path="/womens" element={<Womens/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/accessories" element={<Accessories/>}/>
    </Routes>

    </>
  )
}

export default App
