import axiosAdmin from "./axiosAdmin";
import LINK from "../utils/link.json";

class OrderApi {

    // lấy danh sách hóa đơn 
    get=(condition)=>{
        const url = LINK.ADMIN.ORDER_GET_LIST;
        return axiosAdmin.get(url,{params:condition.query});
    }

}
const orderApi = new OrderApi();

export default orderApi;