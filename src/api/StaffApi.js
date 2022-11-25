import axiosAdmin from "./axiosAdmin";
import LINK from "../utils/link.json";

class StaffApi {

    // lấy danh sách nhan vien
    GetListStaffs=(condition)=>{
        const url = LINK.ADMIN.STAFF_GET_LIST;
        return axiosAdmin.get(url,{params:condition.query});
    }
    // them nhan vien
    insertStaff=(value)=>{
        const url = LINK.ADMIN.STAFF_ADD;
        console.log(value);
        return axiosAdmin.post(url,value);
    }

    GetDetailStaff=(condition) =>{
        const url = `/admin/staff/${condition.id}`;
        return axiosAdmin.get(url,condition);
    }

    updateStaff=(value,id) =>{
        const url = `/admin/staff/edit/${id}`;
        return axiosAdmin.put(url,value.query);
    }
}
const staffApi = new StaffApi();

export default staffApi;