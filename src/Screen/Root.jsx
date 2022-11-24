import React, { Component } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import ScreenDashboard from './Dashboard'
import ScreenLogin from './Login';
import ScreenLoginGoogle from './LoginGoogle'
import ScreenOrders from './Orders';
import { ScreenProductCreate } from './ProductCreate';
import ScreenProductDetail from './ProductDetail';
import ScreenProductEdit from './ProductEdit';
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
        <Route path='/login/google' element={<ScreenLoginGoogle />} />
        <Route path='/products' element={<ScreenProducts />} />
        <Route path='/products/:idProduct' element={<ScreenProductDetail />} />
        <Route path='/products/:idProduct/edit' element={<ScreenProductEdit />} />
        <Route path='/products/create' element={<ScreenProductCreate />} />
        <Route path='/orders' element={<ScreenOrders namePage="orderShow"/>} />
        <Route path='/orders/customer/:idCustomer' element={<ScreenOrders namePage="orderCustomer"/>} />
        <Route path='/orders/details/:idHoadon' element={<ScreenOrders namePage="detailOrder"/>} />
      </Routes> 
    )
  }
}

export default ScreenRoot