import axiosAdmin from "./axiosAdmin";
import LINK from "../utils/link.json";

class BranchApi {
    get=(params)=>{
        const url = LINK.ADMIN.THUONGHIEU_GET_ALL ;
        return axiosAdmin.get(url,params);
    }
    add=(params)=>{
        const url = LINK.ADMIN.THUONGHIEU_ADD;
        return axiosAdmin.post(url,params);
    }
    edit=(id,params)=>{
        const url = `${LINK.ADMIN.THUONGHIEU_EDIT}/${id}`;
        return axiosAdmin.put(url,params);
    }
    delete=(id)=>{
        const url = `${LINK.ADMIN.THUONGHIEU_DELETE }/${id}`;
        return axiosAdmin.delete(url);
    }
}
const branchApi = new BranchApi();

export default branchApi;