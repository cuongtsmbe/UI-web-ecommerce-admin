import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import orderApi from '../../api/orderApi'
import { formatVND } from '../../utils/currencyVND'

export class ComponentOrderItem extends PureComponent {
    state = {
        nameOfProducts: '',
    }
    statusOfOrder() {
        switch (this.props.infoOrder.Trang_thai) {
            case 1:
                return <td align="center" style={{ color: "red" }}>Đang xử lý</td>
            case 2:
                return <td align="center" style={{ color: "#4187e8" }}>Đang đóng gói</td>
            case 3:
                return <td align="center" style={{ color: "#f86402" }}>Đang giao</td>
            case 4:
                return <td align="center" style={{ color: "#07ea03" }}>Thành công</td>
            case 0:
                return <td align="center" style={{ color: "red" }}>Đã hủy</td>
            default:
                return <td align="center" style={{ color: "#07ea03" }}>?? error</td>

        }
    }
    actionOfOrder() {
        switch (this.props.infoOrder.Trang_thai) {
            case 1:
                return <td><button class="btn btn-sm btn-danger" onClick={() => { this.props.handleDeleteOrder(this.props.infoOrder.Ma_don_hang) }}>Hủy đơn</button></td>
            case 2:
                return <td></td>
            case 3:
                return <td><button class="btn btn-sm btn-success" >Xác nhận đã nhận hàng</button></td>
            default:
                return <td></td>
        }
    }

    async getListNameOfProduct() {
        const response = await orderApi.getOrderDetail(this.props.infoOrder.Ma_don_hang);
        const products = response.data.data;
        const noOfProduct = products.length;
        const nameOfFirstProduct = products[0].Ten_san_pham;
        noOfProduct === 1 ? this.setState({ nameOfProducts: nameOfFirstProduct }) : this.setState({ nameOfProducts: `${nameOfFirstProduct}, ...và ${(Number(noOfProduct) - 1)} sản phẩm khác` });
    }

    async componentDidMount() {
        await this.getListNameOfProduct();
    }

    render() {
        return (
            <tr height="80px">
                <td align="center" ><Link to={`${this.props.infoOrder.Ma_don_hang}`}><strong style={{ color: "#2374e1" }}><u>{this.props.infoOrder.Ma_don_hang}</u></strong></Link></td>
                <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>{this.state.nameOfProducts}</td>
                <td>{formatVND(this.props.infoOrder.Tong_tien)}</td>
                {this.statusOfOrder()}
                {this.actionOfOrder()}
            </tr>
        )
    }
}

export default ComponentOrderItem