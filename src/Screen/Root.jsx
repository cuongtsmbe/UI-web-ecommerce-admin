import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import ScreenDashboard from './Dashboard'
import ScreenLogin from './Login';
import ScreenRegister from './Register'

class ScreenRoot extends Component {  

  render() {
    return (
        <Routes>
        <Route path='/' element={<ScreenLogin />} />
        <Route path='/dashboard' element={<ScreenDashboard />} />
        <Route path='/register' element={<ScreenRegister />} />
        <Route path='/login' element={<ScreenLogin />} />
        
    </Routes> 
    )
  }
}

export default ScreenRoot