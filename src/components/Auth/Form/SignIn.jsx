import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SignInAction } from '../../../actions/signIn'

export class ComponentFormSignIn extends PureComponent {
    state = {
        username: '',
        password: '',
        error:'',
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault()
        await this.props.SignInAction({username:this.state.username, password:this.state.password})        
        window.location.reload();
    }

    render() {        
        return (
            <form onSubmit={this.handleSubmit} style={{ textAlign: "center" }} className="dangnhap">
                <br></br>
                <h3 className="title">ĐĂNG NHẬP TÀI KHOẢN</h3><br></br>
                <input
                    style={{ width: "250px" }}
                    className="input"
                    type='text1'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    placeholder="Username"
                />                 
                <br></br><br></br>
                <div style={{color: "red"}}>{localStorage.getItem('errorLogin')?localStorage.getItem('errorLogin'):''}</div>
                <input
                    style={{ width: "250px" }}
                    className="input"
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                /> <br></br><br></br>
                <input className="btn btn-danger button" type='submit' name="dangnhap" value='Đăng nhập' /><br></br>
                <br></br><span>Bạn chưa có tài khoản?</span> <Link to='/register' title='Đăng ký'>Đăng ký</Link><br></br>
            </form>
        )
    }
}

const mapStateToProps = (props) => {
    return {
        user: props.signIn,
    }
}

const mapDispatchToProps = dispatch => ({
    SignInAction: userInfo => dispatch(SignInAction(userInfo))
})

export default connect(mapStateToProps,mapDispatchToProps)(ComponentFormSignIn)