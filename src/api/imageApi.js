import axiosAdmin from "./axiosAdmin";
import LINK from "../utils/link.json";

class ImageApi {
    getByIdProduct = (id) => {
        const url = `${LINK.ADMIN.UPLOAD_GET_BY_IDPRODUCT}/${id}`;
        return axiosAdmin.get(url);
    }
    add = (id, files) => {
        const url = `${LINK.ADMIN.UPLOAD_ADD_IMAGE}/${id}`;
        return axiosAdmin.post(url, files);
    }
}
const imageApi = new ImageApi();

export default imageApi;