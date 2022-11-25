import React, { PureComponent } from 'react';

export class ItemInput extends PureComponent {
  render() {
      // cho trang ds order chung
      if(this.props.type==="readonly"){
        return (
          <div className="col-md-12">
              <label for="inputName5" className="form-label">{this.props.nameInput}</label>
              <input type="text" className="form-control" name={this.props.name} value={this.props.value} readonly />

          </div>
        );
       
      }else{
        return (
          <div className="col-md-12">
              <label for="inputName5" className="form-label">{this.props.nameInput}</label>
              <input type="text" className="form-control" name={this.props.name} value={this.props.value} onChange={this.props.handleChangeInput} required />

          </div>
        );
      }
    
  }
}

export default ItemInput