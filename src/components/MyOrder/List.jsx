import React, { PureComponent } from "react";
import orderApi from "../../api/orderApi";
import ComponentOrderItem from '../../components/MyOrder/Item';
import swal from 'sweetalert';

class ComponentOderList extends PureComponent {
    state = {
        listOrder: [],
        statusOfOrder:-1
        // moneySort: 0
    }
    async getListOrderByID() {
        try {
            const response = await orderApi.getMyOrders({trangthai:this.state.statusOfOrder})
            const listOrder = response.data;
            this.setState({ listOrder })
        } catch (error) {
            console.log('Fail to get list my order', error)
        }
    }

    async componentDidMount() {
        await this.getListOrderByID()
    }

    async handleDeleteOrder(id) {
        swal('Đơn hàng xủa bạn sẻ bị xóa?', {
            buttons: {
                cancel: 'Đóng',
                catch: { text: 'Xóa', value: 'catch' }
            },
        }).then(async (value) => {
            switch (value) {
                case 'catch':
                    try {
                        await orderApi.changeStatus(id, { Trang_thai: 0 });
                        await this.getListOrderByID()
                    } catch (error) {
                        swal('Lỗi khi xóa đơn hàng');
                    }
                    break;
                default:
                    break;
            }
        })
    }

    // async handleMoneySort() {
    //     var index = this.state.moneySort;
    //     if (index >= 0 && index < 3) index = index + 1;
    //     else index = 0;
    //     await this.setState({moneySort:index})
    //     swal(`${this.state.moneySort}`)
    // }

    async handleFilterStatusOrder(event){
        const index = event.target.value;        
        await this.setState({statusOfOrder:index});
        await this.getListOrderByID()
    }

    render() {
        return (
            <div className="col col-lg-10 col-sm-12">
                <div className="section-title">
                    <h3 className="title" id="testdate">Đơn hàng của tôi</h3>
                </div>
                <table width="100%">
                    <tbody>
                        <tr style={{backgroundColor:'#FBFBFC'}}>
                            <th style={{ textAlign: 'center' }}>Mã đơn hàng</th>
                            <th style={{ textAlign: 'center' }}>Sản phẩm</th>
                            {/* <th>Tổng tiền <i class="fa fa-sort" onClick={()=>{this.handleMoneySort()}}></i></th> */}
                            <th>Tổng tiền</th>
                            <th style={{ textAlign: 'center' }}>Trạng thái đơn hàng</th>
                            <th>
                                <select style={{ border: "none" }} onChange={(e)=>{this.handleFilterStatusOrder(e)}}>
                                    <option value={-1}>Tất cả đơn</option>
                                    <option value={1}>Mới</option>
                                    <option value={2}>Đang giao</option>
                                    <option value={3}>Đã giao</option>
                                    <option value={0}>Đã hủy</option>
                                </select>
                            </th>
                        </tr>
                        {this.state.listOrder.map((order, index) => <ComponentOrderItem infoOrder={order} handleDeleteOrder={(id) => this.handleDeleteOrder(id)} />)}

                    </tbody>
                </table>
            </div>

        )
    }
}

export default ComponentOderList