import React from 'react'
import {Route, Routes} from "react-router"
import About from './component/About'        
import Home from './component/Home'       
import Cart from './component/Cart'       
import User from './component/User'
import SingleUser from './component/SingleUser'
import Navbar from './component/Navbar'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path = '/cart'element={<Cart/>} />
     <Route path = '/user'element={<User/>} />
     <Route path = '/user/:id' element={<SingleUser/>} />
    </Routes>
    </>
  )
}

export default App