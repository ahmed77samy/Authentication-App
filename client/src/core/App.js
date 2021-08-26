import serviceProvider from "./service-provider.js"
import UserService from "../modules/users/service.js"
import RouteService from "./route-service"
import ConfigService from "./config-service"

class App {
    /**
     * call register
     */
    register() {
        let serviceList = [
            UserService
        ]
        serviceProvider.register(serviceList)
    }
    /**
     * call internal register
     */
    registerInternal() {
        let InternalServiceList = [
            RouteService,
            ConfigService
        ]
        serviceProvider.registerInternal(InternalServiceList)
    }
    /**
     * call init
     */
    init() {
        serviceProvider.init()
        RouteService.render()
    }
}

export default App