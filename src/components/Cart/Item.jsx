import React, { PureComponent } from 'react'
import { formatVND } from '../../utils/currencyVND';

export class ComponentCartItem extends PureComponent {
    state = {
        product: this.props.product
    }

    reduceItem() {
    }
    addItem() {
    }

    render() {
        return (
            <tr height="100px">
                <td width="60px">
                    <img
                        src={this.state.product.item.hinh_anh}
                        width="100%"
                        alt="Anh San Pham" />
                </td>
                <td
                    width="40%">
                    {this.state.product.item.ten_sp}
                </td>
                <td>
                    {formatVND(this.state.product.item.don_gia)}
                </td>
                <td align="center" style={{ width: "100px" }}>
                    <div className="row" style={{ display: 'inline-block' }}>
                        <input
                            type="button"
                            defaultValue="-"
                            onClick={() => { this.props.handleReduce(this.state.product.item.id); this.reduceItem() }}
                        />
                        <input
                            style={{ width: '40px' }}
                            type="number"
                            value={this.props.product.quantity}
                            min={1}
                            readOnly
                        />
                        <input
                            type="button"
                            defaultValue="+"
                            onClick={() => { this.props.handleAdd(this.state.product.item.id); this.addItem() }}
                        />
                    </div>
                    <p style={{ color: 'red' }} />
                </td>
                <td width="10%" align="right">
                    <button
                        className="delete"
                        onClick={() => this.props.handleDelete(this.state.product.item.id)}>
                        <i className="fa fa-close fa-xs" />
                    </button>
                </td>
            </tr>

        )
    }
}

export default ComponentCartItem