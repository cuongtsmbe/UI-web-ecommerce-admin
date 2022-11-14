import React, { PureComponent } from "react";
import { Link } from 'react-router-dom';
import userApi from "../../../api/userApi";

class UIHeaderTop extends PureComponent {
    state={
        user:'',        
    }
    async getProfile(){
        const isAuth = localStorage.getItem('authenticated') || false;
        if(isAuth){
            const response = await userApi.getProfile();
            const user = response.data[0];
            this.setState({user:user})
            localStorage.setItem('name',user.ten_kh===""?user.ten_dangnhap:user.ten_kh);
        }
        
    }
    async componentDidMount(){
        await this.getProfile();
        
    }
    wellcome() {
        const isAuth = localStorage.getItem('authenticated') || false;
        if (isAuth) return <li><Link to="/myaccount"><i className="fa fa-user-o"></i> Xin chào, {this.state.user==''?this.state.user:this.state.user.ten_kh===""?this.state.user.ten_dangnhap:this.state.user.ten_kh}!</Link></li>;
        return <li><Link to='/register'><i className="fa fa-user-o"></i> Tạo tài khoản</Link></li>
    }
    render() {
        return (
            <div id="top-header">
                <div className="container">
                    <ul className="header-links pull-left">
                        <li><Link><i className="fa fa-phone"></i> 0987654321</Link></li>
                        <li><Link><i className="fa fa-envelope-o"></i> gnine@nineg.com.vn</Link></li>
                        <li><Link><i className="fa fa-map-marker"></i> ABC, Việt Nam</Link></li>
                    </ul>
                    <ul className="header-links pull-right">
                        <li><Link><i className="fa fa-dollar"></i> VNĐ</Link></li>
                        
                        {this.wellcome()}
                        {/* <?php
                    if(isset($_SESSION['ten_dangnhap'])){
                        $ten_dangnhap = $_SESSION['ten_dangnhap'];
                    echo '<li><a href="?act=my_account"><i className="fa fa-user-o"></i> Xin chào, '.$ten_dangnhap.'!</a></li>';
                    }
                    else echo '<li><a href="index.php?act=register"><i className="fa fa-user-o"></i> Tạo tài khoản</a></li>';
                ?> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default UIHeaderTop