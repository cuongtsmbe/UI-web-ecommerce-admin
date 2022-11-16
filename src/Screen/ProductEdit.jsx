import React, { PureComponent } from 'react'
import ComponentProductEditForm from '../Component/Product/EditForm'
import { Link } from 'react-router-dom'
import { withParams } from '../utils/Params/componentWithParams'

export class ScreenProductEdit extends PureComponent {
  render() {
    return (
        <main id="main" className="main">
        <div className="pagetitle">
            <h1>Chỉnh sửa sản phẩm #{this.props.params.idProduct}</h1>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                    <li className="breadcrumb-item">Pages</li>
                    <li className="breadcrumb-item active">Product Edit</li>
                </ol>
            </nav>
        </div>
        {/* <!-- End Page Title --> */}
        <section className="section">
            <div className="row">
            <ComponentProductEditForm id={this.props.params.idProduct}/>
            </div>
        </section>
    </main>
    )
  }
}

export default withParams(ScreenProductEdit)