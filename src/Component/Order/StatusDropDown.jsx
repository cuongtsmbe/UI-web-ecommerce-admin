import React, { PureComponent } from 'react';

export default class StatusDropDown extends PureComponent {
  render(){
    var valueSelected=this.props.valueSelected;
  return (
    <>
    <div className="row col-12">
    <div className="col d-flex align-items-center pe-5 flex-row-reverse">
      Trạng Thái: 
    </div>
    <div className="col-8">
      <select className="form-select" aria-label="Default select example" defaultValue={valueSelected} onChange={this.props.handleChangeSelected}>
        <option  value="-1">Tất cả</option>
        <option  value="1">Đợi duyệt</option>
        <option  value="2">Đã duyệt</option>
        <option  value="3">Đang chuẩn bị hàng</option>
        <option  value="4">Đang giao</option>
        <option  value="5">Hoàn Thành</option>
        <option  value="0">Đã hủy</option>
      </select>
      </div>
    </div>
   
    </>
  )
      }
}
