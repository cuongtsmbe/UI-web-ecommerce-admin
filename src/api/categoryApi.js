import axiosAdmin from "./axiosAdmin";
import LINK from "../utils/link.json";

class CategoryApi {
    get=(params)=>{
        const url = LINK.ADMIN.CATEGORY_GET_LIST;
        return axiosAdmin.get(url,params);
    }
    add=(params)=>{
        const url = LINK.ADMIN.CATEGORY_ADD;
        return axiosAdmin.post(url,params);
    }
    edit=(id,params)=>{
        const url = `${LINK.ADMIN.CATEGORY_EDIT}/${id}`;
        return axiosAdmin.put(url,params);
    }
    delete=(id)=>{
        const url = `${LINK.ADMIN.CATEGORY_DELETE}/${id}`;
        return axiosAdmin.delete(url);
    }
}
const categoryApi = new CategoryApi();

export default categoryApi;