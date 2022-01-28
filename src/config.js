import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://ecomm-styleup.herokuapp.com/api/"
});