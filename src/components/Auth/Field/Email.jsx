import React, { PureComponent } from 'react'

export class ComponentAuthFieldEmail extends PureComponent {
  render() {
    return (
      <div className="form-group">Email <br></br>
        <input
          style={{ width: "250px" }}
          className="input"
          type="email"
          name="email"
          value={''}
          required
          placeholder="Email"
        /><br></br>
      </div>
    )
  }
}

export default ComponentAuthFieldEmail