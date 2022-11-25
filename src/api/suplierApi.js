import axiosAdmin from "./axiosAdmin";
import LINK from "../utils/link.json";

class SuplierApi {
    get = (params) => {
        const url = LINK.ADMIN.SUPPLIER_GET_LIST;
        return axiosAdmin.get(url, params);
    }
    create = (value) => {
        console.log(value);
        const url = LINK.ADMIN.SUPPLIER_ADD;
        return axiosAdmin.post(url,value);
    }
    edit = (id, params) => {
        const url = `${LINK.ADMIN.SUPPLIER_EDIT}/${id}`;
        return axiosAdmin.put(url, params);
    }
    delete=(id)=>{
        const url = `${LINK.ADMIN.SUPPLIER_DELETE}/${id}`;
        return axiosAdmin.delete(url);
    }
}
const suplierApi = new SuplierApi();

export default suplierApi;