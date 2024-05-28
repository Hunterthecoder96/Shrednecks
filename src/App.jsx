import React from 'react'
import{Routes, Route} from "react-router-dom"
import Header from './Components/Header'
import Home from './Components/Home'
import Womens from "./Components/Womens"
import Mens from "./Components/Mens"
import Cart from './Components/Cart'
import './App.css'
import Accessories from './Components/Accessories'
import Checkout from './Components/Checkout'
import Recipes from './Components/Recipes'
import Meat from './Components/Meat'
import Seafood from './Components/Seafood'
import PorkTenderloin from './Components/MeatRecipes/PorkTenderloin'
import RedfishFilla from "./Components/FishRecipes/RedfishFilla"
import TroutCakes from './Components/FishRecipes/TroutCakes'
import VenisonPattyMelt from './Components/MeatRecipes/VenisonPattyMelt'
import VenisonTenderloin from './Components/MeatRecipes/VenisonTenderloin'
import FishDip from './Components/FishRecipes/FishDip'
import Cobia from './Components/FishRecipes/Cobia'
import SteakBruschetta from './Components/MeatRecipes/SteakBruschetta'
import Chili from "./Components/MeatRecipes/Chili"
import Footer from './Components/Footer'

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
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/Recipes" element={<Recipes/>}/>
      <Route path="/MeatRecipes" element={<Meat/>}/>
      <Route path="/SeafoodRecipes" element={<Seafood/>}/>
      <Route path="/PorkTenderloin" element={<PorkTenderloin/>}/>
      <Route path="/RedfishFilla" element={<RedfishFilla />}/>
      <Route path="/TroutCakes" element={<TroutCakes/>}/>
      <Route path="/VenisonPattyMelt" element={<VenisonPattyMelt/>}/>
      <Route path="/VenisonTenderloin" element={<VenisonTenderloin/>}/>
      <Route path="/FishDip" element={<FishDip/>}/>
      <Route path="/Cobia" element={<Cobia/>}/>
      <Route path="/SteakBruschetta" element={<SteakBruschetta/>}/>
      <Route path="/Chili" element={<Chili/>}/>
    </Routes>
    <Footer />

    </>
  )
}

export default App
