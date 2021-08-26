import axios from "axios"
import ConfigService from "./config-service"

export default axios.create({
    baseURL: ConfigService.config.get("endpoints.url")
})