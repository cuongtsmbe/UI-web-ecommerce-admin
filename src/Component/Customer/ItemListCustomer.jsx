import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class ComponentCustomerItem extends PureComponent {
  render() {
    var CustomerItem=this.props.CustomerItem;


      // cho trang ds order chung
      return (
          <tr>
              <td ><Link to={`/customers/details/${CustomerItem.Ma_kh}`}>#{CustomerItem.Ma_kh}</Link></td>
              <td >{CustomerItem.ten_kh}</td>
              <td >{CustomerItem.ten_dangnhap}</td>          
              <td >{CustomerItem.email}</td>
              <td >{CustomerItem.phone}</td>
              <td >{CustomerItem.dia_chi}</td>
              <td ><Link to={`/customer/edit/${CustomerItem.Ma_kh}`}><button type="button" class="btn btn-warning">Edit</button></Link></td>
        </tr>
      );
    
  }
}

export default ComponentCustomerItem