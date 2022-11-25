import axiosAdmin from "./axiosAdmin";

class PermissionApi {

    // lấy danh sách quyen
    GetList=(condition)=>{
        const url = '/admin/permission/list';
        return axiosAdmin.get(url,{params:condition.query});
    }



}
const permissionApi = new PermissionApi();

export default permissionApi;