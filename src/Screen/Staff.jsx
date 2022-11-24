import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { withParams } from '../utils/Params/componentWithParams'
import ComponentStaffList from '../Component/Staff/StaffsList'
// import ComponentStaffCreate from '../Component/Staff/StaffCreate'
// import ComponentStaffUpdate from '../Component/Staff/StaffUpdate'
export class ScreenStaff extends PureComponent {
    render() {
        return (
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Quản lý Nhân Viên</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                            <li className="breadcrumb-item">Pages</li>
                            {this.props.namePage==="staffShow"?<li className="breadcrumb-item active">Staff</li>:""}
                            {this.props.namePage==="StaffCreate"?<li className="breadcrumb-item active">Create</li>:""}
                            {this.props.namePage==="StaffUpdate"?<li className="breadcrumb-item active">Update</li>:""}
                            {this.props.namePage==="StaffUpdate"?<li className="breadcrumb-item active">{this.props.params.idStaff}</li>:""}
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section">
                    <div className="row">
                    
                      {/* <!-- show component by url --> */}
                      {this.props.namePage==="staffShow" ?   <ComponentStaffList/> :""}
                      {/* {this.props.namePage==="staffCreate"?  <ComponentStaffCreate/>:""}
                      {this.props.namePage==="staffUpdate"?  <ComponentStaffUpdate idStaff={this.props.params.idStaff}/>:""} */}
                    </div>
                </section>

            </main>
 
        )
    }
}
export default withParams(ScreenStaff)