import axiosAdmin from "./axiosAdmin";
import LINK from "../utils/link.json";

class CustomerApi {

    // lấy danh sách khách hàng  
    GetListCustomers=(condition)=>{
        const url = LINK.ADMIN.CUSTOMER_GET_LIST;
        return axiosAdmin.get(url,{params:condition.query});
    }

    // them khach hang
    insertCustomer=(condition)=>{
        console.log("add customer");
        console.log(condition);
        const url = LINK.ADMIN.CUSTOMER_ADD;
        return axiosAdmin.post(url,condition.query);
    }

}
const customerApi = new CustomerApi();

export default customerApi;