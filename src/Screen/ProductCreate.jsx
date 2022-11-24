import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { withParams } from '../utils/Params/componentWithParams'
import ComponentProductCreateFrom from '../Component/Product/CreateFrom'

export class ScreenProductCreate extends PureComponent {
  render() {
    return (
        <main id="main" className="main">
        <div className="pagetitle">
            <h1>Thêm sản phẩm mới</h1>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                    <li className="breadcrumb-item">Pages</li>
                    <li className="breadcrumb-item active">Create Product</li>
                </ol>
            </nav>
        </div>
        {/* <!-- End Page Title --> */}
        <section className="section">
            <div className="row">
            <ComponentProductCreateFrom/>
            </div>
        </section>
    </main>
    )
  }
}

export default withParams(ScreenProductCreate)