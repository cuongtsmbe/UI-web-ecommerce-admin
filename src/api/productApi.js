import axiosAdmin from "./axiosAdmin";
import LINK from "../utils/link.json";

class ProductApi {
    get=(params)=>{
        const url = LINK.ADMIN.PRODUCT_GET_LIST;
        return axiosAdmin.get(url,params);
    }
    getById=(id)=>{
        const url = `${LINK.ADMIN.PRODUCT_GET_DETAILS}/${id}`;
        return axiosAdmin.get(url);
    }
}
const productApi = new ProductApi();

export default productApi;