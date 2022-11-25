import React, { PureComponent } from 'react';
import permissionApi from '../../api/permissionApi'
export default class PermissionDropDown extends PureComponent {
    state={
        dsPermission:[],
        page:1,
        countNoLimit:undefined,
        TotalPage:undefined
    };

    async componentDidMount(){
        this.getListPermission();
    }
    async getListPermission(){
        
        try {
            var  response = await permissionApi.GetList({query: {page:this.state.page}});
            var  dsPermission = response.data;
            
            this.setState({
                dsPermission,
                countNoLimit:response.countNoLimit.count,
                TotalPage:response.TotalPage,
                CurrentPage:response.PageCurrent
                });
        } catch (error) {
            console.log('Fail to get list permission : '+error);
        }
        

    }
    render(){

    return (
    <>
    <div className="row col-12">

    <label for="inputName5" className="form-label">Chức vụ: </label>
    <div className="col-8">
        <div className="col-md-12">
        <select className="form-select" aria-label="Default select example" value={this.props.valueSelected} onChange={this.props.handleChangeSelected}>
        <option className='text-primary'>Chọn: </option>
            { 
                this.state.dsPermission.length!==0 ?
                this.state.dsPermission.map(Item=> <option  value={Item.id} className='text-primary'>{Item.ten_quyen}</option>) : <option className='text-warning'>Không có chức vụ nào </option>
                    
            } 
        
        </select>
        </div>
      </div>
    </div>
   
    </>
  )
      }
}
