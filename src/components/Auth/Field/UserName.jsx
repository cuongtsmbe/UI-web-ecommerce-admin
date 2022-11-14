import React, { PureComponent } from 'react'

export class ComponentAuthFieldUserName extends PureComponent {
  render() {
    return (
      <div className="form-group">Username <br></br>
        <input
          style={{ width: "250px" }}
          className="input"
          type="text"
          name="ten_dangnhap"
          value={''}
          required
          placeholder="Tên đăng nhập"
        /><br></br>
      </div>
    )
  }
}

export default ComponentAuthFieldUserName