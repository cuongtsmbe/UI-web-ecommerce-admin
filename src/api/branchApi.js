import axiosClient from "./axiosClient";
import LINK from "../utils/link.json";

class BranchApi {
    getAll = () => {
        const url = LINK.CLIENT.THUONGHIEU_GET_ALL;
        return axiosClient.get(url);
    };
}
const branchApi = new BranchApi();

export default branchApi;