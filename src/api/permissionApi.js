import axiosAdmin from "./axiosAdmin";

class PermissionApi {

    // lấy danh sách quyen
    GetList=(condition)=>{
        const url = '/admin/permission/list';
        return axiosAdmin.get(url,{params:condition.query});
    }
     // lấy chi tiết quyền
     GetDetailByID=(condition)=>{
        const url = `/admin/permission/details/${condition.id}`;
        return axiosAdmin.get(url);
    }




}
const permissionApi = new PermissionApi();

export default permissionApi;