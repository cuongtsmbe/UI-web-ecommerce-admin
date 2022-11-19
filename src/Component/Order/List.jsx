import React, { PureComponent } from 'react';
import orderApi from '../../api/orderApi';
import ComponentOrderItem from './Item';
import { Link } from 'react-router-dom';
import NativePickers from './Date_time_picker';

export class ComponentOrderList extends PureComponent {
    state = {
        orders:[],
        filter:{
            tenkh: undefined,
            startdate: undefined,
            enddate: undefined,
            trangthai : -1, // -1 get all
            page:1
        }
       
    }

    handleSetTime = (childName,value) =>{
      this.setState({filter:{...this.state.filter,[childName]: value}});
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
    async componentDidUpdate(){
        await this.getListOrders();
    }

    //chỉ chạy 1 lần
    async componentDidMount(){
        await this.getListOrders();
    }
  render() {
    return (
        <div className="col-12">
        <div className="card recent-sales overflow-auto">
        
        {/* filter dropdown */}
        <div className="filter m-4">
            <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Trang thai</h6>
              </li>

              <li className="dropdown-item">1</li>
              <li className="dropdown-item">2</li>
              <li className="dropdown-item">3</li>
            </ul>

            <div className="row justify-content-start col-12">
            
                <div className="col">
                    <NativePickers NameTitle="Start Time" stateName="startdate" parentCallback={this.handleSetTime}/>
                </div>  
                <div className="col">
                    <NativePickers NameTitle="End Time" stateName="enddate" parentCallback={this.handleSetTime} />
                </div>
                <div className="col align-self-stretch d-flex">
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Tim theo ten khach hang ..." 
                            aria-label="Tim theo ten khach hang ..." 
                            name='tenkh'
                            onChange={(e)=>this.setState({filter:{...this.state.filter,tenkh:e.target.value}})}

                        />
                    </div>
                </div>
               
            </div>
            <br/>
            {/* <button type="button" className="btn btn-light border border-primary">Tìm đơn hàng </button> */}
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