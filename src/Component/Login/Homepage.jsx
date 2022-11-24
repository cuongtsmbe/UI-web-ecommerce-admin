import Header from "./Header";
import React, { Component } from "react";
import AuthApi from '../../api/authApi';
export default class HomePage extends Component {
  state = {
    user: {},
    error: null,
    authenticated: false
  };
  handleLogout=()=>{
    this.setState({user:{},error:null,authenticated:false});
  }
  async componentDidMount() {
    try {
         
        var  response = await AuthApi.loginGoogle();
        console.log("login google");
        var user=response.user;
        if(response.status===200){
          //save token 
          this.setState({user:user,authenticated:true,error:false})
          localStorage.setItem('token',user.AccessToken);
          localStorage.setItem('refreshToken',user.refreshToken);
          localStorage.setItem('isAuthenticated',true);
          localStorage.setItem('username',user.name);
          window.location.href='/dashboard';
        }else if(response.status===500){
          this.setState({error: "Please login ."})
        }
    } catch (error) {
        console.log('login again '+error);
    }
  }

  render() {
    const { authenticated } = this.state;
  
    return (
      <div>
        <Header
          authenticated={authenticated}
          handleNotAuthenticated={this._handleNotAuthenticated}
          handleLogout={this.handleLogout}
        />
        <div>
         
        </div>
      </div>
    );
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}