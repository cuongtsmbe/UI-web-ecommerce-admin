import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import ComponentProductDetail from '../Component/Product/Detail';
import { withParams } from '../utils/Params/componentWithParams'

export class ScreenProductDetail extends PureComponent {

    render() {
        return (
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Chi tiết sản phẩm #{this.props.params.idProduct}</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                            <li className="breadcrumb-item">Pages</li>
                            <li className="breadcrumb-item active">Product Detail</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}
                <section className="section">
                    <div className="row">
                    <ComponentProductDetail id={this.props.params.idProduct}/>
                    </div>
                </section>
            </main>
        )
    }
}

export default withParams(ScreenProductDetail)