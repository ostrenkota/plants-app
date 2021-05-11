import axios from "axios";

const http = axios.create({
    headers: {
       // Authorization: `Bearer ${window.location.search.slice(1)}`
        Authorization: `Bearer vk_user_id=12345`
    }
});

http.defaults.baseURL  = "http://localhost:8888/api";

export default http;
