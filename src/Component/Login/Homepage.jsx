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
        if(response.status===200){
          this.setState({user:response.user,authenticated:true,error:false})
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
          {!authenticated ? (
            <h1>Welcome!</h1>
          ) : (
            <div>
              <h1>You have login succcessfully!</h1>
            </div>
          )}
        </div>
      </div>
    );
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}