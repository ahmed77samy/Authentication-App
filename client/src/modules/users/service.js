import routes from "./routes.js"

/**
 * call internal service and run all service
 * @param {Object} service 
 */
export default function UserService (service) {
    routes(service.route)
}