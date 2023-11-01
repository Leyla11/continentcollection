import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Continents from './pages/Continents'
import America from './pages/America'
import Europe from './pages/Europe'
import Oceania from './pages/Oceania'
import Asia from './pages/Asia'
import Afric from './pages/Afric'
import DetailCountry from './pages/DetailCountry'


const RootRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/continents" element={<Continents/>}/>
        <Route path="/america" element={<America/>}/>
        <Route path="/europe" element={<Europe/>}/>
        <Route path="/oceania" element={<Oceania/>}/>
        <Route path="/oceania/:idCountry" element={<DetailCountry/>}/>
        <Route path="/asia" element={<Asia/>}/>
        <Route path="/afric" element={<Afric/>}/>
    </Routes>
  )
}

export default RootRoutes