import React,{ PureComponent } from "react";
import UIBreadCrumb from "../../components/UI/Breadcrumb/BreaedCrumb";
import ComponentCart from '../../components/Cart/Cart';

class ScreenCart extends PureComponent{
    render(){
        return(
            <div>
            <UIBreadCrumb/>
            <ComponentCart/>
            </div>
        )
    }
}

export default ScreenCart