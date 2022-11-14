import React, { PureComponent } from 'react'
import { formatVND } from '../../utils/currencyVND'

export class ComponentMyOrderProductInDetail extends PureComponent {
  render() {
    return (
        <tr height="100px">
        <td  width="60px"><img src={this.props.product.hinh_anh} width="100%"  alt='Hinh anh san pham'/></td>
        <td>{this.props.product.Ten_san_pham}</td>
        <td>{formatVND(Number(this.props.product.Don_gia_khi_mua))}</td>
        <td style={{textAlign:"center"}}>{this.props.product.So_luong_mua}</td>
        <td align="right">{formatVND(Number(this.props.product.Don_gia_khi_mua)*Number(this.props.product.So_luong_mua))}</td>
    </tr>
    )
  }
}

export default ComponentMyOrderProductInDetail