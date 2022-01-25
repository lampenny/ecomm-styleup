import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://ecomm-styleup.herokuapp.com/api/"
})

export default axiosInstance;