import userApi from "../api/userApi";

export const SignInAction = (user) => {
    return dispatch => {        
        return userApi.signIn(user)
            .then(data => {
                if(data.user) {
                    localStorage.setItem('token', data.user.AccessToken)
                    localStorage.setItem('authenticated', true)
                    localStorage.setItem('refreshToken',data.user.refreshToken)
                    localStorage.removeItem('errorLogin')
                    dispatch({
                        type: 'LOGIN_USER',
                        payload: data.user
                    })
                } else  {
                    localStorage.setItem('errorLogin', data.message)                   
                }
            })
    }
}

// const action = userObj => ({
//     type: 'LOGIN_USER',
//     payload: userObj
// })
