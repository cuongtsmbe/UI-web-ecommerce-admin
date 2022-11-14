import React, { PureComponent } from 'react'

export class ComponentAuthFieldPhone extends PureComponent {

  render() {
    return (
      <div className="form-group">Phone <br></br>
        <input
          style={{ width: "250px" }}
          className="input"
          type="text"
          name="phone"
          value={''}
          pattern="[0-9]{10}"
          id="phone"
          required
          placeholder="Số điện thoại"
        /><br></br>
      </div>
    )
  }
}

export default ComponentAuthFieldPhone