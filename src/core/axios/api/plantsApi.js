import httpClient from "../httpClient";

export default {
    async getUser() {
        const result = await httpClient.get("/user");
        return result.data;
    },
    async addPlant(formData) {
        const result = await httpClient.post("/add-plant", formData);
        return result.data;
    },
    async addPlantInfo(body) {
        const result = await httpClient.post("/add-plant-info", body);
        return result.data;
    },
    async getPlantInfo(plantApiId) {
        const result = await httpClient.get(`/plants/${plantApiId}`);
        return result.data;
    }
}
