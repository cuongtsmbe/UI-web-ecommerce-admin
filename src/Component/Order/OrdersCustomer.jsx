import React, { PureComponent } from 'react';
import orderApi from '../../api/orderApi';
import ComponentOrderItem from './Item';
import SortDropDown from './SortDropDown';
import NativePickers from './Date_time_picker';
import StatusDropDown from './StatusDropDown';
import _ from 'lodash';
import {formatVND} from '../../utils/currencyVND';

export class ComponentOrderCustomerList extends PureComponent {
    state = {
        orders:[],
        filter:{
            idCustomer:this.props.idCustomer,
            startdate: undefined,
            enddate: undefined,
            trangthai : -1, // -1 get all
            page:1,
            sort:-1,// không sort
        },
        countOrdersNoLimit:undefined,
        TotalPage:0,
        TotalMonneyInOrders:0
       
    }

    //select time 
    handleSetTime = (childName,value) =>{
      this.setState({filter:{...this.state.filter,[childName]: value}});
    }
    //dropdown status
    handleChangeSelectedStatus=(value)=>{
      this.setState({filter:{...this.state.filter,trangthai: value}});
    }
    //dropdown sort
    handleChangeSelectedSort=(value)=>{
      this.setState({filter:{...this.state.filter,sort: value}});
    }
    //search input order by customer name
    handleSearchInput=(e)=>{
      this.setState({filter:{...this.state.filter,tenkh:e.target.value}});
    }


    async getListOrders(){
        try {
            var  response = await orderApi.GetOrderByCustomer({query: this.state.filter});
            var  orders = response.data;
            this.setState({
                orders,
                countOrdersNoLimit:response.countOrdersNoLimit.count,
                TotalPage:response.TotalPage
              });
        } catch (error) {
            console.log('Fail to get list order : '+error);
        }
    }
    //get total monney of customer
    async getTotalMonneyOrders(){
        try {
            var  response = await orderApi.GetTotalMonneyOrderByIDCustomer({query: this.state.filter});
            var  total = response.data;
            this.setState({
                TotalMonneyInOrders:total[0].TotalItemsOrdered==null?0:total[0].TotalItemsOrdered
              });
        } catch (error) {
            console.log('Fail to get total monney order : '+error);
        }
    }
    
    //khi update state xong thi request lại
    async componentDidUpdate(prevProps, prevState){
      //2 object khác nhau thì true
      if(!_.isEqual(this.state.filter, prevState.filter)) {
        await this.getListOrders();
        await this.getTotalMonneyOrders();
      }
    }

    //chỉ chạy 1 lần
    async componentDidMount(){
        console.log("ComponentOrderCustomerList");
        await this.getListOrders();
        await this.getTotalMonneyOrders();
    }
  render() {
    return (
        <div className="col-12">
        <div className="card recent-sales overflow-auto">
        
        <div className="filter m-4">

            <div className="row justify-content-start col-12">
                <div className="col-3 me-5 ms-3 d-flex align-items-center ps-5 badge bg-primary">
                    <b> {this.state.TotalMonneyInOrders!=0 ? `Tổng chi: ${formatVND(this.state.TotalMonneyInOrders)}`:""}
                    </b>
                </div>
                <div className="col">
                    <NativePickers NameTitle="Start Time" stateName="startdate" parentCallback={this.handleSetTime}/>
                </div>  
                <div className="col">
                    <NativePickers NameTitle="End Time" stateName="enddate" parentCallback={this.handleSetTime} />
                </div>
               
            </div>
            <br/>
            <div className="row col-12">
              <div className="col-6">
                <SortDropDown valueSelected={this.state.filter.sort} handleChangeSelectedSort={(e)=>this.handleChangeSelectedSort(e.target.value)}/>
              </div>
              <div className="col-6">
                <StatusDropDown valueSelected={this.state.filter.trangthai} handleChangeSelected={(e)=>this.handleChangeSelectedStatus(e.target.value)}/>
              </div>
            </div>
        </div> 
  
          <div className="card-body">
            <h5 className="card-title"> Danh sách hóa đơn</h5>

            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col">Mã đơn hàng </th>
                  <th scope="col">Tổng Tiền</th>
                  <th scope="col">Tình Trạng</th>
                  <th scope="col">Ngày Tạo</th>
                </tr>
              </thead>
              <tbody>
              { 
                    this.state.orders.length!==0 ?
                    this.state.orders.map(orderItem=> <ComponentOrderItem key={orderItem.Ma_don_hang} nameComponentCall="ComponentOrderCustomerList" orderItem={orderItem}/>) :  <tr className="row m-3"><td>Không có đơn hàng nào.</td></tr>
                    
              }
              </tbody>
            </table>

          </div>

        </div>
      </div>      
    )
  }
}

export default ComponentOrderCustomerList