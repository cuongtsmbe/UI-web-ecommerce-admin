import userApi from "../api/userApi";

export const RegisterAction = (user) => {
    return dispatch => {
        return userApi.register(user)
            .then(data => {
                if (data.user) {
                    localStorage.setItem('token', data.user.AccessToken)
                    localStorage.setItem('authenticated', true)
                    localStorage.removeItem('errorRegister')
                    dispatch({
                        type: 'LOGIN_USER',
                        payload: data.user
                    })
                } if(data.error){
                    const errorObject={"error":data.error, "message":data.errorMessage?data.errorMessage:"Mật khẩu yếu"}
                    localStorage.setItem('errorRegister', JSON.stringify(errorObject))
                } 
                else {
                    const errorObject={"error":'username', "message":data.message}
                    localStorage.setItem('errorRegister', JSON.stringify(errorObject))
                }
            })
    }
}

// const action = userObj => ({
//     type: 'LOGIN_USER',
//     payload: userObj
// })
