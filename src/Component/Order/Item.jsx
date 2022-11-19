import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {formatVND} from '../../utils/currencyVND';
import {ComponentStatusOrder} from './StatusOrder';
export class ComponentOrderItem extends PureComponent {
  render() {
    var orderItem=this.props.orderItem;
    var nameComponentCall=this.props.nameComponentCall;
    if(nameComponentCall==="ComponentOrderCustomerList"){
      return (
        <tr>
            <td ><Link to={`/order/${orderItem.Ma_don_hang}`}>#{orderItem.Ma_don_hang}</Link></td>          
            <td >{formatVND(orderItem.Tong_tien)}</td>
            <td ><ComponentStatusOrder status={orderItem.Trang_thai} /></td>
            <td >{orderItem.Ngay_dat}</td>
       </tr>
    )
    }else if(nameComponentCall==="ComponentOrderList"){
      return (
          <tr>
              <td ><Link to={`/order/${orderItem.Ma_don_hang}`}>#{orderItem.Ma_don_hang}</Link></td>
              <td >{orderItem.Ten_khach_hang}</td>
              <td ><Link to={`/orders/customer/${orderItem.id_khachhang}`}>#{orderItem.id_khachhang}</Link></td>          
              <td >{formatVND(orderItem.Tong_tien)}</td>
              <td ><ComponentStatusOrder status={orderItem.Trang_thai} /></td>
              <td >{orderItem.Ngay_dat}</td>
        </tr>
      )
    }
  }
}

export default ComponentOrderItem