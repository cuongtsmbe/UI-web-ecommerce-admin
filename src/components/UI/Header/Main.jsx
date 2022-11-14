import React, { PureComponent } from "react";
import { Link } from 'react-router-dom';
import usersCogSolid from '../../../data/image/users-cog-solid.svg';
import categoryApi from "../../../api/categoryApi";
import cartApi from "../../../api/cartApi";
import { withParams } from "../../../utils/Params/componentWithParams";

class UIHeaderMain extends PureComponent {

    state = {
        categories: [],
        valueSearch: window.location.search?new URLSearchParams(window.location.search).get('valueSearch'):'',
        totalItemInCart:0
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

     handleLogout=()=>{
        // event.preventDefault()
        localStorage.clear()
        window.location.href='/';
    }

    async componentDidMount() {        
        try {
            const response = await categoryApi.getAll();
            const categories = response.data;
            this.setState({ categories });
        } catch (error) {
            console.log('Failed to fetch category list:', error);
        }
    }

    async componentWillUpdate(){
        const response = await cartApi.get();
        const totalItemInCart = response.totalItems;
        this.setState({totalItemInCart});
    }

    ShowMyOrderAndAccountButton() {
        const isAuth = localStorage.getItem('authenticated') || false;        
        if (isAuth) return <div className="cart">
            <div className="product-widget">
                <Link to="/myaccount">Quản Lý Tài Khoản</Link>
            </div>
            <div className="product-widget">
                <Link to="/myorders">Quản Lý Đơn Hàng</Link>
            </div>
        </div>;
        return <></>
    }

    showLogoutOrRegisterButton(){
        const isAuth = localStorage.getItem('authenticated') || false;
        if (isAuth) return <Link  onClickCapture={this.handleLogout}>Đăng Xuất <i className="fa fa-arrow-circle-right"></i></Link>;
        return <Link to="/register">Đăng Ký</Link>
    }

    handleSearch=event=>{
        event.preventDefault();
        window.location.href=`/categories?valueSearch=${this.state.valueSearch}`
    }

    render() {
        return (
            //    <!-- MAIN HEADER -->
            <div id="header">
                {/* <!-- container --> */}
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row">
                        {/* <!-- LOGO --> */}
                        <div className="col-md-3">
                            <div className="header-logo">
                                <Link to='/home' className="logo">
                                    {/* <!-- <img src="./img/lg.png" alt="" width=100px> --> */}
                                    <h1 style={{ color: 'white', marginTop: '12px' }}>GninE</h1>
                                </Link>
                            </div>
                        </div>
                        {/* <!-- /LOGO --> */}

                        {/* <!-- SEARCH BAR --> */}
                        <div className="col-md-6">
                            <div className="header-search">
                                <form>
                                    <select className="input-select" onchange="location = this.value;">
                                        <option value="0">Danh Mục Sản Phẩm</option>
                                        {this.state.categories.map((category) => <option key={category.id} value={category.ten_the_loai}>{category.ten_the_loai}</option>)}                                        
                                    </select>
                                    <input
                                        className="input"
                                        name="valueSearch"
                                        placeholder="Tên sản phẩm......"
                                        value={this.state.valueSearch}
                                        onChange={this.handleChange}
                                        required />
                                    <button className="search-btn" onClick={this.handleSearch}>Tìm</button>
                                </form>
                            </div>
                        </div>
                        {/* <!-- /SEARCH BAR --> */}

                        {/* <!-- ACCOUNT --> */}
                        <div className="col-md-3 clearfix">
                            <div className="header-ctn">


                                {/* <!-- Cart --> */}
                                <div>
                                    <Link to='/cart'>
                                        <i className="fa fa-shopping-cart"></i>
                                        <span>Giỏ Hàng</span>
                                        <div className="qty" id="qtyPro">{this.state.totalItemInCart}</div>
                                    </Link>
                                </div>

                                {/* <!-- /Cart --> */}

                                {/* <!-- Cài đặt --> */}
                                <div className="dropdown">
                                    <Link className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                        <i><img src={usersCogSolid} alt="XYZ" style={{ filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)', width: '30px' }} /></i>
                                        <span>Cài Đặt</span>
                                    </Link>
                                    <div className="cart-dropdown">
                                        {this.ShowMyOrderAndAccountButton()}

                                        <div className="cart-btns">
                                        
                                            <Link to="/signin"><div>Đăng Nhập</div></Link>
                                            {this.showLogoutOrRegisterButton()}                                           
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Cài đặt --> */}

                                {/* <!-- Menu Toogle --> */}
                                <div className="menu-toggle">
                                    <Link>
                                        <i className="fa fa-bars"></i>
                                        <span>Menu</span>
                                    </Link>
                                </div>
                                {/* <!-- /Menu Toogle --> */}
                            </div>
                        </div>
                        {/* <!-- /ACCOUNT --> */}
                    </div>
                    {/* <!-- row --> */}
                </div>
                {/* <!-- container --> */}
            </div>
            /* <!-- /MAIN HEADER --> */
        )
    }
}

export default withParams(UIHeaderMain)