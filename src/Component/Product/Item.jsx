import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {formatVND} from '../../utils/currencyVND'

export class ComponentProductItem extends PureComponent {
  render() {
    return (
        <tr>
        <th scope="row"><Link to={`/products/${this.props.product.id}`}>#{this.props.product.id}</Link></th>
        <td><Link to={`/products/${this.props.product.id}`}><img src={this.props.product.hinh_anh} alt="" style={{ height: '50px' }} /></Link></td>
        <td><Link to={`/products/${this.props.product.id}`}>{this.props.product.ten_sp}</Link></td>
        <td>{formatVND(this.props.product.don_gia)}</td>
        <td>{this.props.product.so_luong}</td>
      </tr>
    )
  }
}

export default ComponentProductItem