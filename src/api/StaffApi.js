import axiosAdmin from "./axiosAdmin";
import LINK from "../utils/link.json";

class CustomerApi {

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

    // GetDetailCustomer=(condition) =>{
    //     const url = `/admin/customer/${condition.id}`;
    //     return axiosAdmin.get(url,condition);
    // }

    // updateCustomer=(value,id) =>{
    //     const url = `/admin/customer/edit/${id}`;
    //     return axiosAdmin.put(url,value.query);
    // }
}
const customerApi = new CustomerApi();

export default customerApi;