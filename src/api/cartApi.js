import axiosClient from "./axiosClient";
import LINK from "../utils/link.json";
// api/CartApi.js
class CartApi {
    add = (id,quantity) => {
        const url = `${LINK.CLIENT.CART_ADD_PRODUCT}/${id}/${quantity}`;
        return axiosClient.post(url,{withCredentials: true,});
    };
    remove = (id)=>{
        const url = `${LINK.CLIENT.CART_REMOVE_ITEM_PRODUCT}/${id}`;
        return axiosClient.delete(url);
    }
    reduce = (id)=>{
        const url = `${LINK.CLIENT.CART_REDUCE_PRODUCT}/${id}`;
        return axiosClient.post(url);
    }
    get=() =>{
        const url = `${LINK.CLIENT.CART_GET}`;
        return axiosClient.get(url);
    } 
}
const cartApi = new CartApi();

export default cartApi;