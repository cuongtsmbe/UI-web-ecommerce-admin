import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { RegisterAction } from '../../../actions/register';

export class ComponentFormRegister extends PureComponent {
  state = {
    ten_kh: 'Nguyễn Ngọc Báu',
    dia_chi: '99 An Dương Vương, P16, Q8, HCM',
    username: '',
    password: '',
    email: '',
    phone: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit = async event => {
    event.preventDefault()
    await this.props.RegisterAction(this.state)    
    window.location.reload();
  }  

  render() {
    return (
      <form style={{ textAlign: "center" }} onSubmit={this.handleSubmit}>
        <br></br>
        <h3 className="title">ĐĂNG KÝ TÀI KHOẢN</h3>
        <div className="form-group">Username <br></br>
          <input
            style={{ width: "250px" }}
            className="input"
            type="text"
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            required
            placeholder="Tên đăng nhập"
          /><br></br>
          <div style={{color: "red"}}>{localStorage.getItem('errorRegister')&&JSON.parse(localStorage.getItem('errorRegister')).error==="username"?JSON.parse(localStorage.getItem('errorRegister')).message:''}</div>
        </div>
        <div className="form-group">Password<br></br>
          <input style={{ width: "250px" }}
            className="input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            placeholder="Mật khẩu"
          /><br></br>
          <div style={{color: "red"}}>{localStorage.getItem('errorRegister')&&JSON.parse(localStorage.getItem('errorRegister')).error==="password"?JSON.parse(localStorage.getItem('errorRegister')).message:''}</div>
        </div>
        <div className="form-group">Email <br></br>
          <input
            style={{ width: "250px" }}
            className="input"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            placeholder="Email"
          /><br></br>
        </div>
        <div className="form-group">Phone <br></br>
          <input
            style={{ width: "250px" }}
            className="input"
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            pattern="[0-9]{10}"
            id="phone"
            required
            placeholder="Số điện thoại"
          /><br></br>          
        </div>
        <input className="btn btn-danger" type="submit" name="dangky" value="Đăng Ký" />
      </form>
    )
  }
}

const mapStateToProps = (props) => {
  return {
    user: props.register,
  }
}

const mapDispatchToProps = dispatch => ({
  RegisterAction: userInfo => dispatch(RegisterAction(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentFormRegister);