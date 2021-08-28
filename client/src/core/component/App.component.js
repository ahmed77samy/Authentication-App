import React from "react"
import {Obj} from "reinforcements"

class AppComponent extends React.Component {
    /**
     * method to be an alias for constructor
     * @alias constructor
     * @memberof AppComponent
     */
    init(){}
    constructor(props) {
        super(props)
        this.init()
    }
    /**
     * method to be an alias for componentDidMount
     * @alias componentDidMount
     * @memberof AppComponent
     */
    ready(){}
    componentDidMount() {
        this.ready()
    }
    /**
     * method to be an alias for getSnapshotBeforeUpdate
     * @param {Object} props
     * @param {Object} state
     * @alias getSnapshotBeforeUpdate
     * @memberof AppComponent
     */
    beforeUpdate(props, state){}
    getSnapshotBeforeUpdate(props, state) {
        let data = this.beforeUpdate(props, state)
        return data || null
    }
    /**
     * method to be an alias for componentDidUpdate
     * @param {Object} props
     * @param {Object} state
     * @param {*} snapshot
     * @alias componentDidUpdate
     * @memberof AppComponent
     */
    update(props, state, snapshot){}
    componentDidUpdate(props, state, snapshot) {
        this.update(props, state, snapshot)
    }
    /**
     * method to be an alias for componentWillUnmount
     * @alias componentWillUnmount
     * @memberof AppComponent
     */
    destroy(){}
    componentWillUnmount(){
        this.destroy()
    }
    /**
     * set state from any component by dot notaion
     * @param {String} key 
     * @param {*} value 
     */
    set(key, value){
        this.setState(
            Obj.set(this.state, key, value)
        )
    }
    /**
     * get state from any component by dot notaion
     * @param {String} key 
     * @param {String} value 
     */
    get(key, $default){
        return Obj.get(this.state , key , $default)
    }
}

export default AppComponent