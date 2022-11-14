import axiosClient from "./axiosClient";
// api/categoryApi.js
class CategoryApi {
    getAll = (params) => {
        const url = '/listcategories';
        return axiosClient.get(url, { params });
    };
}
const categoryApi = new CategoryApi();

export default categoryApi;