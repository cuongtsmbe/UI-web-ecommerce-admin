import React, { PureComponent } from 'react';



export class ComponentStatusPhieuNhap extends PureComponent {
  render() {
    var status=this.props.status;
    if(status===1){
          return (
            <p className="text-success">Thành công</p>
            );
    }
    if(status===-2){
        return (
            <p className="text-danger">Đã Xóa</p>
          );
    }
    
  }
}

export default ComponentStatusPhieuNhap