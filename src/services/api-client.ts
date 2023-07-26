import axios from "axios"


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "759e94427c914bf4b1ab366e0924c2bf"
    }
})