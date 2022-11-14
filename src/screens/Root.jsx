import React, { PureComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScreenCart from './Cart/Cart';
import ScreenCategory from './Category/Category';
import ScreenDetailProduct from './DetailProduct/DetailProduct';

import ScreenHome from './Home/Home';
import ScreenOderDetail from './Order/Detail';
import ScreenOderList from './Order/List';
import ScreenRegister from './Auth/Register';
import ScreenSigin from './Auth/SignIn';
import ScreenMyAccount from './MyAccount/MyAccount';

class ScreensRoot extends PureComponent {
    render() {
        return (
                        
            <Routes>
                <Route path='/' element={<ScreenHome />} />
                <Route path='/home' element={<ScreenHome />} />
                <Route path='/categories' element={<ScreenCategory />} />
                <Route path='/categories/:idCategory' element={<ScreenCategory />} />
                <Route path='/cart' element={<ScreenCart />} />
                <Route path='/product/:idProduct' element={<ScreenDetailProduct />} />
                <Route path='/register' element={<ScreenRegister />} />
                <Route path='/signin' element={<ScreenSigin />} />
                <Route path='/myorders' element={<ScreenOderList />} />
                <Route path='/myorders/:idOrder' element={<ScreenOderDetail />} />
                <Route path='/myaccount/' element={<ScreenMyAccount />} />
            </Routes>            
        )
    }
}

export default ScreensRoot;