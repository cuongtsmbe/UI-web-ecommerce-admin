import React, { PureComponent } from 'react';
import customerApi from '../../api/customerApi';
import _ from 'lodash';
import { Link } from 'react-router-dom'
import SearchInput from '../UI/SearchInput';
import ComponentCustomerItem from './ItemListCustomer'
export class ComponentOrderList extends PureComponent {
    state = {
        customerls:[],
        filter:{
            ten: undefined,
            page:1,
            username:undefined
        },
        countNoLimit:undefined,
        TotalPage:0,
        CurrentPage:1
       
    }

  
    //search input order by customer name
    handleSearchTen=(e)=>{
      this.setState({filter:{...this.state.filter,ten:e.target.value}});
    }
    handleSearchUsername=(e)=>{
        this.setState({filter:{...this.state.filter,username:e.target.value}});
      }

    async GetListCustomers(){
        try {
            var  response = await customerApi.GetListCustomers({query: this.state.filter});
            var  customerls = response.data;
            this.setState({
                customerls,
                countNoLimit:response.countNoLimit.count,
                TotalPage:response.TotalPage,
                CurrentPage:response.PageCurrent
              });
        } catch (error) {
            console.log('Fail to get list customer : '+error);
        }
    }
    
    //khi update state xong thi request lại
    async componentDidUpdate(prevProps, prevState){
      //2 object khác nhau thì true
      if(!_.isEqual(this.state.filter, prevState.filter)) {
        await this.GetListCustomers();
      }
    }

    //chỉ chạy 1 lần
    async componentDidMount(){
        await this.GetListCustomers();
    }
  render() {
    return (
        <div className="col-12">
        <div className="card recent-sales overflow-auto">
        
        <div className="filter m-4">

            <div className="row justify-content-start col-12">
            
                <div className="col">
                    <SearchInput handleSearchInput={this.handleSearchTen} nameText="Tìm theo tên khách hàng ..."/>
                </div>  
                <div className="col">
                    <SearchInput handleSearchInput={this.handleSearchUsername} nameText="Tìm theo username khách hàng ..."/>
                </div>
                <div className="col-3 me-5 ms-3 d-flex align-items-center ps-5 badge bg-primary " style={{ height: '40px',width:'210px'}} >
                        Số lượng user :{this.state.countNoLimit} 
                </div>
               
                <Link class="col-3 me-5 ms-3 d-flex align-items-center ps-5" to="/customer/create"><button type="button" class="col-3 me-5 ms-3 d-flex align-items-center ps-5 btn btn-outline-primary"  style={{ height: '40px',width:'210px'}}>Thêm khách hàng</button></Link>

               
            </div>
            <br/>
           
        </div> 
  
          <div className="card-body">
            <h5 className="card-title"> Danh sách Khách hàng</h5>

            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col">Mã khách hàng  </th>
                  <th scope="col">Tên khách hàng</th>
                  <th scope="col">Username </th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Địa chỉ</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              { 
                    this.state.customerls.length!==0 ?
                    this.state.customerls.map(CustomerItem=> <ComponentCustomerItem key={CustomerItem.Ma_kh}  CustomerItem={CustomerItem}/>) :  <tr className="row m-3"><td>Danh sách trống.</td></tr>
                    
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