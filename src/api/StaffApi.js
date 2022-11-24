import axiosAdmin from "./axiosAdmin";
import LINK from "../utils/link.json";

class StaffApi {

    // lấy danh sách nhan vien
    GetListStaffs=(condition)=>{
        const url = LINK.ADMIN.STAFF_GET_LIST;
        return axiosAdmin.get(url,{params:condition.query});
    }

    // // them nhan vien
    // insertCustomer=(condition)=>{
    //     const url = LINK.ADMIN.CUSTOMER_ADD;
    //     return axiosAdmin.post(url,condition.query);
    // }

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