import RestfulEndpoint from "../../../core/restful-endpoint"


class UserApi extends RestfulEndpoint {
    /**
     * Set the main module route
     * 
     * @var  {string}
     */
    route= "/api/v1/auth"
    /**
     * called post request
     * @param {String} path 
     * @param {Object} data 
     * @returns {Promise}
     */
    register(path , data){
        return this.post(path, data)
    }

    /**
     * called post request
     * @param {String} path 
     * @param {Object} data 
     * @returns {Promise}
     */
    login(path , data){
        return this.post(path, data)
    }

    /**
     * called refresh request
     * @param {String} path 
     * @param {String} token 
     * @returns {Promise}
     */
    realTime(path , token) {
        return this.refresh(path, token)
    }

    /**
     * called post request
     * @param {String} path 
     * @param {Object} data 
     * @returns {Promise}
     */
    preResetPassword (path , data) {
        return this.post(path, data)
    }
    
    /**
     * called get request
     * @param {String} path 
     * @param {Object} data 
     * @returns {Promise}
     */
    emailVerification (path , data) {
        return this.get(path, data)
    }

    /**
     * called post request
     * @param {String} path 
     * @param {Object} data 
     * @returns {Promise}
     */
    confirmPin (path , data) {
        return this.post(path, data)
    }

    /**
     * called post request
     * @param {String} path 
     * @param {Object} data 
     * @returns {Promise}
     */
    resetPassword (path , data) {
        return this.post(path, data)
    }
}

export default new UserApi()