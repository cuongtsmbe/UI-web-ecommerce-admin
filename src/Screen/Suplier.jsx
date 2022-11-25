import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { withParams } from '../utils/Params/componentWithParams'
import ComponentSupplierList from '../Component/Supplier/SupplierList'
import ComponentSupplierCreate from '../Component/Supplier/SupplierCreate'
export class ScreenSupplier extends PureComponent {
    render() {
        return (
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Quản lý nhà cung cấp</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                            <li className="breadcrumb-item">Pages</li>
                            {this.props.namePage==="SupplierShow"?<li className="breadcrumb-item active">Supplier</li>:""}
                            {this.props.namePage==="SupplierCreate"?<li className="breadcrumb-item active">Create</li>:""}
                            {/* {this.props.namePage==="staffUpdate"?<li className="breadcrumb-item active">Update</li>:""}
                            {this.props.namePage==="staffUpdate"?<li className="breadcrumb-item active">{this.props.params.idStaff}</li>:""} */}
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section">
                    <div className="row">
                    
                      {/* <!-- show component by url --> */}
                      {this.props.namePage==="SupplierShow" ?   <ComponentSupplierList/> :""}
                      {this.props.namePage==="SupplierCreate"?  <ComponentSupplierCreate/>:""}
                      {/* {this.props.namePage==="staffUpdate"?  <ComponentStaffUpdate idStaff={this.props.params.idStaff}/>:""} */}
                    </div>
                </section>

            </main>
 
        )
    }
}
export default withParams(ScreenSupplier)