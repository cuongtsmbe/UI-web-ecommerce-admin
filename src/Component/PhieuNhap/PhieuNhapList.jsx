
import React, { PureComponent } from 'react';
import _ from 'lodash';
import phieunhapApi from '../../api/phieunhapApi'
import StatusDropDown from "./StatusDropDown";
import ComponentPhieuNhapItem from './ItemListPhieuNhap.jsx'
import NativePickers from './Date_time_picker'
export class ComponentPhieuNhapList extends PureComponent {
    state = {
        phieunhapls:[],
        filter:{
            startdate:undefined,
            enddate:undefined,
            trangthai:-1,
            page:1
        },
        countNoLimit:undefined,
        TotalPage:0,
        CurrentPage:1
       
    }

  
    //search input order by Staff name
    handleSearchTen=(e)=>{
      this.setState({filter:{...this.state.filter,ten_ncc:e.target.value}});
    }

    async GetListPhieuNhap(){
        try {
            var  response = await phieunhapApi.get({params:this.state.filter});
            var  phieunhapls = response.data;
            this.setState({
                phieunhapls,
                countNoLimit:response.countPNNoLimit.count,
                TotalPage:response.TotalPage,
                CurrentPage:response.PageCurrent
              });
        } catch (error) {
            console.log('Fail to get list supplier : '+error);
        }
    }
    //dropdown status
    handleChangeSelectedStatus=(value)=>{
        this.setState({filter:{...this.state.filter,trangthai: value}});
    }
    handleSetTime = (childName,value) =>{
        this.setState({filter:{...this.state.filter,[childName]: value}});
    }


    //chỉ chạy 1 lần
    async componentDidMount(){
        await this.GetListPhieuNhap();
    }
    async componentDidUpdate(prevProps, prevState){
        //2 object khác nhau thì true
        if(!_.isEqual(this.state.filter, prevState.filter)) {
          await this.GetListPhieuNhap();
        }
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
             
              
            
            </div>
            <br/>
            <div className="row col-12">
            <div className="col-6">
                 <StatusDropDown nameCall="OrdersList" valueSelected={this.state.filter.trangthai} handleChangeSelected={(e)=>this.handleChangeSelectedStatus(e.target.value)}/>
           
            </div>
            <div className="col-6">
               </div>
            </div>
        </div>  
  
          <div className="card-body">
            <h5 className="card-title"> Danh sách phiếu nhập</h5>

            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col">Mã phiếu nhập </th>
                  <th scope="col">Mã nhà cung cấp  </th>
                  <th scope="col">Tên nhà cung cấp</th>
                  <th scope="col">Mã nhân viên</th>
                  <th scope="col">Tên nhân viên</th>
                  <th scope="col">Tổng tiền</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Ngày tạo</th>
                 

                </tr>
              </thead>
              <tbody>
              { 
                    this.state.phieunhapls.length!==0 ?
                    this.state.phieunhapls.map(Item=>  <ComponentPhieuNhapItem key={Item.id}  Item={Item}/>) :  <tr className="row m-3"><td>Danh sách trống.</td></tr>
                    
              }
              </tbody>
            </table>

          </div>

        </div>
      </div>      
    )
  }
}

export default ComponentPhieuNhapList