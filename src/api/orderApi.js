import axiosAdmin from "./axiosAdmin";
import LINK from "../utils/link.json";

class OrderApi {

    // lấy danh sách hóa đơn 
    GetOrder=(condition)=>{
        const url = LINK.ADMIN.ORDER_GET_LIST;
        return axiosAdmin.get(url,{params:condition.query});
    }

    // lấy danh danh sách đơn hàng theo id customer
    GetOrderByCustomer=(condition)=>{
        const url = `/admin/order/customer/${condition.query.idCustomer}`;
        return axiosAdmin.get(url,{params:condition.query});
    }

}
const orderApi = new OrderApi();

export default orderApi;