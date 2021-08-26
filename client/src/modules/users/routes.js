import Register from "./components/register"

/**
 * collections routes for user
 * @param {Function} route 
 */
export default function routes (route) {
    route("/register" , Register)
}