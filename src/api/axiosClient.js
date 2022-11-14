// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";
import userApi from "./userApi";


// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

const axiosClient = axios.create({
  origin: true,
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  const customHeaders = {};
  const accessToken = localStorage.getItem('token');
  if (accessToken) {
    customHeaders.Authorization = 'Bearer ' + accessToken;
  }

  return {
    ...config,
    headers: {
      ...customHeaders,  // auto attach token
      ...config.headers, // but you can override for some requests
    }
  };
})

axiosClient.interceptors.response.use(async (response) => {
  const config = response.config;
  if (config.url.indexOf('/login') >= 0 || config.url.indexOf('/register') >= 0 || config.url.indexOf('/refreshToken') >= 0) {
    return response.data || response;
  }

  return response.data || response;
}, async (err) => {
  if (err.response.status === 400 || err.response.status === 401) {
    const refreshResponse = await userApi.refreshToken({ user: JSON.stringify({ refreshToken: localStorage.getItem('refreshToken') }) });
    // Save access token
    localStorage.setItem('token', refreshResponse.AccessToken);
    err.response.config.headers["Authorization"] = "Bearer " + err.response.AccessToken;
    return axiosClient(err.response.config)
  }
  return Promise.reject(err);
})
// function createAxiosResponseInterceptor() {
//  const interceptor =  axiosClient.interceptors.response.use(
//   (response) => response.data||response,
//     // {if (response && response.data) {
//     //   return response.data;
//     // }
//     //  return response;}
//    async (error) => {
//     // Handle errors
//     // Reject promise if usual error
//     if (error.response.status !== 400 && error.response.status !== 401) {
//       return Promise.reject(error);
//     }
//     /*
//             * When response code is 401, try to refresh the token.
//             * Eject the interceptor so it doesn't loop in case
//             * token refresh causes the 401 response.
//             *
//             * Must be re-attached later on or the token refresh will only happen once
//             */
//     axios.interceptors.response.eject(interceptor);
//     try {
//        try {
//          const response = await userApi.refreshToken({ user: JSON.stringify({ refreshToken: localStorage.getItem('refreshToken') }) });
//          // Save access token
//          localStorage.setItem('token', response.AccessToken);
//          error.response.config.headers["Authorization"] = "Bearer " + response.AccessToken;
//          return await axios(error.response.config);
//        } catch (error2) {
//          return await Promise.reject(error2);
//        }
//      } finally { }
//     // throw error;
//   });
// }
// createAxiosResponseInterceptor(); // Execute the method once during start


export default axiosClient;
// Expired Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsInVzZXJuYW1lIjoidGVzdDEyNDNyZWZkIiwidXNlcl9wZXJtaXNzaW9uIjp0cnVlLCJ1c2VyX3R5cGUiOiJDVVNUT01FUiIsImlhdCI6MTY2NzY3NTI3NiwiZXhwIjoxNjY3Njc4ODc2fQ.iWU8fZQ0mWWvfEJf3z_nAfy4Y1FezfatxmijhG9NLSk