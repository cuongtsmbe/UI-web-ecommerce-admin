import axiosClient from "./axiosClient";
import LINK from "../utils/link.json";
// api/orderApi.js
class OrderApi {
    getMyOrders = (params) => {
        const url = LINK.CLIENT.ORDER_GET_HISTORY ;
        return axiosClient.get(url,{params});
    };

    getOrderDetail = (id)=>{
        const url = `${LINK.CLIENT.ORDER_GET_DETAILS}/${id}`;
        return axiosClient.get(url);
    };
    pay=(payMethod)=>{
        const url = LINK.CLIENT.ORDER_THANHTOAN;
        return axiosClient.post(url, payMethod);
    }
    changeStatus = (id, params)=>{
        const url = `${LINK.CLIENT.ORDER_CHANGE_STATUS}/${id}`;
        return  axiosClient.put(url,params);
    }
}
const orderApi = new OrderApi();

export default orderApi;