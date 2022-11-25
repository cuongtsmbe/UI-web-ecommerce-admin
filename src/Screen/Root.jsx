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
import ScreenCustomer from './Customer'
import ScreenStaff from './Staff'
import ScreenSupplier from './Suplier'
import ScreenPhieuNhap from './PhieuNhap'
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
        <Route path='/customer' element={<ScreenCustomer namePage="customerShow"/>} />
        <Route path='/customer/create' element={<ScreenCustomer namePage="customerCreate"/>} />
        <Route path='/customer/edit/:idCustomer' element={<ScreenCustomer namePage="customerUpdate"/>} />
        <Route path='/staff' element={<ScreenStaff namePage="staffShow"/>} />
        <Route path='/staff/edit/:idStaff' element={<ScreenStaff namePage="staffUpdate"/>} />
        <Route path='/staff/create' element={<ScreenStaff namePage="staffCreate"/>} />
        <Route path='/supplier' element={<ScreenSupplier namePage="SupplierShow"/>} />
        <Route path='/supplier/create' element={<ScreenSupplier namePage="SupplierCreate"/>} />
        <Route path='/supplier/edit/:idNCC' element={<ScreenSupplier namePage="SupplierUpdate"/>} />
        <Route path='/phieunhap' element={<ScreenPhieuNhap namePage="phieunhapShow"/>} />
        <Route path='/phieunhap/create' element={<ScreenPhieuNhap namePage="phieunhapCreate"/>} />
      </Routes> 
    )
  }
}

export default ScreenRoot