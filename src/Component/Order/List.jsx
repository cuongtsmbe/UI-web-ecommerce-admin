import React, { PureComponent } from 'react';
import orderApi from '../../api/orderApi';
import ComponentOrderItem from './Item';
import SortDropDown from './SortDropDown';
import NativePickers from './Date_time_picker';
import StatusDropDown from './StatusDropDown';
import _ from 'lodash';
import SearchInput from './SearchInput';

export class ComponentOrderList extends PureComponent {
    state = {
        orders:[],
        filter:{
            tenkh: undefined,
            startdate: undefined,
            enddate: undefined,
            trangthai : -1, // -1 get all
            page:1,
            sort:-1,// không sort
        },
       
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
            var  response = await orderApi.get({query: this.state.filter});
            var  orders = response.data;
            this.setState({orders});
        } catch (error) {
            console.log('Fail to get list order : '+error);
        }
    }
    
    //khi update state xong thi request lại
    async componentDidUpdate(prevProps, prevState){
      //2 object khác nhau thì true
      if(!_.isEqual(this.state.filter, prevState.filter)) {
        await this.getListOrders();
      }
    }

    //chỉ chạy 1 lần
    async componentDidMount(){
        await this.getListOrders();
    }
  render() {
    return (
        <div className="col-12">
        <div className="card recent-sales overflow-auto">
        
        <div className="filter m-4">

            <div className="row justify-content-start col-12">
            
                <div className="col">
                    <NativePickers NameTitle="Start Time" stateName="startdate" parentCallback={this.handleSetTime}/>
                </div>  
                <div className="col">
                    <NativePickers NameTitle="End Time" stateName="enddate" parentCallback={this.handleSetTime} />
                </div>
                
                <SearchInput handleSearchInput={this.handleSearchInput} />
               
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
            <h5 className="card-title">Tất cả hóa đơn</h5>

            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col">Mã đơn hàng </th>
                  <th scope="col">Tên khách hàng</th>
                  <th scope="col">Mã khách hàng</th>
                  <th scope="col">Tổng Tiền</th>
                  <th scope="col">Tình Trạng</th>
                </tr>
              </thead>
              <tbody>
              { 
                    this.state.orders.length!==0 ?
                    this.state.orders.map(orderItem=> <ComponentOrderItem key={orderItem.Ma_don_hang} orderItem={orderItem}/>) :  <tr className="row m-3"><td>Không có đơn hàng nào.</td></tr>
                    
              }
              </tbody>
            </table>

          </div>

        </div>
      </div>      
    )
  }
}

export default ComponentOrderList