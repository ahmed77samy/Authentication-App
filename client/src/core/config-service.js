import { Obj } from "reinforcements"

let configration = {}

let config = {
    /**
     * 
     * @param {String} key 
     * @param {*} value 
     */
    set: function (key, value) {
        Obj.set(configration, key, value)
    },
    /**
     * 
     * @param {String} key 
     * @param {*} $default 
     * @returns {*} 
     */
    get: function(key, $default) {
        return Obj.get(configration, key, $default)
    }
}

let ConfigService = {
    config,
    provider: {
        name: "config",
        call: config
    }
}

export default ConfigService