import React, { PureComponent } from 'react';
import cartApi from '../../api/cartApi';
import ComponentCartItem from './Item';
import { formatVND } from '../../utils/currencyVND';
import swal from 'sweetalert';
import orderApi from '../../api/orderApi';

export class CopomentCart extends PureComponent {
    state = {
        products: [],
        totalItems: 0,
        totalPrice: 0,
        methodPayment:2
    }

    async getCart() {
        const response = await cartApi.get();
        const { products, totalItems, totalPrice } = response
        this.setState({ products: products, totalItems: totalItems, totalPrice: totalPrice });
    }
    async componentDidMount() {
        await this.getCart();
    }    

    async handleDelete(id) {
        swal('Sản phẩm sẻ bị xóa khỏi giỏ hàng?', {
            buttons: {
                cancel: 'Đóng',               
                catch:{text:'Xóa', value:'catch'}
            },
        }).then(async(value) => {
            switch (value) {
                case 'catch':
                    try {
                        await cartApi.remove(id);
                    } catch (error) {
                        console.log('Fail to remove item ' + id + 'in cart.' + error);
                    }
                    await this.getCart();
                    this.forceUpdate();
                    break;               
                default:                    
                    break;
            }
        })
        
    }

    async handleAdd(id) {
        try {
            await cartApi.add(id,1);
        } catch (error) {
            console.log('Fail to add item ' + id + 'in cart.' + error);
            swal({                
                text: "Lỗi khi thêm sản phẩm!",
                icon: "error",  
                buttons:false,
                timer:800              
              });
        }
        await this.getCart();
        this.forceUpdate();
    }

    async handleReduce(id) {
        try {
            await cartApi.reduce(id);
        } catch (error) {
            console.log('Fail to reduce item ' + id + 'in cart.' + error);
            swal({                
                text: "Lỗi khi giảm số lượng!",
                icon: "error",  
                buttons:false,
                timer:800              
              });
        }
        await this.getCart();
        this.forceUpdate();
    }

    async handlePayment(){
        try {
            await orderApi.pay({phuong_thuc_thanh_toan:this.state.methodPayment});
            swal({                
                text: "Đặt hàng thành công!",
                icon: "success",  
                buttons:false,
                timer:800              
              });
        } catch (error) {
            console.log('Fail to order in cart.' + error);
            swal({                
                text: "Đặt hàng không thành công!",
                icon: "error",  
                buttons:false,
                timer:800              
              });
        }
        await this.getCart();
        this.forceUpdate();
    }
    render() {
        return (

            <div className="section">

                <div className="container">

                    <div className="row " style={{ paddingRight: '5%', paddingLeft: '5%' }}>

                        <div className="col col-lg-12 order-details">
                            <div className="section-title text-center">
                                <h3 className="title">Giỏ Hàng</h3>
                            </div>
                            <div className="order-summary">
                                <div className="order-products">
                                    <table className="row" style={{ width: '100%', verticalAlign: 'middle' }}>
                                        <tbody>
                                            <tr>
                                                <td />
                                                <td><strong>SẢN PHẨM</strong></td>
                                                <td><strong>GIÁ</strong></td>
                                                <td align="center"><strong>SỐ LƯỢNG</strong></td>
                                                <td />
                                            </tr>
                                            {this.state.products.map(product =>
                                                <ComponentCartItem
                                                    key={product.item.id}
                                                    product={product}
                                                    handleDelete={(id) => this.handleDelete(id)}
                                                    handleAdd={(id) => this.handleAdd(id)}
                                                    handleReduce={(id) => this.handleReduce(id)}
                                                />)}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="order-col">
                                    <div>PHÍ GIAO HÀNG</div>
                                    <div><strong>FREE</strong></div>
                                </div>
                                <div className="order-col">
                                    <div><strong>TỔNG TIỀN</strong></div>
                                    <div><strong className="order-total">{formatVND(this.state.totalPrice)}</strong></div>
                                </div>
                            </div>
                            {this.state.products.length===0?<button
                                style={{ width: "100%" }}
                                class="primary-btn order-submit"                                 
                                >
                                Không có sản phẩm nào trong giỏ
                            </button>:<button
                                style={{ width: "100%" }}
                                class="primary-btn order-submit" 
                                onClick={()=>{this.handlePayment()}}
                                >
                                Tiến Hành Thanh Toán
                            </button>}
                            
                           

                        </div>

                    </div>

                </div>

            </div>

        )
    }
}

export default CopomentCart