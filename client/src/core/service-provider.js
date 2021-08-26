let service = []
let internalService = {}

/**
 * register service modules in App
 * @param {Array} servicelist 
 */
function register(servicelist) {
    service = servicelist
}

/**
 * register internal service in App
 * @param {Array} InternalServiceList 
 */
function registerInternal(InternalServiceList){
    for (let ser of InternalServiceList) {
        internalService[ser.provider.name] = ser.provider.call
    }
}

/**
 * init the App
 */
function init() {
    for (let ser of service) {
        ser(internalService)
    }
}

const serviceProvider = {
    registerInternal,
    register,
    init
}


export default serviceProvider