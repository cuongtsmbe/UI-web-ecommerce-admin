import axiosAdmin from "./axiosAdmin";

class PhieunhapApi {
    get = (params) => {
        const url = `/admin/phieunhap/condition/time`;
        return axiosAdmin.get(url, params);
    }
    create = (value)=>{
        console.log("create phieu nhap");
        console.log(value);
        const url ="/admin/phieunhap/create";
        return axiosAdmin.post(url, value);
    }
}
const phieunhapApi = new PhieunhapApi();

export default phieunhapApi;