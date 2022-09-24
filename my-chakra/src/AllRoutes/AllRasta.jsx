import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/Cart'
import Home from '../Components/Home'
import Login from '../Components/Login'

const AllRasta = () => {
  return (
    <div>
<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/cart' element={<Cart/>} />

</Routes>


    </div>
  )
}

export default AllRasta