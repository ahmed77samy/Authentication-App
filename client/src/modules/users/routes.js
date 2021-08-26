import Register from "./components/register"
import Login from "./components/login"

/**
 * collections routes for user
 * @param {Function} route 
 */
export default function routes (route) {
    route("/register" , Register)
    route("/login" , Login)
}