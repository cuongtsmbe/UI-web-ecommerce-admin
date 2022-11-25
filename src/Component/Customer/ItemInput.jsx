import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class ItemInput extends PureComponent {
  render() {
      // cho trang ds order chung
      return (
        <div className="col-md-12">
            <label for="inputName5" className="form-label">{this.props.nameInput}</label>
            {(this.props.name==="mat_khau")?
                <input type="password" className="form-control" id="inputName5" name={this.props.name} value={this.props.value} onChange={this.props.handleChangeInput} required />:
                <input type="text" className="form-control" name={this.props.name} value={this.props.value} onChange={this.props.handleChangeInput} required />
            }
        </div>
      );
    
  }
}

export default ItemInput