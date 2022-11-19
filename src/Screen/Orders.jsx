import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import ComponentOrderList from '../Component/Order/List'

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
                            <li className="breadcrumb-item active">Quản lý đơn hàng </li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section">
                    <div className="row">
                      <ComponentOrderList/>
                    </div>
                </section>

            </main>
 
        )
    }
}

export default ScreenOrder