import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PermissionName from './PermissionName';
export class ComponentStaffItem extends PureComponent {
  render() {
    var Staff=this.props.StaffItem;


      // cho trang ds order chung
      return (
          <tr>
              <td ><Link to={`/staff/edit/${Staff.Ma_nhan_vien}`}>#{Staff.Ma_nhan_vien}</Link></td>
              <td >{Staff.ten_nv}</td>
              <td >{Staff.ten_dangnhap}</td>          
              <td >{Staff.email}</td>
              <td >{Staff.phone}</td>
              <td><PermissionName idPermission={Staff.id_quyen}/></td>
              <td >{Staff.ngay_tao}</td>
              <td ><Link to={`/staff/edit/${Staff.Ma_nhan_vien}`}><button type="button" class="btn btn-warning">Edit</button></Link></td>
        </tr>
      );
    
  }
}

export default ComponentStaffItem