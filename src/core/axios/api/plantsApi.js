import httpClient from "../httpClient";

export default {
    async getUser() {
        const result = await httpClient.get("/user");
        return result.data;
    },
    async setUserInfo(body) {
        const result = await httpClient.post("/user", body);
        return result.data;
    },
    async addPlant(file) {
        const formData = new FormData();
        formData.append("image", file, file.name);
        const result = await httpClient.post("/user/plants", formData);
        return result.data;
    },
    async addPlantInfo(id, body) {
        const result = await httpClient.put(`/user/plants/${id}`, body);
        return result.data;
    },
    async getPlantInfo(plantApiId) {
        const result = await httpClient.get(`/plants/${plantApiId}`);
        return result.data;
    },
    async deletePlant(plantObjectId) {
        const result = await httpClient.delete(`user/plants/${plantObjectId}`);
        return result.data;
    }
}
