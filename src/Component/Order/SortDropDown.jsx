import React, { PureComponent } from 'react';

export default class SortDropDown extends PureComponent {
  render(){
    var valueSelected=this.props.valueSelected;
  return (
    <>
    <div className="row col-12">
    <div className="col d-flex align-items-center pe-5 flex-row-reverse">
      Sắp Xếp: 
    </div>
    <div className="col-8">
      <select className="form-select" aria-label="Default select example" defaultValue={valueSelected} onChange={this.props.handleChangeSelectedSort}>
        <option  value="-1">Không sắp xếp </option>
        <option  value="1">Tổng tiền giảm dần</option>
        <option  value="2">Tổng tiền tăng dần</option>
      </select>
      </div>
    </div>
   
    </>
  )
      }
}
