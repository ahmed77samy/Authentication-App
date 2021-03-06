import endpoint from './end-points';

export default class RestfulEndpoint {
    /**
     * Set the main module route
     * i.e /users
     * 
     * @var  {string}
     */
    route = '';

    /**
     * refresh page real time
     * @param {String} path 
     * @param {String} token 
     * @returns 
     */
    refresh(path, token) {
        return endpoint.get(this.route + path, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    }

    /**
     * Fetch one record from endpoint api
     * 
     * @param   {number} id 
     * @param   {object} params 
     * @returns {Promise}
     */
    get(path, params) {
        return endpoint.get(this.route + path, params);
    }

    /**
     * Create post request
     * 
     * @param   {object|FormData} data 
     * @returns {Promise}
     */
    post(path , data) {
        return endpoint.post(this.route + path, data);
    }

    /**
     * Update existing record
     * 
     * @param   {number} id 
     * @param   {object|FormData} data 
     * @returns {Promise}
     */
    put(id, data) {
        return endpoint.put(this.route + '/' + id, {
            data
        });
    }

    /**
     * Delete existing record
     * 
     * @param   {number} id 
     * @returns {Promise}
     */
    delete(id) {
        return endpoint.delete(this.route + '/' + id);
    }
}