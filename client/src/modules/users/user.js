import cache from "../../core/cache";

class User {
    constructor() {
        this.userData = cache.get("ACCESS_TOKEN")
    }
    /**
     * check user is logged in
     * @returns {boolean}
     */
    isLogedIn(){
        if(this.userData) {
            return true
        }
        return false
    }
    /**
     * set user data in cahce
     * but not do any requests
     * @param {Object} data 
     */
    logged(data) {
        cache.set("ACCESS_TOKEN" , data.token)
    }
    /**
     * remove user data from cache
     */
    loggedout(){
        cache.remove("ACCESS_TOKEN")
    }
}

export default new User()