import User from "./user"
import Login from "./components/login"
import Register from "./components/register"
import Users from "./components/users"
import PreResetPassword from "./components/pre-reset-password"
import confirmPinCode from "./components/confirm-pin-code"
import ResetPassword from "./components/reset-password"
import EmailVerification from "./components/email-verification"

/**
 * middleware checked on logged In
 * @returns {Function}
 */
async function isLoggedIn (history) {
    let status = await User.isLogedIn()
    return status === true && function () {history.push("/user")}
}

/**
 * middleware checked on logged In
 * @returns {Function}
 */
async function isLoggedOut (history) {
    let status = await User.isLogedIn()
    return status === false && function () {history.push("/login")}
}

/**
 * collections routes for user
 * @param {Function} route 
 */
export default function routes (route) {
    route("/register" , Register, [isLoggedIn])
    route("/emailVerification" , EmailVerification, [isLoggedIn])
    route("/login" , Login, [isLoggedIn])
    route("/user" , Users, [isLoggedOut])
    route("/preresetpassword" , PreResetPassword, [isLoggedIn])
    route("/confirmpincode" , confirmPinCode, [isLoggedIn])
    route("/resetpassword" , ResetPassword, [isLoggedIn])
}