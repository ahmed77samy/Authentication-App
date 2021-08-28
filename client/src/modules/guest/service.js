import routes from "./routes.js"

/**
 * call internal service and run all service
 * @param {Object} service 
 */
export default function GuestService (service) {
    routes(service.route)
}