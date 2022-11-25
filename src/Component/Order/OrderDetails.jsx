import React, { PureComponent } from 'react';
import orderApi from '../../api/orderApi';
import ComponentProductItem from './ItemProductInOrder';
import {formatVND} from '../../utils/currencyVND';
import ComponentInfoCustomer from './InfoCustomerInDetails';
import StatusDropDown from './StatusDropDown';
import AlertDialog from '../UI/AlertDialog';

export class ComponentOrderDetails extends PureComponent {
    state = {
        detailsOrder:{
            Tong_tien:0,
            data:[],
            Trang_thai:-1,
        },
        popup:{
            message:null
        }
    }

    async getDetailsOrder(){
        try {
         
            var  response = await orderApi.GetOrderByID({query: {ID_HD:this.props.idHoadon}});
            var  details = response.data;

            this.setState({
                detailsOrder:details
              });
        } catch (error) {
            console.log('Fail to get details order : '+error);
        }
    }

    //dropdown status
    handleChangeSelectedStatus=(value)=>{
        this.setState({detailsOrder:{...this.state.detailsOrder,Trang_thai: value}});
    }

    //handle update status order 
    async handleUpdateStatusOrder(){
        try {
            
            var  response = await orderApi.UpdateStatusOrderByID({query: {ID_HD:this.props.idHoadon},body:{Trang_thai:parseInt(this.state.detailsOrder.Trang_thai),message:""}});
            
            if(response.status===202){
                this.setState({popup:{message:"Không thể update trạng thái cho ID hóa đơn này ."}});
            }
            if(response.status===201){
                this.setState({popup:{message:"Update không thành công ."}});
            }
            if(response.status===200){
                this.setState({popup:{message:"Update thành công ."}});
            }
        } catch (error) {
            console.log('Fail update status Orders : '+ error);
        }
    }

    //chỉ chạy 1 lần
    async componentDidMount(){
        await this.getDetailsOrder();
    }
    handleRemoveMessage=()=>{
        this.setState({popup:{message:null}});
    }
  render() {
    
    return (
        <div className="col-12">
        <div className="card recent-sales overflow-auto">
        
            <div className="filter m-4">

                {/* monney and infomation customer */}
                <div className="row justify-content-start col-12">
                    <div className="col-3 me-5 ms-3 d-flex align-items-center ps-5 badge bg-primary " style={{ height: '40px' }}>
                        <b> {this.state.TotalMonneyInOrders!==0 ? `Tổng chi: ${formatVND(this.state.detailsOrder.Tong_tien)}`:""}
                        </b>
                    </div>
                    <div className="col">
                        <ComponentInfoCustomer customer={this.state.detailsOrder} />
                    </div>  
                </div>
                <br/>

                {/* status order */}
                <div className="row justify-content-start col-12 ">
                    <div className="col ms-5">
                        <StatusDropDown nameCall="OrderDetail" valueSelected={this.state.detailsOrder.Trang_thai} handleChangeSelected={(e)=>this.handleChangeSelectedStatus(e.target.value)}/>
                    </div>
                    <div className="col-1 me-4">
                        <button type="button" className="btn btn-light text-primary border border border-primary" onClick={async ()=>{await this.handleUpdateStatusOrder()}}>Update</button>
                    </div>
                </div>


            </div> 
  
          <div className="card-body">
            <h5 className="card-title"> Danh sách sản phẩm </h5>

            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col-2">Hình ảnh</th>
                  <th scope="col-4">Mã sản phẩm </th>
                  <th scope="col-2">Tên sản phẩm</th>
                  <th scope="col-2">Đơn giá khi mua</th>
                  <th scope="col-2">Số lượng mua</th>
                </tr>
              </thead>
              <tbody>
              { 
                    this.state.detailsOrder.data.length!==0 ?
                    this.state.detailsOrder.data.map(ProductItem=> <ComponentProductItem key={ProductItem.Ma_san_pham} productItem={ProductItem}/>) :  <tr className="row m-3"><td>Không có đơn hàng nào.</td></tr>
                    
              }
              </tbody>
            </table>

          </div>

        </div>
        {(this.state.popup.message!=null)?<AlertDialog content={this.state.popup.message} handleRemoveMessage={this.handleRemoveMessage}/> : ""}
        
      </div>      
    )
  }
}

export default ComponentOrderDetails