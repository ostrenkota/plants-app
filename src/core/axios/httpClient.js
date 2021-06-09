import axios from "axios";

const vkQuery = window.location.search.slice(1);

const http = axios.create({
    headers: {
        Authorization: `Bearer ${vkQuery}`
    }
});

http.defaults.baseURL  = "https://plantsapp.online/api";
//http.defaults.baseURL  = "http://localhost:8881/api";
export const serverUrl =  "https://plantsapp.online";
//export const serverUrl =  "http://localhost:8881";

export default http;
