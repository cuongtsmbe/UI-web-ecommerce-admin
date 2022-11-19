import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import ComponentOrderList from '../Component/Order/OrdersList'
import { withParams } from '../utils/Params/componentWithParams'
import ComponentOrderCustomerList from '../Component/Order/OrdersCustomer'

export class ScreenOrder extends PureComponent {
    render() {
        return (
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>QUẢN LÝ ĐƠN HÀNG</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                            <li className="breadcrumb-item">Pages</li>
                            <li className="breadcrumb-item active">Order</li>
                            {this.props.params.idCustomer?<li className="breadcrumb-item active">Customer</li>:""}
                            {this.props.params.idCustomer?<li className="breadcrumb-item active">{this.props.params.idCustomer}</li>:""}
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section">
                    <div className="row">
                      {this.props.params.idCustomer?<ComponentOrderCustomerList idCustomer={this.props.params.idCustomer} />:<ComponentOrderList/>}
                    </div>
                </section>

            </main>
 
        )
    }
}
export default withParams(ScreenOrder)