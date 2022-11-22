import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {formatVND} from '../../utils/currencyVND';

export class ComponentProductItem extends PureComponent {
  render() {
    var ProductItem=this.props.productItem;
      // cho trang ds order chung
      return (
          <tr>
              <td ><Link to={`/product/details/${ProductItem.Ma_san_pham}`}><img src={ProductItem.hinh_anh} alt="anh san pham" style={{ height: '60px', width:'80px' }}/></Link></td>
              <td ><Link to={`/product/details/${ProductItem.Ma_san_pham}`}>#{ProductItem.Ma_san_pham}</Link></td>
              <td >{ProductItem.Ten_san_pham}</td>
              <td >{formatVND(parseInt(ProductItem.Don_gia_khi_mua))}</td>          
              <td >{ProductItem.So_luong_mua}</td>
        </tr>
      )
    }
  
}

export default ComponentProductItem