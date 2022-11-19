import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {formatVND} from '../../utils/currencyVND';
import {ComponentStatusOrder} from './StatusOrder';
export class ComponentOrderItem extends PureComponent {
  render() {
    var orderItem=this.props.orderItem;
    return (
        <tr>
            <td ><Link to={`/order/${orderItem.Ma_don_hang}`}>#{orderItem.Ma_don_hang}</Link></td>
            <td >{orderItem.Ten_khach_hang}</td>
            <td ><Link to={`/order/customer/${orderItem.id_khachhang}`}>#{orderItem.id_khachhang}</Link></td>
            <td >{formatVND(orderItem.Tong_tien)}</td>
            <td ><ComponentStatusOrder status={orderItem.Trang_thai} /></td>
       </tr>
    )
  }
}

export default ComponentOrderItem