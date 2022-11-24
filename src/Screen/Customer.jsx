import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { withParams } from '../utils/Params/componentWithParams'
import ComponentCustomerList from '../Component/Customer/CustomersList'
import ComponentCustomerCreate from '../Component/Customer/CustomerCreate'
import ComponentCustomerUpdate from '../Component/Customer/CustomerUpdate'
export class ScreenCustomer extends PureComponent {
    render() {
        return (
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Quản lý khách hàng</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                            <li className="breadcrumb-item">Pages</li>
                            {this.props.namePage==="customerShow"?<li className="breadcrumb-item active">Customer</li>:""}
                            {this.props.namePage==="customerCreate"?<li className="breadcrumb-item active">Create</li>:""}
                            {this.props.namePage==="customerUpdate"?<li className="breadcrumb-item active">Update</li>:""}
                            {this.props.namePage==="customerUpdate"?<li className="breadcrumb-item active">{this.props.params.idCustomer}</li>:""}
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section">
                    <div className="row">
                    
                      {/* <!-- show component by url --> */}
                      {this.props.namePage==="customerShow" ?   <ComponentCustomerList/> :""}
                      {this.props.namePage==="customerCreate"?  <ComponentCustomerCreate/>:""}
                      {this.props.namePage==="customerUpdate"?  <ComponentCustomerUpdate idCustomer={this.props.params.idCustomer}/>:""}
                    </div>
                </section>

            </main>
 
        )
    }
}
export default withParams(ScreenCustomer)