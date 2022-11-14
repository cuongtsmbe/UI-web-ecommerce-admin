import React,{ PureComponent } from "react";
import UIBreadCrumb from "../../components/UI/Breadcrumb/BreaedCrumb";
import MyAccountNavigation from '../../components/MyAccount/Navigation';
import ComponentMyAccountChangeInfo from '../../components/MyAccount/ChangeInfo';

class ScreenMyAccount extends PureComponent{
    render(){
        return(
            <div>
            <UIBreadCrumb />
            {/* <!-- ĐƠN HÀNG CỦA TÔI --> */}
            <div class="container">
                <div class="row justify-content-md-center">
                    <MyAccountNavigation /> 
                    <ComponentMyAccountChangeInfo/>
                </div>
            </div>
            {/* <!-- /ĐƠN HÀNG CỦA TÔI --> */}
        </div>
        )
    }
}

export default ScreenMyAccount