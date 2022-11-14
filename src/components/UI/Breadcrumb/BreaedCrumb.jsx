import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { withParams } from "../../../utils/Params/componentWithParams";
import categoryApi from "../../../api/categoryApi";

class UIBreadCrumb extends PureComponent {
    state = {
        level: [],
        level2: 2
    }

    map = new Map();
    async componentDidMount() {
        this.setState({ level: window.location.pathname.split('/') })
        const response = await categoryApi.getAll();
        const categories = response.data;
        categories.map(category => this.map.set(category.id, category.ten_the_loai));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.url !== this.props.url) {
            this.setState({ level: window.location.pathname.split('/') })
        }

    }
    render() {
        return (
            // <!-- BREADCRUMB -->
            <div id="breadcrumb" className="section">
                {/* <!-- container --> */}
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb-tree">
                                <li><Link >Trang chủ</Link></li>
                                {this.state.level[1] === 'categories' ? <li><Link >Danh Mục Sản Phẩm</Link></li> :
                                    this.state.level[1] === 'myorders' ? <li><Link >Đơn hàng của tôi</Link></li> :
                                        this.state.level[1] === 'myaccount' ? <li><Link >Tài khoản của tôi</Link></li> :
                                        this.state.level[1] === 'cart' ? <li><Link >Giỏ hàng của tôi</Link></li> :
                                            this.state.level[1] === 'product' ? <li><Link >Chi tiết sản phẩm</Link></li> : undefined}
                                {this.map.has(Number(this.state.level[2])) ? <li className="active">{this.map.get(Number(this.state.level[2]))}</li> : undefined}

                            </ul>
                        </div>
                    </div>
                    {/* <!-- /row --> */}
                </div>
                {/* <!-- /container --> */}
            </div>
            // <!-- /BREADCRUMB -->
        )
    }
}

export default withParams(UIBreadCrumb)