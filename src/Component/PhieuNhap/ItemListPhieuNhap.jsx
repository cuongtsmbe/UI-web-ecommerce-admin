
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import ComponentStatusPhieuNhap from './StatusPhieuNhap'
import {formatVND} from '../../utils/currencyVND';
export class ComponentPhieuNhapItem extends PureComponent {
  render() {
    var Item=this.props.Item;
    
      return (
          <tr>
              <td ><Link to={`/phieunhap/details/${Item.id}`}>#{Item.id}</Link></td>
              <td ><Link to={`/phieunhap/ncc/${Item.id_ncc}`}>#{Item.id_ncc}</Link></td>
              <td >{Item.ten_ncc}</td>          
              <td >{Item.id_nv}</td>
              <td >{Item.ten_nv}</td>
              <td >{formatVND(Item.tong_tien)}</td>
              <td ><ComponentStatusPhieuNhap status={Item.trangthai}/></td>
              <td >{Item.ngay_tao}</td>
       
        </tr>
      );
    
  }
}

export default ComponentPhieuNhapItem