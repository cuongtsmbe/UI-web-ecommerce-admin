import axiosAdmin from "./axiosAdmin";
import LINK from "../utils/link.json";

class AuthApi {
    login = (params) => {
        const url = LINK.ADMIN.AUTHENTICATE_LOGIN_LOCAL;
        return axiosAdmin.post(url, params);
    };
    refreshToken = (params) => {
        const url = LINK.ADMIN.AUTHENTICATE_REFRESHTOKEN;
        return axiosAdmin.post(url, params);

    };
    loginGoogle = (params) => {
        const url = `${process.env.REACT_APP_API_URL}/auth/google/success`;
        return axiosAdmin.get(url, params);
    };
    lohoutGoogle =(params) =>{
        const url =`${process.env.REACT_APP_API_URL}/auth/google/logout`;
        return axiosAdmin.get(url, params);
    }
}
const authApi = new AuthApi();

export default authApi;