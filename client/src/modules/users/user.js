import cache from "../../core/cache";
import UserApi from "./Api/Api"

class User {
    constructor() {
        this.userData = cache.get("USER")
    }

    /**
     * check userData is found
     * send request resfresh
     * @returns {boolean}
     */
    async isLogedIn() {
        if(this.userData) {
            let user = JSON.parse(this.userData)
            try {
                let {data} = await UserApi.realTime("/refresh", user.token)
                this.userData = cache.get("USER")
                return data.success
            } catch ({response: {data}}) {
                this.loggedout()
                return data.success
            }
        }
        return false
    }

    /**
     * set user data in cahce
     * but not do any requests
     * @param {Object} data 
     */
    logged(data) {
        this.userData = JSON.stringify(data)
        cache.set("USER" , JSON.stringify(data))
    }

    /**
     * remove user data from cache
     */
    loggedout() {
        cache.remove("USER")
    }

    /**
     * get the info from user data 
     * @returns {Object}
     */
    UserInfo() {
        if(this.userData) {
            let user = JSON.parse(this.userData)
            return user.user
        }
    }
}

export default new User()