// import endPoints from "../../../core/end-points"
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
}

export default new UserApi()