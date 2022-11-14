import React, { PureComponent } from "react";
import ComponentFormSignIn from "../../components/Auth/Form/SignIn";
import { Navigate } from "react-router-dom";
import userApi from "../../api/userApi";

class ScreenAuthSignIn extends PureComponent {
    state = {
        isAuth: false
    }
    componentDidMount() {
        const isAuth = localStorage.getItem('authenticated') || false
        if (isAuth===true) {
            this.callApiToGetProfile();
        }
        this.setState({ isAuth })
    }

    async callApiToGetProfile() {
        const response = await userApi.getProfile();
        localStorage.setItem('userProfile', JSON.stringify(response))
    }
    render() {
        if (this.state.isAuth) {
            return <Navigate to="/" replace={true} />
        }
        else return (
            <div className="row">
                <ComponentFormSignIn />
                <br></br><br></br>
            </div>
        )
    }
}

export default ScreenAuthSignIn