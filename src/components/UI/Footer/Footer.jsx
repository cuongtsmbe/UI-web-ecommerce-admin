import React, { PureComponent } from "react";
import { Link } from 'react-router-dom';
import categoryApi from '../../../api/categoryApi'

class UIFooter extends PureComponent {
    state = {
        categories: []
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
    render() {
        return (
            < footer id="footer" >
                < div className="section" >
                    < div className="container" >
                        < div className="row" >
                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Liên Hệ</h3>
                                    <p>“Thất bại chỉ là một nơi để nghỉ ngơi. Đó là cơ hội để bạn bắt đầu lại theo cách thông minh hơn”
                                        - Henry Ford</p>
                                    <ul className="footer-links">
                                        <li><Link to='/'><i className="fa fa-map-marker" />173 An Dương Vương</Link></li>
                                        <li><Link to='/'><i className="fa fa-phone" />0987654321</Link></li>
                                        <li><Link to='/'><i className="fa fa-envelope-o" />email@email.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Danh Mục Sản Phẩm</h3>
                                    <ul className="footer-links">
                                        <li><Link to='/'>Hot deals</Link></li>
                                        {this.state.categories.map((category, index) => <li key={index}><Link to={`/categories/${category.id}`}>{category.ten_the_loai}</Link></li>)}
                                    </ul>
                                </div>
                            </div>
                            <div className="clearfix visible-xs" />
                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Thông Tin Về</h3>
                                    <ul className="footer-links">
                                        <li><Link to='/'>Giới Thiệu</Link></li>
                                        <li><Link to='/'>Tuyển Dụng</Link></li>
                                        <li><Link to='/'>Điều Khoản Sử Dụng</Link></li>
                                        <li><Link to='/'>Chính Sách Đổi Trả</Link></li>
                                        <li><Link to='/'>Bán Hàng Doanh Nghiệp</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Hổ Trợ</h3>
                                    <ul className="footer-links">
                                        <li><Link to='/'>Tài Khoản Của Tôi</Link></li>
                                        <li><Link to='/'>Giỏ Hàng</Link></li>
                                        <li><Link to='/'>Yêu Thích</Link></li>
                                        <li><Link to='/'>Bảo Mật</Link></li>
                                        <li><Link to='/'>Trợ Giúp</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </footer >
        )
    }
}

export default UIFooter