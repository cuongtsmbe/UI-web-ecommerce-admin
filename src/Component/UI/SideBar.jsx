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
                        <Link className="nav-link collapsed" to='/profile'>
                            <i className="bi bi-person"></i>
                            <span>Profile</span>
                        </Link>
                    </li>
                    {/* <!-- End Profile Page Nav --> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link collapsed" href="pages-faq.html">
                            <i className="bi bi-question-circle"></i>
                            <span>F.A.Q</span>
                        </Link>
                    </li> */}
                    {/* <!-- End F.A.Q Page Nav --> */}
{/* 
                    <li className="nav-item">
                        <Link className="nav-link collapsed" href="pages-contact.html">
                            <i className="bi bi-envelope"></i>
                            <span>Contact</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Contact Page Nav --> */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/register">
                            <i className="bi bi-card-list"></i>
                            <span>Register</span>
                        </Link>
                    </li>
                    {/* <!-- End Register Page Nav --> */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/login">
                            <i className="bi bi-box-arrow-in-right"></i>
                            <span>Login</span>
                        </Link>
                    </li>
                    {/* <!-- End Login Page Nav --> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link collapsed" href="pages-error-404.html">
                            <i className="bi bi-dash-circle"></i>
                            <span>Error 404</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Error 404 Page Nav --> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link collapsed" href="pages-blank.html">
                            <i className="bi bi-file-earmark"></i>
                            <span>Blank</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Blank Page Nav --> */}

                </ul>

            </aside>
            // End Sidebar
        )
    }
}

export default ComponentUISideBar