let cache = {
    /**
     * set item in localStorage
     * @param {String} key 
     * @param {String} value 
     */
    set: function(key, value){
        localStorage.setItem(key,value)
    },
    
    /**
     * get item from localStorage
     * @param {String} key 
     * @returns {String}
     */
    get: function(key){
        return localStorage.getItem(key)
    },

    /**
     * remove item from localStorage
     * @param {String} key 
     */
    remove: function (key) {
        localStorage.removeItem(key)
    }
}

export default cache