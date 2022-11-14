import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import orderApi from "../../api/orderApi";
import { formatVND } from "../../utils/currencyVND";
import { withParams } from "../../utils/Params/componentWithParams";
import ComponentMyOrderProductInDetail from "./ProductInDetail";

class ComponentOderDetail extends PureComponent {
    state = {
        idOrder: this.props.params.idOrder,
        products: [],
        data: {}
    }

    async getDetailOrder() {
        const response = await orderApi.getOrderDetail(this.state.idOrder);
        const data = response.data;
        const products = response.data.data;
        this.setState({ products: products, data: data })
    }

    async componentDidMount() {
        await this.getDetailOrder();
    }
    render() {
        return (
            <div className="col col-lg-10 col-sm-12">
                <div className="section-title">
                    <h3 className="title">Chi tiết đơn hàng #HĐ{this.props.idOrder}</h3>
                </div>
                <table width="100%">
                    <tbody>
                        <tr height="50px">
                            <td>ĐỊA CHỈ NGƯỜI NHẬN</td>
                            <td />
                        </tr>
                        <tr style={{ backgroundColor: '#fbfbfb' }}>
                            <td>
                                <strong>{this.state.data.Ten_khach_hang}</strong>
                                <p>Địa chỉ: {this.state.data.Dia_chi?this.state.data.Dia_chi:'chua co'}</p>
                                <p>Điện thoại: {this.state.data.Phone}</p>
                            </td>
                            <td align="right">Ngày đặt hàng: {this.state.data.Ngay_dat}</td>
                        </tr>
                    </tbody>
                </table><br /><br />
                <table width="100%">
                    <tbody>
                        <tr>
                            <th />
                            <th width="50%">Sản phẩm</th>
                            <th>Giá</th>
                            <th width="10%" style={{ textAlign: 'center' }}>Số lượng</th>
                            <th width="15%" style={{ textAlign: 'right' }}>Thành tiền</th>
                        </tr>
                        {this.state.products.map(product => <ComponentMyOrderProductInDetail key={product.Ma_san_pham} product={product}/>)}
                    </tbody>
                </table><br /><br />
                <table width="100%" style={{ backgroundColor: '#f2f1f194' }}>
                    <tbody>
                        <tr>
                            <td align="right"><strong>Tạm tính</strong></td>
                            <td width="15%" align="right">{formatVND(Number(this.state.data.Tong_tien))}</td>
                        </tr>
                        <tr>
                            <td align="right"><strong>Phí vận chuyển</strong></td>
                            <td align="right">FREE</td>
                        </tr>
                        <tr>
                            <td align="right"><strong>Tổng cộng</strong></td>
                            <td align="right" style={{ color: 'red' }}><strong>{formatVND(Number(this.state.data.Tong_tien))}</strong></td>
                        </tr>
                        <tr>
                            <td><Link to='/myorders'><i style={{ color: 'red' }}> <span>
                                &lt;&lt;&lt;&lt;&lt;Quay lại, Đơn hàng của tôi </span></i> </Link></td>
                            <td />
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}

export default withParams(ComponentOderDetail)