import React, { PureComponent } from "react";
import ComponentFormRegister from "../../components/Auth/Form/Register";
import { Navigate } from 'react-router-dom';

class ScreenAuthRegister extends PureComponent {
    state = {
        isAuth: false
    }
    componentDidMount() {
        const isAuth = localStorage.getItem('authenticated') || false
        this.setState({ isAuth })
    }
    render() {
        if (this.state.isAuth) {
            return <Navigate to="/" replace={true} />
        }
        else return (
            <div className="row">
                <ComponentFormRegister />
                <br></br><br></br>
            </div>
        )
    }
}

export default ScreenAuthRegister
