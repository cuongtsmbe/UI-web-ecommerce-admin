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
        <option  value="1" className='text-warning'>Đợi duyệt</option>
        <option  value="2" className='text-primary'>Đã duyệt</option>
        <option  value="3" className='text-info'>Đang chuẩn bị hàng</option>
        <option  value="4" className='text-secondary'>Đang giao</option>
        <option  value="5" className='text-success'>Hoàn Thành</option>
        <option  value="0" className='text-dange'>Đã hủy</option>
      </select>
      </div>
    </div>
   
    </>
  )
      }
}
