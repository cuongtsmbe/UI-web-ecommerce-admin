import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import ComponentOrderList from '../Component/Order/OrdersList'
import { withParams } from '../utils/Params/componentWithParams'
import ComponentOrderCustomerList from '../Component/Order/OrdersCustomer'
import ComponentOrderDetails from '../Component/Order/OrderDetails'
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
                             {/* <!-- breadcrumb page list order --> */}
                            {this.props.namePage==="orderCustomer"?<li className="breadcrumb-item active">Customer</li>:""}
                            {this.props.namePage==="orderCustomer"?<li className="breadcrumb-item active">{this.props.params.idCustomer}</li>:""}

                            {this.props.namePage==="detailOrder"?<li className="breadcrumb-item active">Details</li>:""}
                            {this.props.namePage==="detailOrder"?<li className="breadcrumb-item active">{this.props.params.idHoadon}</li>:""}
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section">
                    <div className="row">

                      {/* <!-- show component by url --> */}
                      {this.props.namePage==="orderCustomer"?<ComponentOrderCustomerList idCustomer={this.props.params.idCustomer} />:""}
                      {this.props.namePage==="orderShow" ?  <ComponentOrderList/> :""}
                      {this.props.namePage==="detailOrder" ? <ComponentOrderDetails idHoadon={this.props.params.idHoadon} />:"" }
                    </div>
                </section>

            </main>
 
        )
    }
}
export default withParams(ScreenOrder)