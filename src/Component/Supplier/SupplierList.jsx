
import React, { PureComponent } from 'react';
import SupplierApi from '../../api/suplierApi';
import _ from 'lodash';
import { Link } from 'react-router-dom'
import SearchInput from '../UI/SearchInput';
import ComponentSupplierItem from './ItemListSupplier.jsx'
export class ComponentSupplierList extends PureComponent {
    state = {
        Supplierls:[],
        filter:{
            ten_ncc: undefined,
            page:1,
        },
        countNoLimit:undefined,
        TotalPage:0,
        CurrentPage:1
       
    }

  
    //search input order by Staff name
    handleSearchTen=(e)=>{
      this.setState({filter:{...this.state.filter,ten_ncc:e.target.value}});
    }

    async GetListSupplier(){
        try {
            var  response = await SupplierApi.get({params:this.state.filter});
            var  Supplierls = response.data;
            this.setState({
                Supplierls,
                countNoLimit:response.countNoLimit.count,
                TotalPage:response.TotalPage,
                CurrentPage:response.PageCurrent
              });
        } catch (error) {
            console.log('Fail to get list supplier : '+error);
        }
    }
    
    //khi update state xong thi request lại
    async componentDidUpdate(prevProps, prevState){
      //2 object khác nhau thì true
      if(!_.isEqual(this.state.filter, prevState.filter)) {
        await this.GetListSupplier();
      }
    }

    //chỉ chạy 1 lần
    async componentDidMount(){
        await this.GetListSupplier();
    }
  render() {
    return (
        <div className="col-12">
        <div className="card recent-sales overflow-auto">
        
        <div className="filter m-4">

            <div className="row justify-content-start col-12">
            
                <div className="col">
                    <SearchInput handleSearchInput={this.handleSearchTen} nameText="Tìm theo tên nhà cung cấp ..."/>
                </div>  
            
                <div className="col-3 me-5 ms-3 d-flex align-items-center ps-5 badge bg-primary " style={{ height: '40px',width:'210px'}} >
                        Số lượng nhà cung cấp :{this.state.countNoLimit} 
                </div>
               
                <Link class="col-3 me-5 ms-3 d-flex align-items-center ps-5" to="/supplier/create"><button type="button" class="col-3 me-5 ms-3 d-flex align-items-center ps-5 btn btn-outline-primary"  style={{ height: '40px',width:'210px'}}>Thêm nhà cung cấp</button></Link>

               
            </div>
            <br/>
           
        </div> 
  
          <div className="card-body">
            <h5 className="card-title"> Danh sách nhà cung cấp</h5>

            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col">Mã nhà cung cấp  </th>
                  <th scope="col">Tên nhà cung cấp</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Website</th>
                  <th scope="col">Địa chỉ</th>
                  <th scope="col">Ngày tạo</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              { 
                    this.state.Supplierls.length!==0 ?
                    this.state.Supplierls.map(Item=> (Item.trangthai!==-2) ? <ComponentSupplierItem key={Item.id}  SupplierItem={Item}/>:"") :  <tr className="row m-3"><td>Danh sách trống.</td></tr>
                    
              }
              </tbody>
            </table>

          </div>

        </div>
      </div>      
    )
  }
}

export default ComponentSupplierList