import axios from "axios";

const http = axios.create({
    headers: {
       // Authorization: `Bearer ${window.location.search.slice(1)}`
        Authorization: `Bearer vk_user_id=123`
    }
});

http.defaults.baseURL  = "http://localhost:8888/api";
export const serverUrl =  "http://localhost:8888";

export default http;
