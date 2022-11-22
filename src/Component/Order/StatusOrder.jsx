import React, { PureComponent } from 'react';



export class ComponentStatusOrder extends PureComponent {
  render() {
    var status=this.props.status;
    if(status===1){
          return (
            <p className="text-warning">Đợi duyệt</p>
            );
    }
    if(status===2){
        return (
            <p className="text-primary">Đã duyệt</p>
          );
    }
    if(status===3){
        return (
            <p className="text-info">Đang chuẩn bị hàng</p>
          );
    }
    if(status===4){
        return (
            <p className="text-secondary">Đang giao</p>
          );
    }
    if(status===5){
        return (
            <p className="text-success">Hoàn thành</p>
          );
    }
    if(status===0){
        return (
            <p className="text-danger">Đã hủy</p>
          );
    }
  }
}

export default ComponentStatusOrder