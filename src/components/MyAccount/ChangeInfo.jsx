import React, { PureComponent } from 'react'
import userApi from '../../api/userApi'
import swal from 'sweetalert'

export class ComponentMyAccountChangeInfo extends PureComponent {
    state = {
        info: '',
        name:'',
        email:'',
        phone:'',
        address:''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleUpdate = async event =>{
        event.preventDefault()
        try {
            const params = {
                ten_kh:this.state.name,
                phone:this.state.phone,
                email:this.state.email,
                dia_chi:this.state.address
            }
            await userApi.updateInfo(params);
            window.location.reload();
            swal({                
                text: "Cập nhật thành công!",
                icon: "success",  
                buttons:false,
                timer:800              
              });
        } catch (error) {
            swal({                
                text: "Cập nhật không thành công!",
                icon: "error",  
                buttons:false,
                timer:800              
              });
              console.log('Fail to update info'+error)
        }
    }

    async getInfoUser() {
        try {
            const response = await userApi.getProfile();
            const user = response.data[0];
            this.setState({ info: user });
            this.setState({name:user.ten_kh});
            this.setState({email:user.email});
            this.setState({phone:user.phone});
            this.setState({address:user.dia_chi});
        } catch (error) {
            console.log('Fail to get user info!');
        }
    }

    async componentDidMount() {
        await this.getInfoUser();
    }
    render() {
        return (
            <div className="col col-lg-9 col-sm-12">
                {/* Billing Details */}
                <div className="billing-details">
                    <div className="section-title">
                        <h3 className="title">Thông tin tài khoản</h3>
                    </div>
                    <form method="post">
                        <table width="100%">
                            <tbody>
                                <tr>
                                    <td>Tên đăng nhập</td>
                                    <td>
                                        <div className="form-group">
                                            <input className="input" type="text" name="username" value={this.state.info.ten_dangnhap} readOnly style={{backgroundColor:'#E8F0FE'}} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Họ tên</td>
                                    <td>
                                        <div className="form-group">
                                            <input className="input" type="text" name="name" placeholder="Nhập họ tên" value={this.state.name} onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Số điện thoại</td>
                                    <td>
                                        <div className="form-group">
                                            <input className="input" type="tel" id="sdt" name="phone" placeholder="Nhập số điện thoại" value={this.state.phone} onChange={this.handleChange}/>
                                            <div style={{ color: 'red' }} id="thongbaoloisdt" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <div className="form-group">
                                            <input className="input" type="email" name="email" placeholder="Nhập Email" value={this.state.email} onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Địa chỉ</td>
                                    <td>
                                        <div className="form-group">
                                            <input className="input" type="text" name="address" placeholder="Nhập địa chỉ" value={this.state.address} onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Giới tính</td>
                                    <td>
                                        <input type="radio" id="male" name="gender" defaultValue="male" defaultChecked />
                                        <label htmlFor="male">Nam</label>
                                        <input type="radio" id="female" name="gender" defaultValue="female" />
                                        <label htmlFor="female">Nữ</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ngày sinh</td>
                                    <td />
                                </tr>
                                <tr>
                                    <td />
                                    <td>
                                        <div className="form-group">
                                            <div className="input-checkbox">
                                                <input type="checkbox" id="create-account" />
                                                <label htmlFor="create-account">
                                                    <span />
                                                    Thay đổi mật khẩu
                                                </label>
                                                <div className="caption">
                                                    <input type="text" id="pswd" style={{ display: 'none' }} defaultValue="<?=$info['mat_khau']?" />
                                                    <input className="input" id="passOld" type="password" name="passwordOld" placeholder="Nhập mật khẩu cũ" style={{ marginBottom: '5px' }} onchange="checkPass(1);" />
                                                    <div style={{ color: 'red' }} id="tb1" />
                                                    <input className="input" id="passNew1" type="password" name="passwordNew" placeholder="Nhập mật khẩu mới từ 6 đến 32 ký tự" style={{ marginBottom: '5px' }} onchange="checkPass(2);" />
                                                    <div style={{ color: 'red' }} id="tb2" />
                                                    <input className="input" id="passNew2" type="password" name="passwordNew2" placeholder="Nhập lại mật khẩu mới" onchange="checkPass(3);" />
                                                    <div style={{ color: 'red' }} id="tb3" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td />
                                    <td>
                                        <button className="primary-btn order-submit" onClick={this.handleUpdate}>Cập nhật</button>
                                    </td>
                                </tr>
                            </tbody></table>
                    </form>
                </div>
                {/* /Billing Details */}
            </div>

        )
    }
}

export default ComponentMyAccountChangeInfo