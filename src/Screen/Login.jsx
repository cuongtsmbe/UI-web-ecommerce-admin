import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import authApi from '../api/authApi';

export class ScreenLogin extends PureComponent {
  state = {
    username: undefined,
    password: undefined,
    error:undefined
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = async event => {
    event.preventDefault(); 
    try {      
      const response = await authApi.login({ username: this.state.username, password: this.state.password })
      const status = response.status;
      const message = response.message;
      const user = response.user;
      if(status === 210){
        this.setState({error:message});
      }
      if(status===200) {
        localStorage.setItem('token',user.AccessToken);
        localStorage.setItem('refreshToken',user.refreshToken);
        localStorage.setItem('isAuthenticated',true);
        localStorage.setItem('username',user.name);
        window.location.href='/dashboard';
      }

    } catch (error) {
      console.log('Fail to Login'+error)
    }
  }
  render() {
    return (
      <main>
        <div className="container">

          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                  <div className="d-flex justify-content-center py-4">
                    <Link to="index.html" className="logo d-flex align-items-center w-auto">
                      <img src="assets/img/logo.png" alt="" />
                      <span className="d-none d-lg-block">NiceAdmin</span>
                    </Link>
                  </div>
                  {/* <!-- End Logo --> */}

                  <div className="card mb-3">

                    <div className="card-body">

                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                        <p className="text-center small">Enter your username & password to login</p>
                      </div>

                      <form className="row g-3 needs-validation" onSubmit={this.handleLogin} novalidate>

                        <div className="col-12">
                          <label for="yourUsername" className="form-label">Username</label>
                          <div className="input-group has-validation">
                            <input type="text" name="username" className="form-control" id="yourUsername" value={this.state.username} onChange={this.handleChange} required />
                            <div className="invalid-feedback">Please enter your username.</div>
                          </div>
                        </div>

                        <div className="col-12">
                          <label for="yourPassword" className="form-label">Password</label>
                          <input type="password" name="password" className="form-control" id="yourPassword" value={this.state.password} onChange={this.handleChange} required />
                          <div className="invalid-feedback">Please enter your password!</div>
                        </div>

                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" type="text" name="remember" value="true" id="rememberMe" hidden/>
                            <label className="form-check-label" for="rememberMe" style={{color:'red'}}>{this.state.error}</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit" >Login</button>
                        </div>
                       
                      </form>

                    </div>
                  </div>

                </div>
              </div>
            </div>

          </section>

        </div>
      </main>

    )
  }
}

export default ScreenLogin