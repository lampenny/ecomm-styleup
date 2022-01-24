import axios from "axios";


const BASE_URL = "https://ecomm-styleup.herokuapp.com/api/";

export const axiosInstance = axios.create({
    baseURL: "https://ecomm-styleup.herokuapp.com/api/"
})

const TOKEN = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDNhZWIyM2M1YWM2MTUxY2E2ODA5YiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDEzNTYwNTcsImV4cCI6MTY0MTYxNTI1N30.-Rj3ZfRqKLfuqByT88qULyd5QZQYb__idP34GZA7jk8"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});