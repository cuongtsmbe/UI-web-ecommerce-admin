import React, { Component } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import ScreenDashboard from './Dashboard'
import ScreenLogin from './Login';
import ScreenProductDetail from './ProductDetail';
import ScreenProducts from './Products';
import ScreenRegister from './Register'

class ScreenRoot extends Component {  

  render() {
    return (
        <Routes>
        <Route path='/' element={localStorage.getItem('isAuthenticated')==='true'? <Navigate to='/dashboard'/> : <ScreenLogin />} />
        <Route path='/dashboard' element={<ScreenDashboard />} />
        <Route path='/register' element={<ScreenRegister />} />
        <Route path='/login' element={<ScreenLogin />} />
        <Route path='/products' element={<ScreenProducts />} />
        <Route path='/products/:idProduct' element={<ScreenProductDetail />} />
        
    </Routes> 
    )
  }
}

export default ScreenRoot