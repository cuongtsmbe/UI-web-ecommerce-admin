import React, { PureComponent } from 'react'

export class ComponentAuthFieldPassword extends PureComponent {
  render() {
    return (
      <div className="form-group">Password<br></br>
        <input style={{ width: "250px" }}
          className="input"
          type="password"
          name="mat_khau"
          value={''}
          required
          placeholder="Mật khẩu"
        /><br></br>
      </div>
    )
  }
}

export default ComponentAuthFieldPassword