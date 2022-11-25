import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export class ComponentUISideBar extends PureComponent {
    render() {
        return (
            //   <!-- ======= Sidebar ======= -->
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <Link className="nav-link " href="index.html">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    {/* <!-- End Dashboard Nav --> */}

                    

                    <li className="nav-heading">Pages</li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/products">
                            <i className="bi bi-inboxes"></i>
                            <span>Sản phẩm</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/orders">
                            <i className="bi bi-box-seam"></i>
                            <span>Đơn hàng</span>
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to='/customer'>
                            <i className="bi bi-person"></i>
                            <span>Customer</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to='/staff'>
                            <i className="bi bi-person"></i>
                            <span>Nhân viên</span>
                        </Link>
                    </li>
                    {/* <!-- End Profile Page Nav --> */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to='/supplier'>
                            <i class="bi bi-box-seam-fill"></i>
                            <span>Nhà cung cấp</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/phieunhap">
                            <i class="bi bi-boxes"></i>
                            <span>Phiếu nhập</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="pages-contact.html">
                            <i className="bi bi-envelope"></i>
                            <span>Contact me</span>
                        </Link>
                    </li>

                </ul>

            </aside>
            // End Sidebar
        )
    }
}

export default ComponentUISideBar