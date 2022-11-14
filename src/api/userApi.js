import axiosClient from "./axiosClient";
import LINK from "../utils/link.json";
// api/userApi.js
class UserApi {
    register = (params) => {
        const url = LINK.CLIENT.AUTHENTICATE_REGISTER_LOCAL;        
        return axiosClient.post(url, params );
    };
    signIn = (params) => {
        const url = LINK.CLIENT.AUTHENTICATE_LOGIN_LOCAL;
        return axiosClient.post(url,  params )
    }
    getProfile = (params) => {
        const url = LINK.CLIENT.CUSTOMER_GET_INFO;
        return axiosClient.get(url, params)
    }
    refreshToken=(params)=>{
        const url= LINK.CLIENT.AUTHENTICATE_REFRESHTOKEN;
        return axiosClient.post(url,params)
    }
    updateInfo = (params)=>{
        const url = LINK.CLIENT.CUSTOMER_EDIT_INFO;
        return axiosClient.put(url, params);
    }
}
const userApi = new UserApi();

export default userApi;