import httpClient from "../httpClient";

export default {
    async getPlansList() {
        const result = await httpClient.get("/plants");
        return result.data;
    },
    async getAdditionalInfo(id) {
        const result = await httpClient.post("/info", {id});
        return result.data;
    }
}