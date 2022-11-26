import React, { PureComponent } from 'react';
import SupplierApi from '../../api/suplierApi';
import _ from 'lodash';
export default class NCCDropDown extends PureComponent {
    state = {
        Supplierls:[],
        filter:{
            ten_ncc: undefined,
            page:1,
        },
        countNoLimit:undefined,
        TotalPage:0,
        CurrentPage:1,
        
       
    }
    async componentDidMount(){
        await this.GetListSupplier();
    }
    async componentDidUpdate(prevProps, prevState){
        //2 object khác nhau thì true
        if(!_.isEqual(this.state.NCCList, prevState.NCCList)) {
          await this.GetListSupplier();
        }
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
  render(){

    return (
    <>
    <div className="row col-12">
    <div className="col-8">
      <select className="form-select" aria-label="Default select example" value={this.props.valueSelected} onChange={(e)=>this.props.handleChangeSelected(e.target.value)}>
        <option  value="-1" >Chọn nhà cung cấp: </option>
        { 
                    this.state.Supplierls.length!==0 ?
                    this.state.Supplierls.map(Item=>   <option  value={Item.id} key={Item.id} className='text-primary'>{Item.ten_ncc}</option> ):  <tr className="row m-3"><td>Danh sách trống.</td></tr>      
        }
      </select>
      </div>
    </div>
   
    </>
  )
      }
}
