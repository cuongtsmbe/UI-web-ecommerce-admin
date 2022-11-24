import axiosAdmin from "./axiosAdmin";
import LINK from "../utils/link.json";

class ProductApi {
    get = (params) => {
        const url = LINK.ADMIN.PRODUCT_GET_LIST;
        return axiosAdmin.get(url, { params });
    }
    getById = (id) => {
        const url = `${LINK.ADMIN.PRODUCT_GET_DETAILS}/${id}`;
        return axiosAdmin.get(url);
    }
    edit = (id, params) => {
        const url = `${LINK.ADMIN.PRODUCT_EDIT}/${id}`;
        return axiosAdmin.put(url, params);
    }
    deleteById = (id) => {
        const url = `${LINK.ADMIN.PRODUCT_DELETE}/${id}`;
        return axiosAdmin.delete(url);
    }
    create = (params)=>{
        const url =`${LINK.ADMIN.PRODUCT_ADD}`;
        return axiosAdmin.post(url, params);
    }
}
const productApi = new ProductApi();

export default productApi;