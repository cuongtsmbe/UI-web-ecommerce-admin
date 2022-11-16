import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import ComponentProductList from '../Component/Product/List'

export class ScreenProducts extends PureComponent {
    render() {
        return (
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>QUẢN LÝ SẢN PHẨM</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                            <li className="breadcrumb-item">Pages</li>
                            <li className="breadcrumb-item active">Quản lý sản phẩm</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section">
                    <div className="row">
                        {/* <div className="col-lg-6">
    
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Example Card</h5>
                  <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
                </div>
              </div>
    
            </div>
    
            <div className="col-lg-6">
    
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Example Card</h5>
                  <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
                </div>
              </div>
    
            </div> */}
                        {/* <div class="col-12">
                            <div class="card top-selling overflow-auto">
                                <div class="card-body pb-0">
                                    <table class="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">Preview</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Sold</th>
                                                <th scope="col">Revenue</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row"><Link to="#"><img src="assets/img/product-1.jpg" alt="" style={{ height: '50px' }} /></Link></th>
                                                <td><Link to="#" class="text-primary fw-bold">Ut inventore ipsa voluptas nulla</Link></td>
                                                <td>$64</td>
                                                <td class="fw-bold">124</td>
                                                <td>$5,828</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><Link to="#"><img src="assets/img/product-2.jpg" alt="" /></Link></th>
                                                <td><Link to="#" class="text-primary fw-bold">Exercitationem similique doloremque</Link></td>
                                                <td>$46</td>
                                                <td class="fw-bold">98</td>
                                                <td>$4,508</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><Link to="#"><img src="assets/img/product-3.jpg" alt="" /></Link></th>
                                                <td><Link to="#" class="text-primary fw-bold">Doloribus nisi exercitationem</Link></td>
                                                <td>$59</td>
                                                <td class="fw-bold">74</td>
                                                <td>$4,366</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><Link to="#"><img src="assets/img/product-4.jpg" alt="" /></Link></th>
                                                <td><Link to="#" class="text-primary fw-bold">Officiis quaerat sint rerum error</Link></td>
                                                <td>$32</td>
                                                <td class="fw-bold">63</td>
                                                <td>$2,016</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><Link to="#"><img src="assets/img/product-5.jpg" alt="" /></Link></th>
                                                <td><Link to="#" class="text-primary fw-bold">Sit unde debitis delectus repellendus</Link></td>
                                                <td>$79</td>
                                                <td class="fw-bold">41</td>
                                                <td>$3,239</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- Recent Sales --> */}
            <ComponentProductList/>
                    </div>
                </section>

            </main>
            //   <!-- End #main -->
        )
    }
}

export default ScreenProducts