import axiosAdmin from "./axiosAdmin";

class PhieunhapApi {
    get = (params) => {
        const url = `/admin/phieunhap/condition/time`;
        return axiosAdmin.get(url, params);
    }
}
const phieunhapApi = new PhieunhapApi();

export default phieunhapApi;