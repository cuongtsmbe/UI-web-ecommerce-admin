import React, { PureComponent } from 'react';

export default class StatusDropDown extends PureComponent {
  render(){

    return (
    <>
    <div className="row col-12">
    <div className="col d-flex align-items-center pe-5 flex-row-reverse">
      Trạng Thái: 
    </div>
    <div className="col-8">
      <select className="form-select" aria-label="Default select example" value={this.props.valueSelected} onChange={this.props.handleChangeSelected}>
        {this.props.nameCall!=="OrderDetail"?<option  value="-1" >Tất cả</option>:""}
        <option  value="1" className='text-success'>Thành công</option>
        <option  value="-2" className='text-dange'>Đã hủy</option>
      </select>
      </div>
    </div>
   
    </>
  )
      }
}
