import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { withParams } from '../utils/Params/componentWithParams'
import ComponentPhieuNhapList from "../Component/PhieuNhap/PhieuNhapList"
import ComponentPhieuNhapCreate from "../Component/PhieuNhap/PhieuNhapCreate"
export class ScreenPhieuNhap extends PureComponent {
    render() {
        return (
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Quản lý phiếu nhập</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                            <li className="breadcrumb-item">Pages</li>
                            {this.props.namePage==="phieunhapShow"?<li className="breadcrumb-item active">Phiếu nhập</li>:""}
                            {this.props.namePage==="phieunhapCreate"?<li className="breadcrumb-item active">Create</li>:""}
                           {/*  {this.props.namePage==="SupplierUpdate"?<li className="breadcrumb-item active">Update</li>:""}
                            {this.props.namePage==="SupplierUpdate"?<li className="breadcrumb-item active">{this.props.params.idNCC}</li>:""} */}
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section">
                    <div className="row">
                    
                      {/* <!-- show component by url --> */}
                      {this.props.namePage==="phieunhapShow" ?   <ComponentPhieuNhapList/> :""}
                      {this.props.namePage==="phieunhapCreate"?  <ComponentPhieuNhapCreate/>:""}
                      {/* {this.props.namePage==="SupplierUpdate"?  <ComponentSupplierUpdate idNCC={this.props.params.idNCC}/>:""} */}
                    </div>
                </section>

            </main>
 
        )
    }
}
export default withParams(ScreenPhieuNhap)