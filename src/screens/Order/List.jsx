import React, { PureComponent } from "react";
import UIBreadCrumb from "../../components/UI/Breadcrumb/BreaedCrumb";
import MyOrderNavigation from '../../components/MyOrder/Navigation';
import ComponentOderList from '../../components/MyOrder/List';

class ScreenOderList extends PureComponent {
    state = {
        idCustomer: null
    }
    componentDidMount() {
        const idCustomer = 7;
        this.setState({ idCustomer })        
    }
    render() {
        return (
            <div>
                <UIBreadCrumb />
                {/* <!-- ĐƠN HÀNG CỦA TÔI --> */}
                <div class="container">
                    <div class="row justify-content-md-center">
                        <MyOrderNavigation />
                        <ComponentOderList idCustomer={this.state.idCustomer} />
                    </div>
                </div>
                {/* <!-- /ĐƠN HÀNG CỦA TÔI --> */}
            </div>
        )
    }
}

export default ScreenOderList