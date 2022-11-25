import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
export class ComponentSupplierItem extends PureComponent {
  render() {
    var Item=this.props.SupplierItem;
    
      return (
          <tr>
              <td ><Link to={`/supplier/edit/${Item.id}`}>#{Item.id}</Link></td>
              <td >{Item.ten_ncc}</td>
              <td >{Item.email}</td>          
              <td >{Item.phone}</td>
              <td >{Item.website}</td>
              <td >{Item.diachi}</td>
              <td >{Item.ngay_tao}</td>
              <td ><Link to={`/supplier/edit/${Item.id}`}><button type="button" class="btn btn-warning">Edit</button></Link></td>
        </tr>
      );
    
  }
}

export default ComponentSupplierItem