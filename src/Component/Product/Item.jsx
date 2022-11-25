import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {formatVND} from '../../utils/currencyVND'

export class ComponentProductItem extends PureComponent {
  render() {
    return (
        <tr>
        <th style={{textAlign:'center', verticalAlign:'middle'}} scope="row"><Link to={`/products/${this.props.product.id}`}>#{this.props.product.id}</Link></th>
        <td><Link to={`/products/${this.props.product.id}`}><img src={this.props.product.hinh_anh} alt="" style={{ height: '50px', verticalAlign:'middle' }} /></Link></td>
        <td style={{verticalAlign:'middle'}}><Link to={`/products/${this.props.product.id}`}>{this.props.product.ten_sp}</Link></td>
        <td style={{verticalAlign:'middle'}}>{formatVND(this.props.product.don_gia)}</td>
        <td style={{textAlign:'center', verticalAlign:'middle'}}>{this.props.product.so_luong}</td>
        <td style={{textAlign:'center', verticalAlign:'middle'}}>
        {this.props.product.trangthai===-2 ? 
          <button className="btn btn-secondary" disabled>Canceled</button>
          :
          <button className="btn btn-danger" onClick={()=>this.props.handleDeleteProduct(this.props.product.id)}><i class="bi bi-trash"></i></button>}        
        </td>
      </tr>
    )
  }
}

export default ComponentProductItem