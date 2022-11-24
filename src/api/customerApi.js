import axiosAdmin from "./axiosAdmin";
import LINK from "../utils/link.json";

class CustomerApi {

    // lấy danh sách khách hàng  
    GetListCustomers=(condition)=>{
        const url = LINK.ADMIN.CUSTOMER_GET_LIST;
        return axiosAdmin.get(url,{params:condition.query});
    }

    // lấy danh danh sách đơn hàng theo id customer
    GetOrderByCustomer=(condition)=>{
        const url = `/admin/order/customer/${condition.query.idCustomer}`;
        return axiosAdmin.get(url,{params:condition.query});
    }
    // lấy tổng tiền hóa đơn của id customer
    GetTotalMonneyOrderByIDCustomer=(condition)=>{
        const url = `/admin/order/customer/totalMonney/${condition.query.idCustomer}`;
        return axiosAdmin.get(url,{params:condition.query});
    }
    
    // lấy chi tiết hóa đơn 
    GetOrderByID=(condition)=>{
        const url = `/admin/order/${condition.query.ID_HD}`;
        return axiosAdmin.get(url);
    }

     // API update status order
     UpdateStatusOrderByID=(condition)=>{
        const url = `/admin/order/updateStatus/${condition.query.ID_HD}`;
        return axiosAdmin.put(url,{Trang_thai:condition.body.Trang_thai,message:condition.body.message});
    }

}
const customerApi = new CustomerApi();

export default customerApi;