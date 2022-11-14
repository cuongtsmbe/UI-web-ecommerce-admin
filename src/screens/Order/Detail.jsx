import React, { PureComponent } from "react";
import UIBreadCrumb from "../../components/UI/Breadcrumb/BreaedCrumb";
import { withParams } from '../../utils/Params/componentWithParams';
import MyOrderNavigation from '../../components/MyOrder/Navigation';
import ComponentOderDetail from '../../components/MyOrder/Detail';

class ScreenOderDetail extends PureComponent {
    state = {
        idOrder: null
    }
    componentDidMount() {
        const { idOrder } = this.props.params;
        this.setState({ idOrder });
    }
    render() {
        return (
            <div>
                <UIBreadCrumb />
                {/* <!-- ĐƠN HÀNG CỦA TÔI --> */}
                <div class="container">
                    <div class="row justify-content-md-center">
                        <MyOrderNavigation /> 
                        <ComponentOderDetail idOrder={this.state.idOrder} />
                    </div>
                </div>
                {/* <!-- /ĐƠN HÀNG CỦA TÔI --> */}
            </div>
        )
    }
}

export default withParams(ScreenOderDetail)