
import React, { PureComponent } from 'react';
import StaffApi from '../../api/StaffApi';
import _ from 'lodash';
import { Link } from 'react-router-dom'
import SearchInput from '../UI/SearchInput';
import ComponentStaffItem from './ItemListStaff'
export class ComponentStaffList extends PureComponent {
    state = {
        Staffls:[],
        filter:{
            search: undefined,
            page:1,
        },
        countNoLimit:undefined,
        TotalPage:0,
        CurrentPage:1
       
    }

  
    //search input order by Staff name
    handleSearchTen=(e)=>{
      this.setState({filter:{...this.state.filter,search:e.target.value}});
    }

    async GetListStaffs(){
        try {
            var  response = await StaffApi.GetListStaffs({query: this.state.filter});
            var  Staffls = response.data;
            this.setState({
                Staffls,
                countNoLimit:response.countNoLimit.count,
                TotalPage:response.TotalPage,
                CurrentPage:response.PageCurrent
              });
        } catch (error) {
            console.log('Fail to get list Staff : '+error);
        }
    }
    
    //khi update state xong thi request lại
    async componentDidUpdate(prevProps, prevState){
      //2 object khác nhau thì true
      if(!_.isEqual(this.state.filter, prevState.filter)) {
        await this.GetListStaffs();
      }
    }

    //chỉ chạy 1 lần
    async componentDidMount(){
        await this.GetListStaffs();
    }
  render() {
    return (
        <div className="col-12">
        <div className="card recent-sales overflow-auto">
        
        <div className="filter m-4">

            <div className="row justify-content-start col-12">
            
                <div className="col">
                    <SearchInput handleSearchInput={this.handleSearchTen} nameText="Tìm theo tên nhân viên ..."/>
                </div>  
            
                <div className="col-3 me-5 ms-3 d-flex align-items-center ps-5 badge bg-primary " style={{ height: '40px',width:'210px'}} >
                        Số lượng nhân viên :{this.state.countNoLimit} 
                </div>
               
                <Link class="col-3 me-5 ms-3 d-flex align-items-center ps-5" to="/staff/create"><button type="button" class="col-3 me-5 ms-3 d-flex align-items-center ps-5 btn btn-outline-primary"  style={{ height: '40px',width:'210px'}}>Thêm nhân viên</button></Link>

               
            </div>
            <br/>
           
        </div> 
  
          <div className="card-body">
            <h5 className="card-title"> Danh sách nhân viên</h5>

            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col">Mã nhân viên  </th>
                  <th scope="col">Tên nhân viên</th>
                  <th scope="col">Username </th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Quyền </th>
                  <th scope="col">Ngày tạo</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              { 
                    this.state.Staffls.length!==0 ?
                    this.state.Staffls.map(StaffItem=> <ComponentStaffItem key={StaffItem.Ma_nhan_vien}  StaffItem={StaffItem}/>) :  <tr className="row m-3"><td>Danh sách trống.</td></tr>
                    
              }
              </tbody>
            </table>

          </div>

        </div>
      </div>      
    )
  }
}

export default ComponentStaffList