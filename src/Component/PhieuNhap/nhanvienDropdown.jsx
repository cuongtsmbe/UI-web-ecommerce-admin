import React, { PureComponent } from 'react';
import StaffApi from '../../api/StaffApi';
export default class NVDropDown extends PureComponent {
    state = {
        Staffls:[],
        filter:{
            search: '',
            page:1,
        },
    }
    async GetListStaffs(){
        try {
            var  response = await StaffApi.GetListStaffs({query: this.state.filter});
            var  Staffls = response.data;
            this.setState({
                Staffls
              });
        } catch (error) {
            console.log('Fail to get list Staff : '+error);
        }
    }
    
    //chỉ chạy 1 lần
    async componentDidMount(){
        await this.GetListStaffs();
    }

  render(){

    return (
    <>
    <div className="row col-12">
    <div className="col-8">
      <select className="form-select" aria-label="Default select example" value={this.props.valueSelected} onChange={(e)=>this.props.handleChangeSelected(e.target.value)}>
        <option  value="-1" >Chọn nhân vien: </option>
        { 
                    this.state.Staffls.length!==0 ?
                    this.state.Staffls.map(Item=>   <option  value={Item.Ma_nhan_vien} key={Item.Ma_nhan_vien} className='text-primary'>{Item.ten_nv}</option> ):  <tr className="row m-3"><td>Danh sách trống.</td></tr>      
        }
      </select>
      </div>
    </div>
   
    </>
  )
      }
}
